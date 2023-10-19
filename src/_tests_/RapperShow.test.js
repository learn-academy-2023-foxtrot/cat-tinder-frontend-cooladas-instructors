import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import RapperShow from '../pages/RapperShow';
import mockRappers from "../mockRapper"

describe('<RapperShow />', () => {
  it('renders a name', () => {
    render(
      <MemoryRouter initialEntries={["/rappershow/1"]}>
        <Routes>
          <Route path="/rappershow/:id" element={<RapperShow rappers={mockRappers} />} />
        </Routes>
      </MemoryRouter>
    )
    screen.logTestingPlaygroundURL()
    const rapperName = screen.getByRole("heading", {
      name: /RapperShow page/i
    })

    expect(rapperName).toHaveTextContent("RapperShow page")
  })
})