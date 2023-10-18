import React from "react"
import {Navbar, NavbarBrand} from "reactstrap"
import headerImage from "../assets/header.png"

const Header = () => {
  return (
    <>
      <Navbar
        className="my-2"
        color="warning"
      >
        <NavbarBrand href="/">
          <img
            alt="logo"
            src={headerImage}
            style={{
              height: 40,
              width: 40
            }}
          />
            Welcome to the Space of the Flow Masters
        </NavbarBrand>
      </Navbar>
    </>
  )
}

export default Header