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
  handleModelApiChange: () => void;
  handleNextDocment: () => void;
};

const DocumentMainContainer = ({
  activeStep,
  handlePrev,
  handleNext,
  token,
  modelDetails,
  handleModelApiChange,
  handleNextDocment
}: VerificationStepPromiseType) => {
  const [open, setOpen] = useState(false);
  const [stepData, setStepData] = useState(0);

  const handleChaneDocuModal = (val: boolean) => {
    setOpen(val);
  };

  const handleDocuPrev = () => {
    setStepData(1);
    setOpen(false);
    handleModelApiChange();
  };

  return (
    <>
      {open ? (
        <VerificationStepPromise
          token={token}
          activeStep={activeStep}
          handleNext={handleNextDocment}
          modelDetails={modelDetails ?? ({} as ModelDetailsResponse)}
          handlePrev={handlePrev}
          handleDocuPrev={handleDocuPrev}
        />
      ) : (
        <VerificationStep2
          token={token}
          handleNext={handleNext}
          stepData={stepData}
          handlePrev={handlePrev}
          handleChaneDocuModal={handleChaneDocuModal}
          modelDetails={modelDetails ?? ({} as ModelDetailsResponse)}
        />
      )}
    </>
  );
};

export default DocumentMainContainer;
