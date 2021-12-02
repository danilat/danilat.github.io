---
layout: post
title: Cambio en paralelo de un Event Bus
excerpt:  El cambio en paralelo es una práctica para introducir cambios retro compatibles haciendo baby steps que no rompan una interface y desplegando. Queremos evitar hacer grandes reescrituras y despliegues a modo big-bang para reducir riesgos y detectar los problemas pronto
image: /img/posts/parallel-change/event-bus.jpg
---
 
Una de las cosas en las que estamos trabajando desde hace unas semanas en el equipo de producto de [Sigma Rail](https://sigma-rail.com/) es en cambiar el bus de eventos, algo con lo que aún no hemos terminado porque está siendo un **cambio en paralelo** que vamos haciendo progresivamente.
 
Originalmente empezamos con una implementación de Event Bus en memoria por simplicidad, lo cual nos sirvió para tener un diseño que nos permitía desacoplar fácilmente lógica de los casos de uso con los side-effects que deben desencadenar. 

Uno de esos side-effects es la generación de thumbnails de las imágenes que suben los usuarios a nuestra plataforma, ahora mismo se generan 4 thumbnails distintos que luego terminan persistiéndose en Amazon S3.  Teniendo en cuenta que las imágenes de los usuarios pesan bastante y que lo normal es que se suban varios gigas de imágenes de golpe, resultaba en que se **empeoraba la experiencia de usuario** al tardar más en finalizar la subida de ficheros y se exigía usar instancias con más recursos, y obviamente más caras. De modo que se hacía patente que había que empezar a resolver ese tema con una solución realmente eventual.
 
### Qué es un Event Bus
 
El bus de eventos es como solemos llamar al intermediario responsable de hacer llegar los eventos que genera un componente *publisher* para que otros componentes *subscribers* los reciban, con algún tipo de implementación basada en el patrón [Pub-Sub](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern).
 
Ese patrón lo utilizamos cuando queremos evitar que un componente que genera eventos esté acoplado a quienes deben consumirlo.Hacemos que ese componente envíe los eventos que genera al bus de eventos de dominio, y este bus informa de esos eventos a los componentes que se hayan suscrito al respectivo tipo de evento.

![Esquema representando un event bus](/img/posts/parallel-change/event-bus.jpg  "Esquema representando un event bus")
 
### Qué es hacer un cambio en paralelo
 
Según [Danilo Sato en la web de (san) Martin Fowler](https://martinfowler.com/bliki/ParallelChange.html):
 
*Parallel change, also known as expand and contract, is a pattern to implement backward-incompatible changes to an interface in a safe manner, by breaking the change into three distinct phases: expand, migrate, and contract.*
 
Lo que viene siendo introducir cambios retro compatibles haciendo *baby steps* que no rompan una interface existente hasta que todos los clientes de esa interface no se hayan adaptado.

En este ejemplo vamos a romper la interface existente porque vamos a pasar a una ejecución en el mismo proceso a en distintos workers de forma distribuida. Además como parte de cada uno de los cambios integramos con la línea principal de desarrollo y **desplegamos a producción** (obviamente antes en desarrollo, stage, etc).

Esto es porque queremos evitar hacer grandes reescrituras y despliegues a modo big-bang, ir haciendo cambios razonablemente pequeños y hacer una **entrega continua** que nos ayude a reducir riesgos y detectar posibles problemas pronto.
 
Personalmente me gustó mucho [el taller que preparó Eduardo Ferro sobre el tema](https://www.eferro.net/2018/11/slides-taller-parallel-changes.html), muy recomendable para practicar en un entorno controlado.
 
 
### La interface EventBus
 
Como lenguaje de programación que usamos es Python y tenemos la convención de equipo de usar [type hints](https://docs.python.org/3/library/typing.html) siempre que sea posible; para definir la interface usamos una clase base `EventBus` que define métodos para añadir un subscriber (que a su vez utilizan una clase base `Subscriber`). En otros lenguajes hubiéramos usado interfaces frente a clases abstractas.
 
La interface de `EventBus` es sencilla: Expone la posibilidad de publicar eventos, añadir suscriptores al bus y limpiar todos los suscriptores del bus.  Mientras que de los suscriptores se espera una tupla con los nombres de los eventos que le interesan y se espera que sean *callable*.
 
La clase abstracta EventBus queda algo así:
```
class EventBus(ABC):
   @abstractmethod
   def publish(self, events: List[DomainEvent]):
       pass
 
   @abstractmethod
   def add_subscriber(self, subscriber: Subscriber):
       pass
 
   @abstractmethod
   def clean_subscribers(self):
       pass
```
 
Mientras que la clase abstracta Subscribers es algo como:
```
class Subscriber(ABC):
   @abstractmethod
   def __call__(self, event: dict):
       pass
 
   @abstractmethod
   def subscribed_to(self) -> Tuple[str, ...]:
       pass
```
 
 
### Punto de partida, implementación en memoria
 
Una implementación de Event Bus en memoria es muy naive, pero funciona a pequeña escala o cuando tienes side-effects muy ligeros. 

Lo bueno es que como comentaba al inicio, nos habilita a diseñar nuestro software de forma eventual aunque realmente no lo sea, sin tener que introducir nada a nivel de infraestructura y añadir complejidad operacional. Lo malo es que todo ocurre en la misma máquina y petición, así que nos perdemos el habitual beneficio de este tipo de diseños de tener mayor facilidad de escalabilidad horizontal y mejorar el rendimiento/UX.
 
En nuestro caso, esta implementación `InMemoryEventBus` utiliza un [diccionario](https://docs.python.org/3/tutorial/datastructures.html#dictionaries) para guardar todos los suscriptores que se le vayan añadiendo a `add_subscriber`, mientras que a la hora de publicar con `publish` lo que ocurre es que se recorre los eventos recibidos y se comprueba si los suscriptores están `subscribed_to` a cada unos de los `type_name` de los eventos para llamar a su `__call__` si es así. Y tenemos una serie de tests automáticos con escenarios que comprueban cuando sí o no se recibe la llamada a un doble que actúa como suscriptor.
 
A tener en cuenta que, aunque todo ocurra en memoria, simulamos el serializar y deserializar los eventos para que el día que se cambie a otro adapter que requiera de infraestructura estar seguros de que los suscriptores no necesiten modificar su código. Por eso en nuestro caso el `publish` transforma el evento en un diccionario que es lo que los Subscriber esperan. De un modo similar en una aplicación web/http recoge todo el contenido del cuerpo de la request. También os digo que posiblemente podríamos haber envuelto el contenido del diccionario en algún objeto propio para esconder ese detalle de implementación.
 
Este sería el **punto de partida** antes de empezar con el cambio en paralelo.
 
### Implementando el adapter para SQS
 
Al necesitar que ocurran cosas de forma realmente eventual nos decidimos por usar [SQS](https://aws.amazon.com/es/sqs/), manteniendo todo en el mismo repositorio y buscando maneras de desplegar workers que ejecuten los distintos subscribers para poder escalar de forma independiente unos de otros.
 
El primer paso fue implementar el adapter de `SQSEventBus` usando los mismos escenarios de tests que los de memoria. Aunque tuvimos que introducir algún pequeño cambio en la implementación de esos tests, ya que había que hacer una llamada explícita al consumo de mensajes de la cola SQS.
 
La implementación es más elaborada en este caso. En `add_subscriber` se crea una cola específica en SQS por subscriber y se mantiene también la referencia de cada suscriptor en un diccionario. En este caso el `publish` elige a qué cola SQS publica el evento con la misma comprobación sobre el `subscribed_to`, esto es porque queremos añadir sólo los eventos en cada cola está interesada en consumir.
 
Todo esto lo he resumido como un paso, pero podemos haberlo ido **integrando en la línea de desarrollo principal y desplegado** en varios. De momento con que pase los tests nos vale que de momento no se va a ejecutar nada de este código en producción.
 
 
### Implementando un adapter para publicar eventos simultáneament en memoria y SQS
 
El siguiente paso que queremos dar, es ver que seamos capaces de que ese adapter que hemos implementado publica los eventos en mensajes SQS. Sólo verlo, sin afectar al resto del comportamiento.
 
Para ello decidimos crear un `HybridEventBus`, que es un nuevo adapter que combina ambas implementaciones recibiéndolas en el constructor, en este paso simplemente llama a las implementaciones que compone. Con esto podría habernos valido para validar la publicación, pero no queremos crear demasiadas colas SQS por entorno de momento y decidimos utilizar sólo el suscriptor `ThumbnailCreator` que es el primero que queremos migrar.
 
Quedando el add_subscriber algo como
 
```
def add_subscriber(self, subscriber: BaseSubscriber):
   self.__in_memory.add_subscriber(subscriber)
   if isinstance(subscriber, ThumbnailCreator):
       self.__sqs.add_subscriber(subscriber)
```   
 
Para testear automáticamente nos basamos en los tests anteriores comprobando que cuando se recibe un evento esperado por un doble que herede de `ThumbnailCreator`, éste se llama 2 veces.
 
De nuevo podemos **integrarlo y desplegarlo**, aún no se ejecuta nada de SQS en producción. En el siguiente paso es cuando empieza.

### Publicación de eventos simultánea en memoria y SQS
 
En nuestro caso, tenemos centralizada la inyección de dependencias, de modo que cambiando de ahí la implementación todos los que reciben esa dependencia pasan a utilizar la implementación híbrida.

De:
```
def event_bus(self):
   return InMemoryEventBus()
```

A:
```
def event_bus(self):
   return HybridEventBus(self.in_memory_event_bus(), self.sqs_event_bus())
```
 
Eso ya sí impacta en el código de producción, así que tras **integrarlo y desplegarlo** se que comprueba que todo sigue funcionando correctamente y que, aunque aún no consumimos los eventos de SQS, podemos validar que se crean las colas esperadas y que están llegando los tipos de eventos que esperamos en ellas.
 
### Consumir eventos de memoria y de colas SQS
 
Una vez viendo que hay mensajes que representan nuestros eventos en las colas, el siguiente paso es empezar a consumirlos. Así que se abre por fin el melón de los workers, que en nuestro caso desplegamos en Amazon Elastic Beanstalk.
 
Resumen rápido de cómo funciona el happy path:
- A Elastic Beanstalk le configuras la url de la cola que debe escuchar y un endpoint http, ese endpoint recibirá vía POST el contenido de los mensajes de esa cola
- El propio entorno provee de un *SQS Dameon* que se encarga de leer mensajes de la cola y mandarlos a ese endpoint
- Si va todo ok y devolvemos en ese endpoint un status 200, *SQS Dameon* borra el mensaje de la cola
 
Para entender mejor cómo funcionaba me resultó bastante aclarador el post [AWS Elastic Beanstalk Worker environment deep dive](https://medium.com/@sajithkalady/aws-elastic-beanstalk-worker-deep-dive-963860955449).
 
Así que lo que tenemos es un único endpoint para recibir esos mensajes como puerta de entrada de los mensajes, a partir de ahí buscamos qué suscriptor es el que debe consumir el evento que contiene el mensaje por una variable de entorno `SUBSCRIBER_NAME`, esa información también la configuramos para que aparezca en los logs. Ese endpoint podemos dejarlo testeado automáticamente y de nuevo **integrar y desplegar**, aún no se ejecutará en producción.

### Aprovisionamiento de workers como suscriptores
 
El siguiente paso es el aprovisionamiento de esos entornos, que lo que hemos terminado haciendo a nivel de AWS Elastic Beanstalk es crear un entorno tipo worker nuevo por cada subscriber. 

Sin entrar en detalles por no desviarme mucho de tema, en nuestro caso optamos por provisionar esos entornos y desplegar programáticamente cuando arranca el entorno principal usando [el SDK oficial en python de AWS](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/elasticbeanstalk.html). Tiene limitaciones pero de momento es la mejor opción que hemos encontrado.
 
Así que una vez implementada la parte de aprovisionamiento al arrancar la aplicación ya tenemos workers consumiendo los mensajes de las colas SQS. 

Por la implementación de `HybridEventBus` se va a llamar a `ThumbnailCreator` una vez por estar suscrito en memoria y otra por estarlo en SQS, como es una operación idempotente no hay gran problema con que de momento se genere 2 veces. Así que tras **integrar y desplegar**, podemos validar a través de los logs que se está ejecutando correctamente el subscriber dentro del worker.
 
### Pasando a consumir sólo de colas SQS
 
Ahora ya que tenemos validado que se generan los thumbnails vía los nuevos workers toca empezar a hacer limpieza. Tenemos que quitar ese subscriber de la ejecución en memoria para que sea realmente eventual.
 
Modificando ligeramente `HybridEventBus` (y sus tests), podemos hacemos que no se añada el subscriber para el bus de eventos, sólo en el de SQS:
 
```
def add_subscriber(self, subscriber: BaseSubscriber):
   if isinstance(subscriber, ThumbnailCreator):
       self.__sqs.add_subscriber(subscriber)
   else:
       self.__in_memory.add_subscriber(subscriber)
```
 
Una vez más se vuelve **integrar y desplegar**, comprobando que todo continua correcto.
 
En este último paso tenemos que tener en cuenta que hemos cambiado el comportamiento del sistema:
- Lo más evidente es que las peticiones de subida responden más rápido
- Se ha ganado en resiliencia, si la generación del thumnbail falla la petición de subida ya no lo hace. El mensaje quedará en la cola de nuevo y se reintentará generar el thumbnail en otro momento
- Precisamente aunque la acción de subida se haya ejecutado con éxito el thumbnail no estará disponible inmediatamente, cosa que en este caso puede llegar a impactar en la interfaz de usuario, debemos contar con ello


Este es un trabajo que todavía no hemos finalizado, tenemos algunos suscriptores más que iremos migrando poco a poco hasta que podamos borrar tanto `HybridEventBus` como `InMemoryEventBus` como pasos finales.

---

Aunque seguir esta práctica pueda dar la sensación de ir más lentos es algo que reduce el riesgo, podemos equivocarnos también pero sin tener que desechar tanto trabajo y puede ayudarnos a darnos cuenta antes si estamos en un callejón sin salida. No tenemos ramas sin integrar durante muchos días o incluso semanas que luego generan conflictos dolorosos, eso también facilita que en caso de aparcarlo por otras prioridades podamos retomarlo con mucha más facilidad.

La parte negativa es que, hasta que el cambio no está hecho, tenemos más complejidad en el código y deuda técnica. Así que cuidado con que esos cambios se eternicen.
 