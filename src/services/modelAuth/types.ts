import { GenericResponse } from 'types/commonApiTypes';

export type LoginModelParams = {
  email: string;
  password: string;
};

export type LoginModelData = {
  token: string;
  id: number;
  name: string;
  email: string;
  verification_step: string;
  user_name: string;
};

export type LoginModelResponse = GenericResponse & {
  data: LoginModelData;
};

export type Photo = {
  link: string | null;
  type: string;
  id: string;
  cords: string;
  is_favourite: number;
  is_document: number;
  document_type: string;
  document_number: string;
};

export type VerificationPayload = {
  id: string;
  is_document: boolean;
  photos: Photo[];
  document_upload_step: boolean;
};

export type VerificationStepSecond = {
  idType: string | number;
  idNumber: string;
};

export type VerificationStepResponse = GenericResponse & {
  data: VerificationStepSecond[];
};

export type PriceValue = {
  id: number;
  price_per_minute: string;
};

export type GenericRes = {
  code: number;
  error: string;
  message: string;
};

export type ChangePassParams = {
  old_password: string;
  new_password: string;
};
