'use client';
import { Box } from '@mui/material';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import UINewTypography from 'components/UIComponents/UINewTypography';
import {
  AuthModelSignupSuccessMainContainer,
  FirstImgAuthModelSignupSuccessContainer,
  SecContainerAuthModelSignupSuccessContainer
} from './ModelSignup.styled';

const ModelSignupSuccess = () => {
  return (
    <AuthModelSignupSuccessMainContainer>
      <FirstImgAuthModelSignupSuccessContainer src="/images/model/model-signup/success-right.webp"></FirstImgAuthModelSignupSuccessContainer>

      <SecContainerAuthModelSignupSuccessContainer>
        <Box sx={{ width: '100%', textAlign: 'center', maxWidth: '443px' }}>
          <UINewTypography variant="h5">Welcome Aesha, your account has been created successfully!</UINewTypography>
        </Box>
        <Box sx={{ width: '100%', textAlign: 'center', maxWidth: '346px' }}>
          <UINewTypography variant="SubtitleSmallRegular">
            Now setup your profile to start connecting with clients worldwide.
          </UINewTypography>
        </Box>
      </SecContainerAuthModelSignupSuccessContainer>
      <Box>
        <UIThemeButton variant="contained">
          <UINewTypography variant="buttonLargeBold">Start Profile setup</UINewTypography>
        </UIThemeButton>
      </Box>
    </AuthModelSignupSuccessMainContainer>
  );
};

export default ModelSignupSuccess;
