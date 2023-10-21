import React from "react"
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import headerImage from "../assets/header.png"

const Header = () => {
  return (
    <>
      <Navbar
        className="me-auto"
        color="warning"
      >
        <NavbarBrand href="/">
          <img
            alt="cassette tape with tape shaped into a heart"
            src={headerImage}
            style={{
              height: 30,
              width: 60,
            }}
            />
            Flow Masters Space
        </NavbarBrand>

        <NavItem>
          <NavLink to="/rapperindex/">Who Got Bars?</NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/rappernew/">Add a Flow Master</NavLink>
        </NavItem>

      </Navbar>
    </>
  )
}

export default Header