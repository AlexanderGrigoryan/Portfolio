import styled from "styled-components";
import { Link } from "react-router-dom";
import projectImage from "../img/homepage/mobile/image-homepage-hero.jpg";
import projectImageTab from "../img/homepage/tablet/image-homepage-hero.jpg";
import projectImageDesctop from "../img/homepage/desktop/image-homepage-hero.jpg";
import greenarrows from "../img/icons/down-arrows.svg";
import profile from "../img/homepage/mobile/profile.jpg";
import profileTablet from "../img/homepage/tablet/profile-tablet.jpg";
import profileDesctop from "../img/homepage/desktop/profile-desctop.jpg";

function AboutMe() {
  return (
    <Container>
      <Image src={projectImage} alt="image" />
      <ImageTab src={projectImageTab} alt="image" />
      <ImageDesc src={projectImageDesctop} alt="image" />
      <InfoContainer>
        <Info>
          Hey, I’m Alexander Grigoryan and I love building beautiful websites
        </Info>
        <BlackButton>
          <GreenArrows src={greenarrows} alt="green arrows" />
          <BlackButtonText style={{ textDecoration: "none" }} href="#about-me">
            ABOUT ME
          </BlackButtonText>
        </BlackButton>
      </InfoContainer>
      <ProfileContainer id="about-me">
        <ProfileImage src={profile} alt="profile" />
        <ProfileTablet src={profileTablet} alt="profile" />
        <ProfileDesctop src={profileDesctop} alt="profile" />
        <AboutMeContainer>
          <Line></Line>
          <Title>About Me</Title>
          <Text>
            I’m a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I’m based in Tbilisi, Georgia, but I’m happy working
            remotely and have experience in remote teams. When I’m not coding,
            you’ll find me outdoors. I love being out in nature whether that’s
            going for a walk, run or playing football. I’d love you to check out
            my work.
          </Text>
          <PortfolioButton>
            <Link style={{ textDecoration: "none" }} to="/portfolio">
              <LinkText>GO TO PORTFOLIO</LinkText>
            </Link>
          </PortfolioButton>
          <Line></Line>
        </AboutMeContainer>
      </ProfileContainer>
    </Container>
  );
}

export default AboutMe;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    margin-bottom: 96px;
  }
`;

const Image = styled.img`
  margin-bottom: 24px;
  width: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`;

const ImageTab = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 100%;
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;

const ImageDesc = styled.img`
  display: none;

  @media (min-width: 1440px) {
    display: block;
    width: 100%;
  }
`;

const InfoContainer = styled.div`
  @media (min-width: 768px) {
    width: 514px;
    height: 278px;
    background: #fafafa;
    padding: 56px 56px 0 0;
    align-self: baseline;
    margin-top: -278px;
  }

  @media (min-width: 1440px) {
    width: 445px;
    height: 357px;
  }
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
  align-self: baseline;
  transition: all 0.3s ease;
  &:hover {
    background: #244b67;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    margin-top: 48px;
  }
`;

const GreenArrows = styled.img`
  padding: 0 50px 0 16px;
`;

const BlackButtonText = styled.a`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 2px;
  text-align: center;
  color: #ffffff;
`;

const ProfileContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    column-gap: 50px;
    align-items: center;
    margin-top: 96px;
    align-self: baseline;
  }

  @media (min-width: 1440px) {
    column-gap: 80px;
  }
`;

const AboutMeContainer = styled.div``;

const ProfileImage = styled.img`
  margin: 80px 0 25px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const ProfileTablet = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 1024px) {
    display: none;
`;

const ProfileDesctop = styled.img`
  display: none;

  @media (min-width: 1024px) {
    display: block;
`;

const Title = styled.h1`
  font-family: Ibarra Real Nova;
  font-size: 40px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.3571428656578064px;
  color: #33323d;
  margin: 32px 0 28px;
  align-self: baseline;

  @media (min-width: 768px) {
    margin: 37px 0 28px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 30px;
  color: #33323d;
  }
`;

const PortfolioButton = styled.button`
  width: 202px;
  height: 48px;
  border: 1px solid #33323d;
  background: #f2f2f2;
  cursor: pointer;
  margin: 24px 0 51px;
  align-self: baseline;
  transition: all 0.3s ease;
  &:hover {
    background: #f8eded;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    margin: 24px 0 56px;
  }
`;

const LinkText = styled.span`
  padding: 16px 28px;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 2px;
  color: #33323d;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid #33323d;
  opacity: 0.15;
`;
