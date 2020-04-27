---
layout: post
title: Making-of de CurvaEnAragón
categories:
- General
excerpt:
image: /img/posts/curvaenaragon/backlog.png
---

El domingo 12 por la noche lanzamos **[CurvaEnAragón](https://curvaenaragon.com/)**, una web que intenta hacer entendibles los datos oficiales del coronavirus en Aragón. 

La motivación surge al no encontrar un sitio de referencia donde poder consultar la evolución de la crisis sanitaria a nivel de Aragón (todo lo que había encontrado hasta el momento era nivel estatal o mundial) y al ver que en Aragón Open Data [habían liberado los sets de datos oficiales sobre coronavirus](https://opendata.aragon.es/datos/catalogo/dataset/publicaciones-y-anuncios-relacionados-con-el-coronavirus-en-aragon). 

En ese momento sólo estaba liberado el set de datos a nivel de Aragón que ofrece las evoluciones totales de algunos indicadores de forma diaria: el total de casos confirmados, ingresos hospitalarios y en UCI, casos de personal sanitario, fallecimientos y altas. Ahora, mientras escribo esto, hay también sets de datos a nivel provincial, sobre nuevos ingresos en cada hospital y de nuevos profesionales sanitarios confirmados con el detalle de sus categorías.

Con los datos que había inicialmente, hice un prototipo muy de andar por casa para traer los datos y dejarlos listos para consumir en web con una gráfica de evolución. De esta manera, junto a los sumatorios totales, se podía ver la evolución diaria y los porcentajes de casos activos, nuevos casos, altas y fallecimientos.

Este prototipo lo compartí con un puñado de personas cercanas y tras un feedback razonablemente positivo lié a [Vanessa](https://www.linkedin.com/in/vanessa-rubio-marquino/) para que lo re-ideáramos y viéramos si podíamos hacer algo más serio para mostrar la evolución del coronavirus en Aragón. Ya que además habían liberado también datos de la evolución a nivel de las tres provincias.

Decidimos usar los días festivos de semana santa para ver qué éramos capaces de sacar, aprovechando el confinamiento para hacer nuestro pequeño hackathon.

![Backlog de CurvaEnAragón](/img/posts/curvaenaragon/backlog.png  "Backlog de CurvaEnAragón")

Si cuando estamos haciendo producto digital siempre es importante acotar todo lo posible el alcance para ir viendo avance de forma iterativa e incremental, lo es más cuando quieres sacar algo en cuestión de unos pocos días. 

Con nuestra visión de la curva, queríamos darle protagonismo a los datos de carácter diario, dejando el sumatorio de los datos totales en un segundo plano. 

Al no tener el dato de a cuántas personas dan de alta hospitalaria o fallecen estando ingresadas, dedicimos no mostrar la evolución diaria de nuevos ingresos hospitalarios ni en UCI ya que no podemos calcular el número de personas que están ingresadas cada día.

### En cuanto el diseño

Debía verse y funcionar igual de bien en móvil que en escritorio, ya que teníamos la hipótesis de que iba a ser algo más consumido desde terminales móviles que desde escritorio (cosa que por el momento se está cumpliendo con más de un 80% de los usuarios).

Además de esto, comenta **[Vanessa](https://www.linkedin.com/in/vanessa-rubio-marquino/)**:
> *Antes de empezar a trabajar los wireframes en papel, lo primero que hice fue revisar cada dato que teníamos y pensar de qué manera se podía entender mejor, tanto a nivel visual como de contenido. Por ejemplo, en el caso de los datos acumulados, su alcance se entiende mejor cuando lo acompañamos del número total y el porcentaje que representa sobre el mismo.*

> *De la misma forma, en las tablas de datos diarios, las flechas verdes y rojas que cambian de dirección hacia arriba o hacia abajo sirven para entender con un golpe de vista la evolución de cada dato respecto al día anterior sin necesidad de hacer el cálculo de cada cifra.*

> *Teniendo ya clara toda la información con la que contábamos y cómo la queríamos comunicar, pasé a la fase del diseño y maquetación de la web. Como nuestro principal objetivo era hacer comprensible la situación actual del COVID-19 en Aragón, opté por una web con un diseño limpio, de navegación sencilla y lo más clara posible en cuanto a la organización de la información, utilizando en ocasiones recursos como la iconografía como guía visual para facilitar la identificación rápida de cada apartado.*



### En cuanto al desarrollo

Este tipo de pequeños *side-projects* tengo aprendido que tienen que darme el menor trabajo posible en cuanto a infraestructura y mantenimiento posterior, así que la solución técnica [no tiene mucha historia](https://github.com/danilat/covid-19-aragon/blob/master/README.md) aunque conste de 3 artefactos: la web, un script de importación y un canal de telegram.

Siendo unos datos que se actualizan diariamente y para montar lo mínimo tiré de soluciones que ya conozco: [Jekyll](https://jekyllrb.com/) como generador de páginas estáticas y [Github Pages](https://pages.github.com/) para publicar la web. Mientras que para la gráfica usé [Chart.js](https://www.chartjs.org/), una librería que daba cierto equilibrio entre sacar algo rápido y poder personalizarlo. Además hay otro poco de Javascript que maneja el DOM para algún detallito de interacción.

El procesado de los datos es un script en Ruby que lee los CSV de origen y genera otros de destino con todo calculado para que en los templates Jekyll sólo se tenga que [leer y renderizar](https://jekyllrb.com/docs/datafiles/).

Mientras que para la integración con [el canal de telegram](https://t.me/curvaenaragon) terminé desarrollando con [Javascript/Node](https://help.github.com/en/actions/building-actions/creating-a-javascript-action) una Action de Github sencillita: **[Externalized Telegram Notifications](https://github.com/danilat/externalized-telegram-notifications-action)**. Esta acción está integrada con un bot de telegram y [está configurada](https://github.com/danilat/covid-19-aragon/blob/master/.github/workflows/telegram.yml#L6) para que se lance automáticamente cada vez que se hace push en el repositorio, siempre que incluya algún commit que modifique un fichero en concreto.

El único paso que aún no está automatizado es el lanzamiento del script de importación y posterior commit/push para que se despliegan los cambios con los datos actualizados. Y tengo dudas si vale la pena automatizarlo totalmente si al final hay que ir [revisando que no haya problemas con los datos](https://twitter.com/dani_latorre/status/1251485999223406593).

---
#### Bolas extra

Nos entrevistó [Daniel Monserrat](https://www.elperiodicodearagon.com/autores/daniel-monserrat_16.html) para el Periódico de Aragón:  **[La curva más comprensible](https://www.elperiodicodearagon.com/noticias/aragon/curva-mas-comprensible_1418388.html)** donde contamos algunos otros detalles de este proyecto. A ver si llegando a medios generalistas ayudamos a poner nuestro granito de arena en que los ciudadanos nos hagamos  conscientes de que necesitamos mayor transparencia y datos abiertos que la respalden.

Tras el lanzamiento de la web hemos tenido que ir adaptando la UI y comunicación a algunas incidencias que han ido surgiendo con los datos. Han sucedido un par de descuadres que han ido corrigiendo: contar los casos de test rápidos en los datos de Aragón tardando 2 días en incluirlos en las provincias y detectar en un recuento de altas que habían contado más de las que luego eran.

No quería acabar sin agradecer el soporte y apoyo que nos está dando [Julian Moyano](https://twitter.com/jmcollado), sin él aclarándonos esas incidencias hubiera sido mucho más complicado encontrar soluciones.