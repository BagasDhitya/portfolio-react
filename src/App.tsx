import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/about";
import Experience from "./pages/experience";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<About />} path="/" />
        <Route element={<Experience />} path="/experience" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
