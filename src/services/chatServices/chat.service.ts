import axios, { AxiosError } from 'axios';

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
  link: string;
}

export interface IModelHistoryList {
  id: string;
  sender_id: string;
  receiver_id: string;
  message_content: string;
  seen: boolean;
  message_type: string;
  time_stamp: string;
  name: string;
  is_online: number;
  profile_pic: string;
  unread_count: number;
}

export interface IMessageResponse {
  data: IMainMessageResponse;
}
export interface IMainMessageResponse {
  history_list: IModelHistoryList[];
  online_count: number;
}

export interface IMessageUploadImageChat {
  data: { link: string };
  message: string;
  code: number;
  error: null | string;
  custom_code: null | number;
}

export interface IHistoryOfChatParams {
  user_name: string;
  search: string;
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

  static chatHistoryMessage = async (params: IHistoryOfChatParams, token: string): Promise<IMessageResponse> => {
    try {
      const res = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/chat/history-list`, params, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as IMessageResponse;
    }
  };

  static chatUploadImage = async (formData: FormData, token: string): Promise<IMessageUploadImageChat> => {
    try {
      const res = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/chat/upload-image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token
        }
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as IMessageUploadImageChat;
    }
  };
}
