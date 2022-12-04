import styled from "styled-components";
import { Link } from "react-router-dom";

function ContactMe(props) {
  return (
    <Container>
      {props.children}
      <Button>
        <Link style={{ textDecoration: "none" }} to="/contact-me">
          CONTACT ME
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
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #f8eded;
  }
`;
