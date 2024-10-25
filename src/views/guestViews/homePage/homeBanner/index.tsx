import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import Image from 'next/image';
import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import Dialog from '@mui/material/Dialog';
import { lazy, memo, Suspense, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { User } from 'app/(guest)/layout';
import StyleButtonShadowV2 from 'components/UIComponents/StyleLoadingButtonshadow';
import ButtonFreeCredits from '../buttonFreeCredits';
import React from 'react';
import { gaEventTrigger } from 'utils/analytics';
import { PROVIDERCUSTOM_TYPE } from 'constants/signUpConstants';
import { useAuthContext } from '../../../../../context/AuthContext';
// import HomePageFreeSignup from 'views/auth/homePageFreeSignup';
import dynamic from 'next/dynamic';
import Loading from 'loading';
// import HomeHeroBanner from './HomeHeroBanner';

const BannerContainer = lazy(() => import('./HomeBanner.styled').then((module) => ({ default: module.BannerContainer })));
const InlineBox = lazy(() => import('./HomeBanner.styled').then((module) => ({ default: module.InlineBox })));
const InlineBoxRelative = lazy(() => import('./HomeBanner.styled').then((module) => ({ default: module.InlineBoxRelative })));
const TypographyBox = lazy(() => import('./HomeBanner.styled').then((module) => ({ default: module.TypographyBox })));
const HomeExploreBox = lazy(() => import('./HomeBanner.styled').then((module) => ({ default: module.HomeExploreBox })));
const SubTitle = lazy(() => import('./HomeBanner.styled').then((module) => ({ default: module.SubTitle })));
const TextBoxContainer = lazy(() => import('./HomeBanner.styled').then((module) => ({ default: module.TextBoxContainer })));
const ModelsHeadingBox = lazy(() => import('./HomeBanner.styled').then((module) => ({ default: module.ModelsHeadingBox })));
const FristBoxContainer = lazy(() => import('./HomeBanner.styled').then((module) => ({ default: module.FristBoxContainer })));
const SecondBoxContainer = lazy(() => import('./HomeBanner.styled').then((module) => ({ default: module.SecondBoxContainer })));
const TopBoxContainer = lazy(() => import('./HomeBanner.styled').then((module) => ({ default: module.TopBoxContainer })));
const ThirdBoxContainer = lazy(() => import('./HomeBanner.styled').then((module) => ({ default: module.ThirdBoxContainer })));
const TextContainer = lazy(() => import('./HomeBanner.styled').then((module) => ({ default: module.TextContainer })));
const SignupTextContainer = lazy(() => import('./HomeBanner.styled').then((module) => ({ default: module.SignupTextContainer })));
const ExploreTextContainer = lazy(() => import('./HomeBanner.styled').then((module) => ({ default: module.ExploreTextContainer })));
const FirstBoxContainer = lazy(() => import('./HomeBanner.styled').then((module) => ({ default: module.FirstBoxContainer })));
const SecBoxContainer = lazy(() => import('./HomeBanner.styled').then((module) => ({ default: module.SecBoxContainer })));
const GiftBoxFirst = lazy(() => import('./HomeBanner.styled').then((module) => ({ default: module.GiftBoxFirst })));
const GiftBoxSecond = lazy(() => import('./HomeBanner.styled').then((module) => ({ default: module.GiftBoxSecond })));

const HomeHeroBanner = dynamic(() => import('./HomeHeroBanner'), {
  ssr: false,
  loading: Loading
});
const GuestLogin = dynamic(() => import('views/auth/guestLogin'), {
  ssr: false,
  loading: Loading
});
const HomePageFreeSignup = dynamic(() => import('views/auth/homePageFreeSignup'), {
  ssr: false,
  loading: Loading
});
const GuestSignup = dynamic(() => import('views/auth/guestSignup'), {
  ssr: false,
  loading: Loading
});
const GuestForgetPasswordLink = dynamic(() => import('views/auth/guestForgetPasswordLink'), {
  ssr: false,
  loading: Loading
});
const NewSignupStyledModalDialog = dynamic(() => import('components/UIComponents/NewSignupStyledModalDialog'), {
  ssr: false
});

const HomeTopBanner = ({ isFreeCreditAvailable }: { isFreeCreditAvailable: number }) => {
  const { session } = useAuthContext();

  const [isModalOpenFreeCredits, setIsModalOpenFreeCredits] = useState(false);
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.down(330));
  const [open, setIsOpen] = useState(false);
  const [openLogin, setIsOpenLogin] = useState(false);
  const [openForgetPassLink, setOpenForgetPassLink] = useState(false);
  // const [openDropDown, setOpenDropDown] = useState(false);
  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [loading, setLoading] = useState(false);
  const [freeSignupOpen, setFreeSignupOpen] = useState(false);

  // const handleDropDownOpen = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  //   setOpenDropDown(true);
  // };

  // const handleDropDownClose = () => {
  //   setOpenDropDown(false);
  // };

  const handleSignupOpen = () => {
    setIsOpen(true);
    setIsOpenLogin(false);
  };

  const handleSignupClose = () => {
    setIsOpen(false);
  };

  const handleLoginOpen = () => {
    setIsOpen(false);
    setFreeSignupOpen(false);
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

  const handleFreeCreditSignupOpen = () => {
    gaEventTrigger('Signup_Button_clicked', { source: 'home_banner', category: 'Button' });
    setFreeSignupOpen(true);
    handleCloseModal();
    setIsOpenLogin(false);
  };

  const handleFreeCreditSignupClose = () => {
    setFreeSignupOpen(false);
    setIsOpenLogin(false);
  };

  const handleClickScroll = () => {
    setLoading(true);
    setTimeout(() => {
      const element = document.querySelector(`#scroll-to-model`) as HTMLElement;
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setLoading(false);
    }, 1000);
  };

  const handleBoxClick = () => {
    setIsModalOpenFreeCredits(true);
  };

  const handleCloseModal = () => {
    setIsModalOpenFreeCredits(false);
  };

  return (
    <Suspense>
      {(session?.user as User)?.provider === PROVIDERCUSTOM_TYPE.PROVIDERCUSTOM ? (
        <TopBoxContainer>
          <FristBoxContainer>
            <UINewTypography variant="MediumSemiBold" width="100%" maxWidth="710px" color="text.secondary">
              <FormattedMessage id="ExploreYourChoicesFrom" />
            </UINewTypography>
            <TextBoxContainer color="secondary.100">
              <FormattedMessage id="SelectTheCompanionWho" />
            </TextBoxContainer>
          </FristBoxContainer>
        </TopBoxContainer>
      ) : (
        <>
          <BannerContainer>
            <FirstBoxContainer>
              <SecBoxContainer>
                <InlineBox>
                  <FormattedMessage id="ExperienceThe" /> {!isSmDown && 'of'} {!isSmDown || (isSm && 'of')} &nbsp;
                  <Box component="span" position="relative">
                    <InlineBoxRelative>
                      {isSmDown && !isSm && (
                        <UINewTypography variant="MediumSemiBoldText" color="common.white" textAlign="center">
                          <FormattedMessage id="Of" /> &nbsp;
                        </UINewTypography>
                      )}
                      <Box component="span" sx={{ zIndex: 1, position: 'relative', textWrap: isSm ? 'wrap' : 'nowrap' }}>
                        <FormattedMessage id="LiveInteractions" /> &nbsp;
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
                    </InlineBoxRelative>
                  </Box>
                </InlineBox>
                <TypographyBox>
                  <FormattedMessage id="DiscoverTheThrill" />
                </TypographyBox>
              </SecBoxContainer>
              <ThirdBoxContainer>
                {isSmDown ? (
                  <SecondBoxContainer>
                    <UIThemeShadowButton
                      onClick={isFreeCreditAvailable ? handleFreeCreditSignupOpen : handleSignupOpen}
                      variant="contained"
                    >
                      <SignupTextContainer>
                        <FormattedMessage id="SignUpNow" />
                      </SignupTextContainer>
                      <Box component="img" src="/images/icons/signup-img.png" sx={{ width: '16px', height: '16px' }} alt="signup" />
                    </UIThemeShadowButton>
                    <ExploreTextContainer onClick={handleClickScroll}>
                      <FormattedMessage id="ExploreModels" />
                    </ExploreTextContainer>
                  </SecondBoxContainer>
                ) : (
                  <StyleButtonShadowV2 onClick={handleClickScroll} variant="contained" loading={loading}>
                    <TextContainer>
                      <FormattedMessage id="ExploreModels" />
                    </TextContainer>
                  </StyleButtonShadowV2>
                )}
              </ThirdBoxContainer>
            </FirstBoxContainer>
            <HomeHeroBanner isSm={isSm} isSmDown={isSmDown} />
          </BannerContainer>
          {isSmDown && (
            <ButtonFreeCredits open={isModalOpenFreeCredits} onClose={handleCloseModal} onSignupOpen={handleFreeCreditSignupOpen} />
          )}{' '}
          {isSmDown && isFreeCreditAvailable && !isModalOpenFreeCredits && !freeSignupOpen && !openLogin && (
            <Box sx={{ position: 'relative', cursor: 'pointer' }} onClick={handleBoxClick}>
              <GiftBoxFirst />
              <GiftBoxSecond />
              {/* <GiftBoxThird></GiftBoxThird> */}
            </Box>
          )}
          <ModelsHeadingBox id="scroll-to-model" pt={{ xs: '96px', lg: '120px' }}>
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
          </ModelsHeadingBox>
        </>
      )}
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
            maxWidth: 1080,
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
          isFreeCreditAvailable={isFreeCreditAvailable}
          onClose={handleLoginClose}
          onSignupOpen={handleSignupOpen}
          onFogotPasswordLinkOpen={handleResetPasswordLinkOpen}
          handleFreeCreditSignupOpen={handleFreeCreditSignupOpen}
          handleLoginOpen={handleLoginOpen}
          freeSignupOpen={freeSignupOpen}
          handleFreeCreditSignupClose={handleFreeCreditSignupClose}
          image="/images/auth/auth-model1.webp"
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
      <NewSignupStyledModalDialog scroll="body" open={freeSignupOpen} maxWidth="md" fullWidth>
        <HomePageFreeSignup onLoginOpen={handleLoginOpen} onClose={handleFreeCreditSignupClose} />
      </NewSignupStyledModalDialog>
      {/* <ProfileMenu open={openDropDown} handleClose={handleDropDownClose} anchorEl={anchorEl} onSignupOpen={handleSignupOpen} /> */}
    </Suspense>
  );
};

export default memo(HomeTopBanner);
