import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackProps } from '../../../routes/StackNavigation';

type MainScreenScreenNavigationProp = StackNavigationProp<
  StackProps,
  'MainScreen'
>;

interface Props {
  navigation: MainScreenScreenNavigationProp;
}

const Login: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text> Click me!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
