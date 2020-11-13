import React from 'react';
import { H5, LogoText } from '../../GlobalStyles/Typography';
import { ImageBackground, LoginButton } from './styles';
import InputWithLabel from '../../Components/InputWithLabel';
import { LoginProps } from './types';

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const onChangeUser = (text: string) => {
    console.log(text);
  };
  const onChangePassword = (text: string) => {
    console.log(text);
  };

  return (
    <ImageBackground
      source={require('../../assets/images/loginBG.png')}
      resizeMode="cover"
    >
      <LogoText>Meeting</LogoText>
      <InputWithLabel label="Usuário" onChange={onChangeUser} />
      <InputWithLabel label="Senha" onChange={onChangePassword} />
      <LoginButton onPress={() => navigation.navigate('MainScreen')}>
        <H5 white> Entrar</H5>
      </LoginButton>
      <H5 white underline>
        Cadastrar conta!
      </H5>
    </ImageBackground>
  );
};

export default Login;
