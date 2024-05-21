export const VideoAcceptType: string[] = ['mp4', 'MP4', 'WebM', 'mov', 'quicktime', 'avi'];

interface VerificationStep {
  name: string;
}

export const VerificationStepSecond: VerificationStep[] = [{ name: 'ID Card' }, { name: 'Password' }, { name: `Driver's License` }];
