import axios, { AxiosError } from 'axios';
import { GenericResCustom } from 'services/guestAuth/authuser.services';

export type AdminAddBoostProfileParams = {
  name: string;
  duration: number;
  cost: number;
  is_free: boolean;
};

export type AdminBoostProfileData = {
  id: number;
  name: string;
  duration: number;
  cost: number;
  is_free: boolean;
  is_active: boolean;
};

export interface AdminBoostProfileRes extends GenericResCustom {
  data: AdminBoostProfileData;
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

  static adminGetBoostProfile = async (planId: number, token: string): Promise<AdminBoostProfileRes> => {
    try {
      const res = await axios.get<AdminBoostProfileRes>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/model/profile-plan/${planId}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as AdminBoostProfileRes;
    }
  };
}
