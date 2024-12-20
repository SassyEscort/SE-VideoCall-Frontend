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
import { FormattedMessage } from 'react-intl';
import theme from 'themes/theme';
import UIStyledDialog from 'components/UIComponents/UIStyledDialog';
import ModelSignup from 'views/modelViews/modelSignup';
import { useEffect, useState } from 'react';
import ModelSignin from 'views/modelViews/modelSignin';
import ModelForgetPasswordLink from 'views/modelViews/modelForgetPasswordLink';
import { User } from 'app/(guest)/layout';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import { useSession } from 'next-auth/react';
import { getCookie } from 'cookies-next';
import ABLogin1Model from 'views/guestViews/abTestComponent/abLogin1Model';
import ABRegister1Model from 'views/guestViews/abTestComponent/abRegister1Model';
import UIStyledABTest1Model from 'views/guestViews/abTestComponent/abRegister1Model/UIStyleABTest1Model';

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
  const { data: session } = useSession();
  const user = (session?.user as User)?.picture;
  const providerData = user && JSON.parse(user || '{}');
  const [abTestScenerio, setABTestScenerio] = useState({ experiment: 1, variation: 1 });

  useEffect(() => {
    let group: any = getCookie('ab-group');
    if (typeof group === 'string') group = JSON.parse(group);
    if (abTestScenerio.experiment !== group?.experiment || abTestScenerio.variation !== group?.variation) {
      setABTestScenerio({ experiment: group?.experiment || 1, variation: group?.variation || 1 });
    }
  }, [getCookie('ab-group')]);

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

                {providerData?.role === 'model' ? (
                  ''
                ) : (
                  <PhotoshootExpButton>
                    <UIThemeButton variant="contained" onClick={handleSignupOpen}>
                      <FormattedMessage id="JoinForFREE" />
                    </UIThemeButton>
                  </PhotoshootExpButton>
                )}
              </PhotoshootExpContainer>
            </PhotoshootExpWrap>
          </Banner>
        </PhotoshootExpMainContainer>
      </HomeMainModelContainer>
      {abTestScenerio.experiment === 1 && abTestScenerio.variation === 1 ? (
        <>
          <UIStyledDialog scroll="body" open={open} onClose={handleSignupClose} maxWidth="md" fullWidth>
            <ModelSignup onClose={handleSignupClose} onLoginOpen={handleLoginOpen} />
          </UIStyledDialog>
          <UIStyledDialog scroll="body" open={openLogin} onClose={handleLoginClose} maxWidth="md" fullWidth>
            <ModelSignin onClose={handleLoginClose} onSignupOpen={handleSignupOpen} onFogotPasswordLinkOpen={handleResetPasswordLinkOpen} />
          </UIStyledDialog>
          <UIStyledDialog scroll="body" open={openForgetPassLink} onClose={handleResetPasswordLinkClose} maxWidth="md" fullWidth>
            <ModelForgetPasswordLink onClose={handleResetPasswordLinkClose} onLoginOpen={handleLoginResetPasswordOpen} />
          </UIStyledDialog>
        </>
      ) : (
        <>
          <UIStyledABTest1Model scroll="body" open={open} onClose={handleSignupClose} maxWidth="md" fullWidth>
            <ABRegister1Model onClose={handleSignupClose} onLoginOpen={handleLoginOpen} />
          </UIStyledABTest1Model>
          <UIStyledABTest1Model scroll="body" open={openLogin} onClose={handleLoginClose} maxWidth="md" fullWidth>
            <ABLogin1Model
              onClose={handleLoginClose}
              onSignupOpen={handleSignupOpen}
              onFogotPasswordLinkOpen={handleResetPasswordLinkOpen}
            />
          </UIStyledABTest1Model>
        </>
      )}
      {/* <UIStyledDialog scroll="body" open={openChangePassword} onClose={handleChangePasswordClose} maxWidth="md" fullWidth>
        <ModelNewPassword email={String(email)} onClose={handleChangePasswordClose} onLoginOpen={handleLoginChangePasswordOpen} />
      </UIStyledDialog> */}
    </Box>
  );
};

export default UnlimitedModel;
