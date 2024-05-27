import { Photo } from './verificationStep2Document/type';

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
  photos: Photo[];
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
