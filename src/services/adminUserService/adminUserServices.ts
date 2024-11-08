import axios, { AxiosError } from 'axios';
import { GenericResponse } from 'types/commonApiTypes';

export interface UserPermissions {
  module_id: number | null;
  permission: string;
}

export type UserRegistrationParames = {
  name?: string;
  email: string;
  password: string;
  role?: string;
  permissions: UserPermissions[];
};

export type UserRegistrationResponse = {
  data: string | null;
  code: number;
  error: string | null;
  message: string;
};

export interface ModuleListResponseData {
  id: number;
  module_name: string;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  permissions: string;
}

export interface getPermissionByIdData {
  id: number;
  module_name: string;
  permission: string;
}

export interface getUserByIdData {
  id: number;
  name: string;
  email: string;
  password: string;
  module_permissions: getPermissionByIdData[];
}

export type PaginationAggregation = {
  offset: number;
  page_size: number;
  total_rows: number;
};

export interface UserListResponseData {
  aggregate: PaginationAggregation;
  user_info: UserData[];
}

export type ModuleListResponse = GenericResponse & {
  data: ModuleListResponseData[];
};

export type UserListResponse = GenericResponse & {
  data: UserListResponseData;
};

export type getUserByIdResponse = GenericResponse & {
  data: getUserByIdData;
};

export type UpdateUserParams = {
  permissions: UserPermissions[];
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

  static getUserById = async (id: number, token: string): Promise<getUserByIdResponse> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/user/${id}`;

      const res = await axios.get<getUserByIdResponse>(url, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (error) {
      return error as getUserByIdResponse;
    }
  };

  static updateUserPassword = async (id: number, password: { password: string }, token: string): Promise<GenericResponse> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/user/update-password/${id}`;

      const res = await axios.put<GenericResponse>(url, password, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (error) {
      return error as GenericResponse;
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
  static updateUser = async (id: number, params: UpdateUserParams, token: string): Promise<UserRegistrationResponse> => {
    try {
      const res = await axios.put<UserRegistrationResponse>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/user/${id}`, params, {
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
