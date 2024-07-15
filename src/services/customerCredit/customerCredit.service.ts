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

export type ModelCreditURLRes = {
  created_at: string;
  customer_plan_id: number;
  id: number;
  payment_session_id: string;
  role: string;
  url: string;
  wallet_id: number;
};

export type ModelCreditURLResponse = {
  data: ModelCreditURLRes;
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

  static modelCreditAmount = async (
    token: string,
    customer_plan_id: number,
    isOutOfCredits: number,
    userName?: string
  ): Promise<ModelCreditURLResponse> => {
    try {
      const res = await axios.post<ModelCreditURLResponse>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/payment/stripe?is_out_of_credits=${isOutOfCredits}&user_name=${userName}`,
        { customer_plan_id: customer_plan_id },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token
          }
        }
      );
      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as ModelCreditURLResponse;
    }
  };
}
