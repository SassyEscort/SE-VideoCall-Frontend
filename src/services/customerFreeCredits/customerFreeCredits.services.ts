import axios from 'axios';
import { GenericRes } from 'services/guestAuth/authuser.services';

export type CustomerFreeCreditsDetailsData = {
  free_credits_available: number;
};

export interface CustomerFreeCreditsDetailsRes extends GenericRes {
  data: CustomerFreeCreditsDetailsData;
}

export class CustomerFreeCreditsService {
  static getCustomerFreeCredits = async (token: string): Promise<CustomerFreeCreditsDetailsRes> => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/catalog/platform-credits`, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });
      return res.data;
    } catch (err) {
      return err as CustomerFreeCreditsDetailsRes;
    }
  };
}
