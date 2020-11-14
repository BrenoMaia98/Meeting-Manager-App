import { IMeetData } from '../MeetItem/types';

export type IEditMeetInfoModal = {
  selectedMeetIndex: number;
  selectedMeet?: IMeetData;
  isOpen: boolean;
  confirmAction(meet: IMeetData): void;
  cancelAction(): void;
};
