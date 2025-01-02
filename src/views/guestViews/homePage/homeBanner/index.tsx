'use client';

import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import Image from 'next/image';
import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { User } from 'app/(guest)/layout';
import StyleButtonShadowV2 from 'components/UIComponents/StyleLoadingButtonshadow';
import ButtonFreeCredits from '../buttonFreeCredits';
import React from 'react';
import { gaEventTrigger } from 'utils/analytics';
import { PROVIDERCUSTOM_TYPE } from 'constants/signUpConstants';
// import HomePageFreeSignup from 'views/auth/homePageFreeSignup';
import dynamic from 'next/dynamic';
import {
  TopBoxContainer,
  FristBoxContainer,
  TextBoxContainer,
  BannerContainer,
  FirstBoxContainer,
  SecBoxContainer,
  InlineBox,
  InlineBoxRelative,
  TypographyBox,
  ThirdBoxContainer,
  SecondBoxContainer,
  SignupTextContainer,
  ExploreTextContainer,
  TextContainer,
  GiftBoxFirst,
  GiftBoxSecond,
  ModelsHeadingBox,
  HomeExploreBox,
  SubTitle
} from './HomeBanner.styled';
import { BannerImageCard } from 'views/guestViews/commonComponents/WorkerCard/WorkerCard.styled';
import { useSession } from 'next-auth/react';
// import HomeHeroBanner from './HomeHeroBanner';
const GuestLogin = dynamic(() => import('views/auth/guestLogin'), { ssr: false });
const HomePageFreeSignup = dynamic(() => import('views/auth/homePageFreeSignup'), { ssr: false });
const GuestSignup = dynamic(() => import('views/auth/guestSignup'), { ssr: false });
const GuestForgetPasswordLink = dynamic(() => import('views/auth/guestForgetPasswordLink'), { ssr: false });
const NewSignupStyledModalDialog = dynamic(() => import('components/UIComponents/NewSignupStyledModalDialog'), { ssr: false });

const HomeTopBanner = ({ isFreeCreditAvailable }: { isFreeCreditAvailable: number }) => {
  const { data: session } = useSession();

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
  // const [isChatMessagePopUpOpen, setIsChatMessagePopUpOpen] = useState(false);

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

  // const handleChatBoxClick = () => {
  //   setIsChatMessagePopUpOpen(true);
  // };

  // const handleCloseMessagePopUp = () => {
  //   setIsChatMessagePopUpOpen(false);
  // };

  return (
    <>
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
                  <Box component="span" position="relative">
                    <InlineBoxRelative>
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
                  <FormattedMessage id="ExperienceThe" />
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
            {/* <HomeHeroBanner isSm={isSm} isSmDown={isSmDown} /> */}
            <BannerImageCard>
              {isSm ? (
                <Image
                  alt="home_model"
                  decoding="async"
                  width={300}
                  height={339}
                  src="/images/home/home-banner-model1.webp"
                  style={{ borderRadius: '12px', right: 0 }}
                  priority
                  placeholder="blur"
                  blurDataURL="/images/home/home-banner-model_blur.webp"
                  // loading="eager"
                  // fetchPriority="high"
                  layout="fixed"
                />
              ) : isSmDown ? (
                <Image
                  alt="home_model"
                  decoding="async"
                  width={347}
                  height={339}
                  src="/images/home/home-banner-model1.webp"
                  style={{ borderRadius: '12px', right: 0 }}
                  priority
                  placeholder="blur"
                  blurDataURL="/images/home/home-banner-model_blur.webp"
                  // loading="eager"
                  // fetchPriority="high"
                  layout="fixed"
                />
              ) : (
                <Image
                  alt="home_model"
                  decoding="async"
                  width={462}
                  height={452}
                  src="/images/home/home-banner-model1.webp"
                  style={{ borderRadius: '12px', right: 0 }}
                  priority
                  placeholder="blur"
                  blurDataURL="/images/home/home-banner-model_blur.webp"
                  // loading="eager"
                  // fetchPriority="high"
                  layout="fixed"
                />
              )}

              {/* <Image
                alt="home_model"
                decoding="async"
                src="/images/home/home-banner-model1.webp"
                style={{ borderRadius: '12px', right: 0 }}
                priority={true}
                loading="eager"
                layout="responsive"
                width={462}
                height={452}
                sizes="(max-width: 600px) 300px, (max-width: 1024px) 347px, 462px"
              /> */}

              {/* <Image
                alt="home_model"
                decoding="async"
                width={isSm && isSmDown ? 300 : isSmDown ? 347 : 462}
                height={isSmDown ? 339 : 452}
                src="/images/home/home-banner-model1.webp"
                style={{ borderRadius: '12px', right: 0 }}
                priority={true}
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 600px) 300px, (max-width: 768px) 347px, 462px"
                layout="intrinsic"
              /> */}
            </BannerImageCard>
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
          {/* {!isSmDown && <ChatMessageClickPopUp open={isChatMessagePopUpOpen} onClose={handleCloseMessagePopUp} />}
          {!isSmDown && !isChatMessagePopUpOpen && (
            <Box sx={{ position: 'relative', cursor: 'pointer' }} onClick={handleChatBoxClick}>
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  maxWidth: '400px',
                  height: '100%',
                  maxHeight: '64px',
                  border: '1px solid #611441',
                  backgroundColor: '#611441',
                  zIndex: '3000000',
                  position: 'fixed',
                  bottom: '0px',
                  right: '24px',
                  boxShadow: '0px 4px 12px 0px rgba(209, 34, 136, 0.25)',
                  borderTopLeftRadius: '12px',
                  borderTopRightRadius: '12px',
                  paddingRight: '16px',
                  paddingLeft: '16px'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <UINewTypography variant="buttonLargeMenu" color="white.main">
                      Kat Winter
                    </UINewTypography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box component="img" src="/images/icons/chat-minimize-icon.svg" />
                    <Box component="img" src="/images/icons/chat-close-icon.svg" />
                  </Box>
                </Box>
              </Box>
            </Box>
          )} */}
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
          // handleLoginOpen={handleLoginOpen}
          // freeSignupOpen={freeSignupOpen}
          // handleFreeCreditSignupClose={handleFreeCreditSignupClose}
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
    </>
  );
};

export default HomeTopBanner;
