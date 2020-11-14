import { MeetModel } from '../../Models/meetModel';

export type IEditMeetInfoModal = {
  selectedMeetIndex: number;
  selectedMeet?: MeetModel;
  isOpen: boolean;
  confirmAction(meet: MeetModel): void;
  cancelAction(): void;
};
