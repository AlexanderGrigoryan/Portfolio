import styled from "styled-components";
import { Link } from "react-router-dom";
import logoWhite from "../img/logo-white.svg";
import github from "../img/icons/footer-github.svg";
import twitter from "../img/icons/footer-twitter.svg";
import linkedin from "../img/icons/footer-linkedin.svg";

function Footer() {
  return (
    <Container>
      <FooterContainer>
        <Logo src={logoWhite} alt="logo"></Logo>
        <Menu>
          <MenuList>
            <Link to="/">
              <LinkInner>HOME</LinkInner>
            </Link>
          </MenuList>
          <MenuList>
            <Link to="/portfolio">
              <LinkInner>PORTFOLIO</LinkInner>
            </Link>
          </MenuList>
          <MenuList>
            <Link to="/contact-me">
              <LinkInner>CONTACT ME</LinkInner>
            </Link>
          </MenuList>
        </Menu>
      </FooterContainer>
      <Social>
        <SocialLink
          href="https://github.com/AlexanderGrigoryan?tab=repositories"
          target="_blank"
        >
          <SocialIcon src={github} alt="github" />
        </SocialLink>
        <SocialLink href="#" target="_blank">
          <SocialIcon src={twitter} alt="twitter" />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/alexander-grigoryan/"
          target="_blank"
        >
          <SocialIcon src={linkedin} alt="linkedin" />
        </SocialLink>
      </Social>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 0;
  margin-top: 80px;
  background: #33323d;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 24px 40px;
    justify-content: space-between;
  }

  @media (min-width: 1440px) {
    padding: 24px 165px;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    column-gap: 49px;
  }
`;

const Logo = styled.img``;

const LinkInner = styled.span`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 2px;
  color: #ffffff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Menu = styled.ul`
  list-style-type: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
    column-gap: 42px;
  }
`;

const MenuList = styled.li``;

const Social = styled.div`
  display: flex;
  column-gap: 15px;
  margin-top: 40px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const SocialLink = styled.a``;

const SocialIcon = styled.img``;
