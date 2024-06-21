export interface Photo {
  link: string;
  type: string;
  id: string;
  cords: string;
  is_favourite: number;
  is_document: number;
  document_type: string;
  document_number: string | null;
}

export interface Payload {
  id: string;
  is_document: boolean;
  photos: Photo[];
}

export type ImagekitTokenResponse = {
  signature: string;
  expire: number;
  token: string;
};

export interface ImageUplaodBody {
  file: File;
  publicKey: string;
  signature: string;
  expire: number;
  token: string;
  fileName: string;
  folder: string;
}

export type ImageUploadPayload = {
  photosURL: string;
  url: string;
  fileId: string;
  width: number;
  height: number;
  file_id: string;
  file_type: string;
};

export interface CustomFile extends File {
  path?: string;
  preview?: string;
  lastModifiedDate?: Date;
}
