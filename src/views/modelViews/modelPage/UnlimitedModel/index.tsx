import {
  Banner,
  PhotoshootExpButton,
  PhotoshootExpContainer,
  PhotoshootExpMainContainer,
  PhotoshootExpTitle,
  PhotoshootExpWrap,
  UnlimitedModelText
} from './PhotoshootExperience.styled';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import HomeMainModelContainer from 'views/modelViews/modelLayout/homeModelContainer';
import { Box, useMediaQuery } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import theme from 'themes/theme';
import UIStyledDialog from 'components/UIComponents/UIStyledDialog';
import ModelSignup from 'views/modelViews/modelSignup';
import { useState } from 'react';
import ModelSignin from 'views/modelViews/modelSignin';
import ModelForgetPasswordLink from 'views/modelViews/modelForgetPasswordLink';
// import ModelNewPassword from 'views/modelViews/ModelNewPassword';

const UnlimitedModel = () => {
  // const url = new URL(window.location.href);
  // const email = url.searchParams.get('email');
  // const emailCode = url.searchParams.get('code');
  // const emailId = url.searchParams.get('id');
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setIsOpen] = useState(false);
  const [openLogin, setIsOpenLogin] = useState(false);
  const [openForgetPassLink, setOpenForgetPassLink] = useState(false);
  // const [openChangePassword, setIsOpenChangePassword] = useState(email && emailCode && !emailId ? true : false);

  const handleSignupOpen = () => {
    setIsOpen(true);
    setIsOpenLogin(false);
  };

  const handleSignupClose = () => {
    setIsOpen(false);
  };

  const handleLoginOpen = () => {
    setIsOpen(false);
    setIsOpenLogin(true);
  };

  const handleLoginClose = () => {
    setIsOpenLogin(false);
  };

  const handleResetPasswordLinkClose = () => {
    setOpenForgetPassLink(false);
  };

  // const handleChangePasswordClose = () => {
  //   setIsOpenChangePassword(false);
  // };
  // const handleLoginChangePasswordOpen = () => {
  //   setIsOpenChangePassword(false);
  //   setIsOpenLogin(true);
  // };

  const handleLoginResetPasswordOpen = () => {
    setOpenForgetPassLink(false);
    setIsOpenLogin(true);
  };

  const handleResetPasswordLinkOpen = () => {
    setIsOpenLogin(false);
    setOpenForgetPassLink(true);
  };

  return (
    <Box sx={{ mt: isSmDown ? 9 : 15 }}>
      <HomeMainModelContainer>
        <PhotoshootExpMainContainer>
          <Banner>
            <PhotoshootExpWrap>
              <PhotoshootExpContainer>
                <PhotoshootExpTitle>
                  <UnlimitedModelText variant="h2">
                    <FormattedMessage id="UnlimitedEarningPotential" />
                  </UnlimitedModelText>
                  <UINewTypography
                    variant="bodyRegular"
                    sx={{
                      width: '100%',
                      textAlign: 'center'
                    }}
                  >
                    <FormattedMessage id="TurnYourTalentInto" />
                  </UINewTypography>
                </PhotoshootExpTitle>

                <PhotoshootExpButton>
                  <UIThemeButton variant="contained" onClick={handleSignupOpen}>
                    <FormattedMessage id="JoinForFREE" />
                  </UIThemeButton>
                </PhotoshootExpButton>
              </PhotoshootExpContainer>
            </PhotoshootExpWrap>
          </Banner>
        </PhotoshootExpMainContainer>
      </HomeMainModelContainer>
      <UIStyledDialog scroll="body" open={open} onClose={handleSignupClose} maxWidth="md" fullWidth>
        <ModelSignup onClose={handleSignupClose} onLoginOpen={handleLoginOpen} />
      </UIStyledDialog>
      <UIStyledDialog scroll="body" open={openLogin} onClose={handleLoginClose} maxWidth="md" fullWidth>
        <ModelSignin onClose={handleLoginClose} onSignupOpen={handleSignupOpen} onFogotPasswordLinkOpen={handleResetPasswordLinkOpen} />
      </UIStyledDialog>
      <UIStyledDialog scroll="body" open={openForgetPassLink} onClose={handleResetPasswordLinkClose} maxWidth="md" fullWidth>
        <ModelForgetPasswordLink onClose={handleResetPasswordLinkClose} onLoginOpen={handleLoginResetPasswordOpen} />
      </UIStyledDialog>
      {/* <UIStyledDialog scroll="body" open={openChangePassword} onClose={handleChangePasswordClose} maxWidth="md" fullWidth>
        <ModelNewPassword email={String(email)} onClose={handleChangePasswordClose} onLoginOpen={handleLoginChangePasswordOpen} />
      </UIStyledDialog> */}
    </Box>
  );
};

export default UnlimitedModel;
