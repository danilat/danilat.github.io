---
layout: post
title: Diseño incremental de software a partir de las interacciones (parte 1)
categories:
- General
excerpt: ¿Qué narices es eso del diseño incremental? ¿Y lo de diseñar a partir de las interacciones? Primera parte sobre descubrimiento de producto, formalización del backlog, refinamiento de historias de usuario, Specification by Example
image: /img/posts/diseno-incremental/leanstartup_atdd_tdd.jpg
---

Este post viene a cuento de que me quedé sin hacer la charla de la **[Bilbostack 2019](http://bilbostack.com/)** por andar pachucho durante varias semanas, teniendo que cancelar el compromiso al no haberme recuperado a los pocos días del evento. Me [quedó el contenido a medio preparar](https://twitter.com/dani_latorre/status/1104446061354074114) y tenía la espinita clavada de compartir mis ideas sobre el tema.

![Dibujo representando la autosimilaridad de Lean Startup, ATDD y TDD](/img/posts/diseno-incremental/leanstartup_atdd_tdd.jpg "Lean Startup, ATDD y TDD")

### ¿Qué narices es eso del diseño incremental?

Ahora que "agile" (nótese el entrecomillado ;)) es mainstream, parece que se va asumiendo en muchos sitios que hacer software de forma *iterativa* ayuda a hacer mejor software. Cada cierto tiempo hay entregas que permiten validar si se va por un camino correcto o no, comprobar malos entendidos, ver problemas que han surgido, adaptabilidad a cambios...

Lo que bajo mi percepción no es tan mainstream es la parte de incremental, cuesta más hacer *vertical slicing*. En mi opinión esto suele ocurrir por falta de habilidades o conocimiento de prácticas relacionadas con **Extreme Programming**, como son test first o el propio diseño incremental.

Aunque siempre hay que hacer un esfuerzo inicial para poder sentar algunas bases respecto a la visión del producto, qué problemas o necesidades se quiere resolver, la arquitectura de alto nivel, etc.; muchas veces se peca de querer bajarlo demasiado en detalle desde el inicio, pretendiendo tener una foto de cómo va a ser la solución y adivinar el futuro.

No olvidemos que, cuando desarrollamos un software, hoy sabemos menos que mañana. En cada iteración que pasa, más aprendemos sobre el negocio, conocemos mejor las herramientas y la tecnología, intentamos mejorar como equipo, etc.

Así que una cosa que debemos tener clara es que, si queremos que nuestro software dure, tenemos que enfocarnos en diseñar software que acepte cambios. **Aceptar la incertidumbre** frente a tratar de adivinar problemas futuros.

### ¿Y lo de diseñar a partir de las interacciones?

Pues básicamente enfocar el diseño de software desde cómo se va a utilizar, ya sean personas que interactúan a través de una UI u otros sistemas que lo hacen usando algún tipo de API.

Seguramente resulta familiar el término **API first**, que es una aproximación similar. Empezar definiendo cómo se expone el software partir de un contrato e ir haciendo *Outside-In* hacia la implementación y modelado más interno.

En el caso del diseño a partir de las interacciones nos abstraemos de los detalles de un API. Anteponemos la definición de la interacción a la del API ya que esta no es nada más que un detalle técnico de cómo se expone la interacción al mundo.

Y cuidado: No podemos caer en la trampa de definir pobremente esas interacciones, sin descubrir el negocio que hay debajo y acabar pensando que sólo son CRUDs. **Nunca es un CRUD**: reglas de negocio, efectos colaterales, integraciones con terceros...

### Descubrimiento de producto

Antes de identificar las interacciones, un trabajo importante es lo que se suele llamar **descubrimiento de producto**. Algunas cosas que necesitamos saber: objetivos de negocio del producto, quiénes son los usuarios y sus motivaciones, dependencias técnicas u organizativas, posibles restricciones, identificar a los stakeholders...

Es un tiempo dedicado a analizar y entender los problemas para poder enfocar mejor la solución, ya que no hay nada peor que descubrir que hemos contruido algo que nadie quiere.

