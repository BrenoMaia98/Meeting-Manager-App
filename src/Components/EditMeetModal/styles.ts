import styled from 'styled-components/native';
import { ColorPalette } from '../../GlobalStyles/ColorPalette';
import { deviceSpecs } from '../../GlobalStyles/Device';
import { H4, Paragraph } from '../../GlobalStyles/Typography';
import { Divider } from '../Divider';

export const HeaderEdit = styled.View`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 60px;
  background-color: ${ColorPalette.secondaryText};
  justify-content: center;
  align-items: center;
`;

export const DividerWithMargin = styled(Divider)`
  margin: 24px 0px;
`;

export const ContentBox = styled.ScrollView`
  position: absolute;
  top: 60px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  padding: 8px;
  background-color: ${ColorPalette.backgroundColor};
`;

export const CenterContent = styled.View`
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 8px;
`;

export const ActionsRow = styled.View`
  padding: 16px;
  width: ${deviceSpecs.width * 0.95}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

export const GuestsRow = styled(ActionsRow)`
  padding: 8px;
  justify-content: center;
`;

export const RowAlign = styled(ActionsRow)`
  align-items: center;
`;

export const SaveButton = styled.TouchableOpacity`
  color: ${ColorPalette.white};
  padding: 10px;
  min-width: 100px;
  align-items: center;
  background-color: ${ColorPalette.edit};
`;
