import styled from "styled-components";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";

function Home() {
  return (
    <div>
      <AboutMe />
      <ContactMe>
        <Title>Interested in doing a project together?</Title>
      </ContactMe>
    </div>
  );
}

export default Home;

const Title = styled.h2`
  font-family: Ibarra Real Nova;
  font-size: 40px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.3571428656578064px;
  text-align: center;
  margin-top: 115px;
  color: #33323d;
`;
