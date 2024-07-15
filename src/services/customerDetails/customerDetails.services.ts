import axios from 'axios';
import { GenericRes } from 'services/guestAuth/authuser.services';

export type CustomerDetails = {
  customer_email: string;
  customer_id: number;
  customer_name: string;
  customer_user_name: string;
  email_verified: number;
};

export type CustomerDetailsRes = {
  data: CustomerDetails;
};

export type FavouriteRes = {
  customer_id: number;
  model_id: number;
  is_active: number;
};

export interface FavouriteDetailsRes extends GenericRes {
  data: FavouriteRes;
}

export class CustomerDetailsService {
  static customerModelDetails = async (token: string): Promise<CustomerDetailsRes> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/customer/details`;

      const res = await axios.get<CustomerDetailsRes>(url, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (error) {
      return error as CustomerDetailsRes;
    }
  };

  static favouritePutId = async (model_id: number, token: string): Promise<FavouriteDetailsRes> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/customer/favourite/${model_id}`;

      const res = await axios.put<FavouriteDetailsRes>(
        url,
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
      return error as FavouriteDetailsRes;
    }
  };
}
