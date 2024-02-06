import styled from "styled-components";
import DetailsLanding from "./DetailsLanding";
import BackgroundLanding from "./BackgroundLanding";

const LandingContainer = styled.section`
  position: relative;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Landing = () => {
  return (
    <LandingContainer>
      <BackgroundLanding />
      <DetailsLanding />
    </LandingContainer>
  );
};

export default Landing;
