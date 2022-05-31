import styled from 'styled-components';

const About = () => {
  const Container = styled.div`
    display:flex;
    flex-direction: column;
    height: 100vh;
    margin-top: 100px;
    border-top: solid 2px black;

  `;

  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height : 100%;
  `;

  const Description = styled.p`
  `;

  const Heading = styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 0px;

  `;


  return (
    <Container >
      <Heading>About</Heading>
      <Wrapper> 
        <Description>
        skjfldjfldfjksflaksjdfalskfjsfjksad sdlkafjalskjfasfkljsflasjfjsfklaaflasfjaklsjfaskfslkfj sdlfjlfkjaslfjaslkfaslfkasjfalsk adlfjaslfkajsflaskfjaskljfjaslkfslkfj
        skjfldjfldfjksflaksjdfalskfjsfjksad sdlkafjalskjfasfkljsflasjfjsfklaaflasfjaklsjfaskfslkfj sdlfjlfkjaslfjaslkfaslfkasjfalsk adlfjaslfkajsflaskfjaskljfjaslkfslkfj
        skjfldjfldfjksflaksjdfalskfjsfjksad sdlkafjalskjfasfkljsflasjfjsfklaaflasfjaklsjfaskfslkfj sdlfjlfkjaslfjaslkfaslfkasjfalsk adlfjaslfkajsflaskfjaskljfjaslkfslkfj
        </Description>
       </Wrapper>
    </Container>
    
  )
}

export default About;