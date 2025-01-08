import axios, { AxiosError } from 'axios';
import {
  CustomerDetailsRes,
  CustomerFilterBodyParams,
  ModelDetailsDeleteRes,
  ModelDetailsParams,
  ModelDetailsRes,
  ModelDetailStatusOfflineRes
} from './types';
import { GenericRes } from 'services/guestAuth/authuser.services';

export type ModelListing = {
  model_name: string;
  id: number;
  email: string;
  profile_status: string;
  is_active: number;
  is_visible: number;
  is_online: number;
  gender: string;
  email_verified: number;
  verification_step: string;
  last_active: string;
  created_date: string;
  updated_at: string;
  number_of_calls: number;
  total_call_duration: string;
  model_earnings: number;
  country_name: string;
};

export type PaginationAggregation = {
  offset: number;
  page_size: number;
  total_rows: number;
};

export type ModelListingRes = {
  model_reports: ModelListing[];
  aggregate: PaginationAggregation;
};

export type countryListResponse = {
  id: number;
  name: string;
  region: string;
};

export class adminModelServices {
  static AdminCountryList = async (token: string): Promise<countryListResponse[]> => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/admin/countries`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });

      return res.data.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as countryListResponse[];
    }
  };

  static getModelList = async (limit: number, offset: number, params: ModelDetailsParams, token: string): Promise<ModelListingRes> => {
    try {
      const res = await axios.post(
        process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/admin/model/listings?limit=${limit}&offset=${offset}`,
        params,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token
          }
        }
      );

      return res.data.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as ModelListingRes;
    }
  };

  static modelAction = async (
    token: string,
    modelId: number,
    profile_status: string,
    is_visible: boolean,
    rejection_reason?: string
  ): Promise<ModelListingRes> => {
    try {
      const res = await axios.put(
        process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/admin/model/${modelId}`,
        { profile_status: profile_status, rejection_reason: rejection_reason, is_visible: is_visible },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token
          }
        }
      );

      return res.data.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as ModelListingRes;
    }
  };

  static getModelDetails = async (token: string, modelId: number): Promise<ModelDetailsRes> => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/admin/model/${modelId}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as ModelDetailsRes;
    }
  };

  static getCustomerDetails = async (
    limit: number,
    offset: number,
    params: CustomerFilterBodyParams,
    token: string
  ): Promise<CustomerDetailsRes> => {
    try {
      const res = await axios.post(
        process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/admin/customer/listings?limit=${limit}&offset=${offset}`,
        params,
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
      return error.response?.data as CustomerDetailsRes;
    }
  };

  static modelDetailsDelete = async (token: string, id: number): Promise<ModelDetailsDeleteRes> => {
    try {
      const res = await axios.delete(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/admin/model/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });
      return res.data;
    } catch (error) {
      return error as ModelDetailsDeleteRes;
    }
  };

  static modelDetailsStatusOffline = async (token: string, id: number): Promise<ModelDetailStatusOfflineRes> => {
    try {
      const res = await axios.patch(
        process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/admin/model/status-offline/${id}`,
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
      return error as ModelDetailStatusOfflineRes;
    }
  };

  static modelMarkThumbnail = async (token: string, id: number): Promise<ModelDetailsDeleteRes> => {
    try {
      const res = await axios.post(
        process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/admin/model/mark-thumbnail`,
        { model_photo_id: id },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token
          }
        }
      );
      return res.data;
    } catch (error) {
      return error as ModelDetailsDeleteRes;
    }
  };

  static modelPhotoDelete = async (token: string, id: string): Promise<GenericRes> => {
    try {
      const res = await axios.delete(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/admin/model/do-file/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });
      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as GenericRes;
    }
  };
}
