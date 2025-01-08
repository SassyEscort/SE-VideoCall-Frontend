import axios from 'axios';
import { GenericResponse } from 'types/commonApiTypes';

export type CreditAddParams = {
  name: string;
  type: string;
  amount: number;
  amount_type: string;
  reason: string;
};

export class adminAddCreditsServices {
  static addCredits = async (token: string, params: CreditAddParams): Promise<any> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/wallet`;

      const res = await axios.put<GenericResponse>(url, params, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });
      return res.data;
    } catch (error: any) {
      return error?.response?.data as GenericResponse;
    }
  };
}
