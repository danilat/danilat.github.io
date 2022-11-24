---
layout: post
title: Responsabilidades de la Arquitectura de Software
excerpt: No perder de vista la Big Picture. Definir el problema desde una perspectiva de ingeniería. Dividir el sistema y asignar responsabilidades. Decidir Trade-Offs. Gestionar la Deuda Técnica. No es una torre de marfil y se itera.
image: /img/posts/arquitectura-software/diagram.jpg
---

La mayor parte de las veces cuando discuto sobre cuestiones relacionadas con Arquitectura de Software suele ser para referirme a **prácticas** (cómo diagramar y comunicar, tipos de workshops, ADRs, ASRs, prototipado…) o a **enfoques de soluciones** (monolitos modulares, microservicios, DDD, servicios de cloud en particular, contenedores, hexagonal, event-driven…).

Pero cuando hace unos meses desde el departamento de tecnología de [Grupo Carreras](https://www.grupocarreras.com/) (con quienes llevo un tiempo colaborando de vez en cuando) me pidieron que preparase una charla para un evento interno sobre la importancia de la arquitectura de software. Tenía claro que no podía enfocarme demasiado en prácticas y soluciones, porque iba a haber combinación de público técnico y no técnico.

Finalmente opté por ser más abstracto y hablar acerca de las responsabilidades asociadas a la arquitectura de software, ya que podía conectarlo con referencias a decisiones que se han tomado en la propia empresa y sus razones, que me servían como ejemplo.

Conociendo mi desmemoria, este es un contenido que me daba un poco de rabia perder, así que decidí transformarlo en un post.

![Diagrama de una posible arquitectura dibujada en una pizarra](/img/posts/arquitectura-software/diagram.jpg  "Diagrama de una posible arquitectura dibujada en una pizarra")

 
### ¿Qué es Arquitectura de Software?
 
Explicaciones de terceros de las que caben en un tuit:
- Según la [entrada en la Wikipedia](https://en.wikipedia.org/wiki/Software_architecture): *“La arquitectura de software se refiere a las estructuras fundamentales de un sistema de software y la disciplina de crear tales estructuras y sistemas"*
- Según Michael Keeling en [Design It](https://pragprog.com/titles/mkdsa/design-it/): *“La arquitectura de software de un sistema es el conjunto de decisiones significativas sobre cómo se organiza el software para promover los atributos de calidad y otras propiedades”*
- Según [Ralph Johnson](https://en.wikipedia.org/wiki/Ralph_Johnson_(computer_scientist)): *“La arquitectura se trata de las cosas importantes. Sea lo que sea”*
 
Por intentar aterrizarlo un poco más, son las decisiones que afectan a:
- Cómo se **diseña** el software y su **calidad interna**.
- Cómo encaja el software con **los objetivos de negocio**.
- Cuándo y cómo **se entrega** el software.
- Cuál es el **impacto organizativo**.
 
### No es una torre de marfil

Que las decisiones de arquitectura se tomen exclusivamente por personas que no están en la realidad del desarrollo diario es un anti-patrón. Se corre el peligro de desconexión con la realidad y/o con las personas que lo llevan a cabo.
 
Esto es porque la arquitectura de software **es una actividad de grupo**. Hay personas que aportan diferentes puntos de vista: conocimiento del dominio, visión del impacto organizacional, conocimiento de diferentes tecnologías disponibles, habilidades de diseño de software, consciencia sobre el legacy existente... 
 
Además debemos tener en cuenta que las decisiones del día a día pueden impactar en la evolución de la arquitectura. Algunos casos pueden ser: introducir una nueva librería que nos abra nuevas posibilidades, modificar parte del software para facilitar su delivery, refactorizar (o reescribir) una parte del sistema para mejorar su testeabilidad, introducir una convención de equipo respecto a la organización de directorios y ficheros…

### La arquitectura no es estática, se itera y evoluciona

Antaño con el enfoque waterfall, el trabajo de arquitectura se hacía antes de arrancar el desarrollo de un sistema de software. Normalmente tras una fase de análisis y toma de requisitos en las que **se definía hasta el aburrimiento** los últimos detalles de la funcionalidad a construir. Así que con ese enfoque había que *pensarlo muy fuerte* todo, para no dejarse ningún punto ciego y que la gente que desarrollaba “solo tuviera que centrarse en ejecutar” como [code monkeys](https://en.wikipedia.org/wiki/Code_monkey). Y... luego pasaba lo que pasaba.

Por suerte, se va percibiendo que en el sector nos vamos adaptando poco a poco a enfoques más evolutivos en cuanto a la definición y construcción de lo que debe hacer un sistema de software. De forma paralela va ocurriendo lo mismo con la arquitectura de software.

No es lo mismo arrancar un MVP para validar/invalidar rápido una hipótesis, que estar buscando generar volumen tras ver que hay encaje en el mercado y ya hay clientes, o tener que soportar el crecimiento del negocio teniendo en cuenta el legacy, etc. **Los problemas van cambiando con el tiempo**, y hay que ir evolucionando las soluciones de arquitectura.

### No perder de vista la *Big Picture*
 
Los sistemas de software son sistemas socio-técnicos, no viven aislados del resto del mundo, así que debemos introducir una visión más de alto nivel y tratar que el trabajo del desarrollo del día a día esté alineado con esa visión. Para esto **debemos tener en cuenta a las personas, el negocio y la tecnología**.

Respecto a las personas de la propia organización: ¿Qué habilidades tenemos dentro de la organización? ¿Necesitamos fichar personas con habilidades que no tenemos? ¿Cómo y qué tipos de equipos tenemos? ¿Cómo interactúan entre ellos? ¿Deberíamos cambiar su estructura?

Cuestiones relacionadas con el negocio y los procesos: ¿Nos dirigimos a un mercado concreto? ¿Queremos expandir a más mercados a corto/medio plazo? ¿Tenemos que adaptarnos a un cambio en el negocio o del mercado? ¿Queremos automatizar un proceso existente? ¿Queremos cambiarlo para ser más eficientes?

Factores puramente técnicos: ¿Tenemos ya soluciones que conocemos en la compañía?
¿Creemos que podemos sacarle ventaja competitiva al uso de una nueva herramienta o tecnología? ¿Un proveedor nos avisa que va discontinuar una herramienta que usamos o su nuevo pricing lo hace inasumible?

Algo que nos puede resultar útil para cualquier tema relacionado con arquitectura de software, pero especialmente para no perder de vista este alto nivel, es tener en cuenta [la Ley de Conway](https://martinfowler.com/bliki/ConwaysLaw.html) y enfrentarla con nuestro contexto. 
 
### Definir el problema desde una perspectiva de ingeniería
 
Para cumplir los objetivos del negocio, además de hacer el trabajo de producto para ir descubriendo, definiendo e implementando la funcionalidades de un software; debemos tener razonablemente claros cuáles son los **atributos de calidad** que esperamos que tenga nuestro software para que nos facilite cumplirlos, o como mínimo que no entorpezca alcanzarlos.
 
Estos atributos de calidad se venían conociendo más como **requisitos no funcionales**. Que es algo que suena ya a viejuno, ya que no son requisitos que usuarios o stakeholders suelan pedir, sino atributos que como equipo se han detectado como facilitadores para la consecución de los objetivos. Algunos atributos de calidad serían escalabilidad, seguridad, operabilidad, testeabilidad, rendimiento, disponibilidad... 
 
Debemos tener en cuenta que tal como construimos software **seguimos aprendiendo** tanto acerca del negocio como de lo apropiada que puede ser o no nuestra arquitectura, así que debemos dar seguimiento a las restricciones del diseño y a las funcionalidades que pueden impactar en la arquitectura. ¿Nuestra arquitectura dificulta o limita añadir nuevas funcionalidades? ¿Tenemos que evolucionar el diseño manteniendo compatibilidad con otro software existente? ¿Necesitamos pivotar el producto porque han cambiado los objetivos de negocio?

También debemos tener cuidado porque a veces pecamos de hablar de estos atributos de calidad en genérico, cuando lo normal es que no todos los componentes de un sistema deban tener el mismo nivel de calidad en un atributo. Una práctica que podemos utilizar son los [Architecturally Significant Requirements](https://en.wikipedia.org/wiki/Architecturally_significant_requirements) para ayudarnos a discutir y definir los diferentes niveles de atributos de calidad que necesitamos.

### Dividir el sistema y asignar responsabilidades
 
Debemos ser estratégicos en cómo dividir un sistema en distintos componentes dependiendo de nuestro contexto. Normalmente la forma de dividirlo estará relacionada con **cuestiones técnicas o cuestiones organizativas**.

Las razones técnicas para dividir un sistema están relacionadas con la identificación de funcionalidades que requieren atributos de calidad muy diferentes (escalabilidad, rendimiento, testeabilidad…). Por ejemplo, no son las mismas necesidades las de guardar datos personales de menores, donde legalmente debemos tener en cuenta muchas cuestiones de seguridad y auditoría; con tener que identificar anomalías en fotos utilizando computer vision, donde requerimos uso intensivo de GPU.

Las razones de divisiones organizativas suelen tener que ver con que existan distintos objetivos del negocio que repetidamente entran en conflicto, además de que haya muchas personas involucradas en una base de código y se haga inmanejable. No es lo mismo tener un equipo de 3 personas en una pequeña startup que una compañía mucho más establecida con 3000 personas y múltiples equipos.

Una vez hechas esas divisiones no debemos olvidarnos de que se deberá delimitar las responsabilidades y definir cómo van a interactuar los distintos componentes del sistema. Prácticas interesantes para ambas cosas pueden ser [Context Map](https://github.com/ddd-crew/context-mapping), y entrando más en detalle se puede utilizar una aproximación API-first para especificar la forma de interactuar de los componentes.

 
### Decidir *Trade-Offs* sobre los atributos de calidad y la división del sistema
 
Tenemos que ser conscientes de que no existe una división del sistema perfecto, así que **debemos asumir compromisos intermedios**, para ello debemos trabajar con los stakeholders. Podemos tener limitaciones presupuestarias, de conocimiento en la compañía, etc.

Suena bien lo de tener un nivel de servicio por encima del 99% durante un año, pero tal vez el negocio no lo necesite si el sobrecoste conlleva comprar o alquilar el doble de servidores para tener alta disponibilidad. Tal vez haya partes legacy del sistema que no podemos re-escribir por cuestiones de presupuesto y tiempo. Puede que haya alguna tecnología en el mercado que nos resulte prometedora, pero para la que todavía no haya un soporte que nos parezca fiable. Quizás queramos validar o invalidar una hipótesis rápidamente frente a que soporte mucha carga en caso de que acertemos.

Es posible que al decidir los trade-offs nos podamos equivocar, o incluso aunque a corto plazo veamos que resultan acertados con el paso del tiempo puede que no lo resulten tanto. Así que terminará emergiendo deuda técnica relacionada.

Prácticas útiles en este caso pueden ser registrar [ADRs](https://adr.github.io/) o registrar los [caminos no tomados](https://www.neverletdown.net/2015/03/communicating-design-intent-with-the-paths-not-taken.html).
 
### Gestionar la Deuda Técnica
 
Es inevitable que lleguen momentos en los que **los objetivos del negocio y las decisiones técnicas tomadas en un sistema de software no encajen**, hay diferencias entre el diseño actual del sistema y el ideal hacia el que se quiere ir. Esas diferencias son la deuda técnica que tenemos adquirida. 

Puede haber más o menos, la podemos haber asumido conscientemente o inconscientemente, pero al final siempre va a surgir deuda técnica. Así que en cuanto la identifiquemos debemos darle visibilidad y analizar cuándo es el momento de pagarla, ya que tenemos que equilibrar la capacidad de entrega de valor actual con la futura.

Hay tipos de deuda que pueden ser baratas de pagar y tener alto retorno en forma de refactors progresivos de forma continuada. Pero en las situaciones que requieren de re-escrituras que impactan en la división del sistema o la interacción de los distintos componentes, debemos implicar a los stakeholders para alinearnos y decidir cuándo y cómo vamos a pagar esa deuda.

### Resumiendo

- La arquitectura no son los diagramas hechos por un comité de sabios, se refleja en lo que está en desarrollo y que finalmente termina en producción.
- Debemos tener la mentalidad de que la arquitectura de software es evolutiva y actuar en consecuencia.
- A veces el día a día nos pierde. Nos ayudará el tener momentos en los que levantemos la vista más a largo plazo y veamos si seguimos alineados con la visión y necesidades del negocio.
- Definamos los atributos de calidad, evitando caer en ser falsamente específicos.
- Pensemos en una división del sistema de una forma estratégica, analicemos el impacto de las dependencias entre los distintos componentes.
- No vivimos en un mundo ideal, tengamos en cuenta las limitaciones de nuestro contexto y elijamos a qué renunciamos.
- No nos obsesionemos con no tener deuda técnica, es inevitable. Pero no la perdamos de vista, si no la tenemos controlada puede poner en peligro la sostenibilidad del sistema o incluso el éxito del negocio.


--- 

Agradecimientos a [Alberto Gualis](https://www.linkedin.com/in/agualis/), [Vanessa Rubio](https://www.linkedin.com/in/vanessa-rubio-marquino/), [Rubén Salado](https://www.linkedin.com/in/rsaladocid/) y [Javi Rubio](https://www.linkedin.com/in/javi-rubio/) por su tiempo revisando y sugiriendo mejoras para este post.

#### Referencias:
- [Design It](https://pragprog.com/titles/mkdsa/design-it/)
- [Just Enough Software Architecture](https://www.georgefairbanks.com/book/)
- [Software Architecture Guide](https://martinfowler.com/architecture/)
- [Conway's Law](https://martinfowler.com/bliki/ConwaysLaw.html)
