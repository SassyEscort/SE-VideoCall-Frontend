'use client';
import VerificationHeader from './header';
import VerificationStepOne from './stepOne';
import UIStepper from '../../../components/common/stepper';
import { useCallback, useEffect, useState } from 'react';
import { ModelDetailsResponse } from './verificationTypes';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';
import { getUserDataClient } from 'utils/getSessionData';
import Box from '@mui/material/Box';
import UploadImage from './stepThree/uploadImage';
import DocumentMainContainer from './documentContainer';
import CircularProgressWithLabel from './header/CircularProgressWithLabel';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import { FormattedMessage } from 'react-intl';

const VERIFICATION_STEPS = ['Basic Details', 'Documents', 'Photos', 'Review'];

export type TokenIdType = {
  id: number;
  token: string;
};

const VerificationContainer = () => {
  const [activeStep, setActiveStep] = useState(3);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [modelDetails, setModelDetails] = useState<ModelDetailsResponse>();
  const [progressValue, setProgressValue] = useState(14.28);

  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const stepProgress = 100 / 7;
    const activeStepNew = activeStep + 1;
    setProgressValue(activeStepNew * stepProgress);
  }, [activeStep]);

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

  const handleModelApiChange = useCallback(() => {
    const modelDetails = async () => {
      const modelData = await ModelDetailsService.getModelDetails(token.token);
      setModelDetails(modelData.data);
    };
    modelDetails();
  }, [token.token]);

  return (
    <>
      <VerificationHeader activeStep={activeStep} />
      {!isMdDown && (
        <Box sx={{ backgroundColor: 'secondary.500' }} pt={4} pb={4}>
          <UIStepper steps={VERIFICATION_STEPS} activeStep={1} />
        </Box>
      )}
      {isMdDown && activeStep !== 7 && (
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            height: '109px',
            gap: 1.75,
            py: 2,
            px: '15px',
            alignItems: 'center',
            justifyContent: { sm: 'center' },
            backgroundColor: 'secondary.dark'
          }}
        >
          <CircularProgressWithLabel value={progressValue} currentStep={activeStep + 1} totalSteps={7} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 0.5
            }}
          >
            {isMdDown && activeStep === 0 && (
              <>
                <UINewTypography variant="button" sx={{ lineHeight: '140%', color: 'text.secondary' }}>
                  <FormattedMessage id="LetStartWith" />
                </UINewTypography>
                <UINewTypography variant="SubtitleSmallMedium">
                  <FormattedMessage id="NextDocuments" />
                </UINewTypography>
              </>
            )}
            {isMdDown && activeStep === 1 && (
              <>
                <UINewTypography variant="button" sx={{ lineHeight: '140%', color: 'text.secondary' }}>
                  <FormattedMessage id="PleaseProvide" />
                </UINewTypography>
                <UINewTypography variant="SubtitleSmallMedium">
                  <FormattedMessage id="NextPhotos" />
                </UINewTypography>
              </>
            )}
            {isMdDown && activeStep === 2 && (
              <>
                <UINewTypography variant="button" sx={{ lineHeight: '140%', color: 'text.secondary' }}>
                  <FormattedMessage id="PleaseProvide" />
                </UINewTypography>
                <UINewTypography variant="SubtitleSmallMedium">
                  <FormattedMessage id="NextPhotos" />
                </UINewTypography>
              </>
            )}
            {isMdDown && activeStep === 3 && (
              <>
                <UINewTypography variant="button" sx={{ lineHeight: '140%', color: 'text.secondary' }}>
                  <FormattedMessage id="Photos" />
                </UINewTypography>
                <UINewTypography variant="SubtitleSmallMedium">
                  <FormattedMessage id="NextFinalReview" />
                </UINewTypography>
              </>
            )}
            {isMdDown && activeStep === 4 && (
              <>
                <UINewTypography variant="button" sx={{ lineHeight: '140%', color: 'text.secondary' }}>
                  <FormattedMessage id="ReviewYourDetails" />
                </UINewTypography>
                <UINewTypography variant="SubtitleSmallMedium">
                  <FormattedMessage id="MakesureYouFilled" />
                </UINewTypography>
              </>
            )}
            {isMdDown && activeStep === 5 && (
              <>
                <UINewTypography variant="button" sx={{ lineHeight: '140%', color: 'text.secondary' }}>
                  <FormattedMessage id="OnboardingCompleted" />
                </UINewTypography>
                <UINewTypography variant="SubtitleSmallMedium">
                  <FormattedMessage id="YourProfile" />
                </UINewTypography>
              </>
            )}
          </Box>
        </Box>
      )}
      {activeStep === 0 && (
        <VerificationStepOne token={token} handleNext={handleNext} modelDetails={modelDetails ?? ({} as ModelDetailsResponse)} />
      )}
      {(activeStep === 1 || activeStep === 2) && (
        <DocumentMainContainer
          handleModelApiChange={handleModelApiChange}
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
