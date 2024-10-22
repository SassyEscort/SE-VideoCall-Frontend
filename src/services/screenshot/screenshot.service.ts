import axios, { AxiosError } from 'axios';

export type ScreenShotRes = {
  screenshot_interval_duration: number;
};
export interface ScreenShotMainRes {
  message: string;
  code: number;
  error: null | string;
  data: ScreenShotRes;
  custom_code: null | number;
}

export class ScreenshotService {
  static uploadScreenShotImage = async (token: string): Promise<ScreenShotMainRes> => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/catalog/screenshot-duration`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as ScreenShotMainRes;
    }
  };

  static fetchScreenShotDuration = async (token: string): Promise<ScreenShotMainRes> => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/catalog/screenshot-duration`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as ScreenShotMainRes;
    }
  };
}
