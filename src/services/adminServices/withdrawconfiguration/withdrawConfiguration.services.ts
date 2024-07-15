import axios, { AxiosError } from 'axios';
import { GenericResponse } from 'types/commonApiTypes';

export type withdrawParams = {
  withdrawal_amt: string | number;
};

export type WithdrawResponse = {
  data: string | null;
  code: number;
  error: string | null;
  message: string;
};

export interface AdminWithdrawResponseData {
  amount: number;
}

export type AdminWithdrawResponse = GenericResponse & {
  data: AdminWithdrawResponseData;
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

  static modelWithdrawAmountGet = async (token: string): Promise<AdminWithdrawResponse> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/model/withdrawal-amount`;

      const res = await axios.get<AdminWithdrawResponse>(url, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (error) {
      return error as AdminWithdrawResponse;
    }
  };
}
