import axios, { AxiosError } from 'axios';
import { PaginationAggregation } from 'services/adminModel/adminModel.services';

export type Language = {
  language_name: string;
};

export type ModelHomeListing = {
  id: number;
  name: string;
  email: string;
  dob: string;
  rating: number;
  created_at: string;
  price_per_minute: number;
  link: string;
  is_online: number;
  country: string;
  user_name: string;
  languages: Language[];
};

export type ModelListingRes = {
  model_details: ModelHomeListing[];
  aggregate: PaginationAggregation;
};

export class ModelListingService {
  static getModelListing = async (): Promise<ModelListingRes> => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/model/listing`, {
        headers: { 'Content-Type': 'application/json' }
      });

      return res.data.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as ModelListingRes;
    }
  };
}
