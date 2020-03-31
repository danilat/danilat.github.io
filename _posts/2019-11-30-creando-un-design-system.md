---
layout: post
title: Creando un Design System
categories:
- General
excerpt:
---

En el [Diseña Forum Zaragoza 2010](http://www.disenaforum.com/2010/programa.php) la charla que más me gustó de largo fue una de alguien de Ikea (Marino Maganto) llamada *Diseño y estrategia*. El contenido exacto es borroso ya, pero básicamente me quedé con la idea de la importancia de la sistematización de cara a la logística en el proceso de diseño de producto. También de cómo el exceso de optimización para logística en el rediseño de algunos productos resultó negativo a nivel de negocio en alguna ocasión.

Así que a partir del momento en el que [Sergio Álvarez Leiva](https://saleiva.now.sh/) nos encargara a [Luisa Peñalosa](https://twitter.com/luisabubu) y a mi el empezar a trabajar en un sistema de diseño a partir de los distintos productos sobre los que estábamos empezando a trabajar en el departamento comercial empecé a pensar bastante en aquella charla.

También me acordaba de algunas de hace ya años en diferentes aniversarios de Cadius Zaragoza de [Jesús Gorriti](https://gorriti.com/) o [Javier Cañada](http://www.terremoto.net/), que creo que fue de quien oír por primera vez que sistematización del diseño en UI digitales. O del intento de [Roberto Abizanda](https://twitter.com/rabizanda) de que empezáramos a trabajar en uno para [Outreach Tool](https://www.outreachtool.com/) que, por no poder darle seguimiento por mi parte, nos salió regular.

### ¿Qué es un Design System?



### El contexto

Como comentaba, este sistema de diseño surgió de varias líneas de producto sobre las que íbamos a trabajar en el departamento comercial de zara.com. En ese momento ya teníamos arrancados 2 desarrollos de producto y teníamos a la vista al menos un par más, así que ya de inicio tenía todo el sentido del mundo empezar a sistematizar y sacar librerías con patrones perceptuales y funcionales.

El enfoque que teníamos era que el sistema fuera creciendo a partir de las necesidades de los productos que estábamos creando, y que otros productos futuros lo siguieran evolucionando.

A nivel de diseño de UI los productos compartían mucho en común de inicio e iban dirigidos usuarios del departamento. Estos productos se iban a desarrollar sólo para uso en escritorio en ese momento, así que la adaptación para otros dispositivos pasaba a un plano secundario hasta que surgiera la necesidad.

Aunque equipos de ambos productos eran totalmente diferentes, compartían que Luisa era la responsable de diseño y yo el líder técnico. Desde que entré a trabajar en la compañía empezamos a hablar mucho sobre los objetivos, los usuarios, la UI que se estaba diseñando en **Figma**... así que la comunicación era fluida y estábamos bastante alineados.

Respecto a lo técnico el framework corporativo era una extensión sobre **React**, que nos ofrecía utilidades y componentes ya implementados a los que podríamos sacar partido, así que también teníamos que contar con una dependencia en la parte técnica.

Ya hablábamos con Sergio de la importancia de empujar el [Inner Source](https://en.wikipedia.org/wiki/Inner_source) para ser más efectivos y tener mejor capacidad de adaptación en general, así que el tratar de crear interés y una pequeña comunidad era algo que también debíamos tener en mente.

### A dónde llegó el sistema

Pero el resto de los equipos eran diferentes, así que había poco que coordinar para empezar con la librería de patrones en figma, pero tendríamos que ir viendo como poder llevar lo diseñado a código al no contar .

Desktop only
Equipo
Figma
React en Inditex
Flujo del trabajo de ramas, guía de estilo, qué debería llevar una pull request, issue.
Docz
La elección de utilizar [styled-components](https://www.styled-components.com/)
Primer componente para marcar qué tests tener (de componente + snapshot)

### Trabajando en crear comunidad

Canal de teams
Presentaciones a otros tech leads, arquitectos, equipos...
Reuniones con otros equipos
Documentación
Conversaciones de café

### Referencias

Seguramente habrá tropecientos posts al respecto que puedan ser buenas referencias, por parte me leí [el libro Design Systems](https://designsystemsbook.com/) de [Alla Kholmatova](http://craftui.com/). Que aunque me resultó un poco durillo, tiene mucho material sobre el que trabajar para crear y evolucionar Design Systems.
