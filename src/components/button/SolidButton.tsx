import React from "react";
import BaseButton from "./BaseButton";
import { IButtonProps } from "../../interface/ButtonInterface";
import { ButtonVariant } from "../../types/ButtonTypes";

type MapSolidVariant = {
  [key in ButtonVariant]: React.CSSProperties;
};

const mapSolidVariant: MapSolidVariant = {
  primary: { backgroundColor: "white" },
  danger: { backgroundColor: "rgb(185 28 28)", color: "white" },
  plain: {
    backgroundColor: "#FFDD59",
    fontWeight: "900",
    textTransform: "uppercase",
    color: "none",
    borderRadius: "8px",
    boxShadow: "0px 5px 20px #000000BF",
    minWidth: "227px",
  },
  link: { background: "none", fontWeight: "600", color: "white" },
};

const SolidButton = ({
  size,
  variant = "primary",
  children,
  onClick,
}: IButtonProps) => {
  return (
    <>
      <BaseButton
        variant={mapSolidVariant[variant]}
        size={size}
        onClick={onClick}
      >
        {children}
      </BaseButton>
    </>
  );
};

export default SolidButton;
