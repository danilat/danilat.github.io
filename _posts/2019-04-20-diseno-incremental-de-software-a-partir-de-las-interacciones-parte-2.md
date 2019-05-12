---
layout: post
title: Diseño incremental de software a partir de las interacciones (parte 2)
categories:
- General
excerpt:
image: posts/diseno-incremental/leanstartup_atdd_tdd.jpg
---

Esta es la continuación de **[Diseño incremental de software a partir de las interacciones (parte 1)](http://www.danilat.com/weblog/2019/04/10/diseno-incremental-de-software-a-partir-de-las-interacciones)**. En la primera parte traté temas más relacionados con el descubrimiento de producto, formalización de backlog y refinamiento de historias de usuario.

En esta parte veremos como aterrizarlo en código, practicando Specification by Example/ATDD y TDD en el camino. El hilo conductor va a ser un producto orientado a aficionados al boxeo.

![Dibujo representando la autosimilaridad de Lean Startup, ATDD y TDD](/img/posts/diseno-incremental/leanstartup_atdd_tdd.jpg "Lean Startup, ATDD y TDD")

### ¿Qué vamos a hacer?

Aunque falte aterrizar la mayor parte del producto, sabemos que la visión es que cualquier aficionado al *noble arte* pueda puntuar combates, ya sean vistos en diferido como durante veladas en directo. Así que podemos empezar implementando esa funcionalidad.

Habitualmente en los combates de boxeo profesional, además del árbitro que está sobre el ring, hay tres jueces que llevan el [conteo de puntuaciones de cada asalto en sus tarjetas](https://photo.boxingscene.com/uploads/canelo-golovkin-scorecard.jpg), para decidir quien vence el combate (no es extraño que de vez en cuando con polémica) en caso de no terminar en nocaut.

La forma de puntuar es la siguiente:
- Se puntúa cada asalto individualmente y finalmente se suman las puntuaciones.
- Al final de cada asalto el vencedor recibe 10 puntos y 9 el perdedor.
- Si no hay un claro vencedor es posible que se de un empate a 10.
- En caso de ser derribado se resta un punto extra por derribo.
- El árbitro de ring puede restar un punto en un asalto por infracciones.

Para el MVP vamos a limitar el alcance a que los usuarios puntúen libremente cada asalto.

### Especificaciones en formato gherkin

Como comenté en la primera parte, me parece muy interesante practicar **Specification by Example** con Cucumber y Gherkin por facilitar la colaboración y el facilitar quitar conceptos técnicos de las especificaciones.

Por ejemplo, para este caso, aún cuando no hubiéramos decidido cómo vamos a exponer el API u otros detalles de implementación; podríamos dejar ya la especificación lista para describir la fucionalidad de puntuación.

A falta de escenarios extremos o de error, esta podría ser una especificación con la que podríamos empezar:

<pre><code>
Feature: Score a round
  Background:
    Given an aficionado
    And an existing boxer called "Kerman Lejarraga"
    And an existing boxer called "Bradley Skeete"
    And an existing fight between "Kerman Lejarraga" and "Bradley Skeete" with 12 rounds

  Scenario: the first round in a fight
    When the aficionado scores the round "1" for the existing fight with "10" and "9"
    Then the round is scored with with "10" and "9"
    And the fight score is "10" to "9"

  Scenario: the next rounds in a fight, the fight score sums
    Given the existing fight has been scored by the aficionado in the round "1" with "10" and "9"
    When the aficionado scores the round "2" for the existing fight with "10" and "10"
    Then the round is scored with with "10" and "10"
    And the fight score is "20" to "19"

  Scenario: a round is reescored changes the score for the round
    Given the existing fight has been scored by the aficionado in the round "1" with "10" and "10"
    When the aficionado scores the round "1" for the existing fight with "10" and "9"
    Then the round is scored with with "10" and "9"
    And the fight score is "10" to "9"
</code></pre>


- Implementar tests automáticos desde especificaciones gherkin con cucumber.
- Artefactos tácticos de Domain Driven Desing.
- TDD Outside-In, empezando desde las interacciones o *use cases*.
- Arquitectura hexagonal/clean, escapando de frameworks.
