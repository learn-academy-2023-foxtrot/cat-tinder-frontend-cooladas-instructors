# Cat Tinder Frontend Intro
- Created an empty github repo
- Created a react app locally
- connected the two repos
- Check that the application is built correctly: $ yarn start
- Make a change
- Perform initial commit
- Request branch protections for main branch

# Frontend Structure

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

# Testing with React Testing Library and Jest

## Vocabulary
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

      // debugging tools after the render
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

### Resources
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Queries](https://testing-library.com/docs/react-testing-library/cheatsheet)
- [Jest Matchers](https://www.npmjs.com/package/@testing-library/jest-dom)
- [ARIA roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
- [Input Types](https://www.w3schools.com/html/html_form_input_types.asp)

### getBy queries, search methods
- getByText(): find the DOM element by its text value
- getByRole(): find the DOM element by its role attribute
- getByLabelText(): find the DOM element by its label attribute
- getByAltText(): find the DOM element by its alt text value
***Last Resort Query: getByTestId() is used when cannot query any text or role***

### jest matchers
- toBeInTheDocument(): assert whether an element is present in the document
- toHaveAttribute(): assert whether an element includes a particular attribute
- toHaveTextContent(): assert whether an element contains specified text content

# Read Functionality

## App.js
- modify the routes: 
  - Index: pass props
  - Show: add id param to url and pass props

## Index page
- accept props on the react component
- use styling components from reactstrap to display data to UI
- setup conditional rendering
- test coverage for the react component
  - Make sure to provide props to the component call on the render() for the test

## Show page
- accept props on the react component
- access params to identify the one value to display on the UI
- access the id param from the URL by using react hook useParams()
- iterate across the values in the array and return the value with the id that matches the id param
- since the id param is a string from the URL, use the unary operator `+` to convert it to a number
- use styling components from reactstrap to display data to UI
- setup conditional rendering
- test coverage for the react component
  - Provide the id params required for the url and the props required for the component call
  - [Memory Router](https://reactrouter.com/en/main/router-components/memory-router)


# Create Functionality
- new: form for the user to give input
- create: save a new instance in the database using the attributes from the new form

## Work flow
- Create a descriptive heading
- Create a form that will have input fields to grab the values for each attribute in your database
- Add a button which will be used to submit the changes
- Create react state
- Track the changes to the applicable input field and save that value to its applicable key
  - create a function that will execute the setter function
  - perform the function call on the onChange event listener for that particular attribute

### functional props
- create a function in App.js
  - name: createRapper
  - input: newRapper attributes, newRapper
  - output: console.log that the rapper was created
  - process:
    - pass it as a prop to RapperNew.js
    - use onClick attribute to trigger that functionality on RapperNew.js


- Create a test for what we expect the user to see on the applicable file
- Modify the file to make the test pass

## Form attributes
- name: identifying which input we are manipulating in our data 
- placeholder: instead of a blank just courtesy text to tell the user what to do
- type: describe type of input 

### Mock data
Cornelius
frozen grapes and drums
21
https://images.unsplash.com/photo-1517242810446-cc8951b2be40?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxlZ28lMjB1bmlraXR0eXxlbnwwfHwwfHx8MA%3D%3D


## Route back to the index page
- use

## Icebox
- What happens if the test is not under the _tests_
