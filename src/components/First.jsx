import styled from 'styled-components';

const First = () => {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    border: solid 1px;
  `;

  const Heading = styled.h1`
    font-size: 60px;
    border: solid 1px;

  `;

  const Description = styled.h3`
    border: solid 1px;
    font-size: 25px;
  `;

  return (
    <Container>
      <Heading>Tumelo Ceba</Heading>
      <Description>Full-stack developer</Description>
    </Container>
  )
}

export default First;