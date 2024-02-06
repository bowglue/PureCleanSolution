import styled from "styled-components";

import { ReactNode } from "react";
import { TitleSize, TitleVariant } from "../../types/TitleTypes";
import BaseTitleVariant from "./BaseTitleVariant";

type MapVariant = {
  [key in TitleVariant]: React.CSSProperties;
};

const mapSpanVariant: MapVariant = {
  shd: { color: "#2525254c", fontWeight: "700" },
  shl: { color: "#FAFAFA26", fontWeight: "700" },
};

const mapDesctiptionVariant: MapVariant = {
  shd: { color: "#5C5C5C", fontWeight: "700" },
  shl: { color: "#FAFAFA80", fontWeight: "700" },
};

const SectionHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`;

const TitleContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;

  span {
    grid-area: 1/1;
    font-size: 12.5rem;
    line-height: 80%;
  }
`;

const DescriptionContainer = styled.div`
  font-family: "Cabin", sans-serif;
  font-size: 1.25rem;
  max-width: 600px;
  line-height: 1.75rem;
  text-align: center;
  margin: 1rem 0 0.5rem;
`;

const NoteContainer = styled.div`
  font-family: "Cabin", sans-serif;
  max-width: 600px;
  line-height: 1rem;
  font-weight: 400;
  font-style: italic;
  font-size: 1rem;
  color: #fafafa80;
  text-align: center;
`;

interface ISectionHeaderProps {
  children: ReactNode;
  size?: TitleSize;
  variant?: TitleVariant;
}

const SectionHeader = ({ children }: ISectionHeaderProps) => {
  return <SectionHeaderContainer>{children}</SectionHeaderContainer>;
};

SectionHeader.Title = ({
  children,
  size = "base",
  variant = "shd",
}: ISectionHeaderProps) => {
  return (
    <TitleContainer>
      <span style={mapSpanVariant[variant]}>?</span>
      <BaseTitleVariant variant={variant} size={size}>
        {children}
      </BaseTitleVariant>
    </TitleContainer>
  );
};

SectionHeader.Description = ({
  children,
  variant = "shd",
}: ISectionHeaderProps) => {
  return (
    <DescriptionContainer style={mapDesctiptionVariant[variant]}>
      {children}
    </DescriptionContainer>
  );
};

SectionHeader.Note = ({ children }: ISectionHeaderProps) => {
  return <NoteContainer>{children}</NoteContainer>;
};

export default SectionHeader;
