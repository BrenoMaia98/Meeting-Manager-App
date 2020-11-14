import styled from 'styled-components/native';
import { ColorPalette } from '../../GlobalStyles/ColorPalette';
import { deviceSpecs } from '../../GlobalStyles/Device';
import { H4, H5, H6 } from '../../GlobalStyles/Typography';

export const Container = styled.View`
  width: ${deviceSpecs.width * 0.9}px;
  background-color: ${ColorPalette.backgroundColor};
  border: 1px solid ${ColorPalette.primaryText};
  border-radius: 8px;
`;

export const MeetTitleBox = styled.View`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${ColorPalette.tertiaryText};
  padding: 4px;
  justify-content: center;
  text-align: center;
`;

export const MeetTitle = styled(H4)`
  text-align: center;
  line-height: 24px;
`;

export const DataSection = styled.View`
  padding-left: 16px;
  padding-right: 16px;
`;
export const GuestsResponseBox = styled(DataSection)`
  flex-direction: row;
  justify-content: space-between;
`;

export const RowData = styled(H6)`
  padding-left: 16px;
  color: ${ColorPalette.secondaryText};
`;

export const RowBox = styled.View`
  padding: 8px 0px;
  flex-direction: row;
`;

export const RowSpaceBetween = styled(RowBox)`
  justify-content: space-between;
`;

export const MeetAction = styled.TouchableOpacity`
  flex-direction: row;
`;
