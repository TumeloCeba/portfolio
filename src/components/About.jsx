import styled from "styled-components";
import { Javascript } from "@mui/icons-material";

const About = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin-top: 100px;
    border-top: solid 2px black;
  `;

  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media screen and (max-width: 820px) {
      flex-direction: column;
      height: auto;
    }
  `;

  const TechnologiesWrapper = styled.div`
  `;

  const Description = styled.p`
  `;
  const DescriptionWrapper = styled.div`
    height: 100vh;
    flex: 2;
  `;

  const Technologies = styled.div`
    flex: 2;
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
  `;

  const Technology = styled.img`
    background-size: cover;
    width: 150px;
    height: auto;
    margin-left: 20px;

    @media screen and (max-width: 820px) {
      width: 80px;
    }
  `;

  const Heading = styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 0px;
  `;

  const Heading3 = styled.h3`
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: center;
  `;

  return (
    <Container>
      <Heading>About</Heading>
      <Wrapper>
        <DescriptionWrapper>
          <Heading3>Description</Heading3>
          <Description>
            skjfldjfldfjksflaksjdfalskfjsfjksad
            sdlkafjalskjfasfkljsflasjfjsfklaaflasfjaklsjfaskfslkfj
            sdlfjlfkjaslfjaslkfaslfkasjfalsk adlfjaslfkajsflaskfjaskljfjaslkfslkfj
            skjfldjfldfjksflaksjdfalskfjsfjksad
            sdlkafjalskjfasfkljsflasjfjsfklaaflasfjaklsjfaskfslkfj
            sdlfjlfkjaslfjaslkfaslfkasjfalsk adlfjaslfkajsflaskfjaskljfjaslkfslkfj
            skjfldjfldfjksflaksjdfalskfjsfjksad
            sdlkafjalskjfasfkljsflasjfjsfklaaflasfjaklsjfaskfslkfj
            sdlfjlfkjaslfjaslkfaslfkasjfalsk adlfjaslfkajsflaskfjaskljfjaslkfslkfj
          </Description>
        </DescriptionWrapper>
        <Technologies>
          <Heading3>Stack</Heading3>
          <TechnologiesWrapper>
            <Technology src="./icons/react_native_icon.png"></Technology>
            <Technology src="./icons/nodejs_icon.png"></Technology>
            <Technology src="./icons/mongodb_programming_icon.png"></Technology>
            <Technology src="./icons/rest_api_icon.png"></Technology>
            <Technology src="./icons/js_icon.png"></Technology>
            <Technology src="./icons/redux_icon.png"></Technology>
            <Technology src="./icons/pugjs_logo_icon.png"></Technology>
            <Technology src="./icons/git_logo_social_icon.png"></Technology>
            <Technology src="./icons/npm_icon.png"></Technology>
            <Technology src="./icons/heroku_icon.png"></Technology>
            <Technology src="./icons/progress_icon.svg"></Technology>
          </TechnologiesWrapper>
        </Technologies>
      </Wrapper>
    </Container>
  );
};

export default About;
