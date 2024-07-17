import { GenericRes } from 'services/guestAuth/authuser.services';

export type WithdrawalAmountDetails = {
  id: number;
  amount: number;
  is_active: boolean;
};

export interface WithdrawalAmountDetailsRes extends GenericRes {
  data: WithdrawalAmountDetails;
}
