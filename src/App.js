import "./App.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <MainContainer>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/contact-me" element={<Contact />} />
          <Route path="/projects/:name" element={<ProjectDetails />} />
        </Routes>
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;

const MainContainer = styled.main`
  padding: 32px 32px 0px 32px;

  @media (min-width: 768px) {
    padding: 64px 40px 0px 40px;
  }

  @media (min-width: 1440px) {
    padding: 64px 165px 0px 165px;
  }
`;
