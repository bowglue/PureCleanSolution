import styled from "styled-components";
import SectionHeader from "../../../../components/header/SectionHeader";

const ProcessSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fafafa;
  padding: 4rem 0;
`;

const Process = () => {
  return (
    <ProcessSection>
      <SectionHeader>
        <SectionHeader.Title>How our service works?</SectionHeader.Title>
        <SectionHeader.Description>
          Experience the difference with our trusted team – Book now for a home
          that's not just clean, but revitalized.
        </SectionHeader.Description>
      </SectionHeader>
    </ProcessSection>
  );
};

export default Process;
