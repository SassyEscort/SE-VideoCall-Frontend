import axios, { AxiosError } from 'axios';

export class GuestDetailsService {
  static GuestModelDetails = async (userName: string) => {
    try {
      // const queryParams = new URLSearchParams({ userName });
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/model/guest?user_name=mina-3f5a55`;

      const res = await axios.get(url, {
        headers: { 'Content-Type': 'application/json' }
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data || { error_message: error.message };
    }
  };
}
