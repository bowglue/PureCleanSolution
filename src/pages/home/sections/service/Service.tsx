import styled from "styled-components";
import SectionHeader from "../../../../components/header/SectionHeader";
import ServiceCard from "./ServiceCard";

const ServiceSection = styled.section`
  background: #252525;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* box-sizing: border-box; */
`;

const ServiceMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 3.5rem 0;
  max-width: 1500px;
  /* box-sizing: border-box; */
`;

const ServiceCardMask = styled.div`
  box-sizing: border-box;
  padding: 1.75rem;
  width: 25%;

  @media screen and (max-width: 1350px) {
    width: 33%;
    padding: 1rem;
  }

  @media screen and (max-width: 900px) {
    width: 50%;
    padding: 0.75rem;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const ListService = [
  {
    icon: "./SofaIcon.png",
    label: "Sofa",
  },
  {
    icon: "./carpet.png",
    label: "Carpet",
  },
  {
    icon: "./air-mattress.png",
    label: "Mattress",
  },
  {
    icon: "./car-chair.png",
    label: "Car Seats",
  },
  {
    icon: "./stairs.png",
    label: "Stair Mats",
  },
  {
    icon: "./chair.png",
    label: "Chair",
  },
  {
    icon: "./bed.png",
    label: "Bed",
  },
  {
    icon: "./other.png",
    label: "Other",
  },
];

const Service = () => {
  return (
    <ServiceSection>
      <SectionHeader>
        <SectionHeader.Title variant="shl">
          What do you want to clean?
        </SectionHeader.Title>
        <SectionHeader.Description>
          Choose the items you want to clean to get a quote.
        </SectionHeader.Description>
        <SectionHeader.Note>
          Note that the quote displayed is as accurate as the information you
          give. This is not a final price and may be subject to change if the
          information you enter is incorrect or not precise.
        </SectionHeader.Note>
      </SectionHeader>
      <ServiceMain>
        {ListService.map((args) => {
          return (
            <ServiceCardMask>
              <ServiceCard {...args} />
            </ServiceCardMask>
          );
        })}
      </ServiceMain>
    </ServiceSection>
  );
};

export default Service;
