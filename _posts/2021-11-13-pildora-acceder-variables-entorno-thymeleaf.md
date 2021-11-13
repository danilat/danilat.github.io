---
layout: post
title: Píldora. Acceder a variables de entorno desde plantillas Thymeleaf
excerpt: Pequeña píldora para como acceder directamente a variables de entorno en plantillas Thymeleaf
---

Es una buena práctica depender de [variables de entorno para las configuraciones](https://12factor.net/config), tanto secretos como cualquier otra configuración que puede cambiar entre los entornos de despliegue de nuestro software. 
De ese modo tenemos control granular de cada configuración en cada despliegue que hagamos, y en caso de tener que cambiar alguna configuración no es necesario hacer ningún commit en nuestro repositorio.

A veces es algo que hay que montar un poco más a mano, pero trabajando con Spring Boot es algo que ya [está resuelto y da flexibilidad al respecto](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.external-config). A nivel del código de infraestructura en código dependiente de Spring simplemente usando la anotación `@Value` ya nos inyectará el valor que haya en el application context.

Lo que hasta hace poco no había tenido que resolver es acceder a esas variables de entorno directamente desde plantillas de [Thymeleaf](https://www.thymeleaf.org/), en este caso para evitar tener hardcoded la configuración de Firebase Authentication.

Buscando información encontré que, como parte de la [integración con Spring](https://www.thymeleaf.org/doc/tutorials/3.0/thymeleafspring.html#the-springstandard-dialect), es posible acceder a los beans del application context utilizando `@` en las plantillas. 

Así que podemos acceder al bean que representa el [Environment](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/core/env/Environment.html), por ejemplo:

```
${@environment.getProperty("FIREBASE_API_KEY")}
```