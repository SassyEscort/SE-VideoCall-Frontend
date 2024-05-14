import { GenericResponse } from 'types/api/ApiGenericResponse';

export type LoginUserParams = {
  email: string;
  password: string;
};

export type LoginUserData = {
  accessToken: string;
  token: string;
  expiry: number;
  customer_id: number;
  customer_name: string;
  customer_email: string;
};

export type LoginUserResponse = GenericResponse & {
  data: LoginUserData;
};
