---
layout: post
title: Evaluando Consumer-Driven Contract Testing con Pact
categories:
- General
excerpt: 
image: /img/posts/contract-tests/pact.gif
---


**[Pact](https://docs.pact.io/)** es una librería [con soporte en múltiples lenguajes de programación](https://docs.pact.io/implementation_guides#supported-languages) para hacer **Consumer-Driven Contract Testing** de integraciones vía HTTP y mensajería.

Desde que [Iván Loire me descubriera en un tuit un poco de rebote y hace la tira](https://twitter.com/ivanloire/status/621764484982554624) su existencia, había vuelto a cruzarse por mi radar en un par de ocasiones la posibilidad de evaluarlo, pero por unas razones u otras terminaba sin priorizarlo y caía en el olvido.

Eso fue hasta que hace unas semanas [Alberto Gualis](https://medium.com/@gualison) andaba preparando un taller de [Introducción al contract testing con Pact](https://www.meetup.com/Software-Crafters-Bilbao/events/268015035/) para hacerlo en **Bilbao Software Crafters**. Él estaba empezando a probarlo para testesar los contratos entre aplicaciones frontends con sus respectivos backends y a raíz de eso estaba preparando el taller. 

Ahora que compartimos oficina estuvimos discutiendo sobre ello, y enfrentándolo a otro tipo de soluciones como [Dredd](https://dredd.org/en/latest/) para testear los documentos de descripción de APIs, librerías de *Record & Replay* como [VCR](https://github.com/vcr/vcr) o [Wiremock](http://wiremock.org/) para hacer tests de integración con servicios externos guardando peticiones reales, etc. Así que al final me lió para echarle un cable para hablar de ese tipo de herramientas en el taller y complementar un poco más el contenido. 

Esta fue la excusa perfecta para forzarme a hacer un *spike* para entenderlo y poder evaluarlo mejor. Ya que hace unos pocos meses estuve pensando en darle un tiento para ver si tenía sentido introducirlo en [**Devengo**](https://www.devengo.com/) para enterarnos rápido de si algún cambio entre el API y las apps móviles rompe con el contrato esperado.

### ¿Cómo funciona Pact?

La visión de **Consumer-Driven Contract Testing** de Pact es que los clientes o *consumers* son quienes generan el contrato, y luego el servidor o *provider* deberá comprobar si es capaz cumplir con él.

[El flujo](https://pactflow.io/how-pact-works/) simplificando un poco es el siguiente:
- Escribir los tests de integración del *consumer* usando alguna de las librerías de Pact para hacer *stubs* de las respuestas que se esperarían del *provider*.
- Al lanzar los tests, si pasan en verde se genera un fichero JSON que describe el contrato esperado por el *consumer*. He dejado un [ejemplo sencillote en gist](https://gist.github.com/danilat/15528de7df3a5c4ad261eb60b595a421).
- En otro momento el *provider* lanza con Pact la verificación. Busca que pueda cumplir con lo descrito en ese JSON simulando las peticiones que haría el *consumer* y comprueba que puede responder lo esperado.

[![Gif explicando el flujo de trabajo de Pact](/img/posts/contract-tests/pact.gif  "Cómo funciona PACT")](https://pactflow.io/how-pact-works/)

Al lanzar los tests de forma independiente sobre cada artefacto frente a hacerlo *end to end* tenemos un feedback más rápido, nos facilita el mantenimiento de esos tests y nos da mayor estabilidad. Todo esto sin perder confianza de que hemos roto el contrato entre los artefactos.

### Integración con los pipelines de CI

Evidentemente si optamos por una solución así querremos integrarla en nuestro pipeline de integración continua.

Normalmente no sólo querremos que se validen los contratos cuando se suba un cambio al repositorio del *provider*, si no que si cambia el fichero que representa al contrato de un *consumer* queremos desde el *provider* se compruebe que se sigue cumpliendo ese contrato (o no).

Al generarse ficheros JSON planos no suena descabellado orquestar con un puñado de scripts y hooks estas comprobaciones, pero ya hay un proyecto dentro del paraguas de la fundación Pact que nos ayuda a resolver eso: [Pact Broker](https://github.com/pact-foundation/pact_broker). 

En Pact Broker se guardan los contratos de los *consumers* y es donde los *providers* irán a validarlos, nos facilita [el lanzamiento de webhooks](https://github.com/pact-foundation/pact_broker/wiki/Webhooks) y el trabajar con [distintas versiones](https://docs.pact.io/getting_started/versioning_in_the_pact_broker) de los contratos.

### Conclusiones por el momento

He cacharreado con la [gema de ruby](https://github.com/pact-foundation/pact-ruby) tanto para el *provider* como para un *consumer*, además de la [librería de JVM](https://github.com/DiUS/pact-jvm) para otro *consumer*. Inicialmente me parece que deja un pelín verboso la preparación de los tests en ambos lenguajes, pero no he hecho aún el ejercicio de intentar esconder eso en algún tipo de helpers que mejorarían la legibilidad de los tests.

El DSL de la de JVM me pareció que dejaba código difícil de seguir para ver las estructuras de respuesta esperadas, luego vi que existe el [Lambda DSL](https://github.com/DiUS/pact-jvm/tree/master/consumer/pact-jvm-consumer-java8) que mejora el asunto. Esto es porque, aún habiendo buena y abundante documentación y ejemplos, algunos resultaron estar algo desfasados. 

La integración entre [pactflow](https://pactflow.io/) y [travis](https://travis-ci.com/) resultó bastante sencilla. Para publicar o validar con Pact Broker usé la [gema pact_broker-client](https://github.com/pact-foundation/pact_broker-client) y el [plugin de gradle](https://github.com/DiUS/pact-jvm/tree/master/provider/pact-jvm-provider-gradle#publishing-pact-files-to-a-pact-broker). En el `travis.yml` tocó añadir la publicación de los contratos de los *consumers* y la validación de los contratos en el *provider*; mientras que en pactflow configué los webhooks que disparan la build de travis del *provider* cuando el contrato cambia.

Aunque ofrece un flujo donde el consumidor puede empezar a trabajar sin que el proveedor esté disponible, el consumidor debería tener buena comunicación e influencia sobre lo que publica el proveedor. Claramente tanto para servicios externos como equipos que trabajen aislados es una herramienta que no aportará valor.

Y definitivamente creo que **cuadra genial con una aproximación API first**, acordando el equipo del proveedor con los de los consumidores cómo se va a hacer esa integración para poder empezar a trabajar en paralelo, asegurándonos así que estamos cumpliendo con lo que hemos acordado.

Así que inicialmente pinta genial, pero está por ver cómo afecta al flujo del trabajo en el día a día y a cada contexto de equipos.