import axios from 'axios';
import { ErrorMessage } from 'constants/common.constants';
import { AdminLoginParams } from './types';

export class adminAuthServices {
  static AdminLogin = async (params: AdminLoginParams) => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/login`, params, {
        headers: { 'Content-Type': 'application/json' }
      });
      return res.data;
    } catch (error) {
      return ErrorMessage;
    }
  };
}
