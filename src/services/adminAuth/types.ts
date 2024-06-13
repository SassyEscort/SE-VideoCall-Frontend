import { GenericResponse } from 'types/commonApiTypes';

export type AdminLoginParams = {
  email: string;
  password: string;
};

export type AdminLoginData = {
  token: string;
  id: number;
  name: string;
  email: string;
  role: string;
};

export type AdminLoginResponse = GenericResponse & {
  data: AdminLoginData;
};

export type AdminForgotPasswordRequest = {
  email: string;
};

export type AdminForgotPasswordResponse = GenericResponse & {
  data: string;
};
