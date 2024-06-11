import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import Image from 'next/image';
import Box from '@mui/material/Box';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { BannerContainer, InlineBox, InlineBoxRelative, TypographyBox, HomeExploreBox, SubTitle } from './HomeBanner.styled';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import GuestSignup from 'views/auth/guestSignup';
import GuestForgetPasswordLink from 'views/auth/guestForgetPasswordLink';
import GuestLogin from 'views/auth/guestLogin';

const HomeTopBanner = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.down(330));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  const isTablet = useMediaQuery(theme.breakpoints.only('sm'));
  const [open, setIsOpen] = useState(false);
  const [openLogin, setIsOpenLogin] = useState(false);
  const [openForgetPassLink, setOpenForgetPassLink] = useState(false);

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

  const handleLoginResetPasswordOpen = () => {
    setOpenForgetPassLink(false);
    setIsOpenLogin(true);
  };

  const handleLoginClose = () => {
    setIsOpenLogin(false);
  };

  const handleResetPasswordLinkOpen = () => {
    setIsOpenLogin(false);
    setOpenForgetPassLink(true);
  };

  const handleResetPasswordLinkClose = () => {
    setOpenForgetPassLink(false);
  };

  return (
    <>
      <BannerContainer>
        <Box
          display="flex"
          flexDirection="column"
          gap={{ xs: '36px', sm: 6 }}
          width="100%"
          maxWidth="652px"
          pt={{ xs: '94px', md: '25px' }}
        >
          <Box display="flex" flexDirection="column" width="100%" gap={3} alignItems={{ xs: 'center', sm: 'flex-start' }}>
            <InlineBox>
              <FormattedMessage id="UnlockTheGateway" /> {(!isSmDown || isSm) && 'to'} &nbsp;
              <Box component="span" position="relative">
                <InlineBoxRelative>
                  {isSmDown && !isSm && (
                    <UINewTypography variant="MediumSemiBoldText" color="common.white" textAlign="center">
                      <FormattedMessage id="To" /> &nbsp;
                    </UINewTypography>
                  )}
                  <Box component="span" sx={{ zIndex: 1, position: 'relative', textWrap: isSm ? 'wrap' : 'nowrap' }}>
                    <FormattedMessage id="Unforgettable" /> &nbsp;
                  </Box>
                  <Image
                    alt="word_underline"
                    src="/images/home/line-vector.svg"
                    width={100}
                    height={32}
                    style={{
                      position: 'absolute',
                      top: isSmDown ? 30 : 44,
                      left: isSmDown && !isSm ? 80 : isSm ? 16 : 0,
                      maxWidth: isSmDown ? '239.52px' : '354.18px',
                      width: '100%'
                    }}
                    priority
                  />
                  {!isSmDown && !isMd && !isTablet && (
                    <UINewTypography variant="h1" color="common.white">
                      <FormattedMessage id="Encounters" />
                    </UINewTypography>
                  )}
                </InlineBoxRelative>
                {(isSmDown || isMd || isTablet) && (
                  <InlineBox>
                    <FormattedMessage id="Encounters" />
                  </InlineBox>
                )}
              </Box>
            </InlineBox>
            <TypographyBox>
              <FormattedMessage id="DiscoverTheThrill" />
            </TypographyBox>
          </Box>
          <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'center', sm: 'flex-start' }}>
            <UIThemeShadowButton onClick={handleSignupOpen} variant="contained" sx={{ width: '100%', maxWidth: '195px' }}>
              <UINewTypography variant="body" sx={{ lineHeight: '150%' }}>
                <FormattedMessage id="JoinForFREE" />
              </UINewTypography>
            </UIThemeShadowButton>
            <UIThemeButton>
              <UINewTypography variant="bodySemiBold" sx={{ paddingTop: { xs: 2, sm: 0 }, lineHeight: '120%' }}>
                <FormattedMessage id="ExploreModels" />
              </UINewTypography>
            </UIThemeButton>
          </Box>
        </Box>

        <Box
          pr={{ xs: 3, sm: 0 }}
          pl={{ xs: 3, sm: 0 }}
          display="flex"
          alignItems="flex-end"
          justifyContent={{ xs: 'center', sm: 'flex-start', lg: 'flex-end' }}
          pt={{ xs: 0, lg: '83px' }}
        >
          <Image
            alt="home_model"
            width={isSm && isSmDown ? 300 : isSmDown ? 347 : 462}
            height={isSmDown ? 339 : 452}
            src="/images/home/home-banner-model.webp"
            style={{ borderRadius: '12px', right: 0 }}
            priority
          />
        </Box>
      </BannerContainer>
      <Box width="100%" pt={{ xs: '96px', lg: '120px' }} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <HomeExploreBox>
          <UINewTypography
            textAlign="center"
            color="text.secondary"
            sx={{ fontSize: { xs: '24px', sm: '40px' }, fontWeight: 700, lineHeight: { xs: '32px', sm: '52px' } }}
          >
            <FormattedMessage id="ExploreYourChoices" />
          </UINewTypography>
          <SubTitle>
            <FormattedMessage id="SelectTheCompanion" />
          </SubTitle>
        </HomeExploreBox>
      </Box>
      <Dialog
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: '#07030E',
            borderRadius: '12px'
          },
          '& .MuiDialog-container': {
            backgroundColor: 'linear-gradient(rgba(19, 6, 23, 1)), rgba(7, 3, 14, 1))',
            backdropFilter: 'blur(12px)'
          }
        }}
        PaperProps={{
          sx: {
            maxWidth: 920,
            borderRadius: '12px'
          }
        }}
        open={open}
        onClose={handleSignupClose}
        maxWidth="md"
        fullWidth
      >
        <GuestSignup onClose={handleSignupClose} onLoginOpen={handleLoginOpen} />
      </Dialog>
      <Dialog
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: '#07030E',
            borderRadius: '12px'
          },
          '& .MuiDialog-container': {
            backgroundColor: 'linear-gradient(rgba(19, 6, 23, 1)), rgba(7, 3, 14, 1))',
            backdropFilter: 'blur(12px)'
          }
        }}
        PaperProps={{
          sx: {
            maxWidth: 920,
            borderRadius: '12px'
          }
        }}
        open={openLogin}
        onClose={handleLoginClose}
        maxWidth="md"
        fullWidth
      >
        <GuestLogin
          onClose={handleLoginClose}
          onSignupOpen={handleSignupOpen}
          onFogotPasswordLinkOpen={handleResetPasswordLinkOpen}
          image="/images/auth/auth-model.webp"
        />
      </Dialog>
      <Dialog
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: '#07030E',
            borderRadius: '12px'
          },
          '& .MuiDialog-container': {
            backgroundColor: 'linear-gradient(rgba(19, 6, 23, 1)), rgba(7, 3, 14, 1))',
            backdropFilter: 'blur(12px)'
          }
        }}
        PaperProps={{
          sx: {
            maxWidth: 920,
            borderRadius: '12px'
          }
        }}
        open={openForgetPassLink}
        onClose={handleResetPasswordLinkClose}
        maxWidth="md"
        fullWidth
      >
        <GuestForgetPasswordLink onClose={handleResetPasswordLinkClose} onLoginOpen={handleLoginResetPasswordOpen} />
      </Dialog>
    </>
  );
};

export default HomeTopBanner;
