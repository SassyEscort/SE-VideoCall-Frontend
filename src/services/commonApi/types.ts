export type PriceCommissionsData = {
  percentage: number;
  id: number;
  is_active: number;
};

export type PriceCommissionsRes = {
  code: string;
  message: string;
  data: PriceCommissionsData;
};
