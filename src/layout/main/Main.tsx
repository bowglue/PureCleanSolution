import styled from "styled-components";

const MainContainer = styled.div`
  flex-grow: 1;
`;

const Main = ({ children }: { children: React.ReactNode }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Main;
