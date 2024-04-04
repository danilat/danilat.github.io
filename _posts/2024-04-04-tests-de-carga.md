---
layout: post
title: Reduciendo riesgos con tests de carga
excerpt: 
image: /img/posts/loadtests/types.png
---

Hace varias semanas estuve involucrado en realizar algunos tests de carga en Genially, algo que no había tenido necesidad de hacer desde que trabajé en Inditex lanzando un nuevo servicio interno.

Esto venía dado por unos cambios en los que estuvimos trabajando un par de equipos para mejorar la experiencia de uso de una parte del producto, lo cual implicó un cambio bastante importante a nivel de arquitectura.

Con estos cambios teníamos 2 riesgos:
- Que aunque la experiencia de uso de la funcionalidad mejorase esto pudiera impactar negativamente en un funnel de conversión.
- Que la nueva solución que habíamos implementado pudiera causar problemas dependiendo de la carga y tuviéramos incidencias.

El primer riesgo lo minimizamos realizando un rollout incremental, que es como lanzamos la mayoría de cambios relevantes en Genially. Esto, en este caso, significó lanzar los cambios internamente bajo una feature flag para obtener feedback cualitativo y luego abrirlo a un porcentaje del tráfico para observar las métricas de producto.

El segundo riesgo, como mencionaba al principio, lo minimizamos realizando algunos **tests de carga**.

### ¿Pero qué es un test de carga?

Es un tipo de prueba en la que se **genera tráfico de forma artificial para evaluar la respuesta o capacidad de un sistema** ante una carga determinada de trabajo o de personas usuarias, por lo que puede servir para comprobar tanto el rendimiento como el escalado de un sistema.

Para esto, antes de ejecutar la prueba, necesitamos tener definido previamente qué y cómo lo vamos a observar para poder consultarlo tras su ejecución (tiempos de respuesta, consumo de recursos, etc). Así que **el entorno sobre el que vayamos a probar tiene que ser observable**; en este caso, lo que más nos va a interesar son las métricas y, en caso de que empiece a degradarse el servicio, también las trazas pueden ayudar a identificar el origen del problema con mayor facilidad.

En ocasiones, este tipo de pruebas se tienden a hacer con personas reales de manera algo informal, en plan “entrad aquí X personas a hacer Y metiéndole caña y vamos a ver cómo van las métricas Z”. Eso puede ser perfectamente válido para tener una idea general de cómo responde el sistema con una carga un tanto aleatoria, pero tiene el problema de que no es repetible ni controlado, por lo que de ese modo no podemos dar seguimiento a los resultados obtenidos de forma consistente.

Para tener consistencia en este tipo de pruebas, hay herramientas que nos permiten automatizarlas, de ese modo obtenemos escenarios controlados y repetibles a los que sí podemos dar seguimiento. Con estas herramientas, podremos definir distintos escenarios en los que queremos probar el sistema y observar si se mejora o empeora comparando los resultados de antes y después de un cambio.

