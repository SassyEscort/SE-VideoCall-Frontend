import { GenericRes } from 'services/guestAuth/authuser.services';

export type BillingHistoryDetails = {
  id: number;
  details: string;
  category: string;
  amount: number;
  created_at: string;
  credits: number;
  customer_id: number;
  model_id: null | number;
  wallet_id: number;
};

export type ModelBillingHistoryDetails = {
  total_rows: 4;
  page_size: 20;
  offset: 0;
};

export type ModelBillingHistoryPageDetails = {
  ledger_details: BillingHistoryDetails[];
  aggreate: ModelBillingHistoryDetails;
};

export interface ModelBillingHistoryPageDetailsRes extends GenericRes {
  data: ModelBillingHistoryPageDetails;
}
