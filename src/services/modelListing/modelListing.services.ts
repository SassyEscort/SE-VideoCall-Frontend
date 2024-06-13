import axios, { AxiosError } from 'axios';

export type Language = {
  language_name: string;
};

export type Aggregate = {
  total_rows: number;
  page_size: number;
  offset: number;
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
  languages: Language[];
};

export type ModelListingRes = {
  model_details: ModelHomeListing[];
  aggregate: Aggregate;
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
