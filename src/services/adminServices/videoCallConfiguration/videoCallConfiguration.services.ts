import axios, { AxiosError } from 'axios';
import { GenericResponse } from 'types/commonApiTypes';

export type videoCallParams = {
  min_price: string | number;
  max_price: string | number;
};

export type videoCallResponse = {
  data: string | null;
  code: number;
  error: string | null;
  message: string;
};

export interface AdminVideoCallResponseData {
  min_price: string;
  max_price: string;
}

export type AdminVideoCallResponse = GenericResponse & {
  data: AdminVideoCallResponseData;
};

export class videoCallAmountServices {
  static withdrawMinAmount = async (params: videoCallParams, token: string): Promise<videoCallResponse> => {
    try {
      const res = await axios.post<videoCallResponse>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/model/video-call-price`, params, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });
      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as videoCallResponse;
    }
  };

  static modelVideoCallAmountGet = async (token: string): Promise<AdminVideoCallResponse> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/catalog/video-call-prices`;

      const res = await axios.get<AdminVideoCallResponse>(url, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (error) {
      return error as AdminVideoCallResponse;
    }
  };
}
