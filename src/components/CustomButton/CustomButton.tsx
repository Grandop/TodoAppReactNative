import React from "react";
import * as S from './styles';
import { ButtonProps } from "./ButtonProps";

const ButtonVariants = {
  circle: S.CircleButton,
};

function CustomButton({
  size = 'small',
  onPress,
  disabled,
  children,
  btnVariant
}: ButtonProps) {

  const ButtonVariant: React.FC<ButtonProps> = ButtonVariants[btnVariant || 'circle'];

  return(
    <ButtonVariant
    disabled={disabled}
    onPress={onPress}
    size={size}
  >
    {children}
  </ButtonVariant>
  );
}

export default CustomButton;

