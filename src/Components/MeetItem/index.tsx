import React from 'react';

import { Image, View } from 'react-native';
import { H5, H6 } from '../../GlobalStyles/Typography';
import { Divider } from '../Divider';

import {
  Container,
  MeetTitleBox,
  DataSection,
  GuestsResponseBox,
  MeetTitle,
  RowData,
  RowBox,
  RowSpaceBetween,
  MeetAction,
} from './styles';
import { IMeetItem } from './types';

const MeetItem: React.FC<IMeetItem> = (props) => {
  const fakeProps = {
    startTime: '18:00',
    endTime: '19:00',
    date: '13/11/2020',
    notification: 'lorem Ipsum',
    description: '',
    guests: [
      {
        name: 'Breno',
        id: '1',
        isAdmin: true,
        response: null,
      },
      {
        name: 'Cássio',
        id: '2',
        isAdmin: false,
        response: true,
      },
    ],
    meetId: 'lorem Ipsum',
    placePhoto: '',
  };

  const {
    startTime,
    endTime,
    date,
    notification,
    description,
    guests,
    meetId,
    placePhoto,
  } = props;

  type guestsData = {
    total: number;
    confirmed: number;
    refused: number;
    pending: number;
  };
  const [guestsData, setGuestsData] = React.useState<guestsData>({
    total: 0,
    confirmed: 0,
    refused: 0,
    pending: 0,
  });

  React.useEffect(() => {
    setGuestsData({
      total: guests.length,
      confirmed: guests.filter((item) => item.response === true).length,
      refused: guests.filter((item) => item.response === false).length,
      pending: guests.filter((item) => item.response === null).length,
    });
  }, []);

  return (
    <Container>
      <MeetTitleBox>
        <MeetTitle>Reunião de alinhamento - novos funcionários CRM</MeetTitle>
      </MeetTitleBox>

      <DataSection>
        <RowSpaceBetween>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../assets/icons/clock.png')} />
            <H5>{`${startTime} ~ ${endTime}`}</H5>
          </View>
          <H5>{date}</H5>
        </RowSpaceBetween>
        <RowBox>
          <Image source={require('../../assets/icons/notification.png')} />
          <RowData>{notification}</RowData>
        </RowBox>
      </DataSection>

      <DataSection>
        <H5>Descrição:</H5>
        <RowData>{description || 'Não possui descrição.'}</RowData>

        <Divider />

        <H5>{`${guestsData.total} Convidados:`}</H5>
        <GuestsResponseBox>
          <H6>{`${guestsData.confirmed}: Sim`}</H6>
          <H6>{`${guestsData.refused}: Não`}</H6>
          <H6>{`${guestsData.pending}: Pendente`}</H6>
        </GuestsResponseBox>

        <Divider />

        <H5>Local:</H5>

        <Image source={require('../../assets/images/placeholder.png')} />

        <RowSpaceBetween>
          <MeetAction>
            <Image source={require('../../assets/icons/editPencil.png')} />
            <H6>Editar meet</H6>
          </MeetAction>

          <MeetAction>
            <H6>Excluir meet</H6>
            <Image source={require('../../assets/icons/trash.png')} />
          </MeetAction>
        </RowSpaceBetween>
      </DataSection>
    </Container>
  );
};

export default MeetItem;
