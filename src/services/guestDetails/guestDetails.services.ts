import axios from 'axios';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';

export type GuestModelDetailsParams = {
  userName: string;
};

export type GuestModelDetailsResponse = {
  data: ModelDetailsResponse;
};
export class GuestDetailsService {
  static GuestModelDetails = async (userName: string): Promise<GuestModelDetailsResponse> => {
    try {
      // const queryParams = new URLSearchParams({ userName });
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/model/guest?user_name=mina-3f5a55`;

      const res = await axios.get<GuestModelDetailsParams, GuestModelDetailsResponse>(url, {
        headers: { 'Content-Type': 'application/json' }
      });

      return res.data;
    } catch (err: any) {
      const error = err;
      return error as GuestModelDetailsResponse;
    }
  };
}
