import logo from "../img/logo.svg";
import burger from "../img/icons/hamburger.svg";
import close from "../img/icons/close.svg";
import styled from "styled-components";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function Header() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const location = useLocation();

  function clickHandler() {
    setButtonClicked(!buttonClicked);
  }

  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <RespMenu>
        <RespMenuList>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <RespLinks
              style={{
                color: location.pathname === "/" ? "#5FB4A2" : "#33323D",
              }}
            >
              HOME
            </RespLinks>
          </NavLink>
        </RespMenuList>
        <RespMenuList>
          <NavLink to="/portfolio" style={{ textDecoration: "none" }}>
            <RespLinks
              style={{
                color:
                  location.pathname === "/portfolio" ? "#5FB4A2" : "#33323D",
              }}
            >
              PORTFOLIO
            </RespLinks>
          </NavLink>
        </RespMenuList>
        <RespMenuList>
          <NavLink
            to="/contact-me"
            style={{
              textDecoration: "none",
            }}
          >
            <RespLinks
              style={{
                color:
                  location.pathname === "/contact-me" ? "#5FB4A2" : "#33323D",
              }}
            >
              CONTACT ME
            </RespLinks>
          </NavLink>
        </RespMenuList>
      </RespMenu>
      <Button onClick={clickHandler}>
        <img src={buttonClicked ? close : burger} alt="Burger" />
      </Button>
      {buttonClicked ? (
        <Menu>
          <MenuList>
            <Link to="/">
              <Links>HOME</Links>
            </Link>
          </MenuList>
          <MenuList>
            <Link to="/portfolio">
              <Links>PORTFOLIO</Links>
            </Link>
          </MenuList>
          <MenuList>
            <Link to="/contact-me">
              <Links>CONTACT ME</Links>
            </Link>
          </MenuList>
        </Menu>
      ) : null}
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const Logo = styled.img``;

const Button = styled.button`
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const RespMenu = styled.ul`
  display: none;
  list-style-type: none;
  column-gap: 42px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const RespMenuList = styled.li``;

const RespLinks = styled.span`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 2px;
  text-decoration: none;
  color: #33323d;

  &:hover {
    text-decoration: underline;
  }
`;

const Menu = styled.ul`
  list-style-type: none;
  background: #33323d;
  padding: 32px 62px;
  display: flex;
  row-gap: 32px;
  flex-direction: column;
  text-align: center;
  position: absolute;
  top: 84px;
  right: 32px;
  z-index: 100;
`;

const MenuList = styled.li``;

const Links = styled.span`
  color: #ffffff;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
