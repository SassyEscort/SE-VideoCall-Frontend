import axios, { AxiosError } from 'axios';
import {
  CustomerDetailsRes,
  CustomerFilterParams,
  ModelDetailsDeleteRes,
  ModelDetailsRes,
  ModelDetailStatusOfflineRes,
  ModelFilterParams
} from './types';

export type ModelListing = {
  country_id: number;
  country_name: string;
  created_at: string;
  email: string;
  email_verified: number;
  id: number;
  is_active: number;
  last_login: string;
  last_active: string;
  name: string;
  profile_status: string;
  updated_at: string;
  verification_step: string;
  is_visible: number;
  is_online: number;
};

export type PaginationAggregation = {
  offset: number;
  page_size: number;
  total_rows: number;
};

export type ModelListingRes = {
  model_details: ModelListing[];
  aggregate: PaginationAggregation;
};

export class adminModelServices {
  static getModelList = async (params: ModelFilterParams): Promise<ModelListingRes> => {
    let query = '';
    if (params.filter_text) {
      query += `&search_field=${params.filter_text}`;
    }
    if (params.from_date) {
      query += `&from_date=${params.from_date}`;
    }
    if (params.to_date) {
      query += `&to_date=${params.to_date}`;
    }
    if (params.sort_order) {
      query += `&sort_order=${params.sort_order}`;
    }
    if (params.sort_field) {
      query += `&sort_field=${params.sort_field}`;
    }
    if (params.verification_step) {
      query += `&verification_step=${params.verification_step}`;
    }
    if (params.profile_status) {
      query += `&profile_status=${params.profile_status}`;
    }
    if (params.is_active) {
      query += `&is_active=${params.is_active}`;
    }

    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/admin/model?limit=${params.limit}&offset=${params.offset}${query}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: params.token
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
  static getCustomerDetails = async (params: CustomerFilterParams, token: string): Promise<CustomerDetailsRes> => {
    let query = '';
    if (params.search_field) {
      query += `&search_field=${params.search_field}`;
    }
    if (params.sort_order) {
      query += `&sort_order=${params.sort_order}`;
    }
    if (params.sort_field) {
      query += `&sort_field=${params.sort_field}`;
    }

    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/admin/customer?limit=${params.limit}&offset=${params.offset}${query}`,
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

  static modelDeleteThumbnail = async (token: string, id: string): Promise<ModelDetailsDeleteRes> => {
    try {
      const res = await axios.delete(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/admin/model/file/${id}`, {
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
}
