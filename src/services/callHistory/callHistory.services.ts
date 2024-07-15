import axios from 'axios';
import { CallHistoryPageDetailsRes } from './types';

export class CallHistoryService {
  static getCallHistoryDetails = async (token: string): Promise<CallHistoryPageDetailsRes> => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/call/history?limit=10&offset=0`, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (err) {
      return err as CallHistoryPageDetailsRes;
    }
  };
}
