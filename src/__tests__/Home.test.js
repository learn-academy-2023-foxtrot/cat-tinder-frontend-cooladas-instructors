import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from "../pages/Home"

describe("<Home />", () => {
  it("renders a description about the Flow Master space", () => {
    // Arrange, Act, Assert - AAA
    // arrange, render the component
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    // debugging tools
    // screen.debug() // displays the html in the console for that component
    screen.logTestingPlaygroundURL() //displays a URL to open in the browser

    // act, utilizing a method to test what the user should be experiencing, a query
    const homeHeading = screen.getByRole("heading", {
      name: "Welcome to the Flow Masters Space"
    }) 
    // assert that the element is present
    expect(homeHeading).toBeInTheDocument()
  })
})
