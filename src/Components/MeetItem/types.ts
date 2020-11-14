export interface IMeetData {
  meetId: string;
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
  exclusionCallback(id: string): void;
  editCallback(id: string): void;
}
