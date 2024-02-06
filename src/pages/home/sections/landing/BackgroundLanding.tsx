import styled from "styled-components";

const BackgroundLandingContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 0;
`;

const Img = styled.img`
  object-fit: cover;
  object-position: left bottom;
  width: 100%;
  height: 100%;
`;

const ImgGradient = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to left, rgb(1, 1, 15), rgba(1, 1, 15, 0.2));
  /* background: radial-gradient(rgba(1, 1, 15, 0.1), rgb(1, 1, 15)); */
`;
const BackgroundLanding = () => {
  return (
    <BackgroundLandingContainer>
      <Img src="./Carpet-Cleaning.jpg" alt="" />
      <ImgGradient />
    </BackgroundLandingContainer>
  );
};

export default BackgroundLanding;
