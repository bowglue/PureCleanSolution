import { ReactNode } from "react";
import styled from "styled-components";
import { TitleSize } from "../../types/TitleTypes";

type MapTitleSize = {
  [key in TitleSize]: TitleStyleSize;
};

type TitleStyleSize = {
  fontSize: string;
};

const mapTitleSize: MapTitleSize = {
  sm: {
    fontSize: "1rem",
  },
  base: {
    fontSize: "3.5rem",
  },
  lg: {
    fontSize: "5rem",
  },
};

const BaseTitleContainer = styled.div<TitleStyleSize>`
  font-size: ${({ fontSize }) => fontSize};
  grid-area: 1/1;
  color: #252525;
`;

interface IBaseTitleProps {
  variant: React.CSSProperties;
  size?: TitleSize;
  children: ReactNode;
}

const BaseTitle = ({ children, size = "base", variant }: IBaseTitleProps) => {
  return (
    <BaseTitleContainer style={variant} {...mapTitleSize[size]}>
      {children}
    </BaseTitleContainer>
  );
};

export default BaseTitle;
