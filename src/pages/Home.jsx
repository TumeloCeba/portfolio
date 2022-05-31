import styled from 'styled-components';
import Navbar from '../components/Navbar';
import First from '../components/First';
import Projects from '../components/Projects';
import About from '../components/About';

const Home = () => {
  document.title = 'Home';
  const Container = styled.div`
    background-color: #F1F1F1;
    width: 100vw;
  `;

  return (
    <Container>
      <Navbar/>
      <First/>
      <div id='projects' ><Projects/></div>
      <div id='about' ><About/></div>
    </Container>
  )
}

export default Home;