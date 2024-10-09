import { GenericResponse } from 'types/api/ApiGenericResponse';

export type LoginUserParams = {
  email: string;
  password: string;
  role: string;
};

export type LoginUserData = {
  accessToken: string;
  token: string;
  expiry: number;
  customer_id: number;
  customer_name: string;
  customer_email: string;
  customer_user_name: string;
  role: string;
  id: number;
  name: string;
  email: string;
  user_name: string;
};

export type LoginUserResponse = GenericResponse & {
  data: LoginUserData;
};
