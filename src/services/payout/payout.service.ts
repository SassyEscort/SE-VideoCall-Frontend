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
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQxLCJuYW1lIjoibm9iaXRhIiwiZW1haWwiOiJub2JpdGFAeW9wbWFpbC5jb20iLCJ1c2VyX25hbWUiOiJub2JpdGEtMWU3MjQwIiwicm9sZSI6Im1vZGVsIiwiaWF0IjoxNzE4MTcyMDg1LCJleHAiOjE3MTgyNTg0ODV9.EVl0LhADXiZpdXwiKSa-JzJewplX35GoGuCEQABE6pI'
        }
      });
      return res.data;
    } catch (error) {
      return error as AddBAnkDetailsRes;
    }
  };
}
