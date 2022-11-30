import styled from "styled-components";
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
            <Link href="#" target="_blank" rel="noopener noreferrer">
              HOME
            </Link>
          </MenuList>
          <MenuList>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              PORTFOLIO
            </Link>
          </MenuList>
          <MenuList>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              CONTACT ME
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
  background: #33323d;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 40px;
`;

const Logo = styled.img``;

const Link = styled.a`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 2px;
  color: #ffffff;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const Menu = styled.ul`
  list-style-type: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;

const MenuList = styled.li``;

const Social = styled.div`
  display: flex;
  column-gap: 15px;
  margin-top: 40px;
`;

const SocialLink = styled.a``;

const SocialIcon = styled.img``;
