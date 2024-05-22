import { useState } from 'react';
import VerificationStep2 from '../verificationStep2';
import VerificationStepPromise from '../verificationStep2Document';
import { ModelDetailsResponse } from '../verificationTypes';
import { TokenIdType } from '..';

export type VerificationStepPromiseType = {
  activeStep: number;
  modelDetails: ModelDetailsResponse | undefined;
  handlePrev: () => void;
  handleNext: () => void;
  token: TokenIdType;
};

const DocumentMainContainer = ({ activeStep, handlePrev, handleNext, token, modelDetails }: VerificationStepPromiseType) => {
  const [open, setOpen] = useState(false);

  const handleChaneDocuModal = (val: boolean) => {
    setOpen(val);
  };

  const handleDocuPrev = () => {
    setOpen(false);
  };
  return (
    <>
      {open ? (
        <VerificationStepPromise
          token={token}
          activeStep={activeStep}
          handleNext={handleNext}
          modelDetails={modelDetails ?? ({} as ModelDetailsResponse)}
          handlePrev={handlePrev}
          handleDocuPrev={handleDocuPrev}
        />
      ) : (
        <VerificationStep2 token={token} handleNext={handleNext} handlePrev={handlePrev} handleChaneDocuModal={handleChaneDocuModal} />
      )}
    </>
  );
};

export default DocumentMainContainer;
