import styled from "styled-components";

const ServiceCardContainer = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 0;
  border-radius: 25px 2px 25px 2px;
  border: solid 3px #000000;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 1);
`;

const ServiceCardMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: fit-content;
  }

  h1 {
    text-align: center;

    margin: 1rem 0 0;
    font-family: "Cabin", sans-serif;
    font-size: 2rem;
    font-weight: 600;
  }
`;

interface IServiceCardProps {
  icon: string;
  label: string;
}
const ServiceCard = ({ icon, label }: IServiceCardProps) => {
  return (
    <ServiceCardContainer>
      <ServiceCardMain>
        <img src={icon} alt="" />
        <h1>{label}</h1>
      </ServiceCardMain>
    </ServiceCardContainer>
  );
};

export default ServiceCard;
