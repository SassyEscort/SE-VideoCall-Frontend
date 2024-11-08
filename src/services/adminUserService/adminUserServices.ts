import axios, { AxiosError } from 'axios';
import { GenericResponse } from 'types/commonApiTypes';

export interface UserPermissions {
  module_id: number | null;
  permission: String | null;
}

export type UserRegistrationParames = {
  name?: string;
  email: string;
  password: string;
  role?: string;
  permission: UserPermissions[];
};

export type UserRegistrationResponse = {
  data: string | null;
  code: number;
  error: string | null;
  message: string;
};

export interface ModuleListResponseData {
  id: number;
  module_name: String;
}

export interface UserListResponseData {
  id: number;
  name: String;
  email: String;
  permission: String;
}

export type ModuleListResponse = GenericResponse & {
  data: ModuleListResponseData[];
};

export type UserListResponse = GenericResponse & {
  data: UserListResponseData[];
};

export class adminUserServices {
  static getUserList = async (token: string): Promise<UserListResponse> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/user?limit=10&offset=0`;

      const res = await axios.get<UserListResponse>(url, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (error) {
      return error as UserListResponse;
    }
  };

  static getModuleList = async (token: string): Promise<ModuleListResponse> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/modules`;

      const res = await axios.get<ModuleListResponse>(url, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (error) {
      return error as ModuleListResponse;
    }
  };

  static userRegistration = async (params: UserRegistrationParames, token: string): Promise<UserRegistrationResponse> => {
    try {
      const res = await axios.post<UserRegistrationResponse>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/user/register`, params, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });
      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as UserRegistrationResponse;
    }
  };
}
