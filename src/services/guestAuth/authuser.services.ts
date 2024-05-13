import axios from 'axios';
import { LoginUserParams, LoginUserResponse } from './types';
import { ErrorMessage } from 'constants/common.constants';

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
}
