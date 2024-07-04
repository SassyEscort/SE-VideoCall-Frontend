import axios, { AxiosError } from 'axios';

export type CallingDataRes = {
  available_call_duration: number;
  available_credits: number;
  time_unit: string;
};

export type CallingUserIdRes = {
  message: string;
  code: number;
  data: CallingDataRes;
};

export type CreditCallParams = {
  model_id: number;
  comet_chat_session_id: string;
  status: string;
};

export type CreditCallRes = {
  id: number;
  model_id: number;
  customer_id: number;
  comet_chat_session_id: string;
  status: string;
  start_time: string;
  end_time: string;
  end_call: boolean;
  duration: null | number;
};

export class CallingService {
  static getCometChatInfo = async (modelId: number, token: string): Promise<CallingUserIdRes> => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/call/pre-info?model_id=${modelId}`, {
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

  static creditPutCallLog = async (params: CreditCallParams, token: string): Promise<CreditCallRes> => {
    try {
      const res = await axios.put(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/call/logs`, params, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });

      return res.data.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as CreditCallRes;
    }
  };

  static fetchCallStatus = async (sessionId: string) => {
    try {
      const res = await axios.get(
        `https://2552847737c10dd9.call-${process.env.NEXT_PUBLIC_COMET_CHAT_REGION}.cometchat.io/v3.0/calls/${sessionId}`,
        {
          headers: {
            accept: 'application/json',
            apiKey: process.env.NEXT_PUBLIC_COMET_CHAT_AUTH_KEY
          }
        }
      );
      return res?.data?.data?.length ? res?.data?.data[0]?.status : '';
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as CreditCallRes;
    }
  };
}
