import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../data.json";
import ContactMe from "./ContactMe";
import Slider from "./Slider";

function ProjectDetails(props) {
  const params = useParams();
  const project = data.projects.find((element) => element.name === params.name);
  return (
    <div>
      <Image src={project.image} />
      <Line></Line>
      <DesctopContainer>
        <DescriptionContainer>
          <InfoContainer>
            <Name>{project.name}</Name>
            <Description>{project.description}</Description>
            <Development>{project.development}</Development>
            <Technologies>{project.technologies}</Technologies>
            <Button>
              <Link target="_blank" href={project.url}>
                VISIT WEBSITE
              </Link>
            </Button>
          </InfoContainer>
          <DescriptionTab>{project.description}</DescriptionTab>
        </DescriptionContainer>
        <BackgroundContainerDesc>
          <ProjectBackground>Project Background</ProjectBackground>
          <FullDescription>{project["full-description"]}</FullDescription>
        </BackgroundContainerDesc>
      </DesctopContainer>
      <Line></Line>
      <BackgroundContainer>
        <ProjectBackground>Project Background</ProjectBackground>
        <FullDescription>{project["full-description"]}</FullDescription>
      </BackgroundContainer>
      <Preview>Static Previews</Preview>
      <Image src={project.image} />
      <Slider />
      <ContactMe>
        <Title>Interested in doing a project together?</Title>
      </ContactMe>
    </div>
  );
}

export default ProjectDetails;

const DesctopContainer = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-around;
  }
`;

const DescriptionContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 1024px) {
    justify-content: space-around;
  }

  @media (min-width: 1440px) {
    width: 350px;
  }
`;

const InfoContainer = styled.div``;

const Image = styled.img`
  width: 100%;
  margin-bottom: 24px;
`;

const Name = styled.h2`
  font-family: Ibarra Real Nova;
  font-size: 40px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.3571428656578064px;
  margin: 24px 0;
  color: #33323d;
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 30px;
  margin-bottom: 24px;
  color: #33323d;

  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 1440px) {
    display: block;
  }
`;

const DescriptionTab = styled.p`
  font-size: 15px;
  line-height: 30px;
  color: #33323d;
  width: 339px;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;
const Development = styled.p`
  font-size: 13px;
  font-weight: 700;
  line-height: 30px;
  color: #5fb4a2;
`;
const Technologies = styled.p`
  font-size: 13px;
  font-weight: 700;
  line-height: 30px;
  color: #5fb4a2;
`;
const Button = styled.button`
  width: 178px;
  height: 48px;
  border: 1px solid #33323d;
  cursor: pointer;
  margin: 24px 0;
`;

const Link = styled.a`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 2px;
  text-decoration: none;
  color: #33323d;
  padding: 16px 31px;
  transition: all 0.3s ease;

  &:hover {
    font-weight: 700;
    background: #f8eded;
  }
`;

const BackgroundContainer = styled.div`
  @media (min-width: 1440px) {
    display: none;
  }
`;

const BackgroundContainerDesc = styled.div`
  display: none;

  @media (min-width: 1440px) {
    display: block;
    width: 635px;
  }
`;

const ProjectBackground = styled.h2`
  font-family: Ibarra Real Nova;
  font-size: 32px;
  font-weight: 400;
  line-height: 42px;
  letter-spacing: -0.2857142984867096px;
  margin: 48px 0 28px;
  color: #33323d;

  @media (min-width: 1440px) {
    margin: 24px 0;
  }
`;
const FullDescription = styled.p`
  font-size: 15px;
  line-height: 30px;
  color: #33323d;
`;
const Preview = styled.h2`
  font-family: Ibarra Real Nova;
  font-size: 32px;
  font-weight: 400;
  line-height: 42px;
  letter-spacing: -0.2857142984867096px;
  margin: 40px 0;
  color: #33323d;
`;

const Title = styled.h2`
  font-family: Ibarra Real Nova;
  font-size: 40px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.3571428656578064px;
  text-align: center;
  margin-top: 64px;
  color: #33323d;

  @media (min-width: 768px) {
    margin-top: 0;
    text-align: left;
    width: 350px;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid #33323d;
  opacity: 0.15;
`;
