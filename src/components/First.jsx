import styled from 'styled-components';

const First = () => {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background-image: url("./backgrounds/pexels-fauxels-3183198.jpg");
    background-repeat: repeat;
    background-size: cover;
  `;

  const Heading = styled.h1`
    font-size: 60px;
  `;

  const Description = styled.h3`
    font-size: 25px;
  `;

  return (
    <Container>
      <Heading>Tumelo Ceba</Heading>
      <Description>Full-stack javascript developer</Description>
    </Container>
  )
}

export default First;