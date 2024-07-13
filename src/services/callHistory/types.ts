import { GenericRes } from 'services/guestAuth/authuser.services';

export type CallHistoryDetails = {
  model_id: number;
  status: string;
  start_time: string;
  end_time: string;
  duration: string;
  call_type: string;
  credits_used: number;
  name: string;
  dob: string;
  price_per_minute: number;
  link: null | string;
  languages: CallHistoryLanguages[];
  user_name: string;
  credits_per_minute: number;
};

export type CallHistoryLanguages = {
  language_id: number;
  language_name: string;
};

export type CallHistoryData = {
  total_rows: number;
  page_size: number;
  offset: number;
};

export type CallHistoryDataDetails = {
  aggregate: CallHistoryData;
  call_logs: CallHistoryDetails[];
};

export interface CallHistoryPageDetailsRes extends GenericRes {
  data: CallHistoryDataDetails;
}

export type callHistoryParams = {
  limit: number;
  offset: number;
};
