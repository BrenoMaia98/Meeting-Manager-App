export type IGuest = {
  name: string;
  id: string;
  isAdmin: boolean;
  response: boolean | null;
};
export interface IMeetData {
  meetId: string;
  title: string;
  startTime: string;
  endTime: string;
  date: string;
  notification: string;
  description: string;
  guests: Array<IGuest>;
  placePhoto: string;
}

export interface IMeetItem {
  data: IMeetData;
  DeleteMeetCallback(id: string): void;
  editCallback(id: string): void;
}
