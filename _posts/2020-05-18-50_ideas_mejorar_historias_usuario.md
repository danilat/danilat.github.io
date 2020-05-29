---
layout: post
title: Ideas para mejorar tus Historias de Usuario
categories:
- General
excerpt: Extractos del libro Fifty Quick Ideas to Improve your User Stories en castellano. Creando historias. Planificando con historias. Discutiendo historias. Partiendo historias. Gestionando la entrega iterativa.
image: /img/posts/50_ideas_us/cover.jpg
---

Me parecía un valor seguro hacerme con [**Fifty Quick Ideas to Improve your User Stories**](https://leanpub.com/50quickideas) de [Gojko Adzic](https://gojko.net/) y [David Evans](https://twitter.com/davidevans66). Venía siguiendo los artículos del blog de Gojko Adzic (de hecho algunas de esas ideas ya están desarrolladas ahí) a raíz de leer [Specification By Example](https://gojko.net/books/specification-by-example/) y además tenía buenas referencias del libro. Desde luego que [no me defraudó](https://twitter.com/dani_latorre/status/1246371869877567489).

Tal y cómo está escrito existe una idea por capítulo que contiene la descripción, los beneficios clave y algunas recetas sobre cómo llevarla a cabo; teniendo en algunos casos referencias a otros libros y artículos donde profundizar más sobre esa idea. El formato está genial para revisitar de vez en cuando alguna de las ideas y llevarlas al día a día.

Creo que quienes más partido le pueden sacar a este libro son las personas con roles tipo product manager/owner o que tengan influencia sobre cómo se gestiona el producto y los stakeholders en una organización. Pero es muy interesante para cualquiera que se dedique a la creación de productos de software con cierto recorrido profesional e interés en profundizar sobre la gestión de producto.

Y hablo de cierto recorrido profesional porque no es un libro introductorio donde expliquen qué son las historias de usuario, si es mejor una u otra plantilla y cosas así.

Mientras lo leía estuve marcando lo que me parecieron los principales puntos de cada idea y al terminarlo, como ejercicio de repaso, decidí empezar a traducir esos extractos. Me pareció que sería interesante compartirlo, así que pedí permiso a Gojko para hacerlo.

Estas ideas están agrupadas en cinco bloques:

- [Creando historias]({{page.url}}#creando-historias)
- [Planificando con historias]({{page.url}}#planificando-con-historias)
- [Discutiendo historias]({{page.url}}#discutiendo-historias)
- [Partiendo historias]({{page.url}}#partiendo-historias)
- [Gestionando la entrega iterativa]({{page.url}}#gestionando-la-entrega-iterativa)

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

### Discutiendo historias
 
**Usa baja tecnología para tener conversaciones sobre la historia**
 
Las buenas historias de usuario son el recordatorio de una conversación.
 
No usar herramientas técnicas durante la conversación permite a los equipos focalizarse en el asunto sin tener que preocuparse de cosas como el alineamiento del texto, formato de negritas o cuál es la sintaxis correcta. Es importante recordar los resultados de una conversación, pero volcarlo en ese tipo de herramientas puede ser pospuesto.

Al provocar menos distracciones, las discusiones sobre pizarras son más rápidas y productivas que alrededor de herramientas técnicas.
 
**Imagina la demostración**
 
Cuando el equipo discute una historia, en el momento de entender el criterio de aceptación o de explorar los ejemplos clave, comienza respondiendo la pregunta "¿Cómo haremos la demostración de esta historia?"
 
Fomenta y refuerza el compromiso del equipo con la idea de que la demo es la prueba de sus esfuerzos, la medida real de progreso, el momento de la verdad, la ceremonia de cierre de la iteración. Haz que sea un gran momento. Incluso trae comida. Que se sienta que es el momento de celebración que debería ser.
 
**Diverge y converge para las discusiones de las historias**
 
Nuestra forma preferida de facilitar las discusiones de historias para equipos de 10 a 20 personas es dividir el equipo en varios grupos más pequeños, hacer que los grupos capten su comprensión de una historia usando ejemplos y luego juntar a los grupos para comparar resultados.
 
Focalízate en las diferencias entre los grupos:
- En el formato o estructura de la información.
- En los outcomes de ejemplos similares.
- En los tachones y signos de interrogación.
 
**Involucra a todos los roles en la discusión**
 
Un error común es delegar la tarea de análisis de una historia en una sola persona.
 
Crea pequeñas conversaciones que involucren al menos a una persona representando a los three-amigos; con roles de desarrollo, testing y análisis. Sin encasillarse con el número tres, que sean representados todos los roles relevantes que es necesario que contribuyan.
 
Asegúrate de involucrar a personas que realmente vayan a trabajar en la entrega de la historia.
 
**Mide el alineamiento usando ejercicios de feedback**
 
Según la sabiduría popular hay que detener la discusión de una historia cuando no hay más preguntas. Esto puede ser engañoso cuando desarrolladores y testers carecen de experiencia en el dominio del negocio; simplemente pueden no saber qué pregunta adicional hacer.
 
El ejercicio se basa en que alguien presenta un caso extremo complicado basado en la conversación que se ha tenido. En vez de discutir sobre esa condición, todo el mundo escribe cuál cree que es el resultado esperado. Después, todos lo enseñan a la vez y se comprueba si están alineados o hay que seguir discutiendo sobre la historia.
 
Los ejercicios de feedback proporcionan un práctico mecanismo de cierre para talleres y discusiones de historias. Es lo más cercano que hemos encontrado a medir de forma objetiva el entendimiento compartido.
 
**Juega al abogado del diablo**
 
Un gran beneficio de esta técnica es descubrir pronto las malas ideas, para tirar o refinar las historias que podrían introducir complejidad innecesaria en el software.
 
No se trata de ser negativo, se trata de buscar grietas para ver si una historia es sólida o no. Dos buenas formas de prevenir problemas personales son:
 
- Elige a una persona para que desempeñe el rol inicialmente, luego que rote ese rol historia por historia para evitar que una sola persona focalice las reacciones negativas.
- Haz que todo el grupo proponga ideas sobre por qué una historia puede ser incorrecta y haz turnos para presentarlas.
 
**Divide la responsabilidad para definir historias**
 
Hacer que los stakeholders de negocio diseñen soluciones no es la intención original de las historias de usuario, pero muchos equipos acaban cayendo en esta trampa. Este puede ser un experimento para ayudar a arreglar esas situaciones:
 
- Los stakeholders de negocio especifican sólo lo "In order to.." u "As a..." de la historia.
- El equipo propone varias opciones para el "I want..."
- Ambos evalúan conjuntamente las opciones y los stakeholders deciden cuál de ellas deberías ser implementada.
 
El mayor beneficio de esta aproximación es que fuerza a mantener una conversaciones para decidir cuál es la solución.
 
**Divide las discusiones de negocio de las técnicas**
 
Permite a los equipos tener discusiones sobre el negocio más cortas y usar el tiempo de los usuarios de negocio más eficientemente. También hace que los equipos consideren un conjunto de historias de usuario cuando están pensando en cambios en el diseño.
 
Una discusión focalizada previene que los equipos vayan a los detalles de implementación demasiado pronto, haciendo que se invierta más tiempo en entender lo que realmente necesita hacerse.
 
**Investiga el valor a múltiples niveles**
 
Las buenas historias influencian en una cosa que luego llevan a otra para mejorar de algún modo el trabajo de alguien.
 
Piensa en los dos niveles más típicos: el valor para el usuario y el valor para la organización que vende u opera el software. Si puedes encontrar una historia que contenga ambas cosas, entonces es una situación de win-win.
 
**Discute métricas de escala variable con QUPER**
 
Muchos aspectos de los sistemas de software no están relacionados con la presencia o ausencia de una funcionalidad en particular, sino por una combinación de ellas que proveen valor en una escala variable (estos aspectos se conocen como requisitos no-funcionales o atributos de calidad).
 
El modelo QUality PERformance expone y visualiza dos tipos de información, la necesidad del negocio y las soluciones de arquitectura propuestas: breakpoints y barriers.
 
Breakpoints son los umbrales (que vienen determinados por necesidades que se esperan de los usuarios y la competencia) de utilidad para un aspecto particular de un sistema. QUPER asume que la relación de coste-beneficio de las soluciones potenciales es similar a una curva en S. Los puntos donde la relación coste-beneficio cambia bruscamente se llaman barriers y están relacionados con potenciales soluciones arquitectónicas.
 
Al enumerar claramente las opciones de costes y analizar los cambios en las funcionalidades, el modelo QUPER también ayuda a mostrar suposiciones ocultas sobre el crecimiento futuro.

<br/>
 
### Partiendo historias
 
**Empieza con los outputs**
 
La reescritura de un sistema legacy es posiblemente una de las situaciones más difíciles para partir los entregables en pequeñas piezas con historias de usuario.
 
A menudo tienen metas ambiciosas, como acelerar la capacidad de entrega en el futuro, desbloquear oportunidades de negocio, adoptar una arquitectura que permita crecer... Esto suele verse como un trabajo para una espada, no para un bisturí.
 
El beneficio clave de arrancar con los outputs es que facilita crear un plan de entrega incremental más refinado, porque permite dar a los usuarios funcionalidades antes y permite tener discusiones más fructíferas.
 
**Olvida el walking skeleton, ponle muletas**
 
Un walking skeleton es la implementación de una parte del sistema que realiza una pequeña función de extremo a extremo. No requiere utilizar la arquitectura de software final, pero debe enlazar los principales componentes arquitectónicos. La arquitectura y la funcionalidad deben evolucionar en paralelo.
 
La idea central del esqueleto con muletas es lanzar una interfaz de usuario pronto y planear hacer despliegues iterativos de todo lo que se encuentra tras la interfaz de usuario.
 
**Limita el segmento de clientes**
 
Hay situaciones en las que las discusiones sobre si algo es requerido u opcional conducen a un callejón sin salida y es particularmente difícil partir el trabajo en trozos pequeños que aporten valor. Un buen truco es evitar la discusión de partir los entregables y centrarse en limitar el segmento de clientes objetivo. No le des a todos el 2% de lo que necesitan, dales al 2% de los usuarios todo lo que necesiten.
 
El mayor beneficio de esta aproximación es que un subconjunto de usuarios empieza a usar el software pronto.  Y aunque no sean necesariamente el mercado objetivo, proveen feedback del mundo real.
 
**Divide por ejemplos de utilidad**
 
Una situación difícil es partir una historia cuando hay una gran tarea técnica que hacer, como cambiar una base de datos o un gran cambio de diseño. Esto a veces lleva a divisiones que son demasiado finas para ir a producción de forma independiente o a esas monstruosidades a veces conocidas como historias técnicas.
 
En vez de partir por los entregables técnicos y luego agrupar el valor que hay en ellos, prueba lo contrario: parte de los entregables de valor de negocio y luego agrupa las necesidades técnicas.
 
Esto evita caer en la trampa técnica del gran riesgo de hacer una gran migración al final. Este enfoque convierte los entregables en un flujo de pequeños cambios, cada uno lo suficientemente valioso como para que pueda pasar a producción y ser utilizado por alguien.
 
**Divide por capacidad**
 
Puedes abrir discusiones para conseguir historias más pequeñas y conseguir feedback antes si ves la capacidad como una dimensión que puede ser entregada progresivamente.
 
Hay muchos tipos distintos acerca de la capacidad que pueden entregarse iterativamente, trata de considerar varias dimensiones al partir historias. Algunas ideas por dónde empezar:
- Tamaño de ficheros.
- Duración de las sesiones.
- Número total de usuarios.
- Pico de uso (en usuarios concurrentes o volumen de datos).
- Número de elementos para un usuario (como ficheros o recursos).
 
**Comienza con un dummy, luego hazlo dinámico**
 
Hay entornos donde la posibilidad de acceder a datos de referencia involucra más tiempo de espera que de trabajo efectivo (necesidad de autorizaciones, falta de documentación, peculiaridades de sistemas legacy...).
 
Partir las historias para poder trabajar con datos hard-coded al inicio mejora la predictibilidad para los planes a corto plazo y permite no bloquear el desarrollo de otras funcionalidades.
 
Elegir correctamente los campos para dejar hard-coded es clave para que esta técnica funcione bien. Los candidatos ideales son los que aumentan significativamente el esfuerzo o la incertidumbre si se cargan dinámicamente, pero cambian con poca frecuencia.
 
**Simplifica los outputs**
 
Especialmente en sistemas enterprise complejos puede reducir el riesgo significativamente para los planes a corto plazo, ya que a menudo las historias que involucran sistemas externos o legacy se bloquean o quedan incompletas. Partir una historia en una que usa un canal de salida y otra que lo traslada los datos a un sistema legacy divide el riesgo.
 
Por ejemplo, si una historia involucra exportar a PDF, Excel y fichero dividido por tabs, divídelo en una historia por cada uno de los formatos de salida.
 
**Divide el aprendizaje de la ganancia**
 
El desarrollo de software a veces involucra tratar con lo desconocido (sistemas de terceros, nuevos estándares, evaluar el riesgo de cambios de infraestructura...).
 
Las historias de aprendizaje ayudan a los stakeholders a planear mejor. Mientras que las de ganancia ayudan a dar valor a los usuarios finales.
 
Los criterios de aceptación de las historias de aprendizaje se tienen que trabajar con los stakeholders para identificar qué tipo de información necesitan para dar el trabajo como hecho o no. Decidiendo previamente cuánto tiempo quieren invertir en obtener esa información.
 
Planificar historias de aprendizaje con duración limitada evita que la investigación se convierta en un trabajo vago e incontrolado que introduce variabilidad. También evita largos análisis iniciales.
 
**Extrae la utilidad básica**
 
En situaciones donde un proceso de negocio debe implementarse en su totalidad para que sea útil, una buena opción para dividir una historia es simplificar la interacción del usuario al mínimo. En lugar de usabilidad, brinde a los usuarios una utilidad básica.
 
Esta técnica funciona especialmente bien para partir las historias que son críticas de entregar en el tiempo en una que se mantendrá crítica y otra que se puede gestionar sin un deadline.
 
**Cuando todo lo demás falla, trocea la hamburguesa**
 
User Story Hamburger es una técnica de facilitación que puede ayudar a los equipos a pensar en cómo partir de una forma orientada a valor cuando están atascados en cómo es el flujo técnico de una historia grande y en casos de uso de todo o nada.
 
Cómo crear una hamburguesa:
1. Lista los componentes técnicos involucrados de forma vertical.
2. Define atributos de calidad para cada uno de los componentes.
3. Lista las opciones de los diferentes niveles de calidad posibles para cada componente de forma horizontal.
4. Elimina las opciones que no son satisfactorias para cumplir con un nivel de servicio útil.
5. Elimina las opciones que cuestan aproximadamente el mismo esfuerzo o más que las de mayores niveles de calidad.
6. Elige una rebanada.
 
Al Mapear opciones, esta técnica facilita discusiones sobre completar las necesidades de un subgrupo de usuarios más rápidamente o para desplegar sólo una parte de un caso de uso que pueda proveer valor igualmente.

<br/>

### Gestionando la entrega iterativa
 
**No pongas todo en historias**
 
Hay montones de cosas que cualquier equipo de software necesita hacer que no encajan conceptualmente como historias de usuario. Preparar máquinas, entornos de test, actualizar librerías, incrementar la velocidad de despliegue...
 
Si el equipo tiene un presupuesto de tiempo para poder dedicarlo a trabajar en otros incidentes, puede acumular holgura o slack para hacer frente a interrupciones inesperadas. De este modo la planificación a corto y largo plazo se va volviendo más precisa y el equipo se va haciendo más productivo.
 
Los equipos junto con los stakeholders deben decidir sobre el tiempo reservado y revisarlo periódicamente.
 
**Presupuesta el tiempo en lugar de estimarlo**
 
Evita perder tiempo en análisis innecesarios relacionados con el alcance y establece un compromiso para entregar valor de negocio.
 
La mejor manera de decidir un presupuesto de tiempo, tanto en términos de tiempo como de dinero, es observar el beneficio de negocio y estimar su valor para los stakeholders.
 
Cuando no se encuentre un buen modelo de valor prueba los dos enfoques siguientes:
 - Pregunta por los extremos: ¿cuándo lo usarías si estuviera listo? ¿qué es lo mínimo con lo que aún recibirías valor?
 - Presupuesta de forma incremental: en casos de alta incertidumbre puedes presupuestar los aprendizajes (prototipos, tests con usuarios, procesos semi manuales...) hasta llegar a la solución final.
 
**Evita usar números en el tamaño de las historias**
 
Los equipos poco experimentados a menudo usan el tamaño numérico de las historias para la planificación a largo plazo y la gestión de capacidad, lo cual es perjudicial y engañoso.
 
El uso de un método de dimensionamiento más simple ayuda a los equipos a pasar por la planificación de la historia más rápido y a tomar la decisión más importante en función su tamaño (si debe desglosarse más o menos).
 
Una buena idea es seleccionar varias historias representativas como referencia y comparar las nuevas historias con ellas.
 
**Estima la capacidad en función de una media móvil del número de historias acumuladas**
 
El número total de historias de tamaño similar es más simple y más fácil de calcular que un agregado de números arbitrarios como los puntos de historia. Y el resultado también será más preciso.
 
Tal y como el producto madura o el equipo crece o se encoge, la media móvil sólo comparará la capacidad con eventos recientes, no con la historia completa.
 
Usa la media móvil solo dentro del equipo para la planificación de la capacidad de iteración. Nadie fuera del equipo necesita saber esta media.
 
**Estima la capacidad basada en el tiempo de análisis**
 
Usar el tiempo que lleva el análisis de una historia como indicador de su complejidad es una alternativa a medir tamaños de historia o contar número de historias.

Marca un timebox para evitar que un solo elemento complejo tome demasiado tiempo de análisis.

 
**Elige impactos en lugar de priorizar historias**
 
En lugar de priorizar historias, intenta elegir los impactos más importantes en los clientes o usuarios. Los impactos son mucho más fáciles de discutir y comparar que las historias.
 
Idealmente selecciona un impacto para trabajar cada vez.
 
**Nunca digas "no", di "no ahora"**
 
Las organizaciones con una buena gestión de producto saben cuándo decir que no, pero cuando no hay una visión sólida de los productos los equipos suelen acabar con problemas al aceptar todo.
 
Cuando alguien propone un cambio, pídele que revise si la propuesta se ajusta al objetivo de negocio actual. De lo contrario, ofrece dejar de trabajar en el objetivo actual y priorizar algún otro impacto o posponer el cambio propuesto para más adelante.
 
La trampa típica es que cada idea se declara lo suficientemente crítica como para cambiar el objetivo actual, para evitarlo:
- Proporciona un canal de baja fricción para que los stakeholders cambien de dirección a intervalos regulares.
- Proporciona un canal de alta fricción para evitar que se provoquen cambios crítico entre esos intervalos.
 
**Divide las mejoras de UX del trabajo de revisión de consistencia**
 
Las mejoras de UX no necesitan pequeñas historias de usuarios, necesitan trabajar en el alto nivel sobre impactos y cambios de comportamiento.
 
Después de la priorización de alto nivel utilizando cosas como la selección de impactos clave, comienza con la investigación de UX antes de decidir sobre las historias de usuario concretas.
 
Para el trabajo en marcha, involucra a los diseñadores en hacer pruebas exploratorias para detectar inconsistencias. Más tarde evita esos problemas futuros creando un checklist de revisión de UX.
 
**Haz que los usuarios finales participen en grandes cambios en la interfaz de usuario**
 
El gentle deployment introduce cambios significativos en el producto y evita sorpresas desagradables para los usuarios, desplegando una versión paralela del producto e invitando a los usuarios a probarlo a su gusto.
 
Pedirle a la gente que cambie de versión reduce el factor sorpresa. Las personas que elijan explícitamente usar la nueva versión estarán preparadas para pequeñas inconsistencias.
 
**Verifica outcomes con usuarios reales**
 
Es absolutamente esencial que pruebes tus ideas con usuarios finales reales. Podría decirse que es la parte más importante de tu trabajo.
 
Escribe historias de usuario para que puedan verificarse los outcomes después de la entrega. Y, de hecho, ve y verifica con usuarios reales que los resultados planificados se han materializado.
 
**Tira las historias después de que se entreguen**
 
Muchos equipos se quedan apegados a la idea de usar las historias hechas como documentación, esto es insostenible incluso para productos no demasiado complejos.
 
Las especificaciones y pruebas organizadas por áreas funcionales describen el comportamiento actual sin la necesidad de que alguien comprenda toda la historia.
 
---

Obviamente estas anotaciones no pretenden servir como sustitución [al libro](https://leanpub.com/50quickideas), pero tal vez resulte de inspiración para investigar más en profundidad alguna de estas ideas.
