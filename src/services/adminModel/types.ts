export interface Nationality {
  id: number;
  name: string;
}

export interface Country {
  id: number;
  name: string;
}

export interface Document {
  id: number;
  is_document: number;
  document_type: string;
  link: string;
  cords: string;
  favourite: number;
  document_number: string | null;
}

export interface Photo {
  id: number;
  is_document: number;
  document_type: string;
  link: string;
  cords: string;
  favourite: number;
  document_number: string | null;
}

export interface Language {
  language_name: string;
  language_id: number;
}

export interface VideoCallPrice {
  price_per_minute: number;
  price_per_minute_id: number;
}

export interface ModelDetails {
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
}

export interface ApiResponse {
  message: string;
  code: number;
  error: string | null;
  data: ModelDetails;

  custom_code: string | null;
}
