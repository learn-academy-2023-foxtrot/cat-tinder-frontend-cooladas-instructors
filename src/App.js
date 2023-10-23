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

  const updateRapper = (editRapper, id) => {
    fetch(`http://localhost:3000/flow_masters/${id}`, {
      // converting an object to a string
      body: JSON.stringify(editRapper),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "PATCH"
    })
    .then((response) => response.json())
    .then(() => readRapper())
    .catch((errors) => console.log("Rapper update errors:", errors))
  }

  const deleteRapper = (id) => {
    fetch(`http://localhost:3000/flow_masters/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then(() => readRapper())
      .catch((errors) => console.log("delete errors:", errors))
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rapperindex" element={<RapperIndex rappers={rappers} />} />
        <Route path="/rappershow/:id" element={<RapperShow rappers={rappers} deleteRapper={deleteRapper}/>} />
        <Route path="/rappernew" element={<RapperNew createRapper={createRapper} />} />
        <Route path="/rapperedit/:id" element={<RapperEdit rappers={rappers} updateRapper={updateRapper} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App