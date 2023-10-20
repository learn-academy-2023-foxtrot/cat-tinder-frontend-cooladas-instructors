import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import RapperIndex from "./pages/RapperIndex"
import RapperShow from "./pages/RapperShow"
import RapperNew from "./pages/RapperNew"
import RapperEdit from "./pages/RapperEdit"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import mockRappers from "./mockRapper"
import "./App.css"

const App = () => {
  const [rappers, setRappers] = useState(mockRappers)
  console.log("mock Rappers:", rappers)

  const createRapper = (newRapper) => {
    console.log("Rapper has been created", newRapper)
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rapperindex" element={<RapperIndex rappers={rappers} />} />
        <Route path="/rappershow/:id" element={<RapperShow rappers={rappers} />} />
        <Route path="/rappernew" element={<RapperNew createRapper={createRapper} />} />
        <Route path="/rapperedit" element={<RapperEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App