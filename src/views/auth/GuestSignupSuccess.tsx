import { Typography } from '@mui/material';
import {
  AuthSignupSuccessMainContainer,
  FirstImgAuthSignupSuccessContainer,
  SecContainerAuthSignupSuccessContainer,
  SecImgAuthSignupSuccessContainer,
  SubContainerAuthSignupSuccessContainer,
  TextContainerAuthSignupSuccessContainer,
  TextSubContainerAuthSignupSuccessContainer
} from './AuthCommon.styled';

const GuestSignupSuccess = ({ redirectSeconds }: { redirectSeconds: number }) => {
  return (
    <AuthSignupSuccessMainContainer>
      <FirstImgAuthSignupSuccessContainer src="/images/auth/congratulations-img1.png" />
      <SecContainerAuthSignupSuccessContainer>
        <SubContainerAuthSignupSuccessContainer>
          <SecImgAuthSignupSuccessContainer src="/images/auth/congratulations-img2.png" />
        </SubContainerAuthSignupSuccessContainer>
        <TextContainerAuthSignupSuccessContainer>
          <TextSubContainerAuthSignupSuccessContainer>
            <Typography variant="h5" color="text.secondary" sx={{ width: '100%', maxWidth: '443px' }}>
              You’re one step closer from unforgettable pleasures...
            </Typography>
          </TextSubContainerAuthSignupSuccessContainer>
          <Typography variant="bodySmall" color="text.secondary">
            Please wait a bit while we redirect you to your profile.
          </Typography>
        </TextContainerAuthSignupSuccessContainer>
        <Typography
          variant="body"
          color="text.secondary"
          textAlign="center"
          sx={{ display: 'flex', marginTop: { xs: '68px', sm: '48px' }, justifyContent: 'center' }}
        >
          Redirecting in {redirectSeconds} Sec
        </Typography>
      </SecContainerAuthSignupSuccessContainer>
    </AuthSignupSuccessMainContainer>
  );
};

export default GuestSignupSuccess;
