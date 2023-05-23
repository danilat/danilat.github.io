---
layout: post
title: Métricas para equipos de desarrollo de software
categories:
- General
excerpt: Como parte de mi trabajo en el último año, he intentado empujar la cultura de mejora continua con diferentes equipos con los que he ido trabajando... También he ido pensando en las métricas relacionadas.
image: /img/posts/kpis/needs.jpg
---
Como parte de mi trabajo en el último año, he intentado empujar la cultura de mejora continua en los diferentes equipos con los que he ido trabajando. Tanto en cuestiones de herramientas y habilidades técnicas, como en las de comunicación y coordinación, con ciertas restricciones y dependencias que caen fuera de nuestro margen de influencia.

Partimos del supuesto de que **cuanto mejores sean las prácticas del equipo, mejor capacidad de entrega tendrá**. Eso se traduce en una mayor adaptabilidad a los cambios, una mejor mantenibilidad del software con el paso del tiempo y posiblemente una mayor motivación del equipo con su trabajo.

Además de las típicas sensaciones subjetivas de efecto de mejora, teníamos que pensar en **indicadores** que nos permitieran ir observándolo realmente. En algún momento, también se empezaría a querer tener visibilidad desde fuera de los equipos, así que tocaba darle una vuelta y ordenar ideas.

Estuve preparando una presentación para explicar internamente cómo estábamos trabajando, hacia dónde creía que debíamos ir a través de una mejora continua, las distintas *métricas* que podríamos observar y las necesidades que se cubrirían con una buena capacidad de entrega.

![Diapositiva de una presentación con la visión de lo que, como equipo deberíamos cubrir: adaptabilidad respecto a negocio, entregar pronto, evitar retrabajo, una buena UX y evitar bugs en lo posible](/img/posts/kpis/needs.jpg "Una visión de lo que es buena capacidad de entrega"){: .frame}

### "Dime cómo me mides y te diré cómo me comporto"

Desconozco el origen, pero con estas cosas siempre me acuerdo de este dicho. Hay que andar con ojo con qué indicadores (que no objetivos) vamos a medir. Además, tendremos que usar varios para compensar el fomento de comportamientos extraños que falsean esas métricas.

Con el uso normal de las herramientas, sólo acordando algunas convenciones, se puede facilitar la explotación de datos posterior para extraer métricas. Los orígenes de datos para los indicadores son:

- El código
- El repositorio y servidor de automatización
- Las herramientas de gestión
- El propio producto

### Indicadores del código

Las herramientas de **análisis estático de código** nos dan números sobre deuda técnica que existe. No debemos perder de vista estos indicadores y dedicar tiempo en analizar y hacer limpieza específica de vez en cuando. Unas veces se resuelven con soluciones simples y otras esconden problemas de diseño que no resultan tan evidentes.

La **cobertura de test** es uno de los indicadores más habituales, lo más interesante en este caso es ver qué NO está cubierto. Y como se suele comentar, hay que andar con cuidado porque es un indicador fácil de falsear si se busca como objetivo.

En un momento dado, además, se podría utilizar *mutation testing* (comprobar que se rompe algún test al modificar código de producción) para tener un indicador de la calidad de los tests unitarios.

### Indicadores del repositorio y servidor de automatización

Hay bastantes indicadores interesantes que se pueden sacar de los repositorios y servidores de automatización, aunque en su mayoría son dependientes de las convenciones de uso.

Sin embargo, un indicador siempre válido y que pienso que debería observarse es la **frecuencia de integración**.

La *integración continua* es una práctica (que no herramienta) tan popular como malinterpretada, ya que hasta que no se une el trabajo que ha hecho o está haciendo una persona con la rama principal de desarrollo y se completa una build, no la estamos realizando.

Hasta que no ha terminado correctamente la construcción de un artefacto de software, no sabemos si todo está correcto. A mayor frecuencia, feedback más temprano y menor incertidumbre.