Hay multitud de actividades que se pueden usar dependiendo del contexto (producto, equipo, negocio...): business model canvas, value proposition canvas, entrevistas, user personas, mapa de stakeholders, mapa de empatía, benchmarking de producto, customer journey map... o usar un *paquete* de este tipo de actividades como [design sprint](https://www.gv.com/sprint/), [agile inception deck](https://agilewarrior.wordpress.com/2010/11/06/the-agile-inception-deck/) o [lean inception](https://martinfowler.com/articles/lean-inception/).

Estas actividades, muy estilo design thinking, se han quedado relegadas habitualmente a la gente de UX, negocio o gestión de producto, ya que a los técnicos típicamente no nos ha preocupado demasiado o no se nos ha incluido.

Participar en estas actividades nos ayuda a entender infinitamente mejor las necesidades durante la evolución del desarrollo del producto, además de facilitarnos el planteamiento inicial de la arquitectura de software a alto nivel. Y es que hacer diseño incremental no quiere decir que no hagamos un trabajo previo.

### Formalización del backlog

Para poder organizarnos y priorizar debidamente necesitamos tener disponible algún tipo de **backlog de producto**, de modo que lo oportuno es hacer un volcado de *product backlog items* (sin preocuparnos demasiado del tamaño) como complemento a las diferentes actividades de descubrimiento que se hayan podido realizar.

A mi personalmente me gusta el terminar visibilizándolo en un formato estilo *user story map*. Aunque siempre he omitido la parte de journey, simplemente me gusta verlo organizado en dos dimensiones: funcionalidad/tema y prioridad agrupada en *swimlanes*.

Me parece muy interesante organizar las swimlanes como *must*, *could* y *nice to have*, al menos como organización incial o de cara a implementar un MVP. Otras veces, teniendo razonablemente claro el alcance final, las he utilizado directamente para definir releases o entregas parciales tentativas.

### Refinamiento de historias de usuario

Ya con la prioridad, sabemos por donde hay que ponernos a aterrizar esos product backlog items y formalizarlo en una o varias historias de usuario. Recordemos que una historia de usuario no es sólo completar una plantilla, debería ser siempre un artefacto que sirve como recordatorio de (o excusa para) una conversación sobre ella y que además debería tener unos **criterios de aceptación específicos**.

Además de en las dailies o conversaciones más informales entre los miembros del equipo, habitualmente estas conversaciones deberían ocurrir más intensamente en algún tipo de sesión de planning, de la que deberíamos extraer los criterios de aceptación de las historias de usuario en las que vayamos a trabajar próximamente. Esas sesiones pueden contener ejercicios de estimación como *planning poker* o de refinamiento como *example mapping*.

Personalmente me gusta bastante el [example mapping](https://medium.com/coding-stones/estimar-es-timar-example-mapping-e9dbad471ced) porque ayuda a estructurar las conversaciones, desgranando las historias de usuario en forma de reglas, dudas y ejemplos que ilustran las reglas.

### Specification by Example

Las reglas forman parte de los criterios de aceptación de una historia, mientras que los ejemplos nos marcan la especificación y nos sirven como primer paso para hacer **Specification by Example** (prefiero ese nombre que Behaviour-Driven Development) con el que dirigir el diseño incremental de las iteraciones.

Como herramienta para hacer Specification by Example suelo utilizar **cucumber**, de modo que las especificaciones terminan en el típico formato *gherkin* Given/When/Then.

Evidentemente se pueden utilizar otras herramientas para esto, pero ¿por qué cucumber?:
- Al separar las especificaciones como texto plano, permite colaborar fácilmente con perfiles no técnicos para elaborarlo o validarlo.
- Ayuda forzarse a utilizar lenguaje ubicuo que deberíamos haber ido desarrollando (quizá incluso mantengamos un glosario de términos).
- Queda como fuente de verdad y sirve como documentación viva. Si una funcionalidad cambia, quedará reflejado el cambio.
- Facilita hacer *ATDD* separando claramente el ciclo de especificación del de desarrollo.
- Permite implementar tests automáticos a distintos niveles. Pudiendo hacer tests sólo de la lógica de negocio, desde la UI, a través de un API...

A partir de las historias de usuario y de las especificaciones con ejemplos tendremos identificados los casos de uso o interacciones, el alcance bien definido y habremos trabajado el lenguaje ubicuo.

Este tipo de prácticas hacen más eficiente el proceso de desarrollo, aumentando la calidad del producto y evitando retrabajo a causa de malosentendidos.

### Próximamente

Espero escribir al menos un post más, tratando la parte más técnica a través de un ejemplo práctico sobre:
- Implementar tests automáticos desde especificaciones gherkin con cucumber.
- Artefactos tácticos de Domain Driven Desing.
- TDD Outside-In, empezando desde las interacciones o *use cases*.
- Arquitectura hexagonal/clean, escapando de frameworks.

---
#### Otros recursos
En forma de cursos, posts y videos relacionados que tengo repartidos por ahí:
- [Buenas prácticas de BDD con Gherkin (Cucumber, Behat…)](https://pro.codely.tv/library/buenas-practicas-de-bdd-con-cucumber/65205/about/).
- [Una de BDD, Specification by Example y Cucumber](https://medium.com/coding-stones/una-de-bdd-specification-by-example-y-cucumber-8345ccc71172).
- [Estimar es timar: Example Mapping](https://medium.com/coding-stones/estimar-es-timar-example-mapping-e9dbad471ced).
- [BDD: ¿Qué aporta Gherkin? 🥒 (Cucumber, Behat & Co.)](https://www.youtube.com/watch?v=F5cMolzoPtQ).
- [Desarrollando un MVP: PHP y Clean Architecture](https://medium.com/coding-stones/desarrollando-un-mvp-php-y-clean-architecture-796c55873d9f).
- [Testing en Invoice_Me. Cucumber, RSpec, Capybara, Selenium...](https://www.youtube.com/watch?v=8ok8q8duvYc).
