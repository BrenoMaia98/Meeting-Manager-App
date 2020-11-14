export interface IMeetData {
  meetId: string;
  title: string;
  startTime: string;
  endTime: string;
  date: string;
  notification: string;
  description: string;
  guests: Array<any>;
  placePhoto: string;
}

export interface IMeetItem {
  data: IMeetData;
  DeleteMeetCallback(id: string): void;
  editCallback(id: string): void;
}
