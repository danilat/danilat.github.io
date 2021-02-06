---
layout: post
title: Diseño incremental de software a partir de las interacciones (parte 2)
categories:
- General
excerpt:
image: /img/posts/diseno-incremental/leanstartup_atdd_tdd.jpg
---

Esta es la continuación de **[Diseño incremental de software a partir de las interacciones (parte 1)](http://www.danilat.com/weblog/2019/04/10/diseno-incremental-de-software-a-partir-de-las-interacciones)**. En la primera parte traté temas más relacionados con el descubrimiento de producto, formalización de backlog y refinamiento de historias de usuario.

En esta parte veremos como aterrizarlo en código, practicando Specification by Example y ATDD para identificar las interacciones y TDD para ayudarnos con el diseño incremental de las interacciones.

![Dibujo representando la autosimilaridad de Lean Startup, ATDD y TDD](/img/posts/diseno-incremental/leanstartup_atdd_tdd.jpg "Lean Startup, ATDD y TDD")

### ¿Qué vamos a hacer?

El hilo conductor va a ser un producto orientado a aficionados al boxeo. Aunque falte aterrizar la mayor parte del producto, sabemos que la visión es que cualquier aficionado al *noble arte* pueda puntuar combates, ya sean vistos en diferido como durante veladas en directo.

Habitualmente en los combates de boxeo profesional, además del árbitro que está sobre el ring, hay tres jueces que llevan el [conteo de puntuaciones de cada asalto en sus tarjetas](https://photo.boxingscene.com/uploads/canelo-golovkin-scorecard.jpg), para decidir quien vence el combate en caso de no terminar en nocaut. No es extraño que de vez en cuando surjan polémicas con los resultados de los jueces como se puede ver en redes sociales y foros especializados, donde muchos aficionados del comparten sus puntuaciones.

Así que el MVP que queremos lanzar debe cubrir que esos aficionados puedan compartir y comparar puntuaciones de cualquier combate de boxeo de una forma más ordenada. Tras eso trataremos de buscar algo de tracción para ganar usuarios y comprobar que el producto tiene sentido, a partir de ahí iremos iterando y seguir evolucionando enfocándonos también en distintas posibilidades de servicios premium.

Además de la propia puntuación de los combates, una funcionalidad que parece bastante evidente es **registrar los combates que se van a puntuar** indicando la fecha, los boxeadores...

### Especificaciones en formato Gherkin

Como comenté en la primera parte, me parece interesante practicar **Specification by Example** con Cucumber y Gherkin por facilitar la colaboración con personas no técnicas y el evitar usar conceptos técnicos en las especificaciones. Esto nos puede ayudar a identificar mejor los nombres para los diferentes casos de uso o interacciones.

Por ejemplo, para este caso, aún cuando no hubiéramos decidido cómo vamos a exponer el API u otros detalles de implementación; podríamos dejar ya la especificación lista para describir la fucionalidad de registro de combate.

A falta de más escenarios extremos y de errores, esta podría ser una especificación con la que podríamos empezar:

<pre><code>
Feature: Register a fight
  Background:
    Given an existing boxer called "Kerman Lejarraga"
    And an existing boxer called "Bradley Skeete"

  Scenario: successfully if all is ok
    Given an event in "Bilbao Arena" at "28/04/2018"
    When I register the fight in the event for "Kerman Lejarraga" and "Bradley Skeete" for 12 rounds
    Then the fight is successfully registered

  Scenario: successfully if all is ok but place is not present
    Given an event at "28/04/2018"
    When I register the fight in the event for "Kerman Lejarraga" and "Bradley Skeete" for 12 rounds
    Then the fight is successfully registered

 Scenario: fails without event date
     Given an event in "Bilbao Arena"
     When I register the fight in the event for "Kerman Lejarraga" and "Bradley Skeete" for 12 rounds
     Then the fight is not registered

Scenario: fails without number of rounds
    Given an event in "Bilbao Arena" at "28/04/2018"
    When I register the fight in the event for "Kerman Lejarraga" and "Bradley Skeete"
    Then the fight is not registered

</code></pre>

Nótese de lo verboso de cada *step* de gherkin. Con el tiempo aprendí a buscar serlo para: no caer en especificaciones falsamente específicas, que resulten más fáciles de entender para personas no técnicas y de paso para evitar conflictos de nombrado entre steps.

Esto es algo que para la mayoría de programadores que empiezan a trabajar con Cucumber resulta antinatural, es habitual tener la tentación de tratar de tener steps muy reutilizables y poder combinarlos. En esto la mayoría de posts introductorios a Cucumber no ayudan nada...

Mi recomendación es que no. **Para reutilizar código, hazlo en la implementación de los tests, no en las especificaciones en formato gherkin**.

### ATDD desde las especificaciones

Ya hemos pasado por la fase de especificación para esta funcionalidad, ahora pasaríamos a la parte de desarrollarla. Mi flujo suele ser preparar un test de aceptación que quede roto para entrar ya en el ciclo de TDD.

Cucumber ofrece un generador de snippets de código a partir de las especificaciones en Gherkin que podemos copiarlos para usarlos a modo de plantilla. En mi flujo de trabajo suelo dejar preparados los *Given* que sean necesarios y dejo el *When* o *Then* una condición que deje el **test roto a modo de recordatorio**, para volver a ello al acabar la funcionalidad.

Este sería un ejemplo de snippet generado en Java sobre la que vamos a partir:

<pre><code>
@Given("an existing boxer called {string}")
public void anExistingBoxerCalled(String string) {
    // Write code here that turns the phrase above into concrete actions
    throw new cucumber.api.PendingException();
}

@Given("an event in {string} at {string}")
public void anEventInAt(String string, String string2) {
    // Write code here that turns the phrase above into concrete actions
    throw new cucumber.api.PendingException();
}

@When("I register the fight in the event for {string} and {string} for {int} rounds")
public void iRegisterTheFightInTheEventForAndForRounds(String string, String string2, Integer int1) {
    // Write code here that turns the phrase above into concrete actions
    throw new cucumber.api.PendingException();
}

@Then("the fight is successfully registered")
public void theFightIsSuccessfullyRegistered() {
    // Write code here that turns the phrase above into concrete actions
    throw new cucumber.api.PendingException();
}

...
</code></pre>

Así que partir de aquí dejaríamos los steps de *Given* listos y el primer escenario que queramos implementar roto.

### Posponiendo decisiones

Un par de los puntos más interesantes del estilo de arquitectura **Clean/Hexagonal** son la cambiabilidad y por ello la testeabilidad. Gracias a la cambiabilidad podemos posponer decisiones que típicamente se asumen al arrancar la funcionalidad: ¿qué tecnología elegimos para la persistencia? ¿y para la mensajería? ¿qué librerías y frameworks usamos?

En este caso vamos a ver un ejemplo de ello, vamos a ir desarrollando poco a poco las funcionalidades a partir de las especificaciones y dejando las decisiones técnicas para el futuro. Por el momento no nos vamos a meter en cosas como en qué base de datos vamos a persistir, qué framework vamos a utilizar o incluso en definir cómo vamos a exponer el API.

Vamos implementar **el core de nuestra aplicación como una librería** que se pueda utilizar desde cualquier framework. En este caso será en Java en un módulo de Maven, por el momento sólo con dependencias a librerías que facilitan el testing.

Ejecutaremos los tests de Cucumber ejercitando clases que van a representar cada funcionalidad. Esas clases las vamos a llamar **Use Cases**, van a estar escritas en Java y usaremos algunos conceptos de [Domain-Driven Design](https://www.danilat.com/weblog/2019/09/17/ddd-in-a-shot); como implementaciones del patrón Repository en memoria para tener **tests de aceptación muy rápidos**.

Veremos que los tests de aceptación con Cucumber no tienen por qué ser lentos ni ir sobre la UI, más sobre eso en el [curso que grabamos en CodelyTV](https://pro.codely.tv/library/buenas-practicas-de-bdd-con-cucumber/65205/about/).

### ¿Use Cases?

Nos referimos como **Use Case** a cada clase que sirve como punto de entrada de una funcionalidad de nuestra aplicación, en terminología DDD serían los *Application Services*.

En este caso veremos que no saben de la infraestructura con la que van a ser expuestos; podrían estar expuestos vía APIs REST, AMQP, GraphQL, gRPC, JSON-RPC... esa responsabilidad la dejaríamos en una capa más acoplada a frameworks/librerías que llamarían a estos Use Cases.

Aunque no se esté trabajando en proyectos con arquitecturas Clean/Hexagonal es un tipo de abstracción que en mi experiencia resulta útil. Ya sólo por hacer el ejercicio de pensar en nombres que deberían ser significativos para el negocio y facilitar el inventario de las funcionalidades, además de separarlo de artefactos más técnicos (*Controller*, *Resolver*, *Service*...).


### Entrando al flujo de TDD (Outside-In)


- crear el test del use case
- crear un use case
- completar fight con entity y repositories


- Implementar tests automáticos desde especificaciones gherkin con cucumber.
- Artefactos tácticos de Domain Driven Desing.
- TDD Outside-In, empezando desde las interacciones o *use cases*.
- Arquitectura hexagonal/clean, escapando de frameworks.
