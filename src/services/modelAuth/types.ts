import { GenericResponse } from 'types/commonApiTypes';

export type LoginUserParams = {
  email: string;
  password: string;
};

export type LoginUserData = {
  token: string;
  id: number;
  name: number;
  email: string;
  verification_step: string;
};

export type LoginUserResponse = GenericResponse & {
  data: LoginUserData;
};
