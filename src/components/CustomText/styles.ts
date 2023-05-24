import styled, { css } from "styled-components/native";
import { CustomTextProps } from "./CustomText";
import { RFValue } from "react-native-responsive-fontsize";

export const Text = styled.Text<CustomTextProps>`
  ${({fontSize, color}) => css`
    font-size: ${fontSize};
    color: ${color};
    font-family: 'Roboto-Regular';
  `}
`;

export const Title = styled(Text)<CustomTextProps>`
  ${({fontSize, color}) => css`
    font-size: ${fontSize};
    color: ${color};
    font-family: 'Roboto-Bold';
  `}
`;