En caso de usar ramas, también es interesante ver la **duración de vida de las ramas**. A más tiempo, mayor riesgo de conflictos u otros problemas al integrar.

Y si se utilizan pull/merge requests, también hay un puñado de indicadores que en un momento dado puedan sacarnos olores relacionados con la capacidad de entrega: cantidad de comentarios, tiempo que quedan abiertas, cantidad de rechazos...

### Indicadores de las herramientas de gestión

Las herramientas de gestión, además de servir como radiador de información para saber la situación actual de la construcción del producto y ayudar a coordinar el trabajo, son una buena fuente de información de indicadores del proceso de trabajo.

Para observar la capacidad de todo el equipo en conjunto de hacer *vertical slicing* es muy útil conocer el **tiempo de ciclo**. A menor tiempo de ciclo, mayor es nuestra capacidad de entrega. Es el tiempo que se tarda desde que se empieza a trabajar en algo que aporte valor (por ejemplo, una historia de usuario) hasta que pasa a estar hecho.

Es habitual que en algún punto de las herramientas de gestión se pueden observar los distintos despliegues que se han realizado, donde podamos obtener la **frecuencia de despliegue**. Evidentemente a mayor frecuencia, mejor.

Aunque nuestro tiempo de ciclo fuera corto y la frecuencia de despliegue alta, sería posible que nuestro producto fuera frágil debido a bugs. Por eso el indicador de **bugs detectados y resueltos por versión/despliegue** es otra métrica a tener siempre en cuenta.

Dependiendo del momento y escenario en el que se encuentre un producto, también me parece muy interesante el indicador del **lead time**, el tiempo que pasa desde que se pide algo nuevo hasta que está desplegado en producción. Que vendría a ser consecuencia de los 3 anteriores indicadores y del tamaño de la pila de producto.

Como supongo que haya quien pueda echarlo de menos, omito intencionadamente los indicadores al respecto de las estimaciones, tipo story points por iteración. En mi opinión, tienen un componente muy subjetivo y variable para ser utilizado como indicador de cambio en la capacidad de entrega de un equipo.

### Indicadores del propio producto

Además de otro tipo de instrumentación mucho más minuciosa que necesitan los miembros del equipo de gestión de producto o diseño, el equipo de desarrollo debería poder observar el **número y porcentaje de uso por funcionalidad**, que al final define el éxito o no del trabajo de todos.

Lo más interesante de este indicador es que combinado con otras métricas puede ayudar a tomar decisiones sobre la evolución del producto. Como por ejemplo, este escenario:
1. Detectamos problemas muy graves de rendimiento en una parte del producto.
2. Observamos que el porcentaje de uso de la funcionalidad afectada por esos problemas es residual.
3. Decidimos no resolverlo de momento, pero lo reflejamos en la pila del producto como algo poco prioritario.
4. Configuramos una alerta para detectar cierto aumento en el porcentaje de uso de esa funcionalidad.


Otro indicador importante es el **crash rate** del producto, cuántas veces se detecta un fallo o error por cantidad de uso, que nos permite saber lo estable que es un producto. Y mezclado con el indicador de números de uso por funcionalidad, nos permite detectar los puntos problemáticos.

Dependiendo del contexto del producto y del negocio, posiblemente podamos sacar también otros indicadores relevantes de operaciones y soporte que sean consecuencia del uso del producto.

### Medir sin perder el foco

Estos son muchas métricas distintas. Es interesante observarlos porque nos pueden servir para detectar olores sobre problemas y oportunidades de mejora, pero son demasiados para tratar de mejorar todo a la vez.

Para evitar diluirnos y no terminar mejorando en nada, deberíamos elegir y enfocarnos en un par de esos indicadores cada vez, dependiendo de la situación de cada equipo.

Y aunque sea tentador hacerlo, evitaría usar alegremente estos indicadores para marcar objetivos, así como para evaluar a equipos distintos.

No olvidemos que el propósito de medir estos indicadores es observar la evolución en el tiempo de un equipo trabajando en un producto y contexto determinado. 
