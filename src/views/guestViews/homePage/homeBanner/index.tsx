import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import Image from 'next/image';
import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import {
  BannerContainer,
  InlineBox,
  InlineBoxRelative,
  TypographyBox,
  HomeExploreBox,
  SubTitle,
  TextBoxContainer,
  ModelsHeadingBox,
  FristBoxContainer,
  SecondBoxContainer,
  TopBoxContainer,
  ThirdBoxContainer,
  TextContainer,
  SignupTextContainer,
  ExploreTextContainer,
  FirstBoxContainer,
  SecBoxContainer,
  GiftBoxFirst,
  GiftBoxSecond,
  GiftBoxThird
} from './HomeBanner.styled';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import Dialog from '@mui/material/Dialog';
import { forwardRef, Ref, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import GuestSignup from 'views/auth/guestSignup';
import GuestForgetPasswordLink from 'views/auth/guestForgetPasswordLink';
import GuestLogin from 'views/auth/guestLogin';
import { useSession } from 'next-auth/react';
import { User } from 'app/(guest)/layout';
// import ProfileMenu from 'components/UIComponents/UIStyleHeader';
import StyleButtonShadowV2 from 'components/UIComponents/StyleLoadingButtonshadow';
import ButtonFreeCredits from '../buttonFreeCredits';
import React from 'react';
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';

const HomeTopBanner = () => {
  const [isModalOpenFreeCredits, setIsModalOpenFreeCredits] = useState(false);
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.down(330));
  const [open, setIsOpen] = useState(false);
  const [openLogin, setIsOpenLogin] = useState(false);
  const [openForgetPassLink, setOpenForgetPassLink] = useState(false);
  // const [openDropDown, setOpenDropDown] = useState(false);
  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();

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

  const Transition = forwardRef(function Transition(
    props: TransitionProps & { children: React.ReactElement<any, any> },
    ref: Ref<unknown>
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  return (
    <>
      {(session?.user as User)?.provider === 'providerGuest' ? (
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
                    <UIThemeShadowButton onClick={handleSignupOpen} variant="contained">
                      <SignupTextContainer>
                        <FormattedMessage id="SignUpNow" />
                      </SignupTextContainer>
                      <Box component="img" src="/images/icons/signup-img.png" sx={{ width: '16px', height: '16px' }} />
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
          <ButtonFreeCredits open={isModalOpenFreeCredits} onClose={handleCloseModal} Transition={Transition} />
          {isSmDown && (
            <Box sx={{ position: 'relative', cursor: 'pointer' }} onClick={handleBoxClick}>
              <GiftBoxFirst></GiftBoxFirst>
              <GiftBoxSecond></GiftBoxSecond>
              <GiftBoxThird></GiftBoxThird>
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
      {/* <ProfileMenu open={openDropDown} handleClose={handleDropDownClose} anchorEl={anchorEl} onSignupOpen={handleSignupOpen} /> */}
    </>
  );
};

export default HomeTopBanner;
