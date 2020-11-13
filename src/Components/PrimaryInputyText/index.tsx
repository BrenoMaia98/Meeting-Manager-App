import React from 'react';

import { InputContainer, StyledTextInput } from './styles';

type IPrimaryInputText = {
  onChange(text: string): void;
  placeholder?: string;
  width?: number;
};

const PrimaryInputText: React.FC<IPrimaryInputText> = (props) => {
  const { onChange, placeholder, width } = props;
  return (
    <InputContainer customWidth={width || 200}>
      <StyledTextInput
        onChange={(text) => onChange(text.nativeEvent.text)}
        placeholder={placeholder || 'Digite aqui!'}
      />
    </InputContainer>
  );
};

export default PrimaryInputText;
