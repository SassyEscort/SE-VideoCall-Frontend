import axios from 'axios';
import { CallHistoryPageDetailsRes } from './types';
import { CallHistoryPaginationType } from 'views/protectedViews/CallHistory';

export class CallHistoryService {
  static getCallHistoryDetails = async (token: string, params: CallHistoryPaginationType): Promise<CallHistoryPageDetailsRes> => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/call/history?limit=${params.limit}&offset=${params.offset}`, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });
      return res.data;
    } catch (err) {
      return err as CallHistoryPageDetailsRes;
    }
  };
}
