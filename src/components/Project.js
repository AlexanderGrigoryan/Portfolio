import styled from "styled-components";
import { Link } from "react-router-dom";
import Line from "./Line";

function Project(props) {
  return (
    <div>
      <Container>
        <Image src={props.image} alt="Project Image" />
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
      </Container>
    </div>
  );
}

export default Project;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  margin-bottom: 72px;
`;

const Image = styled.img`
  width: 100%;
`;

const Name = styled.h2`
  font-family: Ibarra Real Nova;
  font-size: 40px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.3571428656578064px;
  color: #33323d;
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
`;

const LinkInner = styled.span`
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #33323d;
`;
