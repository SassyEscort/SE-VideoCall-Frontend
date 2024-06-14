import axios, { AxiosError } from 'axios';

export type commissionParams = {
  percentage: string;
};

export type commissionResponse = {
  data: string | null;
  code: number;
  error: string | null;
  message: string;
};

export class modelCommissionAmountServices {
  static modelCommissionMinAmount = async (params: commissionParams, token: string): Promise<commissionResponse> => {
    try {
      const res = await axios.post<commissionResponse>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/model/commission`, params, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });
      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as commissionResponse;
    }
  };

  static modelCommissionMinAmountGet = async (token: string): Promise<commissionParams> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/model/commission`;

      const res = await axios.get<commissionParams>(url, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (error) {
      return error as commissionParams;
    }
  };
}
