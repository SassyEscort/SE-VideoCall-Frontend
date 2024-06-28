import axios, { AxiosError } from 'axios';

export type CallingDataRes = {
  user_id: string;
  token: string;
};

export type CallingUserIdRes = {
  message: string;
  code: number;
  data: CallingDataRes;
};

export class CallingService {
  static userIdCometChat = async (token: string): Promise<CallingUserIdRes> => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/comet-chat/refresh-auth-token`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as CallingUserIdRes;
    }
  };
}
