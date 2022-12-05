import { Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import Project from "../components/Project";
import ContactMe from "../components/ContactMe";
import data from "../data.json";

function Projects() {
  return (
    <div>
      {data.projects.map((item, index) => {
        return (
          <Project
            direction={index % 2 === 0}
            image={item.image}
            name={item.name}
            description={item.description}
          />
        );
      })}
      <ContactMe>
        <Title>Interested in doing a project together?</Title>
      </ContactMe>
    </div>
  );
}

export default Projects;

const Title = styled.h2`
  width: 350px;
  font-family: Ibarra Real Nova;
  font-size: 40px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.3571428656578064px;
  margin-top: 8px;
  color: #33323d;

  @media (min-width: 768px) {
    margin-top: 0;
    text-align: left;
    width: 350px;
  }
`;
