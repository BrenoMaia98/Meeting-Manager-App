import React from 'react';
import { View } from 'react-native';
import { H5 } from '../../GlobalStyles/Typography';
import PrimaryInputText from '../PrimaryInputyText';
import { InputBox } from './styles';
import { IInputWithLabel } from './types';

const InputWithLabel: React.FC<IInputWithLabel> = (props) => {
  const { label } = props;
  return (
    <View>
      <H5>{label}</H5>
      <InputBox>
        <PrimaryInputText onChange={(text) => console.log(text)} />
      </InputBox>
    </View>
  );
};

export default InputWithLabel;
