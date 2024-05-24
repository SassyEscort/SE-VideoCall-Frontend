import { MultipleOptions } from 'components/UIComponents/UIRadioButtonGroup';

export const VideoAcceptType: string[] = ['mp4', 'MP4', 'WebM', 'mov', 'quicktime', 'avi'];

export const GENDER: MultipleOptions[] = [
  { id: 'Male', name: 'Male' },
  { id: 'Female', name: 'Female' },
  { id: 'Trans', name: 'Trans' }
];

interface VerificationStep {
  name: string;
}

export const VerificationStepSecond: VerificationStep[] = [{ name: 'ID Card' }, { name: 'Password' }, { name: `Driver's License` }];

interface price {
  price: number;
}
export const priceValueMenuItme: price[] = [{ price: 4.99 }, { price: 2.99 }, { price: 5.99 }];
