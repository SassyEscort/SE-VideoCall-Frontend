import axios, { AxiosError } from 'axios';

export type payoutDataResponse = {
  amount: number;
  bank_name: string;
  created_at: string;
  email: string;
  id: number;
  model_id: number;
  name: string;
  state: string;
};
export type PaginationAggregation = {
  offset: number;
  page_size: number;
  total_rows: number;
};
export type data = {
  payout_details: payoutDataResponse[];
  aggregate: PaginationAggregation;
};
export type payoutResponse = {
  data: data;
  code: number;
  error: string | null;
  message: string;
};
export class payoutDetailsService {
  static getPayoutDetails = async (token: string, limit: number, offset: number): Promise<payoutResponse> => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/admin/model/payouts?limit=${limit}&offset=${offset}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as payoutResponse;
    }
  };
}
