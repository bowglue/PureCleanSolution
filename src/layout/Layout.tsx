import styled from "styled-components";
import Navbar from "./navbar/Navbar";
import Main from "./main/Main";
import Footer from "./footer/Footer";

const LayoutContainer = styled.div`
  position: relative;
  background-color: red;
  /* min-height: 100vh; */
`;
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutContainer>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
