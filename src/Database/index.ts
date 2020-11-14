import { AsyncStorage } from 'react-native';
import { FakeMeetsDatabase } from './FakeDatabase';

export class Database {
  storeData = async (key: string, data: string): Promise<void> => {
    try {
      await AsyncStorage.setItem(`@ContAi:${key}`, data);
    } catch (error) {
      console.log(error);
    }
  };

  retrieveData = async (key: string): Promise<string> => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      }
    } catch (error) {
      console.log(error);
    }
    return '';
  };

  loadDatabase = async (): Promise<string> => {
    const data = await this.retrieveData('meets');
    if (!data) {
      const fake = JSON.stringify(FakeMeetsDatabase);
      await this.storeData('meets', fake);
      return fake;
    }

    return data;
  };

  checkLogin = (): boolean => {
    this.storeData('loginToken', 'aproved');
    return true;
  };

  saveMeets = (data: string): void => {
    this.storeData('meets', data);
  };

  getMeets = async (): Promise<string> => {
    const dataRetrieved = await this.retrieveData('meets');
    return dataRetrieved;
  };
}

export default Database;
