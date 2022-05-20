import Home from "./pages/Home";
import About from "./pages/About";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;
