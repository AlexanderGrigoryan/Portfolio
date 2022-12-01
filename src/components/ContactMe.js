import styled from "styled-components";

function ContactMe(props) {
  return (
    <Container>
      {props.children}
      <Button>CONTACT ME</Button>
    </Container>
  );
}

export default ContactMe;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
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
