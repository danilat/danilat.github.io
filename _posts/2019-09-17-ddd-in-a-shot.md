---
layout: post
title: Domain-Driven Design "in a Shot"
categories:
- General
excerpt:
image: /img/posts/ddd/shots.png
---

Como parte de mi trabajo en [Zara.com](https://www.zara.com/) una de las cuestiones sobre la que trabajé con mis equipos fue en introducir conceptos de **Domain-Driven Design**, acompañado del estilo de arquitectura de **Ports & Adapters** (o Clean/Hexagonal Architecture). Había algunos productos que estábamos arrancando a los que se les presuponía que iban a tener una complejidad de negocio que iba a crecer, además tenían bastante incertidumbre inicialmente y se esperaba que su evolución perdurase en el tiempo al menos un puñado de años.

Empecé a intentar redactar de forma muy condensada un documento con los conceptos relacionados con DDD, por tratar de aligerar nuestras conversaciones sin necesidad de leerse los típicos libros [azul](https://www.goodreads.com/book/show/179133.Domain_Driven_Design), [rojo](https://www.goodreads.com/book/show/15756865-implementing-domain-driven-design) o [verde](https://www.goodreads.com/book/show/28602719-domain-driven-design-distilled); que además suelen resultar durillos o incluso confusos.

Y aunque finalmente terminamos trabajando en los equipos practicando DDD y Ports & Adapters, no fui capaz de terminar con este documento. El día a día no me permitió dedicarle el tiempo necesario, así que aprovechando ese borrador he ido dedicando ratos posteriormente para terminar de aterrizarlo y servir como complemento a **[Diseño incremental de software a partir de las interacciones](https://www.danilat.com/weblog/2019/04/10/diseno-incremental-de-software-a-partir-de-las-interacciones])**.

![Foto de unos machacados, chupito especialidad de un garito de Zaragoza](/img/posts/ddd/shots.png  "Unos chupitos de machacados")

### Introducción

Domain-Driven Design (en adelante DDD) o diseño dirigido por dominio son un conjunto de prácticas que tratan de facilitar el desarrollo de software con un dominio complejo.

DDD se divide en artefactos a nivel **estrátegico** y **táctico**. El estratégico podríamos decir que se enfoca más al largo plazo y a lo funcional/dominio: especificaciones, documentación, algunas cuestiones de arquitectura de alto nivel...  Mientras que el táctico se enfoca en el diseño más cercano a la implementación, a través de varios patrones y buenas prácticas.

Hay que tener en cuenta que DDD a nivel táctico consta de bastantes tipos de artefactos y que **no es necesario utilizarlos todos de golpe y siempre**, pero sí creo que es interesante conocerlos para poder sacarles partido en momentos dados.

En mi experiencia DDD casa muy bien tanto con las ideas de arquitectura de Ports & Adapters (más conocida como Hexagonal o Clean) para separar dominio/infraestructura/mecanismo de entrega, como con la práctica de TDD junto a prácticas de Specification by Example/ATDD.

TDD  y Specification by Example/ATDD son prácticas más que recomendables. Nos ayudan a tener foco y a facilitar que emerga el diseño poco a poco a través de los flujos autosimilares de *Red, Green, Refactor* y *Specify, Develop, Deploy*.

Está fuera del ámbito de este documento la explicación en detalle tanto de estas prácticas como de Ports & Adapters.

### Strategic Design

Dentro de los artefactos de Strategic Design se hace énfasis en dividir un problema grande en diferentes subdominios, con contextos delimitados o **Bounded Contexts** para hacerlo más manejable. Evidentemente, es habitual que distintos subdominios se relacionen entre sí usando distintos patrones de integración.

En cada contexto se establece un **Ubiquitous Language** basado en su subdominio para evitar equívocos entre cualquier miembro del equipo o stakeholders que participan en su desarrollo, todas las personas involucradas deberían utilizar las mismas palabras para referirse a los mismos conceptos de negocio.

El significado del concepto *Product* o *Purchase* en una gran empresa de retail puede tener docenas según el contexto en el que se usa. Pero **dentro de un Bounded Context un concepto debe ser canónico**, debe tener un único nombre y ese nombre un único significado.

Así que debemos tratar de utilizar un nombrado uniforme en todos los artefactos (código de producción, documentación, tests...) e incluso no está de más tener un **glosario de términos** como referencia de ese lenguaje ubicuo.

Para facilitar el entender cómo se relacionan los diferentes subdominos podemos visibilizarlo a través de un **Context Map**. Los context maps nos ayudan a ver qué subdominios existen, cómo se relacionan entre ellos organizativamente y los patrones de integración que hay.

Para quien quiera profundizar en esto, hay diferentes libros, charlas o artículos que entran en mucho más detalle. Por ejemplo: [Strategic Domain Driven Design with Context Mapping](https://www.infoq.com/articles/ddd-contextmapping/).

### Tactical Design

Los artefactos de Tactical Design son un conjunto de patrones que nos facilitan implementar en código el *modelo de dominio* dentro de un Bounded Context. Estos patrones pueden tener diferentes implementaciones, estar más o menos desacopladas de frameworks y librerías, etc.

#### Los modelos

Al modelar dentro de un subdominio encontramos conceptos que no se deben separar nunca, deben formar parte de la misma transacción siempre, estos conceptos son los **Aggregates**. Estos a su vez están compuestos de una o varias Entities y posiblemente de algunos Value Objects. Siempre habrá una Entity raíz en el Aggregate por la que se deberá acceder al resto de entities y value objects.

Podemos resumir qué es una **Entity** como *algo que tiene un identificador único que lo distingue*, aunque cambien el resto de sus atributos, el identificador jamás cambia. Deberíamos evitar tener entidades anémicas (sólo con getters y setters) tratar de empujar la lógica de negocio en lo posible hacia estos artefactos, siempre que no haya dependencias con colaboradores que no sean otras entities o value objects del aggregate.

Los **Value Objects** en cambio no tienen identidad y deberían ser inmutables por diseño (crearlo con un ``new`` y sólo métodos que consultan estado). Nos sirve para modelar conceptos en clases de dominio evitando tener responsabilidades repartidas por usar siempre tipos primitivos. Cuando hablamos de tipos primitivos incluiríamos también clases tipo String, colecciones estándar, etc.

La aproximación más *purista* lleva a que los atributos de una entity se modelen como value objets, personalmente prefiero empezar con tipos primitivos y si acaso emergen necesidades ir refactorizando a clases.

Un ejemplo muy simplificado de todo esto podría ser un agregado ``Invoice``, dentro del dominio de una herramienta de facturación como este:

```
class Invoice {
  InvoiceId id; //Value object para encapsular el tipo primitivo
  Collection<InvoiceLine> lines; //Una lista de entity InvoiceLine
  CustomerId customerId; //Value object encapsulando la referencia a una entidad de otro agregado
  ...
  void addLine(InvoiceLine line){ //Método que modifica el estado de la entidad
  ...
}
class InvoiceId {
  String value; //Valor del tipo primitivo
  ...
  Boolean equals(InvoiceId id){
  ...
}
class InvoiceLine {
  InvoiceLineId id; //Value object para encapsular el tipo primitivo
  String description; //Tipo primitivo
  Money amount; //Value object para encapsular cantidad y divisa
  ...
}
...
```

#### La persistencia

Por otro lado, lo normal es que queramos persistencia, para lo que tendremos un **Repository** por cada Aggregate. Se encargará de esconder los detalles de la tecnología de persistencia y los mapeos que fueran necesarios.

Conceptualmente este patrón debería exponer métodos muy similares a una colección y ocultarnos los detalles de implementación: guardar un elemento, borrarlo, métodos básicos de consulta... aunque también es habitual ver expuestos métodos para queries más complejas tipo ``findAllByStatus`` o ``getByEmail`` frente al uso de [query objects](https://martinfowler.com/eaaCatalog/queryObject.html).

#### Los servicios

Como creo que a otras muchas personas, al ir introduciéndome en DDD me costó ver la distinción entre servicios. El que compartan parte del nombre resulta algo confuso, también ver cómo se refieren a la idea de servicios en documentaciones sobre frameworks y muchos artículos. **¿Qué diferencias hay entre Application Services y Domain Services?**

Los **Application Services** son los puntos de entrada a la aplicación, los que orquestan y exponen el modelo de dominio. Personalmente prefiero referirme a ello como **Use Cases** para facilitar el explicar y entender su cometido; también los he llamado o visto llamar como Actions o Commands.

Sin entrar en mucho detalle a la hora de implementarlo, ya que hay muchísimas aproximaciones de hacerlo, mi preferencia es una clase por Use Case con un sólo método público expuesto. Siguiendo el ejemplo de una herramienta de facturación podríamos tener unas clases ``RegisterInvoice``, ``AddLineToInvoice``... con un método con nombre tipo ``run`` o ``execute``.

Para evitar efectos colaterales, evitaremos tener use cases que se llamen entre ellos. Si aparece lógica común y estamos seguros de que estamos duplicando conceptos, podemos crear un Domain Service para actuar como *helper*.

Los **Domain Services** vienen a ser clases que encapsulan reglas de negocio que no tienen cabida para moverlos dentro de entities ni value objects. Suelen emerger porque hay reglas de negocio que involucran dependencias a ports o hay que orquestar varios aggregates diferentes.

Intentaremos que esas clases sean pequeñas y tengan una sola responsabilidad.

 Sin ser un concepto original de DDD no quiero dejar mencionar la idea de **Infrastructure Services**, vi usarlo en algunos sitios y lo incorporé a mi terminología. Son simple y llanamente fachadas o clientes de servicios externos que no forman parte de mi dominio, así que los suelo nombrar como Client estilo ``SolrClient`` o ``GiphyClient``.

#### Los eventos

Un **Domain Events** es algo significativo a nivel de negocio que ha ocurrido en el dominio que modelamos como una clase, tipo: ``InvoiceRegistered``, ``ProductPublished``, ``UserConfirmed``... que contendrán los detalles de lo que ha ocurrido en el dominio para que sea publicado.

Personalmente suelo utilizarlos sólo al ver que el producto que estoy construyendo, además de complejidad, va a tener muchos side-effects o pueda interesar a otros subdominios: alimentar analítica para un dashboard, actualizar contadores, enviar un email, provocar algún trigger en un sistema externo...

La publicación de los eventos la dejaríamos encapsulada en un *publisher*, dejando a los *subscribers* la responsabilidad de comprobar si les interesa o no el evento y qué hacer con ello. Esos artefactos a nivel de infraestructura podrían implementarse con múltiples tecnologías: redis pub/sub, AMQP, kafka... O, mi preferencia para empezar a introducirlo, simplemente un patrón *observer* manejando todo en memoria.

---

Quienes conozcan Domain-Driven Design verán que he dejado algunas cosas fuera de este artículo y no he entrado a mucho detalle por tratar de condensar, ya que era algo inicialmente pensado para ayudar a asimilar los conceptos para gente que se inicia y acompañarlo con código de aplicaciones reales.

Con el mismo objetivo, personalmente me parece muy interesante un ejercicio similar que hicieron en video (muuuy rápido) los amigos de [CodelyTV](https://codely.tv/): [DDD en 20 minutos](https://www.youtube.com/watch?v=dH5aSQLXtKg).

Para profundizar más hay multitud de recursos en forma de charlas, libros, cursos...

### Relacionados
  - [Diseño incremental de software a partir de las interacciones (parte 1)](https://www.danilat.com/weblog/2019/04/10/diseno-incremental-de-software-a-partir-de-las-interacciones)
  - [Desarrollando un MVP: PHP y Clean Architecture](https://medium.com/coding-stones/desarrollando-un-mvp-php-y-clean-architecture-796c55873d9f)
