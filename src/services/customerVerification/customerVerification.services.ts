import axios from 'axios';

import { GenericResponse } from 'types/commonApiTypes';

export type EmailVerifyParams = {
  email: string;
};
export type PhoneVerifyParams = {
  phone_number: string;
};

export type CustomerEmailVerifyParams = {
  email: string;
  otp: string;
};
export type CustomerPhoneVerifyParams = {
  phone_number: string;
  otp: string;
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

export class customerVerificationService {
  static sendEmailOtp = async (params: EmailVerifyParams, token: string): Promise<GenericRes> => {
    try {
      const res = await axios.post<GenericRes>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/customer/email-otp`, params, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });
      return res.data;
    } catch (error) {
      return error as GenericResCustom;
    }
  };

  static emailVerify = async (params: CustomerEmailVerifyParams, token: string): Promise<GenericRes> => {
    try {
      const res = await axios.post<GenericRes>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/customer/verify-email-otp`, params, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });
      return res.data;
    } catch (error) {
      return error as GenericRes;
    }
  };
  static sendPhoneOtp = async (params: PhoneVerifyParams, token: string): Promise<GenericRes> => {
    try {
      const res = await axios.post<GenericRes>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/customer/phone-otp`, params, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });
      return res.data;
    } catch (error) {
      return error as GenericResCustom;
    }
  };

  static phoneVerify = async (params: CustomerPhoneVerifyParams, token: string): Promise<GenericRes> => {
    try {
      const res = await axios.post<GenericRes>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/customer/verify-phone-otp`, params, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });
      return res.data;
    } catch (error) {
      return error as GenericRes;
    }
  };
}
