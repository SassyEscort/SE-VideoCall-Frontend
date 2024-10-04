import axios, { AxiosError } from 'axios';

export interface IChatMessageParams {
  senderUID: string;
  receiverUID: string;
  message: string;
}

export interface IMessageResponse {
  data: {
    id: string;
    senderUID: string;
    message: string;
    receiverUID: string;
    createdAt: {
      _seconds: number;
      _nanoseconds: number;
    };
  };
}

export class ChatService {
  static sendChatMessage = async (params: IChatMessageParams, token: string): Promise<IMessageResponse> => {
    try {
      const res = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/chat/send-message`, params, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });

      return res.data.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as IMessageResponse;
    }
  };
}
