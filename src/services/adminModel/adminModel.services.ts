import axios, { AxiosError } from 'axios';

export type ModelListing = {
  country_id: number;
  country_name: string;
  created_at: string;
  email: string;
  email_verified: number;
  id: number;
  is_active: number;
  last_login: string;
  name: string;
  profile_status: string;
  updated_at: string;
  verification_step: string;
};

export type PaginationAggregation = {
  offset: number;
  page_size: number;
  total_rows: number;
};

export type ModelListingRes = {
  model_details: ModelListing[];
  aggregate: PaginationAggregation;
};

export class adminModelServices {
  static getModelList = async (token: string, limit: number, offset: number): Promise<ModelListingRes> => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/admin/model?limit=${limit}&offset=${offset}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });

      return res.data.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as ModelListingRes;
    }
  };

  static modelAction = async (token: string, modelId: number, profile_status: string): Promise<ModelListingRes> => {
    try {
      const res = await axios.put(
        process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/admin/model/${modelId}`,
        { profile_status: profile_status },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token
          }
        }
      );

      return res.data.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as ModelListingRes;
    }
  };
}
