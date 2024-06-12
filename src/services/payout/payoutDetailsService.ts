import axios, { AxiosError } from 'axios';

export class payoutDetailsService {
  static getPayoutDetails = async (token: string) => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/admin/model/payouts`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6ImFkbWluMSIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzE4MTczODk3LCJleHAiOjE3MTgyNjAyOTd9.zjaWWPX5bzmPuZec7tu7eaDXYBB22IJE9Sya4I1QON4'
        }
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data || { error_message: error.message };
    }
  };
}
