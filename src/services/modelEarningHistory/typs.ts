import { GenericRes } from 'services/guestAuth/authuser.services';

export type EarningHistoryDetails = {
  amount: number;
  credits: number;
  created_at: string;
};

export type ModelEarningHistoryDetails = {
  total_rows: number;
  page_size: number;
  offset: number;
};

export type ModelEarningHistoryPageDetails = {
  length: number;
  ledger_details: EarningHistoryDetails[];
  aggreate: ModelEarningHistoryDetails;
};

export interface ModelEarningHistoryPageDetailsRes extends GenericRes {
  data: ModelEarningHistoryPageDetails;
}

export type CallType = {
  month: string;
  total_amount: number;
};

export type CallTypeModel = {
  calls: CallType[];
  total_clients: number;
};

export interface ModelEarningChartPageDetailsRes extends GenericRes {
  data: CallTypeModel;
}
