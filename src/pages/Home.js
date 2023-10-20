import React from "react"
import { NavLink } from "react-router-dom"
import { Button } from "reactstrap"
import homeImage from "../assets/home.png"

const Home = () => {
  return (
    <>
      <h1>Welcome to the Flow Masters Space</h1>
      <h3>A place to find someone who can lock you in their verbal bars</h3>
      <br />
      <br />
      <img
        alt="logo"
        src={homeImage}
        style={{
          height: 300,
          width: 300,
          borderRadius: 25
        }}
      />
      <br />
      <br />
      <Button>
        <NavLink to={`/rapperindex`} className="nav-link">
          Click to view more
        </NavLink>
      </Button>
    </>
  )
}

export default Home