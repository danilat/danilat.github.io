---
layout: post
title: Charlando sobre slicing vertical
excerpt: Agile Delivery organizó un evento en formato Lean Coffee en el que estuvimos unas cuantas personas hablando sobre slicing de productos de software. El slicing viene a ser simplemente dividir problemas grandes para hacerlos más manejables.
image: /img/posts/slicing/cake.jpg
---

Hace unos días [Agile Delivery](https://www.meetup.com/es-ES/agile-delivery-es/) organizó un evento en formato [Lean Coffee](https://agilecoffee.com/leancoffee/) en el que estuvimos unas cuantas [personas hablando sobre *slicing*](https://www.meetup.com/es-ES/agile-delivery-es/events/275643577/) de producto de software. Lo del slicing viene a ser simplemente ir haciendo *rebanadas* para organizar el trabajo desde problemas grandes a más pequeños para hacerlos más manejables.

Con la visión *waterfalera* lo habitual era hacer slicing con un enfoque horizontal descomponiendo por tipo de actividad, por ejemplo: hacer el análisis, diseñar la UI cubriendo todas las casuísticas reflejadas en el análisis, diseñar la base de datos, implementar el frontend de la UI diseñada, programar la lógica de negocio de lo que se definió, hacer pruebas para que todo funciona tal y como se indicó en el análisis... y acabar desplegando a modo big bang como último paso. Así que pueden pasar muchos meses o años para empezar a obtener feedback de que lo que hemos construido aporta valor o para empezar a recuperar la inversión.

La visión *agilista* cambia esta perspectiva a algo que parece mucho más razonable para crear mejores productos de software, construirlos de forma [iterativa e incremental](https://danilat.com/weblog/2019/04/10/diseno-incremental-de-software-a-partir-de-las-interacciones). Para ilustrarlo, y aunque suene un poco vetusto, estos son los [principios del manifiesto ágil](https://agilemanifesto.org/principles.html) que se refieren a ello:

> - Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage. 
- Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.
- Working software is the primary measure of progress. 
- Simplicity--the art of maximizing the amount of work not done--is essential.

Atención especial a ese **art of maximizing the amount of work not done**, principalmente desde el punto de vista de producto. Debemos intentar **limitar al máximo el alcance de lo que construimos para que, con el mínimo esfuerzo posible, tratemos de conseguir el máximo valor o aprender lo máximo posible**. Esto vendría a conseguirse a través de hacer slicing vertical para organizar el trabajo.

A día de hoy, aún con el boom de lo ágil que hay en el sector tech, es bastante habitual seguir viendo muchos vicios heredados del waterfall. Esto es porque aunque **la teoría es simple, llevarlo a la práctica no lo suele ser**. Requiere que las organizaciones y equipos tengan una **mentalidad enfocada a producto** y cierta **capacidad técnica** para llevarlo a cabo. 

- La mentalidad de producto ayuda a plantear esos *slices*. Esto es hacer que se focalicen mucho más en los objetivos a conseguir o en las hipótesis que se pretendan validar y que busquen el camino más corto para hacerlo, evitando convertir a los equipos en meros *feature factories* de quienes se esperan que implementen a pies juntillas lo que alguien les dice.

- Ciertas capacidades técnicas son necesarias para que los equipos no se vean limitados o paralizados por esas cuestiones, además de para trabajar con más tranquilidad. Por ejemplo tener arquitecturas y diseños que absorban bien los cambios, confiar en los tests automáticos para comprobar que tanto lo nuevo como lo anterior sigue funcionando correctamente, poder entregar software de forma frecuente y con confianza...

En fin, os dejo el video de la conversación que tuvimos, a mi me resultó una sesión muy interesante y entretenida. Cerca del minuto 19 de la grabación es cuando se empieza a entrar en harina:

<iframe width="100%" height="450" src="https://www.youtube.com/embed/R_JQGXmrkyY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Salieron experiencias, consejos y referencias más que interesantes. Además pudimos enfrentar puntos de vista diferentes que creo que también aporta, ya que en eso del vertical slicing creo cada uno vamos explorando cosas diferentes que dependiendo de los contextos pueden funcionarnos mejor o peor.
