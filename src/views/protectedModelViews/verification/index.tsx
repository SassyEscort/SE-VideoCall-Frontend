'use client';
import VerificationHeader from './header';
import VerificationStepOne from './stepOne';
import UIStepper from '../../../components/common/stepper';
import { useState } from 'react';

const VERIFICATION_STEPS = ['Basic Details', 'Documents', 'Photos', 'Review'];

const VerificationContainer = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  return (
    <>
      <VerificationHeader activeStep={activeStep} />
      <UIStepper steps={VERIFICATION_STEPS} activeStep={1} />
      {activeStep === 0 && <VerificationStepOne handleNext={handleNext} />}
    </>
  );
};

export default VerificationContainer;
