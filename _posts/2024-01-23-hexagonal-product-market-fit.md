---
layout: post
title: Buscando el Product Market Fit y Arquitectura Hexagonal
excerpt: En la búsqueda del Product Market Fit debemos enfocarnos principalmente en la capacidad de iterar las soluciones. Dependiendo del equipo y el contexto a veces la Arquitectura Hexagonal puede ayudarnos, y otras veces no
image: /img/posts/pmf-arquitectura-hexagonal/draw.png
---

Hace un par de meses estuve en [La Vertical by Mercadona Tech](https://www.linkedin.com/company/la-vertical/) hablando sobre DDD estratégico. Al final del evento, pude conocer a algunas personas con quienes estuve compartiendo impresiones, ideas, proyectos…

En un momento dado, una persona me preguntó sobre qué opinaba de usar el estilo de arquitectura de Ports & Adapters, más popularmente conocida como [Arquitectura Hexagonal](https://alistair.cockburn.us/hexagonal-architecture/), cuando el contexto es la **fase de búsqueda o consolidación del Product Market Fit**. Me pilló la pregunta algo a contrapié y creo que le respondí de forma un poco tibia; podríamos resumirlo con un clásico: *"No lo sé, creo que **depende del equipo y del contexto**"*.

Esto es algo sobre lo que he compartido mi punto de vista en petit comité en bastantes ocasiones, así que quería extender un poco esa respuesta aterrizándolo en este artículo.

![Dibujo que representa el product market fin, un hexágono dividido de driver y driven con un interrogante encima](/img/posts/pmf-arquitectura-hexagonal/draw.png  "Dibujo que representa el product market fin, un hexágono dividido de driver y driven con un interrogante encima")


### ¿Product Market Fit?

Este es el momento en el que un producto no está validado a nivel de negocio, o al menos no totalmente. Son momentos donde aún no es rentable y hay que probar a lanzar soluciones para cubrir los problemas de nuestros potenciales clientes e ir iterando (o descartando) esas soluciones. Más info sobre esto en este artículo de la lista de correo de [Ignacio Arriaga: ¿Qué es el product market fit y cómo acelerarlo?](https://disaaster.io/que-es-el-product-market-fit/).

Así que en una situación en la que no hemos consolidado el Product Market Fit, la capacidad de iterar un producto de software a una velocidad razonablemente alta es crítica para hacerlo. Más en situaciones en las que tenemos un presupuesto limitado, como suele ser el de la mayoría de startups.

### ¿Arquitectura Hexagonal?

Si seguimos el estilo de Hexagonal Architecture o Ports & Adapters o Clean Architecture, colocamos en el medio nuestra lógica de negocio y nos abstraemos de los detalles de implementación de infraestructura.

Esta infraestructura son tanto los *driver ports* que son el mecanismo de entrega para interactuar con la lógica de negocio, como podrían ser server-side rendering, REST, gRPC, GraphQL, CLI, tareas programadas... Como los *driven ports* que son los encargados de mantener el estado vía persistencia de datos y la comunicación hacia otros sistemas.

Las características principales de este estilo de arquitectura son la cambiabilidad de la infraestructura y, como consecuencia de eso, la testeabilidad. Ya que al utilizar inyección de dependencias nos abstraemos de las diferentes piezas de infraestructura y podemos testear la lógica de negocio de forma unitaria.

Frente a lo que me parece percibir a veces, no hay una forma única de implementar software con este estilo de arquitectura. En mi caso, ha evolucionado un poco mi forma de trabajar con este enfoque, pero como base siguen siendo bastante válidos los contenidos que compartimos en [algunas charlas de hace algunos años con Coding Stones](https://medium.com/coding-stones/clean-architecture-tour-2016-2017-90bb205d443c).

#### Lo malo

Este estilo de arquitectura se ha popularizado mucho en los últimos tiempos y ha crecido de la mano con el uso conjunto de los [patrones tácticos de DDD](https://danilat.com/weblog/2019/09/17/ddd-in-a-shot). Tanto que para muchas personas creo que no hay diferencia, no se percibe que son cosas distintas que unas veces se complementan y otras no tiene demasiado sentido aplicar, al menos no de forma *purista*.

Así que esto en ocasiones lleva a sobreingeniería en el diseño, en forma de exceso de abstracciones y aumento de complejidad extrínseca, haciendo un código más difícil de modificar y extender funcionalmente. Lo que provoca que en esos casos de aplicaciones con una lógica de dominio no demasiado compleja, se ralentice la velocidad de iteración en el producto.

También, otras veces, se espera que al aplicar este estilo de arquitectura desaparezcan todos los problemas asociados a la deuda técnica. Como si ya vineran integrados mágicamente en ello principios como [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it), [KISS](https://en.wikipedia.org/wiki/KISS_principle), [Separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns), [ley de Demeter](https://en.wikipedia.org/wiki/Law_of_Demeter), [las 4 reglas del diseño simple](https://martinfowler.com/bliki/BeckDesignRules.html)... y nos fuera a evitar tener [code smells](https://refactoring.guru/es/refactoring/smells).

#### Lo bueno

Para mí, lo que aporta este tipo de arquitectura en este tipo de contextos es principalmente la testeabilidad. Cuando se quiere iterar rápido, tener una batería de tests en la que puedas confiar y que se ejecuta rápido es una gran ayuda para mantener el foco en lo que estás desarrollando.

En segundo grado, [la cambiabilidad](https://danilat.com/weblog/2021/12/01/cambio-en-paralelo-event-bus) nos aporta que podemos posponer decisiones, por ejemplo, usando soluciones de infraestructura a priori simplistas que nos permitan validar que se aporta valor a pequeña escala, sabiendo que de ser necesario, podemos cambiarla en el futuro con menos esfuerzo al no afectar al diseño.

## Depende del equipo y del contexto

Sobre el contexto, empiezo desde una situación en la que se ha llegado a la conclusión de que no podemos servirnos de herramientas no-code ni de un prototipo o prueba de concepto que podamos tirar a la basura dentro de pocos meses. Así que no nos quedan más narices que desarrollar algo que pueda evolucionar, iterarse y adaptarse a lo que nos vayamos encontrando en el futuro.

Normalmente en estos casos seremos un equipo pequeño, con capacidad financiera limitada tanto para contratar como para subcontratar y donde querremos tener buena capacidad para entregar software. Porque, de lo contrario, difícilmente podremos iterar nada.

Cualquier decisión técnica para mí debería ir encaminada a usar soluciones conocidas siempre que sea posible. En general, creo que la línea a seguir es la de [Choose Boring Technology](https://mcfunley.com/choose-boring-technology), con más razón en el caso de estar consolidando el Product Market Fit.

Algunas preguntas que podemos hacernos para pensar sobre esto: ¿Quiénes formamos parte del equipo? ¿Cuánto hemos trabajado usando el estilo de arquitectura de Ports & Adapters? ¿Nuestro software tiene un dominio con cierta complejidad o se parece más a CRUD que encajaría bien acoplado con algún framework? ¿Tenemos algún framework de desarrollo con el que todas las personas del equipo seamos productivas? ¿Sabemos o hemos comprobado si estaremos peleando contra ese framework si lo combinamos con ese estilo de arquitectura? ...

### Alternativas

En algunas ocasiones, mi aproximación ha sido quedarme un poco a medio camino, utilizando alguno de los artefactos o prácticas que habitualmente se asocian a la Arquitectura Hexagonal, pero manteniendo el acoplamiento al framework en cierto puntos. Esto es: capa de **use cases** para representar lo que hace el producto de software, **inyección de dependencias** para tener piezas cambiables y hacer que la lógica sea más fácil de testear y, si encaja con las necesidades iniciales del producto, también modelar **eventos**.

#### Use Cases

Esta capa representa las acciones que se pueden hacer sobre el producto de software. A partir de aquí, se encapsula lógica y se orquestan las llamadas a infraestructura. En esta capa no se sabe si va a ser llamada desde un API rest, un comando desde CLI, un cron…

En mi caso, normalmente son clases con constructor y un solo método público para ejecutarlas, así que en un momento dado hasta podrían ser funciones.

En caso de que usemos un ORM (o un ODM o similar), utilizo esas mismas entidades para representar el dominio. Al menos hasta el momento donde se percibe que el modelo de dominio y el modelo de datos entran en conflicto como para tener que hacer una separación.

#### Inyección de dependencias

En los constructores de los use cases, hago uso intensivo de inyección de dependencias, más para ganar en testeabilidad que en cambiabilidad de la infraestructura. Esto es que en lenguajes de tipado estático, en los constructores normalmente se espera la inyección de una dependencia de una clase y no de una interfaz. El esfuerzo que sí trato de hacer al inyectar esas clases a los use cases, es no acoplarme a nivel de naming de clases y métodos sobre la implementación.

En algunas ocasiones, esta inyección la he mantenido manualmente y otras a través de algún framework de IoC, dependiendo principalmente de si el framework de desarrollo lo trae de serie o si la base de código es aún manejable sin ello.

#### Eventos (opcional)

En casos donde desde el inicio se observa que existen muchos side-effects en un producto tiendo a introducir eventos de dominio, seguramente no para todos los use cases, pero al menos sí los más relevantes. Pistas para introducirlos pueden ser necesidades relacionadas con: auditoría, distintos tipos de notificaciones, desacoplar la comunicación con otros módulos o sistemas, instrumentar [behavioral analytics](https://amplitude.com/blog/behavioral-analytics-definition) en el backend, etc.

### Conclusiones

El mero hecho de usar o no Ports & Adapters no es relevante para que el producto tenga éxito, pero la capacidad de iterar rápido el producto es crítica. 

Dentro de que nunca vamos a tener certezas, en momentos donde estamos buscando Product-Market fit a nivel técnico normalmente deberíamos ir hacia **lo más seguro y conocido** por parte del equipo. Bastantes riesgos existen en esos contextos como para asumir más.

Ya sea un estilo de arquitectura completamente acoplado a un framework, de Ports & Adapters o se quede en algún punto intermedio para desarrollar un producto de software, lo que considero innegociable para iterar rápido es acompañarlo de otras 3 prácticas técnicas:
- Hacer **testing automático**, al menos unitario y de integración de forma bastante intensiva para tener confianza en los cambios y poder iterar más rápido.
- Tener automatizado el **pipeline de entrega** y que lo pueda hacer cualquiera en el equipo, ya sea pulsando un botón o con un push en el sistema de control de versiones.
- Preparar un mínimo de **telemetría** técnica y de producto, para saber de forma temprana si han surgido problemas en producción a partir de un cambio y poder analizar cómo es el comportamiento de quiénes están usando el producto.
