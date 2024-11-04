import axios, { AxiosError } from 'axios';
import { GenericResponse } from 'types/commonApiTypes';

export type commissionParams = {
  percentage: string;
};

export type commissionResponse = {
  data: string | null;
  code: number;
  error: string | null;
  message: string;
};

export interface AdminSettingResponseData {
  id: number;
  category: String;
  label: String;
  content: String;
}

export type AdminSettingResponse = GenericResponse & {
  data: AdminSettingResponseData;
};

export class adminSettingsServices {
  static getAdminSettings = async (token: string): Promise<AdminSettingResponse> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/platform-settings`;

      const res = await axios.get<AdminSettingResponse>(url, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (error) {
      return error as AdminSettingResponse;
    }
  };

  static modelCommissionMinAmount = async (params: commissionParams, token: string): Promise<commissionResponse> => {
    try {
      const res = await axios.post<commissionResponse>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/model/commission`, params, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });
      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as commissionResponse;
    }
  };
}
