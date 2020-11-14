import styled from 'styled-components/native';
import { ColorPalette } from '../../GlobalStyles/ColorPalette';
import { deviceSpecs } from '../../GlobalStyles/Device';
import { H4, Paragraph } from '../../GlobalStyles/Typography';

export const ShaddowBG = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
`;
export const ModalBox = styled.View`
  width: ${deviceSpecs.width * 0.93}px;
  border-radius: 8px;
  border: 1px solid ${ColorPalette.primaryText}
  background-color: ${ColorPalette.backgroundColor};
`;

export const TitleBox = styled.View`
  background-color: ${ColorPalette.danger};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
export const Title = styled(H4)`
  padding: 8px 4px;
  text-align: center;
`;

export const Description = styled(Paragraph)`
  padding: 16px;
  text-align: center;
  color: ${ColorPalette.secondaryText};
`;

export const ActionsRow = styled.View`
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

export const CancelButton = styled.TouchableOpacity`
  color: ${ColorPalette.white};
  padding: 10px;
  width: 100px;
  align-items: center;
  background-color: ${ColorPalette.edit};
`;
