import { GenericRes } from 'services/guestAuth/authuser.services';

export type EarningHistoryDetails = {
  amount: number;
  credits: number;
  created_at: string;
};

export type ModelEarningHistoryDetails = {
  total_rows: 100;
  page_size: 20;
  offset: 0;
};

export type ModelEarningHistoryPageDetails = {
  length: number;
  ledger_details: EarningHistoryDetails[];
  aggreate: ModelEarningHistoryDetails;
};

export interface ModelEarningHistoryPageDetailsRes extends GenericRes {
  data: ModelEarningHistoryPageDetails;
}
