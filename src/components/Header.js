import logo from "../img/logo.svg";
import burger from "../img/icons/hamburger.svg";
import close from "../img/icons/close.svg";
import styled from "styled-components";
import { useState } from "react";

function Header() {
  const [buttonClicked, setButtonClicked] = useState(false);

  function clickHandler() {
    setButtonClicked(!buttonClicked);
  }
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Button onClick={clickHandler}>
        <img src={buttonClicked ? close : burger} alt="Burger" />
      </Button>
      {buttonClicked ? (
        <Menu>
          <MenuList>
            <Link href="#">HOME</Link>
          </MenuList>
          <MenuList>
            <Link href="#">PORTFOLIO</Link>
          </MenuList>
          <MenuList>
            <Link href="#">CONTACT ME</Link>
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
`;
const Logo = styled.img``;
const Button = styled.button`
  cursor: pointer;
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

const Link = styled.a`
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
