import axios from 'axios';
import { ErrorMessage } from 'constants/common.constants';
import { AdminLoginParams, AdminLoginResponse } from './types';
import { ForgetPasswordEmailParams } from 'views/admin/ForgetPasswordPage/ForgetPasswordForm';

export type AdminForgotRes = {
  status: string;
  message: string;
};

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

  static adminForgotPassword = async (params: ForgetPasswordEmailParams): Promise<AdminForgotRes> => {
    try {
      const res = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/admin/reset-password-email`, params, {
        headers: { 'Content-Type': 'application/josn' }
      });
      return res.data;
    } catch (error) {
      return error as AdminForgotRes;
    }
  };
}
