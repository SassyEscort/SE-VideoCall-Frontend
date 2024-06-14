'use client';

import Box from '@mui/material/Box';
import Link from 'next/link';
import { Banner, BannerImg, SubTitleText, TextContainer, TextContainerMain, TitleText } from './footer.styled';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import MainFooter from './MainFooter';
import { FormattedMessage } from 'react-intl';
import { FooterButton } from './MainFooter.styled';
import { getUserDataClient } from 'utils/getSessionData';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      if (data) {
        setIsLogin(true);
      }
    };
    userToken();
  }, []);
  return (
    <Banner>
      <TextContainerMain>
        <TextContainer>
          <Box>
            <Box display="flex" flexDirection="column" gap={'16px'} width={'100%'} alignItems={'center'}>
              <TitleText>
                <FormattedMessage id="ReadyToExplore" />
              </TitleText>
              <SubTitleText>
                <FormattedMessage id="HaveTheBestExperience" />
              </SubTitleText>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                mt: { xs: '32px', sm: '40px' }
              }}
            >
              <Box sx={{ width: '100%', maxWidth: '195px' }}>
                {!isLogin ? (
                  <Link prefetch={false} href="/">
                    <UIThemeShadowButton fullWidth variant="contained">
                      <FooterButton variant="buttonLargeBold">
                        <FormattedMessage id="SignUpNow" />
                      </FooterButton>
                      <Box component="img" src="/images/icons/signup-img.png" sx={{ width: '16px', height: '16px' }} />
                    </UIThemeShadowButton>
                  </Link>
                ) : (
                  <Link prefetch={false} href="/">
                    <UIThemeShadowButton fullWidth variant="contained">
                      <FooterButton variant="buttonLargeBold">
                        <FormattedMessage id="ExploreModels" />
                      </FooterButton>
                    </UIThemeShadowButton>
                  </Link>
                )}
              </Box>
            </Box>
          </Box>
          <MainFooter />
        </TextContainer>
      </TextContainerMain>
      <BannerImg
        sx={{
          backgroundImage: `url(${'/images/Footer-min.webp'})`
        }}
      />
    </Banner>
  );
};

export default Footer;
