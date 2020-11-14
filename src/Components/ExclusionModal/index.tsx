import React from 'react';

import { TouchableOpacity, Modal } from 'react-native';
import { ColorPalette } from '../../GlobalStyles/ColorPalette';
import { H4, H5, H6 } from '../../GlobalStyles/Typography';

import {
  ModalBox,
  ShaddowBG,
  TitleBox,
  Title,
  Description,
  CancelButton,
  ActionsRow,
} from './styles';
import { IExclusionModal } from './types';

const ExclusionModal: React.FC<IExclusionModal> = (props) => {
  const {
    title,
    description,
    confirmExclusionBtnText,
    isOpen,
    confirmAction,
    cancelAction,
  } = props;
  return (
    <Modal
      transparent
      animationType="slide"
      visible={isOpen}
      onRequestClose={cancelAction}
    >
      <ShaddowBG onPress={() => cancelAction()}>
        <ModalBox>
          <TitleBox>
            <Title color={ColorPalette.white}>{title}</Title>
          </TitleBox>

          <Description>{description}</Description>

          <ActionsRow>
            <CancelButton onPress={cancelAction}>
              <H5 color={ColorPalette.white}>Voltar</H5>
            </CancelButton>

            <TouchableOpacity onPress={confirmAction}>
              <H6 color={ColorPalette.danger}>{confirmExclusionBtnText}</H6>
            </TouchableOpacity>
          </ActionsRow>
        </ModalBox>
      </ShaddowBG>
    </Modal>
  );
};

export default ExclusionModal;
