import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import RapperEdit from '../pages/RapperEdit';
import mockRappers from "../mockRapper"

describe('<RapperEdit />', () => {
  it('renders a name label', () => {
    render(
      <MemoryRouter initialEntries={["/rapperedit/1"]}>
        <Routes>
          <Route path="/rapperedit/:id" element={<RapperEdit rappers={mockRappers} />} />
        </Routes>
      </MemoryRouter>
    )
    screen.logTestingPlaygroundURL()
    const nameLabel = screen.getByText(/name/i)
    expect(nameLabel).toHaveTextContent("Name")
  })

  it('renders a name field', () => {
    render(
      <MemoryRouter initialEntries={["/rapperedit/1"]}>
        <Routes>
          <Route path="/rapperedit/:id" element={<RapperEdit rappers={mockRappers} />} />
        </Routes>
      </MemoryRouter>
    )
    const nameField = screen.getByRole('textbox', {
      name: /name/i
    })
    // screen.debug(nameField)
    // expect(nameField.value).toEqual("Young Spatula")
    expect(nameField).toHaveDisplayValue("Young Spatula")
  })

})