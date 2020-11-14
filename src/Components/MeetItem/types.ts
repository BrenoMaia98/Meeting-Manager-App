import { MeetModel } from '../../Models/meetModel';

export interface IMeetItem {
  data: MeetModel;
  DeleteMeetCallback(id: string): void;
  editCallback(id: string): void;
}
