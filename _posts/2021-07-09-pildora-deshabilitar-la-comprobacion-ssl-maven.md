---
layout: post
title: Píldora. Deshabilitar la comprobación del certificado SSL en Maven
excerpt: Pequeña píldora de lanzar comandos en maven para ignorar las comprobaciones de firmado SSL
---

Hace cosa de un par de semanas que he empecé a colaborar con un nuevo equipo de uno de mis clientes. En su caso trabajan en un entorno Java y utilizan [Maven](http://maven.apache.org/) para construir sus proyectos. Como tienen librerías internas publicadas en un [Nexus](https://www.sonatype.com/products/repository-pro), tuve que [configurar mi setting.xml](https://help.sonatype.com/repomanager3/formats/maven-repositories#MavenRepositories-ConfiguringApacheMaven) para poder tener acceso a ello, hasta ahí todo normal.

Pero vez lanzando el primer ```mvn install``` me dio un error con el certificado SSL, por ser un certificado autofirmado. Así que tras buscar un poco por ahí, encontré que gracias al subproyecto [Maven Wagon](http://maven.apache.org/wagon/) podemos decirle que ignore esas comprobaciones porque confiamos en el repository manager configurado:

```
mvn install -Dmaven.wagon.http.ssl.insecure=true -Dmaven.wagon.http.ssl.allowall=true -Dmaven.wagon.http.ssl.ignore.validity.dates=true
```
