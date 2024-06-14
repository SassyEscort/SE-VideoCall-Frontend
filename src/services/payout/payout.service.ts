import axios from 'axios';
import { BankDetailsParams } from 'views/protectedDashboardViews/addBankDetails';
import { BankDetaildDeleteParam, BankListParams } from 'views/protectedDashboardViews/payoutPaymentContainer';
import { AddBankDetailsRes, BankDetailsDeleteRes, BankDetailsListRes } from './types';

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

  static bankDetailsList = async (token: string, params: BankListParams): Promise<BankDetailsListRes> => {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/model/bank-details?limit=${params.limit}&offset=${params.offset}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token
          }
        }
      );
      return res.data;
    } catch (error) {
      return error as BankDetailsListRes;
    }
  };

  static bankDetailsDelete = async (token: string, params: BankDetaildDeleteParam): Promise<BankDetailsDeleteRes> => {
    try {
      const res = await axios.delete(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/model/bank-details/${params.id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });
      return res.data;
    } catch (error) {
      return error as BankDetailsDeleteRes;
    }
  };
}
