import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from "../components/Header"

describe("<Header />", () => {
  it("renders a greeting to the Flow Master space", () => {
    // Arrange, Act, Assert - AAA
    // arrange, render the component
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    // debugging tools
    // screen.debug() // displays the html in the console for that component
    // screen.logTestingPlaygroundURL() //displays a URL to open in the browser

    // act, utilizing a method to test what the user should be experiencing, a query
    const greetingLink = screen.getByRole("link", {
      name: /flow masters space/i
    })

    // assert that the element is present
    expect(greetingLink).toBeInTheDocument()
  })
})
