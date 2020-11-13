import styled from 'styled-components/native';
import { ColorPalette } from '../../GlobalStyles/ColorPalette';
import { deviceSpecs } from '../../GlobalStyles/Device';
import { LogoText } from '../../GlobalStyles/Typography';

export const Container = styled.View`
  width: ${deviceSpecs.width}px;
  background-color: ${ColorPalette.tertiaryText};
  color: ${ColorPalette.primaryText};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  height: 80px;
  position: absolute;
  bottom: 0px;
`;
