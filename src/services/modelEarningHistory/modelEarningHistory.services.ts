import axios, { AxiosError } from 'axios';
import { earningParams } from 'views/protectedDashboardViews/earningHistory';

export class ModelEarningHistoryService {
  static getEarningHistoryDetails = async (params: earningParams, token: string) => {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_BASE_URL +
          `/v1/model/ledger?category=${params.category}&details=${params.details}&limit=${params.limit}&offset=${params.offset}`,
        {
          headers: { 'Content-Type': 'application/json', Authorization: token }
        }
      );
      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data || { error_message: error.message };
    }
  };
}
