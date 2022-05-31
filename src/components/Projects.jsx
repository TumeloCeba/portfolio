import styled from 'styled-components';
import Project from './Project';

const Projects = () => {
  const Container = styled.div`
    margin-top: 100px;
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
    margin-top: 0px;
  `;


  return (
    <Container >
      <Heading>Projects</Heading>
      <Wrapper>
        <Project/>
        <Project/>
      </Wrapper>
    </Container>
    
  )
}

export default Projects;