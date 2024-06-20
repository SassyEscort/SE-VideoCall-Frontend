import axios from 'axios';
import { ModelBillingHistoryPageDetailsRes } from './types';
import { billingHistoryParams } from 'views/protectedViews/BillingHistory';

export class ModelBillingHistoryService {
  static getBillingHistoryDetails = async (params: billingHistoryParams, token: string): Promise<ModelBillingHistoryPageDetailsRes> => {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/catalog/ledger?limit=${params.limit}&offset=${params.offset}`,
        {
          headers: { 'Content-Type': 'application/json', Authorization: token }
        }
      );

      return res.data;
    } catch (err) {
      return err as ModelBillingHistoryPageDetailsRes;
    }
  };
}
