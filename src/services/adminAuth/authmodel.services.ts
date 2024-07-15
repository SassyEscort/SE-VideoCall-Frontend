import axios, { AxiosError } from 'axios';
import { ErrorMessage } from 'constants/common.constants';
import { AdminLoginParams, AdminLoginResponse } from './types';
import { ForgetPasswordEmailParams } from 'views/admin/ForgetPasswordPage/ForgetPasswordForm';
import { GenericRes } from 'services/guestAuth/authuser.services';

export type AdminForgotRes = {
  status: string;
  message: string;
};

export interface SendForgetPasswordEmailRes extends GenericRes {
  data: AdminForgotRes;
}

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

  static adminForgotPassword = async (params: ForgetPasswordEmailParams): Promise<SendForgetPasswordEmailRes> => {
    try {
      const res = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/admin/reset-password-email`, params, {
        headers: { 'Content-Type': 'application/json' }
      });
      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as SendForgetPasswordEmailRes;
    }
  };
}
