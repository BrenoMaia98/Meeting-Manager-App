import MeetModel from '../../Models/meetModel';
import Database from '../../Database';

export class MeetController {
  private db = new Database();

  createEmptyMeet = (): MeetModel => {
    return {
      title: '',
      startTime: '',
      endTime: '',
      date: '',
      notification: '',
      description: '',
      guests: [],
      meetId: '',
      placePhoto: '',
    };
  };

  getMeets = async (): Promise<Array<MeetModel>> => {
    const meetsString = await this.db.getMeets();
    if (!meetsString) return [];
    return JSON.parse(meetsString) as Array<MeetModel>;
  };

  deleteById = async (id: string): Promise<void> => {
    const stringMeets = await this.db.getMeets();
    const meets = JSON.parse(stringMeets) as Array<MeetModel>;
    const index = meets.findIndex((item) => item.meetId === id);
    meets.splice(index, 1);
    this.db.saveMeets(JSON.stringify(meets));
  };

  edit = async (data: MeetModel): Promise<void> => {
    const stringMeets = await this.db.getMeets();
    const meets = JSON.parse(stringMeets) as Array<MeetModel>;
    const index = meets.findIndex((item) => item.meetId === data.meetId);
    meets[index] = { ...data };
    this.db.saveMeets(JSON.stringify(meets));
  };

  saveAll = async (data: MeetModel[]) => {
    this.db.saveMeets(JSON.stringify(data));
  };
}
