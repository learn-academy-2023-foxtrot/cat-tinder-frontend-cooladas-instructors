import React from "react"
import homeImage from "../assets/home.png"

const Home = () => {
  return (
    <>
      <h1>Welcome to the Flow Masters Space</h1>
      <h3>A place to find someone who can lock you in their verbal bars</h3>
      <img
        alt="logo"
        src={homeImage}
        style={{
          height: 300,
          width: 300,
          borderRadius: 25
        }}
      />
    </>
  )
}

export default Home