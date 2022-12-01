import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
