import styled from "styled-components";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";

const NavbarContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 10000;
  /* background-color: #0080004f; */
  padding: 3rem 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background: linear-gradient(
    to bottom,
    rgb(1, 1, 8, 0.8),
    rgb(1, 1, 8, 0.4) 50%,
    transparent
  );
`;

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <NavbarLogo />
        <NavbarLinks />
      </NavbarContainer>
    </>
  );
};

export default Navbar;
