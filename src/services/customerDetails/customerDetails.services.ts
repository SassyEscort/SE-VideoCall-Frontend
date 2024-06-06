import axios from 'axios';

export type CustomerDetails = {
  customer_email: string;
  customer_id: number;
  customer_name: string;
  customer_user_name: string;
  email_verified: number;
};

export type CustomerDetailsRes = {
  data: CustomerDetails;
};

export class CustomerDetailsService {
  static customerModelDetails = async (token: string): Promise<CustomerDetailsRes> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/customer/details`;

      const res = await axios.get<CustomerDetailsRes>(url, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (error) {
      return error as CustomerDetailsRes;
    }
  };
}
