import React, { ReactNode } from "react";
import styled from "styled-components";
import { ButtonSize } from "../../types/ButtonTypes";

type MapBaseSize = {
  [key in ButtonSize]: StyleSize;
};

type StyleSize = {
  height: string;
  padding: string;
  fontSize: string;
  lineHeight: string;
};

const mapBaseSize: MapBaseSize = {
  sm: {
    height: "2.5rem",
    padding: "0 1rem",
    fontSize: "1rem",
    lineHeight: "1.5rem",
  },
  base: {
    height: "3.5rem",
    padding: "0 1rem",
    fontSize: "1.25rem",
    lineHeight: "2rem",
  },
  lg: {
    height: "4rem",
    padding: "0 1.5rem",
    fontSize: "1.5rem",
    lineHeight: "2.5rem",
  },
};

const BaseButtonContainer = styled.button<StyleSize>`
  margin: 0;
  padding: ${({ padding }) => padding};
  height: ${({ height }) => height};
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  cursor: pointer;
`;

interface IBaseButtonProps {
  variant: React.CSSProperties;
  size?: ButtonSize;
  children: ReactNode;
  onClick: (event: React.MouseEvent) => void;
}

const BaseButton = ({
  variant,
  size = "base",
  children,
  onClick,
}: IBaseButtonProps) => {
  return (
    <BaseButtonContainer
      style={variant}
      {...mapBaseSize[size]}
      onClick={onClick}
    >
      {children}
    </BaseButtonContainer>
  );
};

export default BaseButton;
