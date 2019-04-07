---
layout: post
title: Maven multimodule y attached tests
categories:
- Java
excerpt:
---

En mi vuelta al mundo java, una de las cosas que he retomado es el utilizar de forma habitual proyectos [maven multimodule](https://maven.apache.org/pom.html#Aggregation), lo que facilita controlar mejor las dependencias y segregar el empaquetado.

Así podemos hacer separación de responsabilidades dependiendo de nuestros intereses. Por ejemplo, algunos escenarios por los que podríamos querer usarlos serían:
  - Partir en vertical una aplicación por *temas* funcionales.
  - Publicar de forma independiente una librería que sale de nuestro proyecto para reutilización de terceros.
  - Partición horizontal de una aplicación o servicio: *core*, diferentes APIs, persistencia...

El último escenario es el que he empezado a utilizar de forma habitual, separando  el **modelo de dominio** de los detalles de implementación de infraestructura y mecanismo de entrega. Así evitamos en lo posible tener dependencias en los módulos *core* a través aproximaciones de arquitectura hexagonal.

El problema que surge frente a tenerlo en un sólo módulo maven es lo respectivo a la **duplicidad en cuanto código de test**.

Un ejemplo es reutilizar algunos helpers de tests. En nuestro caso, implementaciones de patrones que nos facilitan la mantenibilidad como el [*builder*](https://en.wikipedia.org/wiki/Builder_pattern) o el [*object mother*](https://martinfowler.com/bliki/ObjectMother.html). Tener objetos *fake* (puede que incluso algún *dummy*) para usarlos como colaboradores y desacoplarnos de las implementaciones reales. O tener especificaciones en lenguaje gherkin desde el módulo *core*, para que sean compartidos con los módulos responsables de tener implementados los tests de cucumber.

Gracias a *Maven JAR Plugin* podemos evitar estas duplicidades, ya que nos permite [**empaquetar los tests de un módulo en un JAR**](https://maven.apache.org/plugins/maven-jar-plugin/test-jar-mojo.html) sin tener que mezclarlo en los paquetes de código de producción.

Por ejemplo, para compartir los tests del módulo *core* deberíamos configurar la construcción del JAR de test de este modo:
<pre><code>&lt;project&gt;
  ...
  &lt;build&gt;
   &lt;plugins&gt;
     ...
     &lt;plugin&gt;
       &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
       &lt;artifactId&gt;maven-jar-plugin&lt;/artifactId&gt;
       &lt;version&gt;3.1.1&lt;/version&gt;
       &lt;executions&gt;
         &lt;execution&gt;
           &lt;goals&gt;
             &lt;goal&gt;test-jar&lt;/goal&gt;
           &lt;/goals&gt;
         &lt;/execution&gt;
       &lt;/executions&gt;
     &lt;/plugin&gt;
   &lt;/plugins&gt;
  &lt;/build&gt;
&lt;/project&gt;
</code></pre>

Mientras que en los módulos que queramos usar el JAR de los tests deberemos incluir la dependencia así:
<pre><code>&lt;project&gt;
  &lt;dependencies&gt;
  ...
    &lt;dependency&gt;
      &lt;groupId&gt;com.danilat.killerapp&lt;/groupId&gt;
      &lt;artifactId&gt;core&lt;/artifactId&gt;
      &lt;version&gt;X.Y.Z&lt;/version&gt;
      &lt;type&gt;test-jar&lt;/type&gt;
      &lt;scope&gt;test&lt;/scope&gt;
    &lt;/dependency&gt;
  &lt;/dependencies&gt;
&lt;/project&gt;
</code></pre>

Con esto ya podemos reutilizar los helpers de test o especificaciones de cucumber en diferentes módulos de maven.
