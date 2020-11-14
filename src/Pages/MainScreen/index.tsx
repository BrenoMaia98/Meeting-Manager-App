import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { H5 } from '../../GlobalStyles/Typography';
import { MainScreenProps } from './types';
import { Container } from './styles';
import AppHeader from '../../Components/AppHeader';
import AppFooter from '../../Components/AppFooter';
import MeetItem from '../../Components/MeetItem';
import DeleteMeetModal from '../../Components/DeleteMeetModal';
import { IMeetData, IMeetItem } from '../../Components/MeetItem/types';
import EditMeetInfoModal from '../../Components/EditMeetModal';

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  const [isDeleteModalOpen, setDeleteModalOpen] = React.useState<boolean>(
    false
  );
  const [isEditModalOpen, setEditModalOpen] = React.useState<boolean>(false);
  const [selectedMeetIndex, setSelectedMeetIndex] = React.useState<index>(-1);
  const [meets, setMeets] = React.useState<Array<IMeetData>>([
    {
      title: 'Um título qualquer',
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

  const switchDeleteMeet = () => {
    setDeleteModalOpen(!isDeleteModalOpen);
  };

  const switchEdit = () => {
    setEditModalOpen(!isEditModalOpen);
  };

  const DeleteMeetCallback = (meetIndex: number) => {
    setSelectedMeetIndex(meetIndex);
    switchDeleteMeet();
  };
  const editCallback = (meetIndex: number) => {
    setSelectedMeetIndex(meetIndex);
    switchEdit();
  };

  const saveEditMeet = (meet: IMeetData) => {
    const meetsCopy = [...meets];
    if (selectedMeetIndex !== -1) {
      meetsCopy[selectedMeetIndex] = { ...meet };
    } else {
      meetsCopy.push(meet);
    }
    setMeets(meetsCopy);
    setSelectedMeetIndex(-1);
    switchEdit();
  };

  const deleteSelectedMeet = () => {
    const meetsCopy = [...meets];
    meetsCopy.splice(selectedMeetIndex, 1);
    setMeets(meetsCopy);
    setSelectedMeetIndex(-1);
    switchDeleteMeet();
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
                DeleteMeetCallback={() => {
                  DeleteMeetCallback(index);
                }}
                editCallback={() => editCallback(index)}
              />
            </View>
          );
        }}
      />
      <DeleteMeetModal
        title="Você tem certeza que deseja descartar as alterações? "
        description="Ao descarta-las, nenhuma edição será salva."
        confirmDeleteMeetBtnText="Excluir meet"
        isOpen={isDeleteModalOpen}
        cancelAction={() => switchDeleteMeet()}
        confirmAction={() => {
          deleteSelectedMeet();
        }}
      />
      <EditMeetInfoModal
        selectedMeetIndex={selectedMeetIndex}
        selectedMeet={
          selectedMeetIndex !== -1 ? meets[selectedMeetIndex] : undefined
        }
        isOpen={isEditModalOpen}
        cancelAction={() => switchEdit()}
        confirmAction={(meet: IMeetData) => {
          saveEditMeet(meet);
        }}
      />
      <AppFooter />
    </Container>
  );
};

export default MainScreen;
