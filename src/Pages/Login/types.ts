import { StackNavigationProp } from '@react-navigation/stack';
import { StackProps } from '../../../routes/StackNavigation';

type LoginScreenNavigationProp = StackNavigationProp<StackProps, 'Login'>;

export interface LoginProps {
  navigation: LoginScreenNavigationProp;
}
