import axios from 'axios';
import { ErrorMessage } from 'constants/common.constants';
import { AdminLoginParams, AdminLoginResponse } from './types';

export class adminAuthServices {
  static AdminLogin = async (params: AdminLoginParams): Promise<AdminLoginResponse | string> => {
    try {
      const res = await axios.post<AdminLoginResponse>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/login`, params, {
        headers: { 'Content-Type': 'application/json' }
      });
      return res.data;
    } catch (error) {
      return ErrorMessage;
    }
  };
}
