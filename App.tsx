/* eslint-disable global-require */
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { loadAsync } from 'expo-font';
import { AppLoading } from 'expo';
import { Text } from 'react-native';
import StackNavigation from './routes/StackNavigation';

export default function App(): JSX.Element {
  const [fontloaded, setfontloaded] = React.useState(false);

  const fetchFonts = async () => {
    await loadAsync({
      'Roboto-Regular': require('./src/assets/fonts/Roboto/Roboto-Regular.ttf'),
      'Roboto-Medium': require('./src/assets/fonts/Roboto/Roboto-Medium.ttf'),
      'Vampiro-One': require('./src/assets/fonts/Vampiro_One/VampiroOne-Regular.ttf'),
      // 'Vampiro-One':
      //   'https://fonts.googleapis.com/css2?family=Vampiro+One&display=swap',
    });
  };

  React.useEffect(() => {
    fetchFonts().then(() => setfontloaded(true));
  }, []);

  if (!fontloaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
