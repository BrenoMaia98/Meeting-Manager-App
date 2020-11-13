/* eslint-disable global-require */
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import StackNavigation from './routes/StackNavigation';

export default function App(): JSX.Element {
  const [fontloaded, setfontloaded] = React.useState(false);

  const fetchFonts = async () => {
    return Font.loadAsync({
      'Roboto-Regular': require('./src/assets/fonts/Roboto/Roboto-Regular.ttf'),
      'Roboto-Medium': require('./src/assets/fonts/Roboto/Roboto-Medium.ttf'),
      'Vampiro-One': require('./src/assets/fonts/Vampiro_One/VampiroOne-Regular.ttf'),
      // 'Vampiro-One':
      //   'https://fonts.googleapis.com/css2?family=Vampiro+One&display=swap',
    });
  };

  if (!fontloaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setfontloaded(true);
        }}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
