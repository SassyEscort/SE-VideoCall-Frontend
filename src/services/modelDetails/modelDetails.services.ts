import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { GenericRes } from 'services/guestAuth/authuser.services';
import { GetTotalEarningDataParams, GuestModelEarningResponse } from './type';
import { encodeQuery } from 'utils/genericFunction';
import { KeyPair } from 'types/KeyPair';

export type ModelLastActiveRes = {
  last_active: string;
};

export interface ModelLastActiveDetailsRes extends GenericRes {
  data: ModelLastActiveRes;
}

export class ModelDetailsService {
  static getModelDetails = async (token: string, user_name?: string) => {
    try {
      const headers: AxiosRequestConfig['headers'] = { 'Content-Type': 'application/json' };
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
      const url = user_name
        ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/model/details?user_name=${user_name}`
        : `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/model/details`;
      const res = await axios.get(url, { headers });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data || { error_message: error.message };
    }
  };

  static modelLastActive = async (token: string): Promise<ModelLastActiveDetailsRes> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/model/last-active`;

      const res = await axios.put<ModelLastActiveDetailsRes>(
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
      return error as ModelLastActiveDetailsRes;
    }
  };

  static getModelEarning = async (token: string, params: GetTotalEarningDataParams) => {
    const query = encodeQuery(params as unknown as KeyPair);
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/catalog/wallet?${query}`, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data || { error_message: error.message };
    }
  };

  static getModelWithDraw = async (token: string): Promise<GuestModelEarningResponse> => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/catalog/wallet`, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (err) {
      return err as GuestModelEarningResponse;
    }
  };
}
