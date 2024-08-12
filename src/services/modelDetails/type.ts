export type GetTotalEarningDataParams = {
  start_date: string;
  end_date: string;
};

export type ModelEarningResponse = {
  id: number;
  amount: number;
  credits: number;
  is_active: boolean;
  customer_id: number;
  model_id: number;
  withdrawn_amount: number;
  earnings: number;
};

export type GuestEarningResponse = {
  data: ModelEarningResponse;
};

export type GuestModelEarningResponse = {
  code: number;
  data: ModelEarningResponse;
  custom_code: number;
  response?: {
    data?: {
      message: string;
    };
  };
};
