export type GenericResponse = {
  message: string;
  code: number;
  error: null | string;
};

export type GenericResponseData = {
  data: GenericResponse;
};
