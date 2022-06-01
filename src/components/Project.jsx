import styled from "styled-components";
import { GitHub,Language } from "@mui/icons-material";

const Project = ({project}) => {
  const Container = styled.div`
    display: flex;
    width: 30vw;
    margin: 40px 30px 20px 20px;
    border: solid 2px black;
    flex-direction: column;
    border-radius: 10px;
    @media screen and (max-width: 820px) {
      min-width: 80%;
    }
  `;

  const Name = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
    margin: 0px;
    min-height: 40px;
  `;

  const Description = styled.p`
    margin: 5px 10px 5px 10px;
    word-break: break-all;
    height: 60px;
  `;

  const Links = styled.div`
    display: flex;
    border-top: solid 1px black;
    justify-content: center;
    align-items: center;
  `;

  let LinkItem = styled.a`
    margin: 10px 10px 10px 10px;
    color: black;
    :hover{
      color: orange;
      border-bottom: solid 3px black;
      cursor: pointer;
    }
  `;
  
  LinkItem.defaultProps = {
    target: '_blank',
  };

  const Image = styled.img`
    object-fit: cover;
    height: 100%;
    margin-top: 0;
  `;

  return (
    <Container>
      <Name>{project.name}</Name>
      <Image src="https://thumbs.dreamstime.com/b/cat-hunts-rat-scottish-straight-closeup-brown-background-246757868.jpg"></Image>
      <Description>
        {project.description}
      </Description>
      <Links>
        <LinkItem href = {project.url} ><GitHub/></LinkItem>
        <LinkItem href = {project.git} ><Language/></LinkItem>
      </Links>
    </Container>
  );
};
  
export default Project;
