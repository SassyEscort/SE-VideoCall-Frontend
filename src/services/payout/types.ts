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

export type PayoutDetails = {
  map: any;
  payout: any;
  id: number;
  model_id: number;
  amount: number;
  state: string;
  created_at: string;
  is_active: number;
  name: string;
  email: string;
  bank_name: string;
};

export type ModelPastPayoutAggregate = {
  total_rows: 100;
  page_size: 10;
  offset: 0;
};

export type ModelPastPayoutDetail = {
  payout_details: PayoutDetails[];
  aggregate: ModelPastPayoutAggregate;
};
