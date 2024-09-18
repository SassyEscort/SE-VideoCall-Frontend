import axios from 'axios';
import { GenericRes } from 'services/guestAuth/authuser.services';

export type RatingAndReviewDetails = {
  call_log_id: number;
  rating: number;
  review: string;
};

export interface RatingAndReviewModel extends GenericRes {
  data: RatingAndReviewDetails;
}

export type RatingAndReviewDetailsList = {
  id: number;
  customer_id: number;
  customer_name: string;
  rating: number;
  review: string;
  created_at: string;
};

export type RatingAndReviewDetailsInfo = {
  total_clients: number;
  total_ratings: number;
  total_reviews: number;
  average_rating: number;
  five_star_count: number;
  five_star_percentage: number;
  four_star_count: number;
  four_star_percentage: number;
  three_star_count: number;
  three_star_percentage: number;
  two_star_count: number;
  two_star_percentage: number;
  one_star_count: number;
  one_star_percentage: number;
};

export type RatingAndReviewDetailsAggregate = {
  total_rows: number;
  page_size: number;
  offset: number;
};

export type RatingAndReviewDetailsAllDetails = {
  model_rating_list: RatingAndReviewDetailsList[];
  model_rating_info: RatingAndReviewDetailsInfo[];
  aggregate: RatingAndReviewDetailsAggregate;
};

export interface RatingAndReviewDetailsRes extends GenericRes {
  data: RatingAndReviewDetailsAllDetails;
}

export type ratingAndReviewParams = {
  page: number;
  limit: number;
  offset: number;
  rating: string;
};

export type CallRatingDetailsParams = {
  call_log_id: number;
  rating: number;
  review: string;
};

export type CallRating = {
  message: string;
  code: number;
  error: string;
};

export class RatingAndReviewService {
  static ratingAndReviweList = async (token: string): Promise<RatingAndReviewModel> => {
    try {
      const res = await axios.put(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/call/ratings`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });
      return res.data;
    } catch (error) {
      return error as RatingAndReviewModel;
    }
  };

  static getRatingAndReviewDetails = async (params: ratingAndReviewParams, token: string): Promise<RatingAndReviewDetailsRes> => {
    try {
      let url: string = `/v1/model/call-ratings?limit=${params.limit}&offset=${params.offset}`;
      if (params.rating) url = url + `&rating=${params.rating}`;
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + url, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });
      return res.data;
    } catch (err) {
      return err as RatingAndReviewDetailsRes;
    }
  };

  static callRating = async (params: CallRatingDetailsParams, token: string): Promise<CallRating> => {
    try {
      const res = await axios.put(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/call/ratings`, params, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });
      return res.data;
    } catch (error) {
      return error as CallRating;
    }
  };
}
