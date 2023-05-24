import styled, { css } from "styled-components/native";
import { ButtonProps } from "./ButtonProps";
import { Platform } from "react-native";

const sizes = {
  small: 60,
}

export const CircleButton = styled.TouchableOpacity<ButtonProps>`
  ${({ size, disabled }) => css`
    height: ${sizes[size!]}px;
    width: ${sizes[size!]}px;
    border-radius: 60px;
    background-color: ${disabled ? '#b8b8b8' : '#fff' };
    margin-left: 20px;
    justify-content: center;
    align-items: center;
  
    ${Platform.select({
      ios: `
        shadow-color: #000;
        shadow-offset: 0px 2px;
        shadow-opacity: 0.1;
        shadow-radius: 2px;
      `,
      android: `
        elevation: 2;
      `
    })}
  `}
`;
