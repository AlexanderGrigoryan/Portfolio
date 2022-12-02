import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../data.json";
import Line from "./Line";

function ProjectDetails(props) {
  const params = useParams();
  const project = data.projects.find((element) => element.name === params.name);
  return (
    <div>
      <Image src={project.image} />
      <Line></Line>
      <Name>{project.name}</Name>
      <Description>{project.description}</Description>
      <Development>{project.development}</Development>
      <Technologies>{project.technologies}</Technologies>
      <Button>
        <Link target="_blank" href={project.url}>
          VISIT WEBSITE
        </Link>
      </Button>
      <Line></Line>
      <ProjectBackground>Project Background</ProjectBackground>
      <FullDescription>{project["full-description"]}</FullDescription>
      <Preview>Static Previews</Preview>
      <Image src={project.image} />
    </div>
  );
}

export default ProjectDetails;

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
`;

const ProjectBackground = styled.h2`
  font-family: Ibarra Real Nova;
  font-size: 32px;
  font-weight: 400;
  line-height: 42px;
  letter-spacing: -0.2857142984867096px;
  margin: 48px 0 28px;
  color: #33323d;
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
