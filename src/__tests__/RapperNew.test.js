import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RapperNew from "../pages/RapperNew"

describe("<RapperNew />", () => {

  // test case for the heading
  it("renders a heading on the RapperNew page", () => {
    // Arrange, Act, Assert - AAA
    // arrange, render the component
    render(
      <BrowserRouter>
        <RapperNew />
      </BrowserRouter>
    )

    // debugging tools
    screen.debug() // displays the html in the console for that component
    screen.logTestingPlaygroundURL() //displays a URL to open in the browser

    // act, utilizing a method to test what the user should be experiencing, a query
    const newHeading = screen.getByRole("heading", {
      name: /add a flow/i
    })

    screen.debug(newHeading)

    //assert
    expect(newHeading).toHaveTextContent("Add a Flow Master")
  })

  // test case for the form
  it("renders a form with an input field", () => {
    // render the component
    render(
      <BrowserRouter>
        <RapperNew />
      </BrowserRouter>
    )
    const newForm = screen.getByRole("textbox", {
      name: /name/i
    })
    // screen.debug(newForm)
    // assert
    expect(newForm).toHaveAttribute("id")
    expect(newForm).toHaveAttribute("name")
    expect(newForm).toHaveAttribute("placeholder")
    expect(newForm).toHaveAttribute("value")
  })
})
