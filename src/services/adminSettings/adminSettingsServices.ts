import axios, { AxiosError } from 'axios';
import { GenericResponse } from 'types/commonApiTypes';

export type AdminSupportSettingParames = {
  id: string;
  category: string;
  label: string;
  content: string;
};

export type AdminSupportSettingResponse = {
  data: string | null;
  code: number;
  error: string | null;
  message: string;
};

export interface AdminCommissionResponseData {
  id: number;
  category: String;
  label: String;
  content: String;
}

export type AdminCommissionResponse = GenericResponse & {
  data: AdminCommissionResponseData;
};

export class adminSettingsServices {
  static getAdminSettings = async (token: string): Promise<AdminCommissionResponse> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/platform-settings`;

      const res = await axios.get<AdminCommissionResponse>(url, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (error) {
      return error as AdminCommissionResponse;
    }
  };

  static postAdminSettings = async (params: AdminSupportSettingParames, token: string): Promise<AdminSupportSettingResponse> => {
    try {
      const res = await axios.put<AdminSupportSettingResponse>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/update-settings`, params, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });
      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as AdminSupportSettingResponse;
    }
  };
}
