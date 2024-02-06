import { TitleSize, TitleVariant } from "../../types/TitleTypes";
import BaseTitle from "./BaseTitle";

type MapVariant = {
  [key in TitleVariant]: React.CSSProperties;
};

const mapVariant: MapVariant = {
  shd: { color: "#252525", fontWeight: "700" },
  shl: { color: "#FAFAFA", fontWeight: "700" },
};

interface ITitleProps {
  children: React.ReactNode;
  size?: TitleSize;
  variant?: TitleVariant;
}

const BaseTitleVariant = ({ children, variant = "shd", size }: ITitleProps) => {
  return (
    <BaseTitle variant={mapVariant[variant]} size={size}>
      {children}
    </BaseTitle>
  );
};

export default BaseTitleVariant;
