import { UserModel } from '../userModel';

export type MeetModel = {
  meetId: string;
  title: string;
  startTime: string;
  endTime: string;
  date: string;
  notification: string;
  description: string;
  guests: Array<UserModel>;
  placePhoto: string;
};

export default MeetModel;
