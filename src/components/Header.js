import logo from "../img/logo.svg";
import burger from "../img/icons/hamburger.svg";
import close from "../img/icons/close.svg";
import styled from "styled-components";
import { useState } from "react";
import { Route, Routes, Link, NavLink } from "react-router-dom";

function Header() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [mobile, setMobile] = useState();

  function clickHandler() {
    setButtonClicked(!buttonClicked);
  }

  function displayBurger() {}

  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <RespMenu>
        <RespMenuList>
          <NavLink
            to="/"
            activeClassName="active"
            style={{ textDecoration: "none" }}
          >
            <RespLinks>HOME</RespLinks>
          </NavLink>
        </RespMenuList>
        <RespMenuList>
          <NavLink to="/portfolio" style={{ textDecoration: "none" }}>
            <RespLinks>PORTFOLIO</RespLinks>
          </NavLink>
        </RespMenuList>
        <RespMenuList>
          <NavLink to="/contact-me" style={{ textDecoration: "none" }}>
            <RespLinks>CONTACT ME</RespLinks>
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
