import React from 'react';

import { Alert, Image, TouchableOpacity } from 'react-native';

import { Container } from './styles';
import { IAppFooter } from './types';

const AppFooter: React.FC<IAppFooter> = ({ profile, add, filter }) => {
  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          profile();
        }}
      >
        <Image source={require('../../assets/icons/userFilled.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          add();
        }}
      >
        <Image source={require('../../assets/icons/add.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          filter();
        }}
      >
        <Image source={require('../../assets/icons/filter.png')} />
      </TouchableOpacity>
    </Container>
  );
};

export default AppFooter;
