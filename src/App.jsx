import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Destination from "./components/Destination/Destination"
import Crews from "./components/Crew/Crews"
import Technology from "./components/Technology/Technology"

function App () {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crews" element={<Crews />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  )
}

export default App
