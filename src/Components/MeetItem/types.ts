export interface IMeetItem {
  meetId: string;
  startTime: string;
  endTime: string;
  date: string;
  notification: string;
  description: string;
  guests: Array<unknown>;
  placePhoto: string;
}
