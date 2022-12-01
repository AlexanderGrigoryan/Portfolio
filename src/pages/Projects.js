import { Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import Project from "../components/Project";
import singlePage from "../img/portfolio/single-page.jpg";
import tipCalculator from "../img/portfolio/tip-calculator.jpg";
import githubUserSearch from "../img/portfolio/github-user-search.jpg";
import fylo from "../img/portfolio/fylo.jpg";
import ContactMe from "../components/ContactMe";

function Projects() {
  return (
    <div>
      <Project
        image={singlePage}
        name="Single Page"
        description="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS3 and JavaScript for the areas that required interactivity, such as the slider for projects."
      />
      <Project
        image={tipCalculator}
        name="Tip Calculator"
        description="This project required me to build a fully responsive landing page to the designs provided. For this project I used React, also I used here CSS Modules for styles."
      />
      <Project
        image={githubUserSearch}
        name="GitHub User Search"
        description="This project required me to build a fully responsive landing page to the designs provided. For this project I used React, also I used here CSS Modules for styles."
      />
      <Project
        image={fylo}
        name="Fylo"
        description="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS3 and JavaScript for the areas that required interactivity, such as the e-mail validation inputs."
      />
      <ContactMe>
        <Title>Interested in doing a project together?</Title>
      </ContactMe>
    </div>
  );
}

export default Projects;

const Title = styled.h2`
  font-family: Ibarra Real Nova;
  font-size: 40px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.3571428656578064px;
  text-align: center;
  margin-top: 8px;
  color: #33323d;
`;
