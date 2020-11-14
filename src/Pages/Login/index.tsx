import React from 'react';
import { H5, LogoText } from '../../GlobalStyles/Typography';
import { ImageBackground, LoginButton } from './styles';
import InputWithLabel from '../../Components/InputWithLabel';
import { LoginProps } from './types';
import { ColorPalette } from '../../GlobalStyles/ColorPalette';
import Database from '../../Database';

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [user, setUser] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const onChangeUser = (text: string) => {
    setUser(text);
  };
  const onChangePassword = (text: string) => {
    setPassword(text);
  };

  return (
    <ImageBackground
      source={require('../../assets/images/loginBG.png')}
      resizeMode="cover"
    >
      <LogoText>Meeting</LogoText>
      <InputWithLabel label="Usuário:" onChange={onChangeUser} value={user} />
      <InputWithLabel
        label="Senha:"
        onChange={onChangePassword}
        value={password}
      />
      <LoginButton
        onPress={async () => {
          console.log(await new Database().loadDatabase());
          // navigation.navigate('MainScreen');
        }}
      >
        <H5 color={ColorPalette.white}> Entrar</H5>
      </LoginButton>
      <H5 color={ColorPalette.white} underline>
        Cadastrar conta!
      </H5>
    </ImageBackground>
  );
};

export default Login;
