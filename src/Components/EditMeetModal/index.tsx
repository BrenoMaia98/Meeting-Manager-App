import React from 'react';

import { Image, TouchableOpacity, Modal } from 'react-native';
import { ColorPalette } from '../../GlobalStyles/ColorPalette';
import { deviceSpecs } from '../../GlobalStyles/Device';
import { H4, H5, H6 } from '../../GlobalStyles/Typography';
import DeleteMeetModal from '../DeleteMeetModal';
import InputWithLabel from '../InputWithLabel';
import { IMeetData } from '../MeetItem/types';
import PrimaryInputText from '../PrimaryInputyText';
import {
  SaveButton,
  ContentBox,
  CenterContent,
  DividerWithMargin,
  ActionsRow,
  RowAlign,
  HeaderEdit,
  BackButton,
} from './styles';
import { IEditMeetInfoModal } from './types';

const EditMeetInfoModal: React.FC<IEditMeetInfoModal> = (props) => {
  const {
    selectedMeetIndex,
    selectedMeet,
    isOpen,
    confirmAction,
    cancelAction,
  } = props;

  const [isOpenDiscartModal, setIsOpenDiscartModal] = React.useState<boolean>(
    false
  );
  const [guestInput, setGuestInput] = React.useState<string>('');
  const [editingMeetInfo, setEditingMeetInfo] = React.useState<IMeetData>(
    selectedMeet || {
      meetId: '',
      title: '',
      startTime: '',
      endTime: '',
      date: '',
      notification: '',
      description: '',
      guests: [],
      placePhoto: '',
    }
  );

  React.useEffect(() => {
    if (selectedMeet) setEditingMeetInfo(selectedMeet);
  }, [selectedMeet]);

  const onChangeTitle = (text: string) => {
    setEditingMeetInfo({ ...editingMeetInfo, title: text });
  };

  const onChangeDescription = (text: string) => {
    setEditingMeetInfo({ ...editingMeetInfo, description: text });
  };

  const onChangeDate = (text: string) => {
    const numberOnly = text.replace(/\D/g, '');
    let formattedDate = numberOnly.substring(0, 2);
    if (numberOnly.length > 2) {
      formattedDate += `/${numberOnly.substring(2, 4)}`;
    }
    if (numberOnly.length > 4) {
      formattedDate += `/${numberOnly.substring(4)}`;
    }

    setEditingMeetInfo({ ...editingMeetInfo, date: formattedDate });
  };

  const onChangeHour = (text: string, identifier: string) => {
    const numberOnly = text.replace(/\D/g, '').substring(0, 4);
    let formattedHour = numberOnly.substring(0, 2);
    if (numberOnly.length > 2)
      formattedHour += `:${numberOnly.substring(2, 4)}`;

    if (identifier === 'start')
      setEditingMeetInfo({ ...editingMeetInfo, startTime: formattedHour });
    else setEditingMeetInfo({ ...editingMeetInfo, endTime: formattedHour });
  };

  const addGuest = () => {
    setEditingMeetInfo({
      ...editingMeetInfo,
      guests: [
        ...editingMeetInfo.guests,
        { id: '', isAdmin: false, name: guestInput, response: null },
      ],
    });
    setGuestInput('');
  };

  const removeguest = (index: number) => {
    const copy = [...editingMeetInfo.guests];
    copy.splice(index, 1);

    setEditingMeetInfo({
      ...editingMeetInfo,
      guests: [...copy],
    });
  };

  const switchDiscartModal = () => {
    setIsOpenDiscartModal(!isOpenDiscartModal);
  };

  if (!isOpen) return null;

  return (
    <Modal
      transparent
      animationType="slide"
      visible={isOpen}
      onRequestClose={cancelAction}
    >
      <HeaderEdit>
        <BackButton
          onPress={() => {
            cancelAction();
          }}
        >
          <Image source={require('../../assets/icons/leftArrow.png')} />
        </BackButton>
        <H4>{`${selectedMeetIndex !== -1 ? 'Editando' : 'Criando'} meet`}</H4>
      </HeaderEdit>

      <ContentBox>
        <InputWithLabel
          customWidth={deviceSpecs.width * 0.65}
          label="Título da reunião:"
          onChange={onChangeTitle}
          value={editingMeetInfo.title}
        />

        <DividerWithMargin />

        <H5>Data:</H5>
        <CenterContent>
          <PrimaryInputText
            width={deviceSpecs.width * 0.6}
            onChange={onChangeDate}
            value={editingMeetInfo.date}
          />
        </CenterContent>

        <H5>Hora:</H5>
        <ActionsRow>
          <PrimaryInputText
            width={deviceSpecs.width * 0.3}
            onChange={(text) => onChangeHour(text, 'start')}
            value={editingMeetInfo.startTime}
          />
          <H5>Até</H5>
          <PrimaryInputText
            width={deviceSpecs.width * 0.3}
            onChange={(text) => onChangeHour(text, 'end')}
            value={editingMeetInfo.endTime}
          />
        </ActionsRow>

        <DividerWithMargin />

        <InputWithLabel
          customWidth={deviceSpecs.width * 0.65}
          label="Descrição:"
          onChange={onChangeDescription}
          value={editingMeetInfo.description}
        />

        <DividerWithMargin />

        <RowAlign>
          <InputWithLabel
            label="Convidados (e-mail):"
            customWidth={deviceSpecs.width * 0.65}
            placeholder="email.examplo@gmail.com"
            value={guestInput}
            onChange={(text: string) => setGuestInput(text)}
          />
          <TouchableOpacity onPress={addGuest}>
            <Image
              style={{ marginTop: 18, marginLeft: 8 }}
              source={require('../../assets/icons/add.png')}
            />
          </TouchableOpacity>
        </RowAlign>
        {editingMeetInfo.guests.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ActionsRow key={`${item}-${index}`}>
            <Image source={require('../../assets/icons/dot.png')} />
            <H5>{item.name}</H5>
            <TouchableOpacity onPress={() => removeguest(index)}>
              <Image source={require('../../assets/icons/close.png')} />
            </TouchableOpacity>
          </ActionsRow>
        ))}

        <ActionsRow>
          <SaveButton onPress={() => confirmAction(editingMeetInfo)}>
            <H5 color={ColorPalette.white}>Salvar meet</H5>
          </SaveButton>

          <TouchableOpacity onPress={() => switchDiscartModal()}>
            <H6 color={ColorPalette.danger}>Descartar alterações</H6>
          </TouchableOpacity>
        </ActionsRow>
      </ContentBox>

      <DeleteMeetModal
        title="Você tem certeza que deseja descartar as alterações? "
        description="Ao descarta-las, toda edição realizada neste meet será perdida."
        confirmDeleteMeetBtnText="Descartar alterações"
        isOpen={isOpenDiscartModal}
        cancelAction={() => switchDiscartModal()}
        confirmAction={() => {
          cancelAction();
        }}
      />
    </Modal>
  );
};

export default EditMeetInfoModal;
