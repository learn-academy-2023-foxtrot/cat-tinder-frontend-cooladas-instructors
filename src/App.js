import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import RapperIndex from "./pages/RapperIndex"
import RapperShow from "./pages/RapperShow"
import RapperNew from "./pages/RapperNew"
import RapperEdit from "./pages/RapperEdit"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import "./App.css"

const App = () => {
  const [rappers, setRappers] = useState([])

  const readRapper = () => {
    fetch("http://localhost:3000/flow_masters")
      .then((response) => response.json())
      .then((payload) => setRappers(payload))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    readRapper()
  }, [])

  const createRapper = (newRapper) => {
    fetch("http://localhost:3000/flow_masters", {
      body: JSON.stringify(newRapper),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then(() => readRapper())
      .catch((errors) => console.log("Rapper create error:", errors))
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