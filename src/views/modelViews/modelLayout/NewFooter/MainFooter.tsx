import Box from '@mui/material/Box';
import Link from 'next/link';
import Image from 'next/image';
import {
  FirstBoxContainerMain,
  FlirtbateTextTypography,
  FooterStoreBox,
  FooterSubICon,
  FooterTextMainBoxContiner,
  HeadingMainBoxContiner,
  LogoAndTextMainBoxVontainer,
  MenuTextTypography,
  ModelFooterHead,
  ModelFooterHeadSecond,
  ModelUITextConatinerText,
  NewFooterMainBoxContiner,
  ResourcesInnerBoxContiner,
  StyledAccordion
} from './MainFooter.styled';
import { FooterCityList } from './footer.constants';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import { ModelUITextConatiner } from 'views/auth/AuthCommon.styled';
import UIStyledDialog from 'components/UIComponents/UIStyledDialog';
import ModelSignup from 'views/modelViews/modelSignup';
import ModelSignin from 'views/modelViews/modelSignin';
import ModelForgetPasswordLink from 'views/modelViews/modelForgetPasswordLink';
// import ModelNewPassword from 'views/modelViews/ModelNewPassword';
import { useEffect, useState } from 'react';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { getUserDataClient } from 'utils/getSessionData';
import { gaEventTrigger } from 'utils/analytics';
import { useAuthContext } from 'contexts/AuthContext';
import { getCookie } from 'cookies-next';
import UINewStyledShadowButton from 'components/UIComponents/UIStyledShadowButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StyledAccordionSummary } from 'views/modelViews/modelPage/HomeModelFAQ/HomeModelFAQ.styled';

