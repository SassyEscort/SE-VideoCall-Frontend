import axios from 'axios';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';

export type GuestModelDetailsResponse = {
  data: ModelDetailsResponse;
  code: number;
  response: {
    data: {
      message: string;
    };
  };
};
export class GuestDetailsService {
  static GuestModelDetails = async (): Promise<GuestModelDetailsResponse> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/model/guest?user_name=queen-fc3093`;

      const res = await axios.get<GuestModelDetailsResponse>(url, {
        headers: { 'Content-Type': 'application/json' }
      });

      return res.data;
    } catch (error) {
      return error as GuestModelDetailsResponse;
    }
  };
}
