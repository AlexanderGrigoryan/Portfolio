import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <div className="App">
      <MainContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/projects/:name" element={<ProjectDetails />}/>
        </Routes>
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;

const MainContainer = styled.main`
  padding: 32px 32px 0px 32px;
`;
