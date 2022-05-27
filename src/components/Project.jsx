import styled from "styled-components";
import { GitHub,Language } from "@mui/icons-material";

const Project = () => {
  const Container = styled.div`
    display: flex;
    width: 30vw;
    margin: 40px 30px 20px 20px;
    border: solid 1px black;
    flex-direction: column;

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
  `;

  const Links = styled.div`
    display: flex;
    border-top: solid 1px black;
    justify-content: center;
    align-items: center;
  `;

  const LinkItem = styled.div`
    margin: 10px 10px 10px 10px;
  `;

  /*
    height: auto;
    
  */

  const Image = styled.img`
    object-fit: cover;
    height: 100%;
    margin-top: 0;
  `;

  return (
    <Container>
      <Name>Project</Name>
      <Image src="https://thumbs.dreamstime.com/b/cat-hunts-rat-scottish-straight-closeup-brown-background-246757868.jpg"></Image>
      <Description>
        SKFJASFKSJDFALSDasilasfjlsfjjfalskfjasklfjalksdfalksdfhalksjfhasjklfKLSADKASDLSDKDJSKLDJASKLFAJSFKLASJFKLASFJASLKFJASKLDFJASLFKJ
      </Description>
      <Links>
        <LinkItem><GitHub/></LinkItem>
        <LinkItem><Language/></LinkItem>
      </Links>
    </Container>
  );
};
  
export default Project;
