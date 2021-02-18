# Vampire the Masquerade 
## v5 dice roller

This is a remake of my first ever web application, written using vanilla JavaScript DOM API. You can find the original repository [here](https://github.com/pfalzergbr/vtm-diceroller). This project is based on the popular role playing game, [**Vampire the Masquerade**](https://www.worldofdarkness.com/). I do not own any rights for the game, this is only a fan project for practicing web development. The application cannot replace the satisfaction of rolling original, physical dice, or the facial expressions of your fellow players and storytellers. 

## Reason

I remade this project for these specific reasons: 
- Learn how to use [**TypeScript**](https://github.com/microsoft/TypeScript) in a [**React**](https://github.com/facebook/react) Project. Using Functional components and hooks.
- Learn how to use [**Jest**](https://github.com/facebook/jest) for Test Driven Development, especially for unit testing the business logic, the diceEngine.
- Practice using [**React Testing Library**](https://github.com/testing-library/react-testing-library)/Jest for Unit and Integration testing the React application. Since at the beginning of the project, I had no experience with React Testing Library, these tests were written retrospectively, to test the finished product, and serve as a base for future refactors.

## The Application

The application is built of three major parts: 
- a diceEngine, handling the logic of building a pool, rolling, and evaluation of the outcome. 
- a React frontend, containing the UI of the dice roller.
- useDice hook, which connects the diceEngine to the frontend. 

The application has no backend functionality. As a simple, single page app, no need for router or Redux. Context may be added, but with only two layers of passing props, did not find it necessary at this point.

##Todos

- Test React Components Behavior
- Add fonts and text styling
- Add footer 
- Set up a CI pipeline
- Deployment


## Long Term plans

- Add Willpower Re-roll & Test
- Add Animations
