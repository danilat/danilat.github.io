---
layout: post
title: "Los principios DevOps: The Three Ways"
excerpt: En los últimos tiempos ha explotado la popularidad del término DevOps. Que va más allá de despliegues automatizados o ser la forma moderna de llamar a los administradores de sistemas.
image: /img/posts/principios-devops/3-ways.png
---

Llevamos ya unos años en los que se habla de DevOps, un término que originalmente se acuñó para referirse a transformar el modo en el que se entrega software en las organizaciones basándose en ideas de Lean Manufacturing. 

Pero en los últimos tiempos, al explotar su popularidad, parece haberse asumido por gran parte del sector como la forma de llamar a los equipos o ingenieros de plataforma, o en otros sitios simplemente como la forma moderna de llamar a los administradores de sistemas; ya que se asocia principal, y a veces únicamente, con despliegues automatizados o con montar infraestructura como código.

Personalmente, es algo que  de vez en cuando [he hablado](https://twitter.com/recena) [con algunos](https://twitter.com/nestorsalceda) [compañeros](https://twitter.com/jrubr) [de profesión](https://twitter.com/eferro), y aunque no es algo que me quite el sueño, sí me apena un poco el hecho de que con ello se pierda la parte más importante del mensaje: **romper silos organizativos para centrarse en entregar valor**.

---

Los **[Three Ways](https://itrevolution.com/the-three-ways-principles-underpinning-devops/)**, que son mencionados en libros como [The Phoenix Project](https://itrevolution.com/book/the-phoenix-project/) o en [The DevOps Handbook](https://itrevolution.com/the-devops-handbook/), vienen a ser los principios de los que derivan los comportamientos y patrones que nos ayudarán a romper esos silos y a poner foco en la entrega de valor:

- The First Way: **aumentar el flujo de entrega al cliente previniendo defectos**.

- The Second Way: **amplificar los ciclos de feedback para prevenir problemas y mejorar la calidad en origen**.

- The Third Way: **crear y fomentar una cultura de experimentación y aprendizaje continuos**.

![Representación de Los Three Ways de Devops](/img/posts/principios-devops/3-ways.png  "Representación de Los Three Ways de Devops")


### The First Way: aumentar el flujo de entrega

Hasta que algo no se está usando en producción por los usuarios y/o clientes no se está creando valor, así que deberíamos buscar desplegar de forma temprana y frecuente en producción incrementando la fiabilidad y calidad de lo entregado.

Sus principios son: 

- Hacer el trabajo visible. Típicamente con algún tipo de tablero (tipo kanban, sprint backlog...) donde tener el inventario de trabajo a realizar y su flujo entre “work centers”, permitiendo así detectar cuellos de botella entre ellos.
- Limitar el WIP. Básicamente tener más foco para acabar antes y pasar el trabajo al siguiente “work center”.
- Reducir el tamaño de de los paquetes de trabajo: Entregar menos funcionalidades pero con mayor frecuencia.
- Reducir el número de traspasos: Reducir pasos donde se encole el trabajo y que alargue el tiempo de entrega.
- Identificar y resolver continuamente los “constraints”: Para reducir tiempos de entrega necesitamos estar continuamente identificando el “constraint” del sistema y mejorar su capacidad de trabajo. 
> *In any value stream, there is always a direction of flow, and there is always one and only one constraint; any improvement not made at that constraint is an illusion.* (Eliyahu M. Goldratt)
- Eliminar las dificultades y desperdicios del flujo de valor: Cualquier cosa que cause retrasos de cara a la entrega al cliente o actividades que puedan evitarse sin afectar al resultado. 
En [Implementing Lean Software Development](https://www.amazon.es/Implementing-Lean-Software-Development-Signature/dp/0321437381) categorizan los desperdicios en: Trabajo parcialmente hecho, procesos extra, funcionalidades extra, cambios de tareas, esperas, motion o esfuerzo de transporte/comunicación entre “work centers”, defectos, trabajo manual o no estándar y heroicidades.

### The Second Way: amplificar los ciclos de feedback

Una vez entregado, necesitamos feedback rápido y constante, la meta es conseguir un sistema de trabajo cada vez más seguro y resiliente, detectando y resolviendo los problemas cuando son más pequeños y más fáciles de resolver. Pero los fallos son inevitables en sistemas complejos, cuando ocurren se deben asumir como oportunidades de aprendizaje frente a buscar o castigar culpables.

Sus principios son:

- Ver los problemas en cuanto ocurren: Tener telemetría que muestre cómo se comportan los componentes del sistema en producción para detectar cuando no lo hacen como se espera.
- Resolver los problemas para construir nuevo conocimiento: Una vez que un problema ocurre debemos resolverlo como un enjambre, movilizando a quienes haga falta para arreglarlo. Llegando a parar todo lo necesario del mismo modo que en el mundo de manufactura se utiliza una [cuerda andon](https://es.wikipedia.org/wiki/Andon_(sistema_de_control)).
- Empujar la calidad cerca del origen: Debemos encontrar y arreglar los problemas en cada área de control, las responsabilidades y toma de decisiones deben ocurrir donde se hace el trabajo.
- Facilitar la optimización de los “work centers” posteriores: Diseñando para facilidad operacional, donde los atributos de calidad (rendimiento, configurabilidad, testabilidad...) tienen la misma importancia que las funcionalidades.

###  The Third Way: experimentación y aprendizaje continuos

El objetivo es crear un entorno de alta confianza, reforzando la idea de que estamos aprendiendo de por vida. Aplicando una aproximación científica, tanto para el desarrollo de producto como mejora de proceso, aprendiendo de aciertos y fallos. Además, transformando los aprendizajes locales en mejoras globales para toda la organización.

Sus principios son:

- Facilitar el aprendizaje organizacional y una cultura de seguridad psicológica: Frente a buscar el error humano, buscar modos en la que se pueda rediseñar el sistema para que no vuelva a ocurrir este accidente. 
> *By removing blame, you remove fear; by removing fear, you enable honesty; honesty enables prevention.* (Bethany Macri)
- Institucionalizar la mejora del trabajo diario: Reservar tiempo explícito para pagar deuda técnica, arreglar defectos y áreas problemáticas.
- Transformar descubrimientos locales en mejoras globales: Tratar de convertir la experiencia que obtienen equipos o individuos en conocimiento explícito para la organización para que sea fácil de utilizar (librerías, configuraciones, código...).
- Inyectar patrones de resiliencia en el trabajo diario: Mejorando las operaciones diarias introduciendo tensión de forma intencionada buscando mejorar (chaos engineering, organizar game days).
- Los líderes refuerzan la cultura de aprendizaje: Establecer objetivos que enmarquen los experimentos haciendo explícito el problema a resolver, la hipótesis, el método de testearla, la interpretación de los resultados y usar los aprendizajes en las siguientes iteraciones.

---

Junto la aplicación de las prácticas técnicas (pipelines de despliegue, testing automático, añadir telemetría y alertado, chaos engineering...) y mejorar en ellas; estos principios DevOps nos ayudarán a tener organizaciones donde al entregar valor de negocio antes, se hagan más predictibles y se reduzcan riesgos. 

Lo que, en consecuencia, ayudará a reducir estrés en los equipos de tecnología y a que esas organizaciones sean lugares más habitables.