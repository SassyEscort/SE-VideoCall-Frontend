import axios from 'axios';
import { GenericRes } from 'services/guestAuth/authuser.services';
import { BnakDetailsParams } from 'views/protectedDashboardViews/addBankDetails';

export type AddBAnkDetails = {
  id: number;
  model_id: number;
  bank_name: string;
  account_name: string;
  iban_number: string;
};

export interface AddBAnkDetailsRes extends GenericRes {
  data: AddBAnkDetails;
}
export class PayoutService {
  static bankDetails = async (params: BnakDetailsParams, token: string): Promise<AddBAnkDetailsRes> => {
    try {
      const res = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/model/bank-details`, params, {
        headers: { 'Content-Type': 'application/josn', Authorization: token }
      });
      return res.data;
    } catch (error) {
      return error as AddBAnkDetailsRes;
    }
  };
}
