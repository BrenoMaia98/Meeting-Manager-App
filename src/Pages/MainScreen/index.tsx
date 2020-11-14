import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { H5 } from '../../GlobalStyles/Typography';
import { MainScreenProps } from './types';
import { Container } from './styles';
import AppHeader from '../../Components/AppHeader';
import AppFooter from '../../Components/AppFooter';
import MeetItem from '../../Components/MeetItem';
import ExclusionModal from '../../Components/ExclusionModal';
import { IMeetData } from '../../Components/MeetItem/types';

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  const [isExclusionOpen, setExclusionOpen] = React.useState<boolean>(false);
  const [isEditOpen, setEditOpen] = React.useState<boolean>(false);
  const [selectedMeetIndex, setSelectedMeetIndex] = React.useState<index>(-1);
  const [meets, setMeets] = React.useState<Array<IMeetData>>([
    {
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
    },
    {
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
    },
    {
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
    },
  ]);

  const switchExclusion = () => {
    setExclusionOpen(!isExclusionOpen);
  };

  const switchEdit = () => {
    setEditOpen(!isEditOpen);
  };

  const exclusionCallback = (meetIndex: number) => {
    setSelectedMeetIndex(meetIndex);
    switchExclusion();
  };
  const editCallback = (meetIndex: number) => {
    setSelectedMeetIndex(meetIndex);
    switchEdit();
  };

  const deleteSelectedMeet = () => {
    const meetsCopy = [...meets];
    setExclusionOpen(true);
    meetsCopy.splice(selectedMeetIndex, 1);
    setMeets(meetsCopy);
    setSelectedMeetIndex(-1);
    switchExclusion();
  };

  return (
    <Container>
      <AppHeader
        user="Breno"
        exitAction={() => {
          navigation.navigate('Login');
        }}
      />
      <FlatList
        style={{ position: 'absolute', top: 95, bottom: 85 }}
        data={meets}
        extraData={meets}
        keyExtractor={(item, index) => `${item.meetId}-${index}`}
        renderItem={({ item: meetData, index }) => {
          return (
            <View style={{ marginTop: 16, marginBottom: 16 }}>
              <MeetItem
                data={meetData}
                exclusionCallback={() => {
                  exclusionCallback(index);
                }}
                editCallback={() => editCallback(index)}
              />
            </View>
          );
        }}
      />
      <ExclusionModal
        title="Você tem certeza que deseja descartar as alterações? "
        description="Ao descarta-las, nenhuma edição será salva."
        confirmExclusionBtnText="Excluir meet"
        isOpen={isExclusionOpen}
        cancelAction={() => setExclusionOpen(false)}
        confirmAction={() => {
          deleteSelectedMeet();
        }}
      />
      <AppFooter />
    </Container>
  );
};

export default MainScreen;
