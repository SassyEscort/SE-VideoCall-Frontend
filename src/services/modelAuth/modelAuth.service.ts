import axios, { AxiosError } from 'axios';
import { GenericResponse, GenericResponseData } from 'types/commonApiTypes';
import { LoginParams } from 'views/modelViews/modelSignin';

import { ModelSignupParams } from 'views/modelViews/modelSignup';

export class ModelAuthService {
  static modelSignup = async (params: ModelSignupParams) => {
    try {
      const res = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/model/signup`, params, {
        headers: { 'Content-Type': 'application/json' }
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data || { error_message: error.message };
    }
  };

  static modelLogin = async (params: LoginParams): Promise<GenericResponse> => {
    try {
      const res = await axios.post<LoginParams, GenericResponseData>(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/model/login`, params, {
        headers: { 'Content-Type': 'application/json' }
      });

      return res.data;
    } catch (err: any) {
      const error: string = err;
      return { error: error } as GenericResponse;
    }
  };
}
