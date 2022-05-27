import styled from 'styled-components';
import Project from './Project';

const Projects = () => {
  const Container = styled.div`
    border: solid 1px;
  `;

  const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    @media screen and (max-width: 820px) {
      justify-content: center;
    }
  `;

  const Heading = styled.h1`
    display: flex;
    justify-content: center;
  `;


  return (
    <Container >
      <Heading>Projects</Heading>
      <Wrapper>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
      </Wrapper>
    </Container>
    
  )
}

export default Projects;