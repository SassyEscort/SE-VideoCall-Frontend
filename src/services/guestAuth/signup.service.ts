import axios, { AxiosError } from 'axios';
import { SignupParams } from 'views/auth/GuestSignup';

export class GuestAuthService {
  static guestSignup = async (params: SignupParams) => {
    try {
      const res = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/customer/signup`, params, {
        headers: { 'Content-Type': 'application/json' }
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data || { error_message: error.message };
    }
  };
}
