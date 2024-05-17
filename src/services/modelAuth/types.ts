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
