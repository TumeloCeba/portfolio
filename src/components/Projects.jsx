import styled from 'styled-components';
import Project from './Project';
import {projects} from '../sampleData.js';

const Projects = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
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
    margin-top: 80px;
  `;

  return (
    <Container >
      <Heading>Projects</Heading>
      <Wrapper>
        {projects && projects.map((project) => <Project project = {project} key = {project._id}/>)}
      </Wrapper>
    </Container>
    
  )
};

export default Projects;