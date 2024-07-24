import { useState } from 'react';
import VerificationStep2 from '../verificationStep2';
import { ModelDetailsResponse } from '../verificationTypes';
import { TokenIdType } from '..';

export type VerificationStepPromiseType = {
  activeStep: number;
  modelDetails: ModelDetailsResponse | undefined;
  handlePrev?: () => void;
  handleNext?: () => void;
  token: TokenIdType;
  handleModelApiChange: () => void;
  handleNextDocment?: () => void;
  isReviewEdit: boolean;
  handleEdit?: (step: number) => void;
  isDashboard: boolean;
};

const DocumentMainContainer = ({
  activeStep,
  handlePrev,
  handleNext,
  token,
  modelDetails,
  handleModelApiChange,
  handleNextDocment,
  isReviewEdit,
  handleEdit,
  isDashboard
}: VerificationStepPromiseType) => {
  const [open, setOpen] = useState(false);
  const [stepData, setStepData] = useState(0);

  const handleChaneDocuModal = (val: boolean) => {
    if (!isDashboard) {
      setOpen(val);
    }
  };

  const handleDocuPrev = () => {
    setStepData(1);
    setOpen(false);
    handleModelApiChange();
  };

  return (
    <>
      <VerificationStep2
        open={open}
        activeStep={activeStep}
        handleNextDocment={handleNextDocment}
        handleDocuPrev={handleDocuPrev}
        handleModelApiChange={handleModelApiChange}
        token={token}
        handleNext={handleNext}
        stepData={stepData}
        handlePrev={handlePrev}
        handleChaneDocuModal={handleChaneDocuModal}
        modelDetails={modelDetails ?? ({} as ModelDetailsResponse)}
        isReviewEdit={isReviewEdit}
        handleEdit={handleEdit}
        isDashboard={isDashboard}
      />
    </>
  );
};

export default DocumentMainContainer;
