import { GenericRes } from 'services/guestAuth/authuser.services';

export type EarningHistoryDetails = {
  id: number;
  details: string;
  category: string;
  amount: number;
  created_at: string;
  credits: number;
  customer_id: number;
  model_id: number;
  wallet_id: number;
  model_name: string;
  model_age: number;
  model_gender: string;
  call_start_time: string;
  call_end_time: string;
  call_duration: string;
  customer_name: string;
  credits_used: number;
};

export type ModelEarningHistoryDetails = {
  total_rows: number;
  page_size: number;
  offset: number;
};

export type ModelEarningHistoryPageDetails = {
  length: number;
  ledger_details: EarningHistoryDetails[];
  aggregate: ModelEarningHistoryDetails;
};

export interface ModelEarningHistoryPageDetailsRes extends GenericRes {
  data: ModelEarningHistoryPageDetails;
}

export type CallType = {
  month: string;
  amount: number;
  minutes: number;
  total_minutes: number;
};

export type CallTypeModel = {
  calls: CallType[];
  total_minutes: number;
};

export interface ModelEarningChartPageDetailsRes extends GenericRes {
  data: CallTypeModel;
}
