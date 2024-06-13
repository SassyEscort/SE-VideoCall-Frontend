import axios, { AxiosError } from 'axios';

export type withdrawParams = {
  withdrawal_amt: string;
};

export type WithdrawResponse = {
  data: string | null;
  code: number;
  error: string | null;
  message: string;
};

export class withdrawMinAmountServices {
  static withdrawMinAmount = async (params: withdrawParams, token: string): Promise<WithdrawResponse> => {
    try {
      const res = await axios.post<WithdrawResponse>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/model/withdrawal-amount`, params, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });
      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as WithdrawResponse;
    }
  };
}
