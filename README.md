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
  - This form will be provided on the RapperNew.js
  - submit button on the form will trigger a function that will provide the create functionality
- create: save a new instance in the database using the attributes from the new form
  - The create functionality will be placed on the App.js
  - Since we are not connected to the backend, this function will just print out the new instance on the console.

## Work flow
- Create a descriptive heading
- Create a form that will have input fields to grab the values for each attribute in your database
- Add a button which will be used to submit the changes
- Create react state to store values from the input field
- Track the changes to the applicable input field and save that value to its applicable key
  - create a function that will execute the setter function
  - perform the function call on the onChange event listener for that particular attribute

## setter function syntax  
`setNewRapper({...newRapper, [e.target.name]: e.target.value})`  
1. Create a new object with {} 
2. Use the spread (`...`) operator to copy all the properties from the existing object stored in the state variable
3. Add a computed property name with a name (key) that is determined by the value of `e.target.name`. This name (key) is provided dynamically using the following syntax: [e.target.name]
4. Assign it the value of `e.target.value` to use the value entered in the input field

## Functional props
- create a function in App.js
  - name: createRapper
  - input: newRapper attributes, newRapper
  - output: console.log that the rapper was created
  - process:
    - pass the function as a prop to RapperNew.js
    - use onClick attribute to trigger that functionality on RapperNew.js

## Form attributes

### <Label>
- for: links the label to an input element that has the id of the same value.

### <Input>
- id: provides a unique identifier for this input element and must match the for attribute of the associated label.
- name: specifies the name of the key that will be used when the form data is submitted.
- placeholder: provides courtesy text to the user about what should be entered in the input field. 
- type: indicates what type of data the user is expected to enter.
- onChange: event listener that is set to call a function named handleChange.
- value: set to the current value of the input field with is controlled by the changes to the react state variable.

## Route back to the index page
After a new instance has been created successfully, re-route to the RapperIndex.js
- useNavigate() from react-router-dom
- destructure the navigate function from useNavigate()
- give the url of the page as the argument
- function call will be performed through the handleSubmit function


### Mock data for a new rapper
```
  name: Cornelius
  age: 21
  enjoys: frozen grapes and drums
  image: https://images.unsplash.com/photo-1517242810446-cc8951b2be40?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxlZ28lMjB1bmlraXR0eXxlbnwwfHwwfHx8MA%3D%3D
```

## Testing RapperNew.test.js
- Create a test for what we expect the user to see on the applicable file
  - test for the heading tag
  - test for the attributes on the input tag

## Icebox
- What happens if the test is not under the __tests__

# Fetch
- Fetch : a method in JavaScript that makes asynchronous requests
- JavaScript does one thing at a time so when our fetch creates an asychronous action it allows the request to go out of the order and then gives us a promise
- A promise has three stages: pending, fulfilled, or rejected
- Promises return a payload or an error

### READ Fetch:
- Remove mockData from state and provide an empty array
```jsx
  const [rappers, setRappers] = useState([])
```

- create a readRapper function that handles the fetch
```js
const readRapper = () => {
  // pass our fetch an argument of our API endpoint
  fetch("http://localhost:3000/flow_masters")
    // handles our fulfilled promise for response
    .then((response) => response.json())
    // handles our fulfilled promise of the payload - the instances
    .then((payload) => setRappers(payload))
    // .catch() is like a catch all in case there are errors in this process
    .catch((error) => console.log(error))
}
```

- implement a useEffect to render the readRapper function when the component loads
```js
useEffect(() => {
  readRapper()
}, [])
```

### CREATE Fetch:
- using the function createRapper that we made for our create functionality
```js
const createRapper = (newRapper) => {
  // console.log("Rapper has been created", newRapper)
  fetch("http://localhost:3000/flow_masters", {
    // convert the object we just created to a string that can be passed inside of the request
    body: JSON.stringify(newRapper),
    // specify  the information that is being sent in the JSON and the information being returned is JSON
    headers: {
      "Content-Type": "application/json"
    },
    // HTTP verb so that the correct endpoint is being invoked on the server side
    method: "POST"
  })
    .then((response) => response.json())
    .then(() => readRapper())
    .catch((errors) => console.log("Rapper create error:", errors))
}
```

# Update fetch request work flow
## servers
- Make sure rails server is running on 3000
- Make sure the react server is running
## App.js
- Edit route will need a params id on path to url
- Edit component call will need react state variable pass as params
## RapperEdit.js
- accept props
- use the find method and unary operator to abstract the instance that will be modified
- assign that designated instance as the values of the state variable 
- handleChange function will reassign the values of the state variable to be the values changed on the edit form 
- onChange attribute will perform the handleChange function call
- handleSubmit function will navigate to the index page until a successful edit
## Update fetch request
### frontend
- On App.js:
  - Create the updateRapper function that will take the functional props passed up the river and print to the console
  - pass function as props to the RapperEdit component call
- RapperShow.js
  - add a link to RapperEdit.js
- RapperEdit.js:
  - accept props
  - handleSubmit function will perform update function call using the state variable and current id specified for the instance
  - check console to see if the props were passed back to App.js
- Upon successful verification, modify the fetch request on App.js to include
  - fetch request with url designated for update
  - include three options: body, headers, methods
  - abstract the json from the response
  - perform readRapper function call
  - catch any errors
### backend
- Modify the update API endpoint
- provide params id to locate the designated instance
- Perform update method
- Use strong params
- If valid, send back to instance as json
- If not, send errors and status code of 422
