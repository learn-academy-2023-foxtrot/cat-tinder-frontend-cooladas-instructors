import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from "../pages/NotFound"

describe("<NotFound />", () => {
  it("renders an image on the NotFound page", () => {
    // Arrange, Act, Assert - AAA
    // arrange, render the component
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )

    // debugging tools
    screen.debug() // displays the html in the console for that component
    screen.logTestingPlaygroundURL() //displays a URL to open in the browser

    // act, utilizing a method to test what the user should be experiencing, a query
    // since there is not text or a role to query, using last resort method .getByTestId()
    const notFoundImage = screen.getByTestId("not-found-test")
    // assert that the element is present
    expect(notFoundImage).toBeInTheDocument()
  })
})