En cuanto a herramientas concretas, en el pasado usé [Apache HTTP Server Benchmarking Tool](https://httpd.apache.org/docs/2.4/programs/ab.html) y [JMeter](https://jmeter.apache.org/), pero en la última ocasión lo hice con [k6](https://k6.io/) por recomendación de mi compañero [Manu Franco](https://twitter.com/ManuFS95). La verdad es que me pareció una herramienta fácil de empezar a usar, y viendo su documentación también muy potente, así que de momento se ha convertido en mi preferencia.


### Tipos de tests de carga

Dentro de los tests de carga, se pueden clasificar en subtipologías dependiendo del objetivo de la prueba y del patrón de generación de tráfico utilizado. Me gusta mucho [la gráfica y la explicación de la propia documentación de k6](https://grafana.com/load-testing/types-of-load-testing/).

[![Esquema representando los distintos tipos de tests](/img/posts/loadtests/types.png "Esquema representando los distintos tipos de tests, muestra su relación volumen de carga/tiempo")](https://grafana.com/load-testing/types-of-load-testing/)

- Smoke tests: son pruebas sobre el sistema de corta duración (segundos o pocos minutos) con una carga baja, con el objetivo de comprobar que **todo funciona razonablemente bien sin consumir muchos recursos**. De primeras, no los hubiera incluido como test de carga, pero dada la aproximación de esta herramienta de generar tráfico concurrente, les compro el incluirlo. En este caso, se podrían lanzar de forma bastante recurrente para detectar errores de configuración a nivel de aplicación o anomalías en las métricas de forma temprana.
- Average-load test: son pruebas sobre el sistema de duración media (minutos-hora) con una carga similar a la habitual, con el objetivo de **asegurar que los cambios introducidos no impactan negativamente en el contexto habitual del sistema**. Esto podría hacerse de forma periódica para encontrar potenciales problemas que se hayan podido introducir.
- Stress test: son pruebas sobre el sistema de duración media (minutos-hora) con una carga por encima de la habitual, con el objetivo de **comprobar el comportamiento del sistema con un tráfico bastante superior al habitual**. Esto nos puede ser útil, por ejemplo, para prepararnos para campañas como navidad o rebajas en el mundo del comercio electrónico.
- Spike test: de duración corta (unos pocos minutos) con una carga que sobrepase mucho la habitual del sistema. Su objetivo es ver **cómo se comporta con un pico de tráfico masivo durante un tiempo más limitado**. Escenarios para los que esto puede ser útil pueden ser prepararse para las primeras horas del Black Friday, si se va a lanzar un anuncio en prime time en televisión, etc.
- Breakpoint test: de duración indeterminada y una carga incremental hasta llegar a que el sistema se rompa o llegue al límite que hayamos definido. En este caso, el objetivo es **llevar el sistema al extremo máximo para conocer en qué momento nuestro sistema no da más de sí o hasta dónde permitimos escalarlo** si la infraestructura del sistema puede ir hacia "infinito". Los escenarios podrían ser comprobar optimizaciones de partes del sistema o trabajar en un plan de contingencia si en algún momento el sistema se acerca a su límite.
- Soak tests: de larga duración (varias horas) y una carga similar a la habitual. Su objetivo es **detectar problemas surgidos a partir de un uso extendido del sistema**, como el aumento del consumo de infraestructura o la degradación de los tiempos de respuesta. Esto nos puede interesar especialmente cuando no somos los dueños de la infraestructura en la que corre nuestro sistema y queramos comprobar que quienes lo vayan a operar no se encuentren sorpresas posteriormente.

### ¿Cómo lanzar los tests de carga?

En un mundo ideal lo probaríamos en algún entorno aislado que se asemeje mucho a producción a nivel de infraestructura, pero no siempre podremos contar con esa posibilidad. Y la frencuencia de ejecución dependerá de cada contexto.

Por ejemplo, cuando trabajaba en Inditex, disponíamos de un entorno específico para este tipo de pruebas. Y dado que no era posible realizar llamadas entre entornos distintos debido a que estaba limitado a nivel de red, sabíamos que podíamos probar nuestros servicios de forma aislada sin necesidad de coordinarnos con equipos no involucrados en estas pruebas.

Por otro lado, para llevar a cabo pruebas preliminares del cambio de arquitectura al que me refería en Genially, las estuvimos realizando en un [entorno efímero](https://tech.genial.ly/environment-as-a-service-f7966d609744). A nivel de infraestructura, estos entornos efímeros son bastante limitados en comparación con el de producción, pero nos permitía realizar algunas validaciones en un entorno aislado también sin necesidad de coordinación. Utilizamos este entorno para ejecutar una serie de smoke tests y un mini average-load test para obtener las métricas base. Luego introdujimos los cambios relevantes y comprobamos si surgía alguna anomalía para ver si había que iterar algo, una vez visto que no había nada raro podíamos ir a producción con mayor confianza y darle seguimiento al uso real de las primeras horas.

En los casos que describo lanzábamos las pruebas de forma manual y luego analizábamos los resultados. Pero también existen contextos donde estas pruebas se lanzan automáticamente incluso en **pipelines de continuous delivery**. Así que se puede echar para atrás una release si un test falla dado el límite marcado como aceptable en una métrica. Por ejemplo si dada una carga se supera el máximo de latencia de peticiones, no se consigue ingestar un mínimo de peticiones por segundo, etc.

### Concluyendo

Hay lugares donde este tipo de pruebas son muy relevantes por su contexto y forman parte del camino de entrega del software. En mi caso no han formado nunca parte de mi flujo habitual de trabajo, pero han habido ocasiones en las que me han resultado muy útiles para lanzar nuevos servicios, nuevas funcionalidades o para introducir cambios relevantes en la arquitectura **con una mayor confianza**.

Aunque nunca hay que olvidar que, como cualquier prueba automática, estas pruebas pueden ayudar a minimizar el riesgo pero **no garantizan la ausencia total de problemas de degradación o errores**. Ya que el tráfico artificial nunca será igual al generado a partir del comportamiento real de las personas que utilizan nuestro software, así que es importante **invertir primero en observabilidad** y en comprender cómo se comportan nuestros sistemas de software en producción.



