import styled from "styled-components";
import github from "../img/icons/github.svg";
import twitter from "../img/icons/twitter.svg";
import linkedin from "../img/icons/linkedin.svg";

function Contact() {
  return (
    <Container>
      <Line></Line>
      <Title>Get in Touch</Title>
      <Info>
        I’d love to hear about what you’re working on and how I could help. I’m
        currently looking for a new role and am open to a wide range of
        opportunities. My preference would be to find a position in a company in
        London. But I’m also happy to hear about opportunites that don’t fit
        that description. I’m a hard-working and positive person who will always
        approach each task with a sense of purpose and attention to detail.
        Please do feel free to check out my online profiles below and get in
        touch using the form.
      </Info>
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
      <Line></Line>
      <Title>Contact Me</Title>
      <Form>
        <Label for="name">Name</Label>
        <Input type="text" id="name" placeholder="Enter your name" />
        <Label for="email">Email Adress</Label>
        <Input type="email" id="email" placeholder="email@example.com" />
        <Label for="message">Message</Label>
        <TextArea type="text" id="message" placeholder="How can I help?" />
        <Button type="submit">SEND MESSAGE</Button>
      </Form>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const Title = styled.h2`
  font-family: Ibarra Real Nova;
  font-size: 40px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.3571428656578064px;
  color: #33323d;
`;

const Info = styled.p`
  font-size: 15px;
  line-height: 30px;
  letter-spacing: 0px;
  color: #33323d;
`;

const Social = styled.div`
  display: flex;
  column-gap: 15px;
  margin-bottom: 6px;
`;

const SocialLink = styled.a``;

const SocialIcon = styled.img``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 700;
  line-height: 30px;
  margin-bottom: 8px;
  color: rgba(51, 50, 61, 0.8);
`;

const Input = styled.input`
  width: 311px;
  height: 48px;
  font-size: 13px;
  line-height: 30px;
  color: #33323d;
  padding: 0 16px;
  margin-bottom: 24px;
  background: rgba(51, 50, 61, 0.1);
g`;

const TextArea = styled.textarea`
  width: 311px;
  height: 96px;
  padding: 9px 16px;
  background: rgba(51, 50, 61, 0.1);
  font-family: Public Sans;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  resize: none;
  margin-bottom: 24px;
  color: #33323d;
`;

const Button = styled.button`
  width: 200px;
  height: 48px;
  background: #203a4c;
  font-family: Public Sans;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 2px;
  text-align: center;
  cursor: pointer;
  color: #ffffff;
`;

const Line = styled.div`
  width: 311px;
  height: 1px;
  border: 1px solid #33323d;
  opacity: 0.15;
`;
