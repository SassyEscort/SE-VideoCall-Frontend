import axios from 'axios';
import { WithdrawalAmountDetailsRes } from './type';

export class ModelWithdrawalAmountService {
  static getWithdrawalAmountDetails = async (token: string): Promise<WithdrawalAmountDetailsRes> => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/model/withdrawal-amount`, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });
      return res.data;
    } catch (err) {
      return err as WithdrawalAmountDetailsRes;
    }
  };
}
