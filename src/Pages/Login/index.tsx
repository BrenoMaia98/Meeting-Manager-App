import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackProps } from '../../../routes/StackNavigation';
import { H5, LogoText } from '../../GlobalStyles/Typography';
import PrimaryInputText from '../../Components/PrimaryInputyText';

type LoginScreenNavigationProp = StackNavigationProp<StackProps, 'Login'>;

interface Props {
  navigation: LoginScreenNavigationProp;
}
const Login: React.FC<Props> = ({ navigation }) => {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#6f6f46',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LogoText>Meeting</LogoText>
      <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
        <PrimaryInputText onChange={(text) => console.log(text)} />

        <H5> Click me!</H5>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
