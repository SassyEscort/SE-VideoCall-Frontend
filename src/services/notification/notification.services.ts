import axios, { AxiosError } from 'axios';
import { BankListParams } from 'views/protectedDashboardViews/payoutPaymentContainer';
import { Root } from './type';
import { GenericRes } from 'services/guestAuth/authuser.services';

export type NotificationRes = {
  id: number;
};

export interface NotificationDetailsRes extends GenericRes {
  data: NotificationRes;
}

export class NotificationDetailsService {
  static getNotificationDetails = async (token: string, params: BankListParams): Promise<Root> => {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/catalog/notification?limit=${params.limit}&offset=${params.offset}`,
        {
          headers: { 'Content-Type': 'application/json', Authorization: token }
        }
      );

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as Root;
    }
  };

  static notificationDetailsEdit = async (token: string, id: number): Promise<NotificationDetailsRes> => {
    try {
      const res = await axios.put(
        process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/catalog/notification/${id}`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token
          }
        }
      );
      return res.data;
    } catch (error) {
      return error as NotificationDetailsRes;
    }
  };
}
