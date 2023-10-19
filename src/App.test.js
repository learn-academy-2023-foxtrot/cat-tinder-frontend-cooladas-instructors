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
    // screen.debug() // displays the html in the console for that component
    // screen.logTestingPlaygroundURL() //displays a URL to open in the browser

    // act, utilizing a method to test what the user should be experiencing, a query
    const greeting = screen.getByRole("heading", {
      name: /lock you in their verbal bars/i
    })
    // screen.debug(greeting)

    // assert that the element is present
    expect(greeting).toBeInTheDocument()
  })
})
