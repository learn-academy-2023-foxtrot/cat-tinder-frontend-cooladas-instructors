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



