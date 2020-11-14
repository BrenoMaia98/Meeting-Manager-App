import React from 'react';

import { InputContainer, StyledTextInput } from './styles';
import { IPrimaryInputText } from './types';

const PrimaryInputText: React.FC<IPrimaryInputText> = (props) => {
  const { onChange, placeholder, width, value } = props;
  return (
    <InputContainer customWidth={width || 200}>
      <StyledTextInput
        value={value}
        onChange={(text) => onChange(text.nativeEvent.text)}
        placeholder={placeholder || 'Digite aqui!'}
      />
    </InputContainer>
  );
};

export default PrimaryInputText;
