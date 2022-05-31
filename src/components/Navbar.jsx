import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const Container = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    justify-content: center;
    height: 30px;
    background-color: inherit;

  `;

  const MenuItem = styled.div`
    padding: 0px 30px 0px 30px;
    height: 100%;
    color: black;
    text-decoration: none;
    :hover{
      color: orange;
      border-bottom: solid 3px black;
    }
  `;

  return (
    <Container>
      <HashLink style= {{textDecoration: 'none'}} smooth to='#projects'>
        <MenuItem>Projects</MenuItem>
      </HashLink>
      <HashLink style= {{textDecoration: 'none'}} smooth to='#cv'>
        <MenuItem>CV</MenuItem>
      </HashLink>
      <HashLink style= {{textDecoration: 'none'}} smooth to='#about'>
        <MenuItem>About</MenuItem>
      </HashLink>
      <HashLink style= {{textDecoration: 'none'}} smooth to='#contact'>
        <MenuItem>Contact</MenuItem>
      </HashLink>
    </Container>
  );
};

export default Navbar;