const NewFooter = () => {
  const { handleGAEventsTrigger, user } = useAuthContext();
  const providerData = JSON.parse(user || '{}');
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  // const url = new URL(window.location.href);
  // const email = url.searchParams.get('email');
  // const emailCode = url.searchParams.get('code');
  // const emailId = url.searchParams.get('id');
  const [open, setIsOpen] = useState(false);
  const [openLogin, setIsOpenLogin] = useState(false);
  const [openForgetPassLink, setOpenForgetPassLink] = useState(false);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  // const [openChangePassword, setIsOpenChangePassword] = useState(email && emailCode && !emailId ? true : false);

  const handleSignupOpen = () => {
    setIsOpen(true);
    setIsOpenLogin(false);
    gaEventTrigger('Model_Signup_Button_clicked', { source: 'footer', category: 'Button' });
  };
  const handleLoginOpen = () => {
    setIsOpen(false);
    setIsOpenLogin(true);
    gaEventTrigger('Model_Login_Button_clicked', { source: 'footer', category: 'Button' });
  };

  const handleSignupClose = () => {
    setIsOpen(false);
  };

  const handleLoginClose = () => {
    setIsOpenLogin(false);
  };
  const handleResetPasswordLinkOpen = () => {
    setIsOpenLogin(false);
    setOpenForgetPassLink(true);
  };

  const handleLoginResetPasswordOpen = () => {
    setOpenForgetPassLink(false);
    setIsOpenLogin(true);
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

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      if (data) {
        setToken({ id: data.id, token: data.token });
      }
    };

    userToken();
  }, []);

  const handleTriggerGAEvent = (linkName: string) => {
    const group = getCookie('ab-group');
    let versionDetails = (group && JSON.parse(JSON.stringify(group))?.variation) || {};
    let data: any = {
      userLoginStatus: providerData?.token ? 'yes' : 'no',
      linkName: linkName
    };
    if (providerData?.customer_id) data['userid'] = providerData?.customer_id;
    if (versionDetails?.experiment) data['version'] = `${versionDetails?.experiment}_${versionDetails?.variation}`;

    gaEventTrigger('footer-link-click', {
      action: 'footer-link-click',
      category: 'Link',
      label: 'Footer link click',
      value: JSON.stringify(data)
    });
  };

  return (
    <>
      <StyledAccordion defaultExpanded>
        <StyledAccordionSummary aria-controls="panel1-content" id="panel1-header" expandIcon={<ExpandMoreIcon />}>
          <LogoAndTextMainBoxVontainer>
            <Link prefetch={false} href="/" onClick={() => handleGAEventsTrigger('flirtbate-icon-click', 'footer')}>
              <Image
                src="/images/new-logo-footer.svg"
                width={164}
                height={44}
                alt="footer_logo"
                style={{
                  width: 'auto'
                }}
                loading="lazy"
              />
            </Link>
            <Box>
              <ModelFooterHead variant="captionLarge">
                <FormattedMessage id="ByTheWay" />
              </ModelFooterHead>
            </Box>
          </LogoAndTextMainBoxVontainer>
        </StyledAccordionSummary>
        <Box sx={{ width: '100%' }}>
          <NewFooterMainBoxContiner>
            <ModelUITextConatinerText>
              <Box>
                <HeadingMainBoxContiner>
                  <ModelFooterHeadSecond>
                    <FormattedMessage id="ReadyToExploreNew" />
                  </ModelFooterHeadSecond>
                </HeadingMainBoxContiner>
                <Box mt={4}>
                  <UINewStyledShadowButton sx={{ width: '100%', maxWidth: '192px' }}>
                    <FormattedMessage id="SignUpNow" />
                  </UINewStyledShadowButton>
                </Box>
                <FooterStoreBox>
                  <Box>
                    <Image
                      src="/images/icons/insta-new-icon.svg"
                      width={32}
                      height={32}
                      alt="Instagram"
                      style={{
                        width: 'auto'
                      }}
                      loading="lazy"
                    />
                  </Box>
                  <Box>
                    <Image
                      src="/images/icons/twi-new-icon.svg"
                      width={32}
                      height={32}
                      alt="Twitter"
                      style={{
                        width: 'auto'
                      }}
                      loading="lazy"
                    />
                  </Box>
                  <Box>
                    <Image
                      src="/images/icons/facebook-new-icon.svg"
                      width={32}
                      height={32}
                      alt="Facebook"
                      style={{
                        width: 'auto'
                      }}
                      loading="lazy"
                    />
                  </Box>
                </FooterStoreBox>
              </Box>
            </ModelUITextConatinerText>

            <FirstBoxContainerMain>
              <FooterSubICon>
                <MenuTextTypography>
                  <FormattedMessage id="Menu" />
                </MenuTextTypography>
                <ModelUITextConatiner sx={{ gap: 0.75 }}>
                  <UINewTypography
                    variant="bodySmall"
                    sx={{ color: 'white.main', opacity: 0.8 }}
                    onClick={() => handleTriggerGAEvent('Home')}
                  >
                    <Link prefetch={false} href="/">
                      <FormattedMessage id="Home" />
                    </Link>
                  </UINewTypography>
                  <UINewTypography
                    variant="bodySmall"
                    sx={{ color: 'white.main', opacity: 0.8 }}
                    onClick={() => handleTriggerGAEvent('FAQs')}
                  >
                    <Link prefetch={false} href="/faq">
                      <FormattedMessage id="FAQs" />
                    </Link>
                  </UINewTypography>
                  {!token.token && (
                    <UINewTypography
                      variant="bodySmall"
                      onClick={() => {
                        handleTriggerGAEvent('SignUp');
                        handleSignupOpen();
                      }}
                      sx={{ cursor: 'pointer', color: 'white.main', opacity: 0.8 }}
                    >
                      <FormattedMessage id="SignUp" />
                    </UINewTypography>
                  )}
                  {!token.token && (
                    <UINewTypography
                      variant="bodySmall"
                      onClick={() => {
                        handleTriggerGAEvent('LoginIn');
                        handleLoginOpen();
                      }}
                      sx={{ cursor: 'pointer', color: 'white.main', opacity: 0.8 }}
                    >
                      <FormattedMessage id="LogIn" />
                    </UINewTypography>
                  )}
                  {/* {!token.token && (
                    <UINewTypography variant="SubtitleSmallRegular">
                      <Link prefetch={false} href="/">
                        <FormattedMessage id="LookingForA" />
                      </Link>
                    </UINewTypography>
                  )} */}
                </ModelUITextConatiner>
              </FooterSubICon>

              <FooterSubICon>
                <MenuTextTypography>
                  <FormattedMessage id="Resources" />
                </MenuTextTypography>
                <ResourcesInnerBoxContiner>
                  {FooterCityList?.map((val, index) => (
                    <UINewTypography variant="SubtitleSmallRegular" key={index}>
                      <Box
                        component={Link}
                        prefetch={false}
                        shallow={true}
                        href={`${val?.link}`}
                        onClick={() => handleTriggerGAEvent(val?.link)}
                      >
                        <FormattedMessage id={val?.name} />
                      </Box>
                    </UINewTypography>
                  ))}
                </ResourcesInnerBoxContiner>
              </FooterSubICon>
            </FirstBoxContainerMain>
          </NewFooterMainBoxContiner>
        </Box>
      </StyledAccordion>

      <FooterTextMainBoxContiner sx={{ mt: isSmDown ? '32px' : '32px' }}>
        <FlirtbateTextTypography>
          <FormattedMessage id="2024SassyEscort" />
        </FlirtbateTextTypography>
      </FooterTextMainBoxContiner>

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
    </>
  );
};

export default NewFooter;
