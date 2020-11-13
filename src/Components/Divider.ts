import styled from 'styled-components/native';
import { ColorPalette } from '../GlobalStyles/ColorPalette';

export const Divider = styled.View`
  margin-top: 8px;
  margin-bottom: 8px;
  border: 1px solid ${ColorPalette.secondaryText};
  width: 95%;
  align-self: center;
`;
