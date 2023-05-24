import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Platform } from "react-native";

export const TextFieldContainer = styled.View`
  background-color: #fff;
  height: ${RFValue(45)}px;
  width: ${RFValue(246)}px;
  border-radius: ${RFValue(60)}px;
  padding-left: ${RFValue(15)}px;
  padding-right: ${RFValue(15)}px;
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
`;

export const TextField = styled.TextInput`
  height: 100%;
`;