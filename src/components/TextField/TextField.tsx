import React from "react";
import * as S from './styles'

export interface TextFieldProp {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
};

function TextField({
  placeholder,
  value,
  secureTextEntry,
  onChangeText
}: TextFieldProp) {
  return(
    <S.TextFieldContainer>
      <S.TextField
        placeholder={placeholder}
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
    </S.TextFieldContainer>
  );
}

export default TextField;