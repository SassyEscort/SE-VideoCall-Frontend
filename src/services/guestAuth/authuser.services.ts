import axios from 'axios';
import { LoginUserParams, LoginUserResponse } from './types';
import { ErrorMessage } from 'constants/common.constants';

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

export class authServices {
  static loginUser = async (params: LoginUserParams): Promise<LoginUserResponse | string> => {
    try {
      const res = await axios.post<LoginUserResponse>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/customer/login`, params, {
        headers: { 'Content-Type': 'application/json' }
      });
      return res.data;
    } catch (error) {
      return ErrorMessage;
    }
  };

  static emailVerifyLink = async (params: EmailVerifyParams, token: string): Promise<GenericRes> => {
    try {
      const res = await axios.post<GenericRes>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/customer/email-verification-link`, params, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });
      return res.data;
    } catch (error) {
      return error as GenericRes;
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
}
