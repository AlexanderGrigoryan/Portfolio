import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <MainContainer>
        <Header />
        <AboutMe />
        <ContactMe />
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;

const MainContainer = styled.div`
  padding: 32px 32px 0 32px;
`;
