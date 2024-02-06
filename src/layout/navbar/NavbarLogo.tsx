import styled from "styled-components";

const NavbarLogoContainer = styled.div`
  /* background: green; */
`;

const NavbarLogo = () => {
  return (
    <NavbarLogoContainer>
      <img src="./logo.png" alt="" />
    </NavbarLogoContainer>
  );
};

export default NavbarLogo;
