import styled from "styled-components";
import { Link } from "react-router-dom";

function ContactMe(props) {
  return (
    <Container>
      {props.children}
      <Button>
        <Link style={{ textDecoration: "none" }} to="/contact-me">
          <LinkText>CONTACT ME</LinkText>
        </Link>
      </Button>
    </Container>
  );
}

export default ContactMe;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Button = styled.button`
  width: 162px;
  height: 48px;
  border: 1px solid #33323d;
  background: #f2f2f2;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #f8eded;
    font-weight: 700;
  }
`;

const LinkText = styled.span`
  padding: 16px 30px;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 2px;
  color: #33323d;
`;
