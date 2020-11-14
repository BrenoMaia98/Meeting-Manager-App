import React from 'react';
import { Alert, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { MainScreenProps } from './types';
import { Container } from './styles';
import AppHeader from '../../Components/AppHeader';
import AppFooter from '../../Components/AppFooter';
import MeetItem from '../../Components/MeetItem';
import DeleteMeetModal from '../../Components/DeleteMeetModal';
import EditMeetInfoModal from '../../Components/EditMeetModal';
import { MeetModel } from '../../Models/meetModel';
import { MeetController } from '../../Controllers/MeetController';
import { H2 } from '../../GlobalStyles/Typography';

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  const [isDeleteModalOpen, setDeleteModalOpen] = React.useState<boolean>(
    false
  );
  const [isEditModalOpen, setEditModalOpen] = React.useState<boolean>(false);
  const [selectedMeetIndex, setSelectedMeetIndex] = React.useState<number>(-1);
  const [meets, setMeets] = React.useState<Array<MeetModel>>([]);

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

  const saveEditMeet = (meet: MeetModel) => {
    const meetsCopy = [...meets];
    if (selectedMeetIndex !== -1) {
      meetsCopy[selectedMeetIndex] = { ...meet };
    } else {
      meetsCopy.push(meet);
    }
    setMeets(meetsCopy);
    console.log('EDITED : ', JSON.stringify(meetsCopy, null, 2));
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

  React.useEffect(() => {
    const loadMeets = async () => {
      const controller = new MeetController();
      const initialMeets = await controller.getMeets();
      setMeets(initialMeets);
    };
    loadMeets();
  }, []);

  React.useEffect(() => {
    const controller = new MeetController();
    controller.saveAll(meets);
  }, [meets]);

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
        ListEmptyComponent={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <H2 style={{ textAlign: 'center', marginTop: 100 }}>
            Não existem meets registrados
          </H2>
        }
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

      {isDeleteModalOpen && (
        <DeleteMeetModal
          title="Você tem certeza que deseja excluir o meet?  "
          description="Ao excluir, o meet será desfeito e todos os convidados serão notificados da exclusão."
          confirmDeleteMeetBtnText="Excluir meet"
          isOpen={isDeleteModalOpen}
          cancelAction={() => switchDeleteMeet()}
          confirmAction={() => {
            deleteSelectedMeet();
          }}
        />
      )}

      {isEditModalOpen && (
        <EditMeetInfoModal
          selectedMeetIndex={selectedMeetIndex}
          selectedMeet={
            selectedMeetIndex !== -1 ? meets[selectedMeetIndex] : undefined
          }
          isOpen={isEditModalOpen}
          cancelAction={() => switchEdit()}
          confirmAction={(meet: MeetModel) => {
            saveEditMeet(meet);
          }}
        />
      )}

      <AppFooter
        profile={() => {
          Alert.alert('Work in progress!');
        }}
        add={() => {
          setSelectedMeetIndex(-1);
          console.log(selectedMeetIndex);
          switchEdit();
        }}
        filter={() => {
          Alert.alert('Work in progress!');
        }}
      />
    </Container>
  );
};

export default MainScreen;
