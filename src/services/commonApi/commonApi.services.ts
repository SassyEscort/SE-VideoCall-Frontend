import axios, { AxiosError } from 'axios';
import { PriceCommissionsRes } from './types';
import { GenericRes } from 'services/guestAuth/authuser.services';

export type UserNameRes = {
  id: number;
  name: string;
  email: string;
  user_name: string;
};

export interface UserNameResData extends GenericRes {
  data: UserNameRes;
}

export class CommonServices {
  static getCountry = async (token: string, modelFilters: Boolean) => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/catalog/country?limit=1000&model_filters=${modelFilters}`, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data || { error_message: error.message };
    }
  };

  static getNationality = async (token: string) => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/catalog/nationality?limit=1000`, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data || { error_message: error.message };
    }
  };

  static getLanguages = async (token: string) => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/catalog/languages?limit=1000`, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data || { error_message: error.message };
    }
  };

  static getLanguagesWithoutToken = async () => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/catalog/languages?limit=1000`, {
        headers: { 'Content-Type': 'application/json' }
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data || { error_message: error.message };
    }
  };

  static priceCommissions = async (token: string): Promise<PriceCommissionsRes> => {
    try {
      const res = await axios.get<PriceCommissionsRes>(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/admin/model/commission`, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (error: any) {
      return error as PriceCommissionsRes;
    }
  };

  static updateUserName = async (token: string, name: string, email: string): Promise<UserNameResData> => {
    try {
      const res = await axios.patch<UserNameResData>(
        process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/catalog/user-details`,
        { name: name, email: email },
        {
          headers: { 'Content-Type': 'application/json', Authorization: token }
        }
      );

      return res.data;
    } catch (error: any) {
      return error as UserNameResData;
    }
  };
}
