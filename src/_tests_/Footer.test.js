import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from "../components/Footer"

describe("<Footer />", () => {
  it("renders a greeting to the Flow Master space", () => {
    // Arrange, Act, Assert - AAA
    // arrange, render the component
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )

    // debugging tools
    screen.debug() // displays the html in the console for that component
    screen.logTestingPlaygroundURL() //displays a URL to open in the browser

    // act, utilizing a method to test what the user should be experiencing, a query
    const copyRight = screen.getByText(/2023 Charlean & Nicole/i)

    // assert that the element is present
    expect(copyRight).toBeInTheDocument()
  })
})
