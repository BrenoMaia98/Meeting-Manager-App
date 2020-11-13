import React from 'react';

import { Alert, Image, TouchableOpacity } from 'react-native';

import { Container } from './styles';

const AppFooter: React.FC = () => {
  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          Alert.alert('Work in progress!');
        }}
      >
        <Image source={require('../../assets/icons/userFilled.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Alert.alert('Work in progress!');
        }}
      >
        <Image source={require('../../assets/icons/add.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Alert.alert('Work in progress!');
        }}
      >
        <Image source={require('../../assets/icons/filter.png')} />
      </TouchableOpacity>
    </Container>
  );
};

export default AppFooter;
