import React from 'react';

import { Alert, Image, TouchableOpacity } from 'react-native';

import { H6 } from '../../GlobalStyles/Typography';

import { Container, LogoTextPosition } from './styles';
import { IAppHeader } from './types';

const AppHeader: React.FC<IAppHeader> = (props) => {
  const { user, exitAction } = props;
  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          exitAction();
        }}
      >
        <Image source={require('../../assets/icons/logoutIcon.png')} />
      </TouchableOpacity>
      <LogoTextPosition small>Meeting</LogoTextPosition>
      <H6>{`Usuário: \n ${user}`}</H6>
    </Container>
  );
};

export default AppHeader;
