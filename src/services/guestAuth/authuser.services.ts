import axios from 'axios';
import { LoginUserParams, LoginUserResponse } from './types';
import { ErrorMessage } from 'constants/common.constants';
import { GenericResponse } from 'types/commonApiTypes';

export type EmailVerifyParams = {
  email: string;
};

export type CustomerEmailVerifyParams = {
  email: string;
  verification_code: string;
};

export type GenericRes = {
  code: number;
  error: string;
  message: string;
};

export type GenericResCustom = {
  code: number;
  error: string;
  message: string;
  custom_code: number;
};

export type GenericResDataCustom = {
  code: number;
  error: string;
  message: string;
  custom_code: number;
  data: GenericResponse;
};

export type ChangePassParams = {
  old_password: string;
  new_password: string;
};

export class authServices {
  static loginUser = async (params: LoginUserParams): Promise<LoginUserResponse | string> => {
    try {
      const res = await axios.post<LoginUserResponse>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/auth/login`, params, {
        headers: { 'Content-Type': 'application/json' }
      });
      return res.data;
    } catch (error) {
      return ErrorMessage;
    }
  };

  static emailVerifyLink = async (params: EmailVerifyParams, token: string): Promise<GenericResDataCustom> => {
    try {
      const res = await axios.post<GenericRes>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/customer/email-verification-link`, params, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });
      return res.data as GenericResDataCustom;
    } catch (error) {
      return error as GenericResDataCustom;
    }
  };

  static emailVerify = async (params: CustomerEmailVerifyParams, token: string): Promise<GenericRes> => {
    try {
      const res = await axios.post<GenericRes>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/customer/verify-email`, params, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });
      return res.data;
    } catch (error) {
      return error as GenericRes;
    }
  };

  static changePassword = async (params: ChangePassParams, token: string): Promise<GenericResCustom> => {
    try {
      const res = await axios.post<GenericResCustom>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/customer/update-password`, params, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });
      return res.data;
    } catch (err: any) {
      return err.response?.data as GenericResCustom;
    }
  };
}
