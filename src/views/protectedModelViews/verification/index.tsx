'use client';
import VerificationHeader from './header';
import VerificationStepOne from './stepOne';
import UIStepper from '../../../components/common/stepper';
import { useEffect, useState } from 'react';
import { ModelDetailsResponse } from './verificationTypes';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';
import { getUserDataClient } from 'utils/getSessionData';
import Box from '@mui/material/Box';
import UploadImage from './stepThree/uploadImage';
import DocumentMainContainer from './documentContainer';

const VERIFICATION_STEPS = ['Basic Details', 'Documents', 'Photos', 'Review'];

export type TokenIdType = {
  id: number;
  token: string;
};

const VerificationContainer = () => {
  const [activeStep, setActiveStep] = useState(3);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [modelDetails, setModelDetails] = useState<ModelDetailsResponse>();

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setActiveStep((prev) => prev - 1);
  };

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data.id, token: data.token });
    };

    userToken();
  }, []);

  useEffect(() => {
    const modelDetails = async () => {
      const modelData = await ModelDetailsService.getModelDetails(token.token);
      setModelDetails(modelData.data);
    };
    modelDetails();
  }, [token.id, token.token]);

  return (
    <>
      <VerificationHeader activeStep={activeStep} />
      <Box sx={{ backgroundColor: 'secondary.500' }} pt={4} pb={4}>
        <UIStepper steps={VERIFICATION_STEPS} activeStep={1} />
      </Box>
      {activeStep === 0 && (
        <VerificationStepOne token={token} handleNext={handleNext} modelDetails={modelDetails ?? ({} as ModelDetailsResponse)} />
      )}
      {(activeStep === 1 || activeStep === 2) && (
        <DocumentMainContainer
          token={token}
          activeStep={activeStep}
          handleNext={handleNext}
          modelDetails={modelDetails ?? ({} as ModelDetailsResponse)}
          handlePrev={handlePrev}
        />
      )}
      {activeStep === 3 && (
        <UploadImage
          workerPhotos={modelDetails?.photos ?? []}
          token={token}
          handleNext={handleNext}
          handlePrevVerificationStep={handlePrev}
        />
      )}
    </>
  );
};
0;

export default VerificationContainer;
