# Evolución del blog (2006–2026)

Análisis año a año de los artículos de `_posts/`. Para cada año hay un fichero
(`2006.md` … `2026.md`) que cubre cuatro dimensiones: **frecuencia de
publicación**, **longitud de los artículos**, **temáticas tratadas** y **estilo
de redacción**.

> 📖 **Lectura transversal:** [`arco-profesional.md`](arco-profesional.md)
> reconstruye la trayectoria profesional contada con tus propias palabras
> (2008–2026), con el contraste entre lo que te proponías y lo que de verdad pasó.

## Tabla resumen

| Año | Posts | Meses con posts | Palabras totales | Media palabras/post | Etapa |
|-----|------:|:---------------:|-----------------:|--------------------:|-------|
| [2006](2006.md) | 24 | 7/12 | 2.729 | 113 | Arranque amateur (PHP/Java/JS) |
| [2007](2007.md) | 89 | 12/12 | 13.533 | 152 | Pico de actividad, giro a Java EE |
| [2008](2008.md) | 66 | 12/12 | 16.471 | 249 | Grails/Groovy, GSoC, freelance |
| [2009](2009.md) | 37 | 12/12 | 8.339 | 225 | Menos volumen, más reflexión; jobsket |
| [2010](2010.md) | 42 | 12/12 | 12.280 | 292 | Open data (DNDzgz), comunidad |
| [2011](2011.md) | 35 | 11/12 | 10.399 | 297 | Cachirulo Valley, ponente, UX |
| [2012](2012.md) | 36 | 11/12 | 14.553 | 404 | Serie *developars*, Minchador |
| [2013](2013.md) | 39 | 11/12 | 12.533 | 321 | Nace la *retro semanal* |
| [2014](2014.md) | 47 | 12/12 | 15.970 | 339 | Bitácora semanal a tope |
| [2015](2015.md) | 38 | 12/12 | 13.222 | 347 | Bitácora + madurez técnica |
| [2016](2016.md) | 16 | 8/12 | 7.082 | 442 | Declive y fin de la retro semanal |
| [2017](2017.md) | 3 | 3/12 | 1.698 | 566 | Giro reflexivo/profesional |
| [2018](2018.md) | 2 | 2/12 | 1.347 | 673 | Mínimo; paso a Markdown |
| [2019](2019.md) | 7 | 7/12 | 7.011 | 1.001 | Artículos técnicos de fondo (DDD) |
| [2020](2020.md) | 8 | 7/12 | 10.015 | 1.251 | Año más largo; consultor |
| [2021](2021.md) | 7 | 6/12 | 4.667 | 666 | Nacen las *píldoras* |
| [2022](2022.md) | 2 | 2/12 | 2.206 | 1.103 | Arquitectura de software |
| [2023](2023.md) | 1 | 1/12 | 255 | 255 | Mínimo histórico; Genially |
| [2024](2024.md) | 3 | 3/12 | 3.359 | 1.119 | DDD estratégico, charlas |
| [2025](2025.md) | 5 | 5/12 | 5.183 | 1.036 | IA/MCP y reflexión de carrera |
| [2026](2026.md) | 1 | 1/12 | 244 | 244 | Recuperar la rutina; Mito |

> Métricas calculadas sobre el cuerpo del post (sin frontmatter YAML ni etiquetas
> HTML). El recuento de posts se basa en los nombres de fichero de `_posts/`
> (se excluyen los borradores `_draft_*`).

## Cronología de plataforma y formato

El soporte técnico del blog también ha cambiado varias veces. Estas son las
transiciones, deducidas de los propios posts y de los ficheros del repositorio:

| Fecha | Cambio | Evidencia |
|-------|--------|-----------|
| 2006 (jun) | **SimplePHPBlog** — plataforma inicial | Arranque del blog, *Hola Mundo!* |
| 2007 (mar) | **Migración a WordPress** sobre hosting compartido | `2007-03-30-migrando-a-wordpress` (+ `cambio-de-hosting` y `cambio-de-theme` ese mismo año) |
| 2009 | Actualizaciones de WordPress (mantenimiento) | `2009-03-01-migrado-de-wordpress-2011-a-271`, `2009-11-07-actualizado-a-wordpress-2-8-5` |
| 2013 (inicios) | **Rediseño "portfolio"** sobre WordPress (diseño de José Luis Lizano, maquetación de Guillermo Latorre) | `2013-03-19-rediseno-de-la-home`, `2013-03-25-estrenando-diseno-en-el-blog` |
| 2017 (mediados) | **Migración a Jekyll + GitHub Pages** (comentarios con Disqus, primera atención al responsive). Los posts antiguos se exportan a `.html` y conservan campos heredados de WordPress (`wordpress_id`, …) | Relatado en `2019-07-26-rediseño`; el último post escrito en `.html` es de jun-2017 |
| 2018 | **Cambio de formato de escritura HTML → Markdown** y frontmatter limpio (desaparecen los campos de WordPress; aparece `excerpt`) | Primer `.md`: `2018-01-03-un-repaso-a-mi-2017` |
| 2019 (mediados) | **Rediseño "carta de presentación"** con Vanessa Rubio: de portfolio a presentación personal, más legibilidad, *mobile-first*, estilos migrados de **Less → Sass**, y repatriar contenido desde **Medium** | `2019-07-26-rediseño`; aparece `image` en el frontmatter |

En resumen: **SimplePHPBlog (2006) → WordPress (2007–2017) → Jekyll/GitHub Pages
(desde mediados de 2017)**, con el formato de los posts pasando de **HTML a
Markdown en 2018** y dos rediseños visuales (2013 y 2019). El salto a Jekyll
(2017) y el paso a Markdown (2018) coinciden con el giro del contenido de bitácora
a artículos técnicos de fondo.

## Las tres grandes tendencias

1. **Frecuencia: de la inundación al goteo.** El blog arranca fuerte (2007–2015,
   ~35–89 posts/año, publicación casi semanal) y a partir de 2016 cae en picado
   hasta unos pocos posts al año. La constancia de 2007–2015 se sostiene primero
   por el entusiasmo técnico y luego por la disciplina autoimpuesta de la *retro
   semanal* (2013–2016).

2. **Longitud: de la nota al ensayo.** La media por artículo crece de forma
   sostenida: ~113 palabras en 2006 a más de 1.000 en 2019–2025. Se invierte la
   ecuación: muchos posts cortos al principio → pocos posts largos y elaborados
   al final.

3. **Temática y estilo: de aprender en voz alta a divulgar con criterio.** El
   contenido evoluciona desde apuntes técnicos y curación de enlaces (2006–2008),
   pasando por comunidad/open data/producto (2010–2013) y la bitácora personal
   (2013–2016), hasta artículos de referencia sobre arquitectura, DDD, equipos y
   producto (2019→). La voz en primera persona, cercana y honesta —con su humor
   aragonés— es la constante que atraviesa los 20 años; lo que cambia es la
   profundidad y la intención.
