import React from 'react';
import { TouchableOpacity } from 'react-native';
import { H5 } from '../../GlobalStyles/Typography';
import { MainScreenProps } from './types';
import { Container } from './styles';
import AppHeader from '../../Components/AppHeader';
import AppFooter from '../../Components/AppFooter';

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  return (
    <Container>
      <AppHeader user="Breno" />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <H5 underline>Voltar</H5>
      </TouchableOpacity>
      <AppFooter user="Breno" />
    </Container>
  );
};

export default MainScreen;
