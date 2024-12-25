import { GenericRes } from 'services/guestAuth/authuser.services';

export type Nationality = {
  id: number;
  name: string;
};

export type Country = {
  id: number;
  name: string;
};

export type Document = {
  id: number;
  is_document: number;
  document_type: string;
  link: string;
  cords: string;
  favourite: number;
  document_number: string | null;
  file_type?: string;
};

export type Photo = {
  id: number;
  file_id?: string;
  is_document: number;
  document_type: string;
  link: string;
  cords: string;
  favourite: number;
  document_number: string | null;
};

export type Language = {
  language_name: string;
  language_id: number;
};

export type VideoCallPrice = {
  price_per_minute: number;
  price_per_minute_id: number;
};

export type ModelSEOData = {
  title: string;
  keywords: string;
  description: string;
  model_id: number;
  user_name?: string;
  model_name: string;
  seo_id?: number;
};

export type ModelProfilePlans = {
  free_plan_used: number;
};

export type ModelDetails = {
  id: number;
  name: string;
  email: string;
  gender: string;
  bio: string;
  dob: string;
  verification_step: string;
  user_name: string;
  nationality: Nationality;
  country: Country;
  documents: Document[];
  photos: Photo[];
  languages: Language[];
  video_call_prices: VideoCallPrice[];
  email_verified: number;
  last_login: string;
  updated_at: string;
  profile_status: string;
  model_profile_plans: ModelProfilePlans;
  model_seo: ModelSEOData[];
};

export interface ModelDetailsRes extends GenericRes {
  data: ModelDetails;
}

export type ModelDetailsParams = {
  filter: number;
  date_range: {
    start_date: string | null;
    end_date: string | null;
  };
  sort_order?: string;
  sort_field?: string;
  profile_status?: string | null;
  country_code?: number | null;
  gender?: string | null;
  email_verified?: boolean | null;
  last_active_from_date: string | null;
  last_active_to_date: string | null;
  verificationStep?: string | null;
};

export type ModelFilterParams = {
  token: string;
  limit: number;
  offset: number;
  filter_text?: string;
  from_date?: string;
  to_date?: string;
  sort_order?: string;
  sort_field?: string;
  verification_step?: string;
  profile_status?: string;
  is_active?: string;
  gender?: string;
};

export type CustomerFilterParams = {
  limit: number;
  offset: number;
  search_field?: string;
  sort_order?: string;
  sort_field?: string;
};

export type CustomerFilterBodyParams = {
  filter: number;
  date_range: {
    start_date: string;
    end_date: string;
  };
  sort_order: string;
  sort_field: string;
};

export type CustomerDetailsPage = {
  id: number;
  name: string;
  email: string;
  createdDate: string;
  userName: string;
  email_verified: number;
  profile_status: string;
  total_call_duration: string;
  number_of_calls: number;
  amount_spent: number;
  is_customer_banned: number;
  credits_purchased: number;
};

export type CustomerDetails = {
  total_rows: number;
  page_size: number;
  offset: number;
};

export type CustomerDetailsContainer = {
  aggregate: CustomerDetails;
  user_reports: CustomerDetailsPage[];
};

export interface CustomerDetailsRes extends GenericRes {
  data: CustomerDetailsContainer;
}

export type ModelDetailsDelete = {
  status: string;
  message: string;
};

export interface ModelDetailsDeleteRes extends GenericRes {
  data: ModelDetailsDelete;
}

export type ModelDetailStatusOffline = {
  id: number;
  is_online: boolean;
};

export interface ModelDetailStatusOfflineRes extends GenericRes {
  data: ModelDetailStatusOffline;
}
