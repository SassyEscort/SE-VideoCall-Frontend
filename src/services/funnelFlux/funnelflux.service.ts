import axios, { AxiosError } from 'axios';

export type funnelfluxPayload = {
  hit_id: string;
  revenue: number;
  transaction_id?: string;
  num?: number;
};
export interface funnelfluxMainRes {
  message: string;
  code: number;
  error: null | string;
  custom_code: null | number;
}

export class FunnelfluxService {
  static funnelfluxConversionEvent = async (payload: funnelfluxPayload, token: string): Promise<funnelfluxMainRes> => {
    try {
      const res = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/marketing/funnel-flux-event`, payload, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as funnelfluxMainRes;
    }
  };
}
