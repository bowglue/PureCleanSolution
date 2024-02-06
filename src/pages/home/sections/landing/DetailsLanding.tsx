import styled from "styled-components";
import SolidButton from "../../../../components/button/SolidButton";

const DetailsLandingContainer = styled.div`
  position: relative;
  max-width: 900px;
  margin-right: 10%;
  /* margin-top: 2%; */
  h1 {
    font-size: 6rem;
    font-weight: 700;
    line-height: 5rem;
    color: #fafafa;
    margin: 0;
  }

  p {
    color: #ffdd59;
    font-weight: 400;
    line-height: 2.25rem;
    font-size: 1.25rem;
    margin-top: 2rem;
    margin-bottom: 3rem;
    font-family: "Cabin", sans-serif;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2.5rem;
  margin-left: 6rem;
`;

const DetailsLanding = () => {
  return (
    <DetailsLandingContainer>
      <h1>Let us do the cleaning for you.</h1>
      <p>
        We specialize in expert carpet and sofa cleaning, using cutting-edge
        techniques and eco-friendly products. Our promise? A spotless home
        that's safe for your loved ones. Experience the difference with our
        trusted team – Book now for a home that's not just clean, but
        revitalized.
      </p>
      <ButtonContainer>
        <SolidButton variant="plain" size="base" onClick={() => {}}>
          Get A Quotation
        </SolidButton>
        <SolidButton variant="plain" size="base" onClick={() => {}}>
          Call Us
        </SolidButton>
      </ButtonContainer>
    </DetailsLandingContainer>
  );
};

export default DetailsLanding;
