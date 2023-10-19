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
            alt="cassette tape with tape shaped into a heart"
            src={headerImage}
            style={{
              height: 30,
              width: 60,
            }}
            />
            Flow Masters Space
        </NavbarBrand>
      </Navbar>
    </>
  )
}

export default Header