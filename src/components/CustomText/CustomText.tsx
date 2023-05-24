import React from "react";
import * as S from './styles';
import { StyleProp, TextStyle } from "react-native";

export interface CustomTextProps {
  children: React.ReactNode
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  textStyles?: StyleProp<TextStyle>;
  type?: 'text' | 'title'
}

const TextVariants = {
  text: S.Text,
  title: S.Title
};

function CustomText({ children, type, ...rest }: CustomTextProps) {
  
  const TextVariant: React.FC<CustomTextProps> = TextVariants[type || 'text'];

  
  return(
    <TextVariant {...rest}>
      {children}
    </TextVariant>
  );
}

export default CustomText;