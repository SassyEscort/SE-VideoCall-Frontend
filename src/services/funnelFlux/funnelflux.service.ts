import axios, { AxiosError } from 'axios';

export type funnelfluxPayload = {
  revenue: number;
  hit_id: string;
};

export type funnelfluxRes = {
  screenshot_interval_duration: number;
  screenshot_start_duration: number;
};
export interface funnelfluxMainRes {
  message?: undefined | string;
  error?: undefined | string;
}

export class ScreenshotService {
  static funnelfluxEvent = async (payload: funnelfluxPayload, token: string): Promise<funnelfluxMainRes> => {
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
