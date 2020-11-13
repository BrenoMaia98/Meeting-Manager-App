import styled from 'styled-components/native';
import { ColorPalette } from '../../GlobalStyles/ColorPalette';
import { H5 } from '../../GlobalStyles/Typography';

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`;

export const LoginButton = styled.TouchableOpacity<{ width?: number }>`
  width: ${({ width }) => width || 200}px;
  padding: 12px;

  align-items: center;

  border-radius: 16px;
  border: 1px solid ${ColorPalette.primaryText};
  background-color: ${ColorPalette.secondaryText};
`;
