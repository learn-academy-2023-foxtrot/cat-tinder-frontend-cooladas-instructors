## Cat Tinder Frontend Intro
- Created an empty github repo
- Created a react app locally
- connected the two repos
- Check that the application is built correctly: $ yarn start
- Make a change
- Perform initial commit
- Request branch protections

## Create directories (src)
- components: react components that will always be displayed on the UI
- pages: react components that pertain to certain CRUD actions
- assets: images, videos, etc

## Create component files
```js
  // basic functional component
  // imports
  import React from "react"
  // react functional component declaration
  const App = () => {

    // the space between the declaration and return is where we place state variables and custom functions

    // what is sent to the user interface
    return (
      // jsx land, remember to encapsulate any references to javascript in {}
      <>
        <h1>Hello World!</h1>
      </>
    )
  }

  // allows the react component to be visible to the application
  export default App
```

## Create page files
- Home.js: landing page
- RapperIndex.js: displays all the rappers in the database
- RapperShow.js: displays one rapper as specified by params id
- RapperNew.js: displays a form to collect the user input that will be used to create a new rapper
- RapperEdit.js: displays a form to modify an existing rapper
- NotFound.js: displays an error message to the UI if the URL is incorrect

## Import styling
- bootstrap and reactstrap
- Add necessary import to index.js

## Routes
- Add react-router-dom
- on the index.js: 
  - import BrowserRouter
  - Wrap BrowserRouter around the App in the index.js
- on App.js
  - import Routes, Route 
  - Routes will encapsulate each Route that is specified for each react component in the page directory
  - Route needs two attributes: path and element

## Mock data
- create a file for the mock data using camelCasing naming convention in the src directory
- import the file onto App.js
- import useState for the react state
- make the mock data the initial value of the state variable

## Styling React components
- select UI component from the [reactstrap site](https://reactstrap.github.io/?path=/story/home-installation--page)
- copyright emblem `&copy;`
- css declarations can be made on App.css

## Testing with React Testing Library and Jest
Vocabulary
- static tests: analyzing the code for potential issues like syntax errors, coding style violations, and spelling errors
- unit tests: analyzing individual parts of the code in isolation, such as just testing one React component
- integration tests: analyzing how all the components work together
- end to end tests: analyzing the functionality of the whole application by simulating the entire user experience wth your application
- Jest: JavaScript testing framework used for testing React applications
- React Testing Library: library designed to test React components how a user would interact with your application
- assertion: statement that checks whether a given condition is true, expect statements

## Structure of the test
```js
// import dependencies and methods 
import { render, screen } from '@testing-library/react';

// import the component to be tested
import App from './App';

// jest structure for test cases and assertions
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe("<App />", () => {
  it("renders a greeting to the Flow Master space", () => {
    // Arrange, Act, Assert - AAA
    // arrange, render the component
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    // debugging tools
    screen.debug() // displays the html in the console for that component
    screen.logTestingPlaygroundURL() //displays a URL to open in the browser

    // act, utilizing a method to test what the user should be experiencing, a query
    const greeting = screen.getByRole("heading", {
      name: /Come over and find someone who can lock you in their verbal bars/i
    })
    screen.debug(greeting)

    // assert that the element is present
    expect(greeting).toBeInTheDocument()
  })
})

```
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

#### getBy queries, search methods
- getByText(): find the DOM element by its text value
- getByRole(): find the DOM element by its role attribute
- getByLabelText(): find the DOM element by its label attribute
- getByAltText(): find the DOM element by its alt text value
