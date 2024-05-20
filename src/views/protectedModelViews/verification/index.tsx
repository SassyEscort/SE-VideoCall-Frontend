import VerificationHeader from './header';
import UIStepper from './stepper';

const VERIFICATION_STEPS = ['Basic Details', 'Documents', 'Photos', 'Review'];

const VerificationContainer = () => {
  return (
    <>
      <VerificationHeader activeStep={8} />
      <UIStepper steps={VERIFICATION_STEPS} activeStep={1} />
    </>
  );
};

export default VerificationContainer;
