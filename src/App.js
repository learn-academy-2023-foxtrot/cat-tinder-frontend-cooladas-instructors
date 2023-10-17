  import React, {useState} from "react"
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

  const App = () => {
    const [rappers, setRappers] = useState(mockRappers)
    console.log("mock Rappers:", rappers)

    return (
      <>
        <Header />
        <h1>Welcome to the Space of the Flow Masters</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rapperindex" element={<RapperIndex />} />
          <Route path="/rapperindex" element={<RapperIndex />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    )
  }

  export default App