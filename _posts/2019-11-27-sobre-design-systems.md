---
layout: post
title: Sobre Sistemas de Diseño
categories:
- General
excerpt: ¿Qué es un sistema de diseño o design system? Consisitencia, eficiencia, y mejorar la comunicación dentro del equipo son sus principales beneficios
image: posts/design-systems/lego.jpg
---

Estaba preparando otro post donde quería incluir una pequeña explicación de qué es un **design system o sistema de diseño**. Al ver que me iba extendiendo y se iba a diluir con el tema original, me he atrevido a intentar escribir sobre qué es y dar un poco mi visión sobre ello.

---

Hay multitud de compañías y organizaciones que han ido trabajando en sus sistemas de diseño, incluso hay muchos que han sido liberados como open source: El famosísimo [Material](https://material.io/) de Google, [Primer](https://primer.style/) de Github, [shibori3 y purple3 ](https://design.herokai.com/) de Heroku, [el de Atlassian](https://atlassian.design/), [el del gobierno de UK](https://design-system.service.gov.uk/)... Así que es un tema que va surgiendo de forma recurrente hablando con gente dedicada o involucrada en la creación de productos digitales.

### ¿Qué es un sistema de diseño?

Por conversaciones en las que he participado y algunas lecturas sobre el tema, veo que hay interpretaciones algo distintas sobre qué es un sistema de diseño.
Así que cuando tengo oportunidad de preguntarle a alguien sobre a qué se refiere con sistema de diseño encuentro que lo habitual es que se utilice como sustituto al de **guía de estilo** o al de **librería de componentes UI**. Incluso en algún caso aislado he encontrado que en realidad se referían a que tenían plantillas que alguien había hecho 😅.

Una guía de estilo o una librería de componentes son librerías de patrones perceptuales y/o funcionales, los artefactos más visibles de un sistema de diseño, pero **no son el sistema de diseño en sí mismo**.

Hasta donde yo sé no hay una definición canónica, yo uso como base la [del libro Design Systems](https://designsystemsbook.com/) de [Alla Kholmatova](http://craftui.com/):

> *A set of connected patterns and shared practices, coherently organized to serve the purposes of a digital product.*

Los patrones son una pata y las prácticas que se utilizan la otra, pero como en cualquier otro producto debemos marcar unas **metas u objetivos** además de tener una serie de **principios de diseño** que estén acordes, todo ello nos servirá como guía para la sistematización.

No darle un sentido claro a un sistema de diseño puede hacernos acabar con un batiburrillo de patrones que no tengan mucha consistencia entre sí, tener una variedad de patrones excesiva para resolver un mismo problema o incluso provocar conflictos entre personas por no tener claros los objetivos.

De cara a tener una comunicación efectiva entre los que construimos producto, también debemos trabajar en tener un **lenguaje compartido** para referirnos a los patrones del sistema de diseño para evitar confusiones.

Ya sean más descriptivos o algo más metafóricos, ese lenguaje compartido debería ser **fácil de comprender** por quienes construyen o utilizan el sistema de diseño para hacer producto. Deberíamos esforzarnos tratar de dar **nombres que reflejen la finalidad** de los patrones y no su aspecto.

Un ejemplo muy sencillito podría ser tener un patrón que se llame `"call to action button"` frente a `"button orange big"`. Uno indica para qué está pensado mientras que el otro dice y está acoplado a cómo es, si cambiara algo de su aspecto su nombre perdería el sentido en el segundo caso.

Evidentemente todo esto termina en **librerías de patrones** para herramientas tipo Sketch, Figma, Adobe XD... enfocado a que quienes diseñen puedan reutilizarlos para poder centrarse más en la exploración de nuevos problemas que en resolver de nuevo cuestiones que ya se han resuelto anteriormente.

No tan habitual pero también necesario es tener artefactos como **guías de componentes** en html/css plano y **librerías de componentes** para el framework javascript o de la plataforma nativa de turno. Así se facilita el trabajo de quienes pasan a código frontend los diseños permitiendo entregar antes y ganando en mantenibilidad.

### ¿En qué nos beneficia todo esto?

- Tener **mayor consistencia** tanto visual como de interacción. Al compartir principios de diseño facilitamos que los usuarios tengan una experiencia de usuario similar usando las distintas partes de un producto o productos que compartan y respeten el mismo sistema de diseño.
- **Mejorar la comunicación** entre los miembros de un equipo de producto por tener un lenguaje compartido entre diseño, desarrollo, producto... En la documentación, UI kits, código, discusiones...
- Gracias a las diferentes librerías con el tiempo permite **ser más eficientes** tanto al diseñar como al desarrollar. Esta eficiencia suele traducirse en permitir centrarse en resolver problemas nuevos y en entregar producto antes.

Suelo insistir en que a lo que desde luego **no ayuda es a no contratar a alguien con skills de diseño**, pretender que un sistema de diseño sea una bala de plata que cubra todo es bastante ingenuo. Por mucho sistema de diseño que haya, luego se ven interfaces que son auténticas aberraciones.

Además que hay que tener en cuenta que un sistema de diseño **debería estar en continua revisión**, *lo único constante es el cambio* y haciendo producto digital el cambio es bastante rápido.
