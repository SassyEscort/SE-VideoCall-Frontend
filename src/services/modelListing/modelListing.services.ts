import axios, { AxiosError } from 'axios';
import { PaginationAggregation } from 'services/adminModel/adminModel.services';

export type Language = {
  language_name: string;
};

export type ModelListingParams = {
  fromAge: string;
  toAge: string;
  fromPrice: string;
  toPrice: string;
  language: string;
  isOnline: string;
  page: number;
  pageSize: number;
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
  cords: string;
  languages: Language[];
};

export type ModelListingRes = {
  model_details: ModelHomeListing[];
  aggregate: PaginationAggregation;
};

export class ModelListingService {
  static getModelListing = async (filters: ModelListingParams): Promise<ModelListingRes> => {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_BASE_URL +
          `/v1/model/listing?language=${filters.language}&is_online=${filters.isOnline}&min_age=${filters.fromAge}&max_age=${filters.toAge}`,
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );

      return res.data.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as ModelListingRes;
    }
  };
}
