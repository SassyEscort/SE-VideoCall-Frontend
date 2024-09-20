import { MultipleOptions } from 'components/UIComponents/UIRadioButtonGroup';

export const VideoAcceptType: string[] = ['mp4', 'MP4', 'WebM', 'WEBM', 'mov', 'quicktime', 'avi'];

export const GENDER: MultipleOptions[] = [
  { id: 'Male', name: 'Male' },
  { id: 'Female', name: 'Female' },
  { id: 'Trans', name: 'Trans' }
];

export enum PHOTO_TYPE {
  MODEL_PHOTO = 'Model_Photo'
}
export type DocumentKeyValueList = {
  key: string;
  value: string;
};

export const DocumentList: DocumentKeyValueList[] = [
  { key: 'ID Card', value: 'Id_Card' },
  { key: 'Driving License', value: 'Driving_License' },
  { key: 'Passport', value: 'Passport' }
];

interface price {
  price: number;
}
export const priceValueMenuItme: price[] = [{ price: 4.99 }, { price: 2.99 }, { price: 5.99 }];

export enum MODEL_ACTIVE_STEP {
  BASIC_DETAILS = 'Basic_Details',
  UPLOAD_DOCUMENTS = 'Upload_Documents',
  UPLOAD_PHOTOS = 'Upload_Photos',
  ONBOARDED = 'Onboarded',
  IN_REVIEW = 'In_Review',
  ADD_PRICE = 'Add_Price',
  VERIFIED = 'Verified'
}

export enum EMAIL_SOURCE {
  DETAILS = 'details',
  ONBOARDED = 'onboarded'
}

export enum DOCUMENT_UPLOAD_TYPE {
  ID = 'ID',
  ID_FRONT = 'ID front',
  ID_BACK = 'ID back',
  PASSPORT = 'Passport',
  ID_Card = 'ID Card',
  DRIVING_LICENSE = 'Driving License'
}

export enum DOCUMENT_UPLOAD_FILE_TYPE {
  IMAGE = 'Image',
  NON_IMAGE = 'Non_Image'
}

export enum ROLE {
  MODEL = 'model',
  CUSTOMER = 'customer'
}
