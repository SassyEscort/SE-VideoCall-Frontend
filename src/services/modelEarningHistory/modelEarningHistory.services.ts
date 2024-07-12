import axios from 'axios';
import { earningParams } from 'views/protectedDashboardViews/earningHistory';
import { ModelEarningChartPageDetailsRes, ModelEarningHistoryPageDetailsRes } from './typs';
import { GetTotalEarningDataParams } from 'services/modelDetails/type';
import { KeyPair } from 'types/KeyPair';
import { encodeQuery } from 'utils/genericFunction';

export class ModelEarningHistoryService {
  static getEarningHistoryDetails = async (params: earningParams, token: string): Promise<ModelEarningHistoryPageDetailsRes> => {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_BASE_URL +
          `/v1/catalog/ledger?category=${params.category}&details=${params.details}&limit=${params.limit}&offset=${params.offset}&start_date=${params.start_date}&end_date=${params.end_date}`,
        {
          headers: { 'Content-Type': 'application/json', Authorization: token }
        }
      );

      return res.data;
    } catch (err) {
      return err as ModelEarningHistoryPageDetailsRes;
    }
  };

  static getEarningChartDetails = async (token: string, params: GetTotalEarningDataParams): Promise<ModelEarningChartPageDetailsRes> => {
    const query = encodeQuery(params as unknown as KeyPair);
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/call/analysis?${query}`, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (err) {
      return err as ModelEarningChartPageDetailsRes;
    }
  };
}
