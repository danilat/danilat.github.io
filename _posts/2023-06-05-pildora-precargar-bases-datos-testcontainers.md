---
layout: post
title: Píldora. Precargar datos a bases de datos en Testcontainers
excerpt: Una de las cosas en la que ando ayudando últimamente en Genially es en incorporar Testcontainers en algunas de nuestras aplicaciones Node. Y necesitaba precargar datos en una base de datos MySQL.
imge: logo
image: /img/posts/testcontainers/logo.png
---

Una de las cosas en la que ando ayudando últimamente en [Genially](https://genially.com) es en incorporar [Testcontainers](https://www.testcontainers.org/) en algunas de nuestras aplicaciones. Una librería que conocía del mundo Java pero que ahora está disponible en otros ecosistemas, incluido el de [Node](https://node.testcontainers.org/).

Testcontainers utiliza Docker por debajo y nos ofrece la posibilidad de tener instancias de usar y tirar para nuestras suites de test, así que de esta manera podemos tener **tests de integración autocontenidos**. Esto facilita el trabajo en local y simplifica enormemente la automatización en los pipelines de CI al no tener que ir montando infraestructura específica. 

Normalmente nos interesa tener instancias limpias con las que trabajar y que cada test prepare en el *arrange* el estado que espera. Pero me encontré en la necesidad de tener que cargar varios scripts a una base de datos MySql y vi que las imágenes de Docker de Postgres, MySql, Mongo... soportan inicializar datos la primera vez que se instancia un contenedor, esto se hace ejecutando los scripts que se encuentren en el directorio ```/docker-entrypoint-initdb.d```

Así, que lo que tenemos que hacer es copiar esos scripts programáticamente antes de inicializar el contenedor usando ```withCopyFilesToContainer``` [del api de Testcontainers](https://node.testcontainers.org/features/containers/#with-filescontent).

Este sería un ejemplo:

```typescript
const container = await new GenericContainer('mysql:8.0')
   .withExposedPorts(3306)
   .withEnvironment({
     MYSQL_DATABASE: 'test_db',
     MYSQL_ROOT_PASSWORD: 'a_root_password',
     MYSQL_USER: 'an_user',
     MYSQL_PASSWORD: 'a_password',
   })
   .withCopyFilesToContainer([
     {
       source: './dump/foo.sql',
       target: '/docker-entrypoint-initdb.d/1.sql',
     },
     {
       source: './dump/bar.sql',
       target: '/docker-entrypoint-initdb.d/2.sql',
     }
   ])
   .start();
```

Por cierto, hay que tener en cuenta que si hay varios ficheros de scripts el orden de ejecución será por orden alfabético.
