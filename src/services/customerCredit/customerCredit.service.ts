import axios, { AxiosError } from 'axios';

export type ModelCreditRes = {
  id: number;
  amount: number;
  credits: number;
  discount: number;
  is_active: boolean;
  link: string;
};

export type ModelCreditResponse = {
  data: ModelCreditRes[];
};

export class CustomerCredit {
  static getCustomerCredit = async (token: string): Promise<ModelCreditResponse> => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/catalog/customer-plans`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as ModelCreditResponse;
    }
  };
}
