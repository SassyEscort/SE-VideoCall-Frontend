import axios, { AxiosError } from 'axios';
import { PaginationAggregation } from 'services/adminModel/adminModel.services';
import { LanagueRes } from 'views/protectedModelViews/verification/verificationTypes';

export type ModelFavRes = {
  id: number;
  name: string;
  dob: string;
  nationality: string;
  country: string;
  link: string;
  price_per_minute: number;
  credits_per_minute: number;
  user_name: string;
  is_online: number;
  cords: string;
  languages: LanagueRes[];
  favourite: number;
  profile_plan_purchased: number;
};

export type ModelFavResponse = {
  model_details: ModelFavRes[];
  aggregate: PaginationAggregation;
};

export type FavoriteFilter = {
  page: number;
  limit: number;
  offset: number;
};

export class CustomerFavorite {
  static getCustomerFavorite = async (token: string, payload: FavoriteFilter): Promise<ModelFavResponse> => {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/customer/favourite?limit=${payload.limit}&offset=${payload.offset}`,
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
      return error.response?.data as ModelFavResponse;
    }
  };
}
