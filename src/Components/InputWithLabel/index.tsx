import React from 'react';
import { View } from 'react-native';
import { H5 } from '../../GlobalStyles/Typography';
import PrimaryInputText from '../PrimaryInputyText';
import { InputBox } from './styles';
import { IInputWithLabel } from './types';

const InputWithLabel: React.FC<IInputWithLabel> = (props) => {
  const { label, ...input } = props;
  return (
    <View>
      <H5>{label}</H5>
      <InputBox>
        <PrimaryInputText
          width={input.customWidth}
          placeholder={input.placeholder}
          value={input.value}
          onChange={input.onChange}
        />
      </InputBox>
    </View>
  );
};

export default InputWithLabel;
