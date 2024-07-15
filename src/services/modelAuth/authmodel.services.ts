import axios from 'axios';
import { LoginModelParams, LoginModelResponse } from './types';
import { ErrorMessage } from 'constants/common.constants';

export class authModelServices {
  static loginModel = async (params: LoginModelParams): Promise<LoginModelResponse | string> => {
    try {
      const res = await axios.post<LoginModelResponse>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/model/login`, params, {
        headers: { 'Content-Type': 'application/json' }
      });
      return res.data;
    } catch (error) {
      return ErrorMessage;
    }
  };
}
