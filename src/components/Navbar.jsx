import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const Container = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
    border: solid 1px;
  `;
  const MenuItem = styled.div`
    margin 15px 30px 20px 30px;
  `;

  return (
    <Container>
      <HashLink smooth to="#projects">
        <MenuItem>Projects</MenuItem>
      </HashLink>
      <HashLink smooth to="#cv">
        <MenuItem>CV</MenuItem>
      </HashLink>
      <HashLink smooth to="#about">
        <MenuItem>About</MenuItem>
      </HashLink>
      <HashLink smooth to="#contact">
        <MenuItem>Contact</MenuItem>
      </HashLink>
    </Container>
  );
};

export default Navbar;
