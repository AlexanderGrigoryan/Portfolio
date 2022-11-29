import styled from "styled-components";

function ContactMe() {
  return (
    <Container>
      <Title>Interested in doing a project together?</Title>
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
  margin: 115px 0 80px;
`;
const Title = styled.h2`
  font-family: Ibarra Real Nova;
  font-size: 40px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.3571428656578064px;
  text-align: center;
  color: #33323d;
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
`;
