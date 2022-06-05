import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  margin-top: 100px;
  align-items: center;
  flex-direction: column;
`;

const ContactsWrapper = styled.div`

  display: flex; 
  justify-content: center;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 60px;
`;

const ContactText = styled.a`
  :hover{
    color: orange;
    border-bottom: solid 3px black;
    cursor: pointer;
    text-decoration: none;
  }
`;

const ContactDesc = styled.p`
`;

ContactText.defaultProps = {
  target: '_blank',
};

const Heading = styled.h1`
display: flex;
justify-content: center;
margin-top: 100px;
margin-bottom: 100px;
`;

const styles = {

  largeIcon: {
    width: '100px',
    height: '100px',
  },

};

// LinkedIn www.linkedin.com/in/tumeloceba
// Git - 
// email 
// 

const Contact = () => {
  return (
  <Container>
    <Heading>Contact</Heading>
    <ContactsWrapper>
      <ContactItem style={{marginLeft: '0px'}}><Email style = {styles.largeIcon} /><ContactDesc>Email</ContactDesc><ContactText href = 'mailto:tumeloceba@icloud.com'>tumeloceba@icloud.com</ContactText></ContactItem>
      <ContactItem><GitHub style = {styles.largeIcon} /><ContactDesc>Github</ContactDesc><ContactText href = 'https://github.com/TumeloCeba'>Check out</ContactText></ContactItem>
      <ContactItem><LinkedIn style = {styles.largeIcon} /><ContactDesc>LinkedIn</ContactDesc><ContactText href = 'https://linkedin.com/in/tumeloceba'>Connect</ContactText></ContactItem>
    </ContactsWrapper>
  </Container>);
};

export default Contact;