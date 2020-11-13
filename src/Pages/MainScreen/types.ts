import { StackNavigationProp } from '@react-navigation/stack';
import { StackProps } from '../../../routes/StackNavigation';

type MainScreenScreenNavigationProp = StackNavigationProp<
  StackProps,
  'MainScreen'
>;

export interface MainScreenProps {
  navigation: MainScreenScreenNavigationProp;
}
