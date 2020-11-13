// In App.js in a new project

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../src/Pages/Login';
import MainScreen from '../src/Pages/MainScreen';

export type StackProps = {
  Login: undefined;
  MainScreen: undefined;
};
const Stack = createStackNavigator<StackProps>();
const StackNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
