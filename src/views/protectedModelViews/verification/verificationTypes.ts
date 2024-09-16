import { RatingAndReviewDetailsAllDetails } from 'services/ratingAndReview/ratingAndReview.service';
import { WorkerPhotos } from './stepThree/uploadImage';

export type MultipleOptionString = {
  id: string;
  name: string;
  isAddOption?: boolean;
};

export type LanagueRes = {
  language_id: string;
  language_name: string;
};

export type VerificationStep1Type = {
  id: number;
  gender: string;
  name: string;
  country_id: string;
  bio: string;
  email: string;
  dob: string;
  nationality_id: string;
  model_languages: MultipleOptionString[];
};

export type VideCallPrices = {
  price_per_minute: string;
  price_per_minute_id: string;
  credits_per_minute: string;
};

export type ModelDetailsResponse = {
  id: number;
  gender: string;
  name: string;
  country: MultipleOptionString;
  nationality: MultipleOptionString;
  documents: DocumentDataPhoto[];
  bio: string;
  email: string;
  dob: string;
  languages: LanagueRes[];
  photos: WorkerPhotos[];
  verification_step: string;
  video_call_prices: VideCallPrices[];
  email_verified: number;
  updated_at: string;
  is_online: number;
  user_name: string;
  profile_status: string;
  rejection_reason: string;
  favourite: number;
  rating: number;
  model_ratings: RatingAndReviewDetailsAllDetails;
};

export type GuestDetailsResponse = {
  data: ModelDetailsResponse;
};

export type GuestModelDetailsResponse = {
  code: number;
  data: ModelDetailsResponse;
  response?: {
    data?: {
      message: string;
    };
  };
};

export interface DocumentDataPhoto {
  cords: string;
  document_number: string;
  document_type: string;
  favourite: number;
  id: number;
  is_document: number;
  link: string;
  file_type?: string;
  document_front_side: number;
  file_id: string;
}
export interface FileBody {
  type: string;
  file: File | File[] | string | null;
  cords?: string | string[];
  id?: number;
  isFavorite?: number;
}

export interface MultipleImageUplaodBody {
  file: File[];
  publicKey: string;
  signature: string;
  expire: number;
  token: string;
  fileName: string;
  folder: string;
}
