import styled from "styled-components";
import { Link } from "react-router-dom";

function Project(props) {
  return (
    <Container direction={props.direction}>
      <Image src={props.image} alt="Project Image" />
      <ProjectContainer>
        <Line></Line>
        <Name>{props.name}</Name>
        <Description>{props.description}</Description>
        <Button>
          <Link
            to={"/projects/" + props.name}
            style={{ textDecoration: "none" }}
          >
            <LinkInner>View Project</LinkInner>
          </Link>
        </Button>
        <Line></Line>
      </ProjectContainer>
    </Container>
  );
}

export default Project;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  margin-bottom: 72px;

  @media (min-width: 768px) {
    flex-direction: ${(props) =>
      props.direction % 2 === 0 ? "row" : "row-reverse"};
    column-gap: 69px;
    margin-bottom: 80px;
  }

  @media (min-width: 1440px) {
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  @media (min-width: 768px) {
    width: 40%;
    align-items: center;
    row-gap: 32px;
  }
`;

const Image = styled.img`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Name = styled.h2`
  font-family: Ibarra Real Nova;
  font-size: 40px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.3571428656578064px;
  color: #33323d;

  @media (min-width: 1440px) {
    margin-top: 71px;
  }
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 30px;
  color: #33323d;
`;

const Button = styled.button`
  width: 175px;
  height: 48px;
  border: 1px solid #33323d;
  cursor: pointer;
  background: #f2f2f2;

  &:hover {
    background: #f8eded;
    font-weight: 700;
  }

  @media (min-width: 1440px) {
    margin-bottom: 71px;
  }
`;

const LinkInner = styled.span`
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #33323d;
  padding: 16px 29px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid #33323d;
  opacity: 0.15;
`;
