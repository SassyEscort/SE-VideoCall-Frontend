import axios, { AxiosError, AxiosRequestConfig } from 'axios';
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
  gender: string;
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
  favourite: number;
  profile_plan_purchased: number;
};

export type ModelListingRes = {
  model_details: ModelHomeListing[];
  aggregate: PaginationAggregation;
};

export class ModelListingService {
  static getModelListing = async (filters: ModelListingParams, token: string): Promise<ModelListingRes> => {
    const queryParams: string[] = [];
    if (filters?.language) queryParams.push(`language=${filters.language}`);
    if (filters?.isOnline) queryParams.push(`is_online=${filters.isOnline}`);
    if (filters?.fromAge) queryParams.push(`min_age=${filters.fromAge}`);
    if (filters?.toAge) queryParams.push(`max_age=${filters.toAge}`);
    if (filters?.fromPrice) queryParams.push(`min_credits=${filters.fromPrice}`);
    if (filters?.toPrice) queryParams.push(`max_credits=${filters.toPrice}`);
    if (filters?.country) queryParams.push(`country=${filters.country}`);
    if (filters?.sortOrder) queryParams.push(`sort_order=${filters.sortOrder}`);
    if (filters?.sortField) queryParams.push(`sort_field=${filters.sortField}`);
    if (filters?.gender) queryParams.push(`gender=${filters.gender}`);
    if (filters?.offset !== undefined) queryParams.push(`offset=${filters.offset}`);
    if (filters?.pageSize !== undefined) queryParams.push(`limit=${filters.pageSize}`);
    if (filters?.rating !== undefined) queryParams.push(`rating=${filters.rating}`);

    const query = queryParams.join('&');

    try {
      const headers: AxiosRequestConfig['headers'] = { 'Content-Type': 'application/json' };
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/model/listing?${query}`, { headers });
      return res.data.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as ModelListingRes;
    }
  };
}

export type BillingDetails = {
  amount: number;
  call_duration: string;
  call_end_time: string;
  call_start_time: string;
  category: string;
  country_name: string;
  created_at: string;
  credits: number;
  credits_per_minute: number;
  customer_id: number;
  details: string;
  id: number;
  is_online: number;
  languages: Language[];
  link: string;
  model_dob: string;
  model_id: number;
  model_name: string;
  price_per_minute: number;
  cords: string;
  user_name: string;
  wallet_id: number;
};
