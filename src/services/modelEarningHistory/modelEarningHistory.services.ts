import axios from 'axios';
import { earningParams } from 'views/protectedDashboardViews/earningHistory';
import { ModelEarningHistoryPageDetailsRes } from './typs';

export class ModelEarningHistoryService {
  static getEarningHistoryDetails = async (params: earningParams, token: string): Promise<ModelEarningHistoryPageDetailsRes> => {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_BASE_URL +
          `/v1/catalog/ledger?category=${params.category}&details=${params.details}&limit=${params.limit}&offset=${params.offset}`,
        {
          headers: { 'Content-Type': 'application/json', Authorization: token }
        }
      );

      return res.data;
    } catch (err) {
      return err as ModelEarningHistoryPageDetailsRes;
    }
  };
}
