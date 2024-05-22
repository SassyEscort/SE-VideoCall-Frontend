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
};

export type LoginModelResponse = GenericResponse & {
  data: LoginModelData;
};

export type Photo = {
  url: string;
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
  is_document: true;
  photos: Photo[];
};

export type VerificationStepSecond = {
  idType: string;
  idNumber: string;
};

export type VerificationStepResponse = GenericResponse & {
  data: VerificationStepSecond[];
};
