import { MultipleOptions } from 'components/UIComponents/UIRadioButtonGroup';

export const VideoAcceptType: string[] = ['mp4', 'MP4', 'WebM', 'mov', 'quicktime', 'avi'];

export const GENDER: MultipleOptions[] = [
  { id: 'Male', name: 'Male' },
  { id: 'Female', name: 'Female' },
  { id: 'Trans', name: 'Trans' }
];
<<<<<<< HEAD

interface VerificationStep {
  name: string;
}

export const VerificationStepSecond: VerificationStep[] = [{ name: 'ID Card' }, { name: 'Password' }, { name: `Driver's License` }];

interface price {
  price: number;
}
export const priceValueMenuItme: price[] = [{ price: 4.99 }, { price: 2.99 }, { price: 5.99 }];
=======

export type DocumentKeyValueList = {
  key: string;
  value: string;
};

export const DocumentList: DocumentKeyValueList[] = [
  { key: 'ID Card', value: 'Id_Card' },
  { key: 'Driver License', value: 'Driving_License' },
  { key: 'Passport', value: 'Passport' }
];
>>>>>>> 61303fd1e456fd3bb4a579e34277cee64258f557
