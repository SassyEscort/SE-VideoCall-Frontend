import { MultipleOptions } from 'components/UIComponents/UIRadioButtonGroup';

export const VideoAcceptType: string[] = ['mp4', 'MP4', 'WebM', 'mov', 'quicktime', 'avi'];

export const GENDER: MultipleOptions[] = [
  { id: 'Male', name: 'Male' },
  { id: 'Female', name: 'Female' },
  { id: 'Trans', name: 'Trans' }
];

export type DocumentKeyValueList = {
  key: string;
  value: string;
};

export const DocumentList: DocumentKeyValueList[] = [
  { key: 'ID Card', value: 'Id_Card' },
  { key: 'Driver License', value: 'Driving_License' },
  { key: 'Passport', value: 'Passport' }
];
