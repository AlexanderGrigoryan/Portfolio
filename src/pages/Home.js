import styled from "styled-components";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <MainContainer>
        <Header />
        <AboutMe />
        <ContactMe />
      </MainContainer>
      <Footer />
    </div>
  );
}

export default Home;

const MainContainer = styled.div`
  padding: 32px 32px 0 32px;
`;
