import { BrowserRouter, Routes, Route } from "react-router-dom"

import About from "./pages/about"
import Experience from "./pages/experience"
import Contact from "./pages/contact"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<About />} path="/" />
        <Route element={<Experience />} path="/experience" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
    </BrowserRouter>
  )
}

export default App