import { ReactNode } from "react";
import { ButtonSize, ButtonVariant } from "../types/ButtonTypes";

export interface IButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  children: ReactNode;
  onClick: (event: React.MouseEvent) => void;
}
