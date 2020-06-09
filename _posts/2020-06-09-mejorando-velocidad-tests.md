---
layout: post
title: Mejorando la velocidad de la suite de tests
excerpt:  
image: /img/posts/mejorando-velocidad-tests/compiling.png
---

Cuando tienes la buena costumbre de escribir tests, ya sea antes o después, vas generando una red de seguridad que nos da feedback para saber que los escenarios cubiertos siguen funcionando correctamente. Eso nos facilita el cambiar el código con mayor confianza ya sea para refactorizar o añadir alguna nueva funcionalidad.

Ese **ciclo de feedback debería ser razonablemente corto**, debería ayudarnos a concentrarnos y [fluir](https://es.wikipedia.org/wiki/Flujo_(psicolog%C3%ADa)) en lo que estemos haciendo en ese momento. Si resulta lento seguramente acabaremos poniéndonos a hacer otras cosas mientras esperamos y seremos menos efectivos.

[![Tira cómica de XKCD de Compiling](/img/posts/mejorando-velocidad-tests/compiling.png  "Tira cómica de XKCD de Compiling")](https://xkcd.com/303/)

En las suites de tests normalmente los principales cuellos de botella, además de los end-to-end, suelen ser los que hacen uso de sistemas externos como pueden ser la base de datos o el sistema de ficheros. Por eso, en la medida de lo posible, es saludable que las suites de tests traten de parecerse a la [pirámide de test](https://martinfowler.com/bliki/TestPyramid.html).

Pero aún así los proyectos van creciendo y de la mano lo hacen las suites de tests, por lo que ese feedback irremediablemente se va ralentizando. Hay soluciones que minimizan el problema, como usar herramientas que ejecutan algunos [tests al guardar el código](https://github.com/guard/guard-rspec) o [usar tags](https://relishapp.com/rspec/rspec-core/v/3-9/docs/command-line/tag-option) en los tests para ejecutar sólo un subconjunto de ellos. 

Pero eso no nos resolverá la raíz de los problemas, puede que incluso los enmascare. Lo mejor es dedicar un tiempo en analizar la suite de tests para detectar qué origina que sea lenta y ver si vale la pena intentar mejorarlo.

### Medir y mejorar

Por ejemplo hace poco trabajando en el backend de [Devengo](https://www.devengo.com/), donde tenemos costumbre de escribir bastantes tests, tenía la percepción de que en unas pocas semanas los tiempos de ejecución de la suite de tests que ejecuta conjuntamente los unitarios y de integración habían degradado mucho. Tenía la hipótesis de que revisando los tests de integración podríamos encontrar puntos donde optimizar y obtener feedback antes.

Podría haberme puesto a lo loco a cambiar tests e ir probando si bajaban los tiempos, pero suele ser más productivo utilizar herramientas que te ayuden a detectar las fuentes de los problemas y tomar decisiones en base a los datos que te dan. Así que empecé dedicando algunos ratos de [holgura](https://explainagile.com/agile/xp-extreme-programming/practices/slack/) en analizar la suit de tests con **[TestProf](https://test-prof.evilmartians.io/)**.

Con TestProf pude comprobar qué [tipo de artefactos](https://test-prof.evilmartians.io/#/tag_prof) eran en los que se iba más tiempo y cuáles eran concretamente los tests más lentos, que era información bastante interesante. Pero lo más clarificador fue comprobar cómo nuestros tests [hacían uso de las factorías](https://test-prof.evilmartians.io/#/factory_prof) de [factory_bot](https://github.com/thoughtbot/factory_bot) que usamos para preparar los tests.

Evidenciaba que el uso de las [associations](https://github.com/thoughtbot/factory_bot/blob/master/GETTING_STARTED.md#associations) estaban provocando que se estuvieran creando en cascada muchos elementos en la base de datos y que había unas pocas factorías en las que se iba notablemente más tiempo. Ya con esos KPIs es mucho más fácil tomar decisiones de por dónde empezar.
 
En la primera sentada decidí no tocar el código de producción y reducir el número de elementos que se creaban en cascada, ya que en muchos casos no eran necesarios. Así que los cambios fueron básicamente dos:

- Minimizar el número de elementos en algunos usos de [`create_list`](https://github.com/thoughtbot/factory_bot/blob/master/GETTING_STARTED.md#building-or-creating-multiple-records) para que esos tests cubrieran sólo casos límite.
- Cambiar un buen número de tests para que en la propia preparación se crearan elementos de las associations usando el método [`create`](https://github.com/thoughtbot/factory_bot/blob/master/GETTING_STARTED.md#build-strategies) de forma explícita, de ese modo al pasar sus referencias a las factorías se evitaban generar muchas de las creaciones en cascada.

Eso supuso un reducción de entre 15-20% del tiempo. Aún siendo una mejora sustancial había mucho margen de mejora porque el mayor cuello de botella seguía siendo los tiempos de una factoría en concreto.

Tal y como me indicó [Iván](https://ivanguardado.com/), estaba claro el principal sospechoso, ya que teníamos anotado un *concern* de deuda técnica desde hacía tiempo: una dependencia en un [callback de ActiveRecord](https://guides.rubyonrails.org/active_record_callbacks.html) que había que quitar y mover a un sitio más apropiado. Así que en la segunda sentada trabajé en ese refactor y una vez hecho [redujo significativamente](https://twitter.com/ivanguardado/status/1258731027901677569) los tiempos de ejecución, pasando de lanzar la suite en **casi 2 minutos a algo menos de 30 segundos** en mi máquina.

### Conclusiones

Trata de buscar herramientas que te ayuden a medir antes de hacer cambios, es difícil ser consciente de si un cambio provoca mejoras sin ninguna referencia. De hecho, en algunos contextos incluso podría valer la pena instrumentalizar el efecto que tienen este tipo de mejoras en la productividad de los equipos.

A más rápido siempre es mejor pero, igual que con el porcentaje de cobertura, tampoco creo que haya que andar obsesionándose con ello. Así que preocúpate (de nuevo igual que con la baja cobertura) cuando la lentitud de tu suite te esté suponiendo un obstáculo para el flujo en tu trabajo.

Y recuerda que la suite de tests que vamos dejando tiene que aportar valor como **red de seguridad para introducir cambios** en el código. Así que ante todo debería ayudarnos a documentar lo que hace (y cómo está diseñado) el software y ser expresiva cuando falla.
 
---

### Más referencias

- [The Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
- [TestProf: a good doctor for slow Ruby tests](https://evilmartians.com/chronicles/testprof-a-good-doctor-for-slow-ruby-tests)
- [TestProf II:Factory therapy for your Ruby tests](https://evilmartians.com/chronicles/testprof-2-factory-therapy-for-your-ruby-tests-rspec-minitest)
- [Cut Your RSpec/Minitest Runtime With TestProf](https://medium.com/better-programming/cut-your-rspec-minitest-runtime-with-testprof-d19e55783050)