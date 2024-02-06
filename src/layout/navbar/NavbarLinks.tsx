import styled from "styled-components";

import { ButtonSize, ButtonVariant } from "../../types/ButtonTypes";
import { IButtonProps } from "../../interface/ButtonInterface";
import SolidButton from "../../components/button/SolidButton";

interface ILinks {
  label: string;
  LinkButton: React.FC<IButtonProps>;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Links: ILinks[] = [
  {
    label: "Home",
    LinkButton: SolidButton,
  },
  {
    label: "Services",
    LinkButton: SolidButton,
  },
  {
    label: "About Us",
    LinkButton: SolidButton,
  },
  {
    label: "Contact Us",
    LinkButton: SolidButton,
  },
];

const NavbarLinksContainer = styled.div`
  display: flex;
  column-gap: 2.5rem;
  align-items: center;
`;

const NavbarLinks = () => {
  function handleClick() {}
  return (
    <NavbarLinksContainer>
      {Links.map(({ label, LinkButton, variant, size }) => (
        <LinkButton
          variant={variant ? variant : "link"}
          size={size}
          onClick={handleClick}
        >
          {label}
        </LinkButton>
      ))}
    </NavbarLinksContainer>
  );
};

export default NavbarLinks;
