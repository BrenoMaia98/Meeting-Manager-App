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
  align-items: baseline;
  padding: 16px 8px;
  height: 90px;
  position: absolute;
  top: 0px;
`;

export const LogoTextPosition = styled(LogoText)`
  padding-bottom: 16px;
`;
