import { WorkerPhotos } from './stepThree/uploadImage';

export type MultipleOptionString = {
  id: string;
  name: string;
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
};

export interface DocumentDataPhoto {
  cords: string;
  document_number: string;
  document_type: string;
  favourite: number;
  id: number;
  is_document: number;
  link: string;
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
