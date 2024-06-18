import { GenericRes } from 'services/guestAuth/authuser.services';

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
  created_at: string;
  is_active: number;
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

export type BankDetailsDelete = {
  status: string;
  message: string;
};

export interface BankDetailsDeleteRes extends GenericRes {
  data: BankDetailsDelete;
}

export type BackDetailsEditParams = {
  bank_name: string;
  account_name: string;
  iban_number: string;
};

export type BankDetailsEditRep = {
  id: number;
  bank_name: string;
  account_name: string;
  iban_number: string;
  is_active: boolean;
};

export interface BankDetailsEditReponse extends GenericRes {
  data: BankDetailsEditRep;
}
