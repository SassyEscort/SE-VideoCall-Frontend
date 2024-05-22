'use client';
import VerificationHeader from './header';
import VerificationStepOne from './stepOne';
import UIStepper from '../../../components/common/stepper';
import { useEffect, useState } from 'react';
import { ModelDetailsResponse } from './verificationTypes';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';
import { getUserDataClient } from 'utils/getSessionData';
import Box from '@mui/material/Box';

const VERIFICATION_STEPS = ['Basic Details', 'Documents', 'Photos', 'Review'];

const VerificationContainer = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [token, setToken] = useState(0);
  const [modelDetails, setModelDetails] = useState<ModelDetailsResponse>();

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken(data.id);
    };

    userToken();
    const modelDetails = async () => {
      const modelData = await ModelDetailsService.getModelDetails(token);
      setModelDetails(modelData.data);
    };
    modelDetails();
  }, [token]);

  return (
    <>
      <VerificationHeader activeStep={activeStep} />
      <Box sx={{ backgroundColor: 'secondary.500' }} id="muskan" pt={4} pb={4}>
        <UIStepper steps={VERIFICATION_STEPS} activeStep={1} />
      </Box>
      {activeStep === 0 && (
        <VerificationStepOne token={token} handleNext={handleNext} modelDetails={modelDetails ?? ({} as ModelDetailsResponse)} />
      )}
    </>
  );
};

export default VerificationContainer;
