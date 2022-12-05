import styled from "styled-components";
import data from "../data.json";
import previousArrow from "../img/icons/arrow-left.svg";
import nextArrow from "../img/icons/arrow-right.svg";
import { useParams, useNavigate } from "react-router-dom";

function Slider() {
  const { name } = useParams();
  const projects = data.projects;
  const navigate = useNavigate();
  const projectIndex = projects.findIndex((element) => element.name === name);

  const nextProject =
    projects[projectIndex === projects.length - 1 ? 0 : projectIndex + 1];

  const previousProject =
    projects[projectIndex === 0 ? projects.length - 1 : projectIndex - 1];

  function changeNextProject() {
    navigate("/projects/" + nextProject.name);
  }

  function changePreviousProject() {
    navigate("/projects/" + previousProject.name);
  }

  return (
    <>
      <SliderContainer>
        <Line></Line>
        <Container>
          <Previous>
            <PreviousButton onClick={changePreviousProject}>
              <PreviousArrow src={previousArrow} alt="arrow to left" />
            </PreviousButton>
            <PreviousContainer>
              <ProjectName>{previousProject.name}</ProjectName>
              <ProjectState>Previous Project</ProjectState>
            </PreviousContainer>
          </Previous>
          <FlexLine></FlexLine>
          <Next>
            <NextButton onClick={changeNextProject}>
              <NextArrow src={nextArrow} alt="arrow to right" />
            </NextButton>
            <NextContainer>
              <ProjectName>{nextProject.name}</ProjectName>
              <ProjectState>Next Project</ProjectState>
            </NextContainer>
          </Next>
        </Container>
        <Line></Line>
      </SliderContainer>
    </>
  );
}

export default Slider;

const SliderContainer = styled.div`
  @media (min-width: 768px) {
    margin-bottom: 80px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Previous = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    column-gap: 32px;
  }
`;

const PreviousContainer = styled.div`
  @media (min-width: 768px) {
  }
`;

const PreviousButton = styled.button`
  cursor: pointer;
`;

const PreviousArrow = styled.img``;

const ProjectName = styled.h2`
  font-family: Ibarra Real Nova;
  font-size: 18px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.2857142984867096px;
  margin-top: 16px;
  align-self: end;
  color: #33323d;

  @media (min-width: 768px) {
    margin-top: 0;
    font-size: 32px;
  }
`;

const ProjectState = styled.p`
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0px;
  align-self: end;
  color: rgba(51, 50, 61, 0.5);
`;

const Next = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    column-gap: 32px;
  }
`;

const NextContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    order: 1;
    align-self: end;
  }
`;

const NextButton = styled.button`
  cursor: pointer;
  align-self: end;

  @media (min-width: 768px) {
    order: 2;
    align-self: center;
  }
`;

const NextArrow = styled.img``;

const FlexLine = styled.div`
  width: 1px;
  height: 146px;
  border: 1px solid rgba(51, 50, 61, 0.15);
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid #33323d;
  opacity: 0.15;
`;
