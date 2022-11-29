import styled from "styled-components";
import projectImage from "../img/homepage/mobile/image-homepage-hero.jpg";
import greenarrows from "../img/icons/down-arrows.svg";
import profile from "../img/homepage/mobile/profile.jpg";

function AboutMe() {
  return (
    <Container>
      <Image src={projectImage} alt="image" />
      <Info>
        Hey, I’m Alex Grigoryan and I love building beautiful websites
      </Info>
      <BlackButton>
        <GreenArrows src={greenarrows} alt="green arrows" />
        <BlackButtonText>ABOUT ME</BlackButtonText>
      </BlackButton>
      <ProfileImage src={profile} alt="profile" />
      <Line></Line>
      <Title>About Me</Title>
      <Text>
        I’m a junior front-end developer looking for a new role in an exciting
        company. I focus on writing accessible HTML, using modern CSS practices
        and writing clean JavaScript. When writing JavaScript code, I mostly use
        React, but I can adapt to whatever tools are required. I’m based in
        Tbilisi, Georgia, but I’m happy working remotely and have experience in
        remote teams. When I’m not coding, you’ll find me outdoors. I love being
        out in nature whether that’s going for a walk, run or playing football.
        I’d love you to check out my work.
      </Text>
      <PortfolioButton>GO TO PORTFOLIO</PortfolioButton>
      <Line></Line>
    </Container>
  );
}

export default AboutMe;

const Container = styled.div`
  margin-top: 40px;
`;

const Image = styled.img`
  margin-bottom: 24px;
`;

const Info = styled.p`
  font-family: Ibarra Real Nova;
  font-size: 40px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.3571428656578064px;
`;

const BlackButton = styled.button`
  width: 200px;
  height: 48px;
  background: #203a4c;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 32px;
`;

const GreenArrows = styled.img`
  padding: 0 50px 0 16px;
`;

const BlackButtonText = styled.p`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 2px;
  text-align: center;
  color: #ffffff;
`;

const ProfileImage = styled.img`
  margin: 80px 0 25px;
`;

const Title = styled.h1`
  font-family: Ibarra Real Nova;
  font-size: 40px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.3571428656578064px;
  color: #33323d;
  margin: 32px 0 28px;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 30px;
  color: #33323d;
`;

const PortfolioButton = styled.button`
  width: 202px;
  height: 48px;
  border: 1px solid #33323d;
  background: #f2f2f2;
  cursor: pointer;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 2px;
  margin: 24px 0 51px;
`;

const Line = styled.div`
  width: 311px;
  height: 1px;
  border: 1px solid #33323d;
  opacity: 0.15;
`;
