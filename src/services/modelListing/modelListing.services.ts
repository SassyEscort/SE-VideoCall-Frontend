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
  country: string;
  sortOrder: string;
  sortField: string;
  offset: number;
  pageSize: number;
  rating?: number;
};

export type ModelHomeListing = {
  id: number;
  name: string;
  email: string;
  dob: string;
  rating: number;
  created_at: string;
  price_per_minute: number;
  credits_per_minute: number;
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
    const queryParams: string[] = [];

    if (filters?.language) queryParams.push(`language=${filters.language}`);
    if (filters?.isOnline) queryParams.push(`is_online=${filters.isOnline}`);
    if (filters?.fromAge) queryParams.push(`min_age=${filters.fromAge}`);
    if (filters?.toAge) queryParams.push(`max_age=${filters.toAge}`);
    if (filters?.fromPrice) queryParams.push(`min_price=${filters.fromPrice}`);
    if (filters?.toPrice) queryParams.push(`max_price=${filters.toPrice}`);
    if (filters?.country) queryParams.push(`country=${filters.country}`);
    if (filters?.sortOrder) queryParams.push(`sort_order=${filters.sortOrder}`);
    if (filters?.sortField) queryParams.push(`sort_field=${filters.sortField}`);
    if (filters?.offset !== undefined) queryParams.push(`offset=${filters.offset}`);
    if (filters?.pageSize !== undefined) queryParams.push(`limit=${filters.pageSize}`);
    if (filters?.rating !== undefined) queryParams.push(`rating=${filters.rating}`);

    const query = queryParams.join('&');
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/model/listing?${query}`, {
        headers: { 'Content-Type': 'application/json' }
      });

      return res.data.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as ModelListingRes;
    }
  };
}
