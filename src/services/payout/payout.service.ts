import axios from 'axios';
import { GenericRes } from 'services/guestAuth/authuser.services';
import { BankDetailsParams } from 'views/protectedDashboardViews/addBankDetails';
import { BankListParams } from 'views/protectedDashboardViews/payoutPaymentContainer';

export type AddBAnkDetails = {
  id: number;
  model_id: number;
  bank_name: string;
  account_name: string;
  iban_number: string;
};

export type AddBankList = {
  id: number;
  model_id: number;
  bank_name: string;
  account_name: string;
  iban_number: string;
};

export type AgricketList = {
  total_rows: 100;
  page_size: 20;
  offset: 0;
};

export type BankDetailsRes = {
  bank_details: AddBankList[];
  aggregate: AgricketList;
};

export interface BankDetailsListRes extends GenericRes {
  data: BankDetailsRes;
}
export interface AddBankDetailsRes extends GenericRes {
  data: AddBAnkDetails;
}
export class PayoutService {
  static bankDetails = async (params: BankDetailsParams, token: string): Promise<AddBankDetailsRes> => {
    try {
      const res = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/model/bank-details`, params, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });
      return res.data;
    } catch (error) {
      return error as AddBankDetailsRes;
    }
  };

  static bankDetailsList = async (params: BankListParams): Promise<BankDetailsListRes> => {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/model/bank-details?limit=${params.limit}&offset=${params.offset}`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      return res.data;
    } catch (error) {
      return error as BankDetailsListRes;
    }
  };
}
