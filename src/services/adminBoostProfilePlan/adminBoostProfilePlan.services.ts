import axios, { AxiosError } from 'axios';
import { GenericResCustom } from 'services/guestAuth/authuser.services';

export type AdminAddBoostProfileParams = {
  name: string;
  duration: number;
  cost: number;
  is_free: boolean;
};

export interface AdminBoostProfileParam extends AdminAddBoostProfileParams {
  id: number;
}

export interface AdminBoostProfileData extends AdminBoostProfileParam {
  is_active: boolean;
}

export type BoostPaginationAggregation = {
  offset: number;
  page_size: number;
  total_rows: number;
};

export type AdminBoostData = {
  plans: AdminBoostProfileData[];
  aggregate: BoostPaginationAggregation;
};

export interface AdminBoostProfileRes extends GenericResCustom {
  data: AdminBoostData;
}

export class adminBoostProfilePlanServices {
  static adminAddBoostProfile = async (params: AdminAddBoostProfileParams, token: string): Promise<GenericResCustom> => {
    try {
      const res = await axios.post<GenericResCustom>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/model/profile-plan`, params, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as GenericResCustom;
    }
  };

  static adminUpdateBoostProfile = async (
    params: AdminAddBoostProfileParams,
    planId: number,
    token: string
  ): Promise<AdminBoostProfileRes> => {
    try {
      const res = await axios.patch<AdminBoostProfileRes>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/model/profile-plan/${planId}`,
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
      return error.response?.data as AdminBoostProfileRes;
    }
  };

  static adminDeleteBoostProfile = async (planId: number, token: string): Promise<AdminBoostProfileRes> => {
    try {
      const res = await axios.delete<AdminBoostProfileRes>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/model/profile-plan/${planId}`,
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
      return error.response?.data as AdminBoostProfileRes;
    }
  };

  static adminGetBoostProfile = async (
    token: string,
    limit: number,
    offset: number,
    search_field?: string
  ): Promise<AdminBoostProfileRes> => {
    try {
      const res = await axios.get<AdminBoostProfileRes>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/model/profile-plan?limit=${limit}&offset=${offset}&search_field=${search_field}`,
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
      return error.response?.data as AdminBoostProfileRes;
    }
  };

  static adminModelBoostById = async (token: string, modelId: number): Promise<GenericResCustom> => {
    try {
      const res = await axios.post<GenericResCustom>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/model/boost-profile`,
        { model_id: modelId },
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
      return error.response?.data as GenericResCustom;
    }
  };
}
