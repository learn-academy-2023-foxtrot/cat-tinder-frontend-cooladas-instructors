import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import RapperIndex from "../pages/RapperIndex";
import mockRappers from "../mockRapper"

describe('<RapperIndex />', () => {
  it('has an image', () => {
    render(
      <BrowserRouter>
        <RapperIndex rappers={mockRappers} />
      </BrowserRouter>
    )
    mockRappers.forEach((rapper) => {
      const altTxt = screen.getAllByAltText(/profile picture for/i)
      screen.debug(altTxt[0])
      expect(altTxt[0]).toBeInTheDocument()
      // query an image
      const rapperImage = screen.getByRole('img', { name: /profile picture for Young Spatula/i })
      // assert
      expect(rapperImage).toHaveAttribute('src', 'https://images.unsplash.com/photo-1690041638836-f1bf53ae66d6?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxlZ28lMjBjaGFyYWN0ZXJzfGVufDB8fDB8fHww&w=500');
      expect(rapperImage).toHaveAttribute('alt', 'profile picture for Young Spatula')
    })
  })
})