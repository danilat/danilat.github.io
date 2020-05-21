---
layout: post
title: Ideas para mejorar tus Historias de Usuario
categories:
- General
excerpt: Extractos del libro Fifty Quick Ideas to Improve your User Stories en castellano. Creando historias. Planificando con historias. Discutiendo historias. Partiendo historias. Gestionando la entrega iterativa.
image: 
---

Me parecía un valor seguro hacerme con [**Fifty Quick Ideas to Improve your User Stories**](https://leanpub.com/50quickideas) de [Gojko Adzic](https://gojko.net/) y [David Evans](https://twitter.com/davidevans66). Venía siguiendo los artículos del blog de Gojko Adzic (de hecho algunas de esas ideas ya están desarrolladas ahí) a raíz de leer [Specification By Example](https://gojko.net/books/specification-by-example/) y además tenía buenas referencias del libro. Desde luego que [no me defraudó](https://twitter.com/dani_latorre/status/1246371869877567489).

Tal y cómo está escrito existe una idea por capítulo que contiene la descripción, los beneficios clave y algunas recetas sobre cómo llevarla a cabo; teniendo en algunos casos referencias a otros libros y artículos donde profundizar más sobre esa idea. El formato está genial para revisitar de vez en cuando alguna de las ideas y llevarlas al día a día.

Creo que quienes más partido le pueden sacar a este libro son las personas con roles tipo product manager/owner o que tengan influencia sobre cómo se gestiona el producto y los stakeholders en una organización. Pero es muy interesante para cualquiera que se dedique a la creación de productos de software con cierto recorrido profesional e interés en profundizar sobre la gestión de producto.

Y hablo de cierto recorrido profesional porque no es un libro introductorio donde expliquen qué son las historias de usuario, si es mejor una u otra plantilla y cosas así.

Mientras lo leía estuve marcando lo que me parecieron los principales puntos de cada idea y al terminarlo, como ejercicio de repaso, decidí empezar a traducir esos extractos. Me pareció que sería interesante compartirlo, así que pedí permiso a Gojko para hacerlo.

Estas ideas están agrupadas en cinco bloques:

- [Creando historias]({{page.url}}/#creando-historias)
- [Planificando con historias]({{page.url}}/#planificando-con-historias)
- Discutiendo historias
- Partiendo historias
- Gestionando la entrega iterativa

<br/>

### Creando historias
**Cuenta historias, no las escribas**

Usar historias de usuario implica un modelo completamente diferente, es definir requisitos de forma colaborativa.

**No te preocupes demasiado por el formato de historia**

Experimenta con el formato:
  - Nombra las historias rápido, añadiendo los detalles después.
  - Evita caer en escribir soluciones obvias.
  - Piensa en más de un stakeholder interesado en el ítem, esto abre opciones de partir la historia.
  - Utiliza imágenes en vez de palabras.
  - Haz una pregunta.

**Describe un cambio de comportamiento**

Las iniciativas que aportan valor producen cambios observables en la forma de trabajar de alguien. Capturar ese cambio de comportamiento hace una historia medible desde un punto de vista de negocio y eso simpre abre una buena discusión.

**Describe un cambio del sistema**

La descripción de la historia debería aclarar exactamente cómo cambia el sistema o las reglas de negocio del momento actual y en el que la historia esté implementada. También necesitamos saber cuánto difiere del comportamiento actual. Empieza la discusión añadiendo otra cláusula a la plantilla de las historias ("Where as...", "Instead of..."), debería aclarar lo más posible el contraste de lo que hay con lo que es necesario.

**Enfoca las historias como experimentos que sobreviven**

Las preguntas clave para el tamaño de la historia no deberían ser sobre la duración de la iteración, sino acerca de cuánto quieren invertir los stakeholders de negocio en saber si el cambio propuesto retornará lo que asumieron invertir. Enfocando las historias como experimentos podemos cambiar el enfoque desde la complejidad técnica hacia los outcomes (o resultados esperados) y el aprendizaje. 

Diseña experimentos en torno a suposiciones y conviértelos en historias de usuario.

**Cuidado con los roles genéricos**

Evita "As an user..." como la peste. Una descripción clara y precisa de roles de usuario ayuda a identificar necesidades y eliminar complejidad innecesaria. Esto también ayuda a mejorar la gestión de los proyectos y la estrategia de planificación.

**Evalúa la zona de control y la esfera de influencia**

Hay tres áreas de sistemas diferentes:

  - La zona de control incluye todas las cosas en un sistema que podemos cambiar nosotros mismos.
  - La esfera de influencia incluye las actividades con las que podemos impactar, pero sobre las que no podemos ejercitar control total.
  - Los elementos externos incluyen elementos sobre los que no podemos influir.

  La necesidad del usuario de una historia idealmente debería estar en la esfera de influencia del equipo, mientras que el entregable en su zona de control.

**Pon una fecha de "best before" en las historias**

Para evitar presiones innecesarias y emergencias auto inflingidas, comprueba si hay una fecha límite cuando una nueva historia de usuario es propuesta. Escribe la fecha de "best before" en esas historias y haz visualmente obvio que esas son especiales y tienen que gestionarse por separado.

No intentes poner fecha de "best before" en todas las historias, de lo contrario todo se convertirá en una emergencia.

<br>

### Planificando con historias

**Establece un deadline para abordar los principales riesgos**

Tener un plan explícito para manejar los grandes riesgos permite a los stakeholders y al equipo a lograr un equilibrio entre los beneficios de negocio a corto plazo y la sostenibilidad a largo plazo.

**Usa backlogs jerárquicos**

Organizar el backlog en varios niveles permite a los equipos reducir significativamente el número total de items, proveyendo al mismo tiempo de una perspectiva general.

Una manera de implementar esta idea es usar un tablero visual como múltiples carriles horizontales para representar los diferentes niveles. Si usas un tablero de planificación, puedes hacerlo mediante un código de colores o usando diferentes tamaños de tarjetas. Alternativamente puedes representar la misma información en un customer journey, un user story map o un impact map.

**Agrupa las historias por impacto**

Un impact map es una visualización (tipo mind map) de cómo el entregable esperado conecta con las metas de negocio y las hipótesis subyacentes en cuatro niveles: Goal/Actor/Impact/Deliverable.

Organizar un grupo de historias como un impact map facilita varios niveles de discusiones sobre toma de decisiones y priorización.

 **Crea un user story map** 

Los user story map conectan los entregables de software con customer journeys y flujos de negocio, mostrando cómo las historias individuales contribuyen a la perspectiva general proveyendo de una buena representación visual de los planes de release.

Ayuda a los equipos a tener un visión más clara de por qué están construyendo un software y cómo encaja en la  perspectiva general. 

Los stakeholders a veces ven que pueden habilitar ciertas acciones eligiendo opciones con entregables más simples y posponiendo historias más complejas para releases posteriores.

**Cambia el comportamiento usando el funnel CREATE**

Las siglas CREATE significan Cue, Reaction, Evaluation, Ability, Timing y Executing.
- Cue: La posibilidad de una acción cruza por la mente de la persona.
- Reaction: la persona de forma automática e intuitiva reacciona a la idea en una fracción de segundo, generando una respuesta emocional.
- Evaluation: la persona piensa sobre la acción conscientemente, evaluando costes y beneficios.
- Ability: la persona evalúa si la acción es factible dado el contexto actual.
- Timing: la persona juzga si debe actuar ahora o más tarde.
- Executing.

Las buenas historias de usuario generalmente tienen como objetivo lograr un cambio de comportamiento, así que se debería poder vincular una historia con una parte del funnel CREATE para una persona relevante.

**Muestra las preocupaciones globales al inicio de una milestone**

Los decisores clave probablemente pueden participar en una discusión aparte sobre las preocupaciones globales una vez por milestone. Esto hace que sea más fácil llegar a un acuerdo sobre los objetivos globales y hacer una lista de las preocupaciones transversales más importantes.

**Prioriza según las etapas de crecimiento**

Modelos de crecimiento para productos éxito:
- Empathy: descubrir cómo resolver un problema real por el que gente pague.
- Stickiness: crear el producto adecuado para mantener a los usuarios.
- Virality: hacer crecer la base de usuarios de forma orgánica y/o artificial.
- Revenue: establecer un modelo de negocio sostenible y escalable con los márgenes correctos en un ecosistema saludable.
- Scale: crecimiento del negocio.

Lograr que los stakeholders se pongan de acuerdo sobre la etapa actual de crecimiento ayuda con la priorización del ahora/ahora no.

**Prioriza usando la alineación de propósito**

El modelo requiere que los stakeholders respondan 2 preguntas por item:
- ¿Es de crítico? (¿Puede el negocio funcionar sin él?)
- ¿Es diferenciador en el mercado? (¿Trae clientes, proporciona una ventaja competitiva o algo similar?)

Una vez que se han respondido estas preguntas, los items pueden terminar en una de estas cuatro categorías:

- Parity si es de misión crítica.
- Partner si es diferenciador en el mercado.
- Differentiating si responde a ambas preguntas.
- Who cares si no tiene ninguno.

**Haz una mapa de stakeholders**

- ¿Quién recibirá impacto por el proyecto?
- ¿Quién es responsable del proyecto?
- ¿Quién tendrá autoridad para tomar decisiones sobre el proyecto?
- ¿Quién puede apoyar el proyecto?
- ¿Quién puede dificultar el proyecto?
- ¿Quién ha estado involucrado en este tipo de proyectos en el pasado?

Es particularmente útil cuando la clave para lograr los outcomes deseados involucra cambiar el comportamiento de otras personas, especialmente en situaciones con mucha carga política.

**Pon nombre a tus milestones**

Elegir buenos nombres para las milestones mejora la participación de los stakeholder en el proceso de priorización de las historias y ayuda a la planificación con los backlogs jerárquicos.

No confundas las milestones con épicas. Las verdaderas épicas son simplemente historias grandes que satisfacen todos los demás criterios de INVEST (Independent, Negotiable, Valuable, Estimable, Small, Testable), pero resultan demasiado grandes para ser implementadas en una iteración.

**Enfoca las milestones en un número limitado de segmentos de usuario**

Seleccionar un número limitado de segmentos para cada milestone evita que los stakeholders inventen constantemente nuevos roles de usuario.

Obliga a las personas a considerar seriamente qué segmentos de usuario se beneficiarán de la historia, si lo hubiera y ayuda a evitar historias genéricas.

<br/>

---
Próximamente iré completando las traducciones de las recopilaciones del resto de bloques:

### Discutiendo historias
### Partiendo historias
### Gestionando la entrega iterativa

Obviamente estas anotaciones no pretenden servir como sustitución [al libro](https://leanpub.com/50quickideas), pero tal vez resulte de inspiración para investigar más en profundidad alguna de estas ideas.
