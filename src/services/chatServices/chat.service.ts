import axios, { AxiosError } from 'axios';
import { IHistoryOfChats } from 'views/protectedModelViews/verification/verificationTypes';

export interface IFechChatMessageParams {
  senderUID: string;
  receiverUID: string;
}
export interface IChatMessageParams {
  senderUID: string;
  receiverUID: string;
  message: string;
}

export interface IMessage {
  id: string;
  senderUID: string;
  message: string;
  message_type: string;
  receiverUID: string;
  createdAt: string;
}

export interface ISocketMessage {
  id: string;
  message_content: string;
  message_type: string;
  receiver_id: string;
  receiver_type: string;
  seen: boolean;
  sender_id: string;
  sender_type: string;
  time_stamp: string;
  __v: number;
  _id: string;
}

export interface IMessageResponse {
  data: IHistoryOfChats[];
}

export class ChatService {
  // static sendChatMessage = async (params: IChatMessageParams, token: string): Promise<IMessageResponse> => {
  //   try {
  //     const res = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/chat/send-message`, params, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: token
  //       }
  //     });

  //     return res.data;
  //   } catch (err: any) {
  //     const error: AxiosError = err;
  //     return error.response?.data as IMessageResponse;
  //   }
  // };

  static fetchChatMessage = async (params: IFechChatMessageParams, token: string): Promise<IMessage[]> => {
    try {
      const res = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/chat/get-messages`, params, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });

      return res.data.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as IMessage[];
    }
  };

  static chatHistoryMessage = async (params: string, token: string): Promise<IMessageResponse> => {
    try {
      const res = await axios.post(
        process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/chat/history-list`,
        { user_name: params },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token
          }
        }
      );

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as IMessageResponse;
    }
  };
}
