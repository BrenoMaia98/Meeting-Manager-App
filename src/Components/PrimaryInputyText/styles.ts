import styled from 'styled-components/native';
import { ColorPalette } from '../../GlobalStyles/ColorPalette';

export const InputContainer = styled.View<{ customWidth: number }>`
  width: ${({ customWidth }) => customWidth}px;
`;
export const StyledTextInput = styled.TextInput`
  border-radius: 10px;
  background-color: ${ColorPalette.backgroundColor};
  border: 2px solid ${ColorPalette.secondaryText};
  padding: 4px 8px;
  width: 100%;
`;
