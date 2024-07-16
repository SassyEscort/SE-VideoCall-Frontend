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
import { FormattedMessage } from 'react-intl';

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
              <FormattedMessage id="You’reOneStepCloser" />
            </Typography>
          </TextSubContainerAuthSignupSuccessContainer>
          <Typography variant="bodySmall" color="text.secondary">
            <FormattedMessage id="PleaseWaitABit" />
          </Typography>
        </TextContainerAuthSignupSuccessContainer>
        <Typography
          variant="body"
          color="text.secondary"
          textAlign="center"
          sx={{ display: 'flex', marginTop: { xs: '68px', sm: '48px' }, justifyContent: 'center' }}
        >
          <FormattedMessage id="RedirectingIn" /> {redirectSeconds} <FormattedMessage id="Sec" />
        </Typography>
      </SecContainerAuthSignupSuccessContainer>
    </AuthSignupSuccessMainContainer>
  );
};

export default GuestSignupSuccess;
