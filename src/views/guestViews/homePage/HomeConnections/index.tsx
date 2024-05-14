import {
  BoxImageBackground,
  BoxImageBackgroundChild,
  BoxMain,
  DullCircles,
  DullCircles2,
  DullCircles3,
  DullCircles4,
  DullCircles5,
  HomeMainBox,
  MainChildContainer,
  TextMainTitleTyporaphy,
  TextTitleTyporaphy,
  VectorLines,
  VectorLinesMobile
} from './HomeConnections.styled';
import Box from '@mui/material/Box';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import Image from 'next/image';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';

const HomeConnections = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isMdDown = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <>
      <HomeMainContainer>
        <Box
          sx={{
            position: 'relative',
            mt: isSmDown ? '96px' : '112px'
          }}
        >
          <DullCircles />
          <DullCircles2 />
          <DullCircles3 />
          <DullCircles4 />
          <DullCircles5 />
          {isSmDown ? <VectorLinesMobile /> : <VectorLines />}
          <HomeMainBox>
            <TextMainTitleTyporaphy>
              <FormattedMessage id="SeamlessConnections" />
            </TextMainTitleTyporaphy>
            <TextTitleTyporaphy>
              <FormattedMessage id="DiscoverHowEasy" />
            </TextTitleTyporaphy>
          </HomeMainBox>

          <MainChildContainer
            sx={{
              mt: isSmDown ? 7 : 15.5,
              flexDirection: isSmDown ? 'column' : 'row',
              gap: isSmDown ? 5 : 2
            }}
          >
            <BoxMain>
              <BoxImageBackground>
                <BoxImageBackgroundChild>
                  <Image
                    alt="home_model"
                    width={24}
                    height={24}
                    src="/images/home-search-img.png"
                    style={{ width: isSmDown ? 20 : 24, height: isSmDown ? 20 : 24 }}
                  />
                </BoxImageBackgroundChild>
              </BoxImageBackground>
              <UINewTypography variant={isSmDown ? 'body' : 'h6'} color={'#E9E8EB'} sx={{ mt: { xs: 2, sm: 2.75 } }}>
                <FormattedMessage id="SignUpLogIn" />
              </UINewTypography>
              <Box sx={{ width: '100%', maxWidth: '314px', mt: isSmDown ? 1.75 : 2 }}>
                <UINewTypography
                  variant={isSmDown ? 'bodySmall' : 'bodyRegular'}
                  sx={{
                    width: '100%'
                  }}
                >
                  <FormattedMessage id="CreateYourFreeAccount" />
                </UINewTypography>
              </Box>
            </BoxMain>

            <BoxMain>
              <BoxImageBackground>
                <BoxImageBackgroundChild>
                  <Image
                    alt="home_model"
                    width={24}
                    height={24}
                    src="/images/home-choose-your-model-img.png"
                    style={{ width: isSmDown ? 20 : 24, height: isSmDown ? 20 : 24 }}
                  />
                </BoxImageBackgroundChild>
              </BoxImageBackground>
              <UINewTypography variant={isSmDown ? 'body' : 'h6'} color={'#E9E8EB'} sx={{ mt: { xs: 2, sm: 2.75 } }}>
                <FormattedMessage id="ChooseYourModel" />
              </UINewTypography>
              <Box sx={{ width: '100%', maxWidth: '314px', mt: isSmDown ? 1.75 : 2 }}>
                <UINewTypography
                  variant={isSmDown ? 'bodySmall' : 'bodyRegular'}
                  sx={{
                    width: '100%'
                  }}
                >
                  <FormattedMessage id="WhetherYouAreSeekingPassionate" />
                </UINewTypography>
              </Box>
            </BoxMain>
            <Box
              component="img"
              src="/images/line.png"
              sx={{
                position: 'absolute',
                top: '230px',
                left: 'calc(50% - 466px)',
                zIndex: 1,
                display: isSmDown || isMdDown ? 'none' : 'block'
              }}
            />
            <BoxMain>
              <BoxImageBackground>
                <BoxImageBackgroundChild>
                  <Image
                    alt="home_model"
                    width={24}
                    height={24}
                    src="/images/home-connect-instantly-img.png"
                    style={{ width: isSmDown ? 20 : 24, height: isSmDown ? 20 : 24 }}
                  />
                </BoxImageBackgroundChild>
              </BoxImageBackground>
              <UINewTypography variant={isSmDown ? 'body' : 'h6'} color={'#E9E8EB'} sx={{ mt: { xs: 2, sm: 2.75 } }}>
                <FormattedMessage id="ConnectInstantly" />
              </UINewTypography>

              <Box sx={{ width: '100%', maxWidth: '314px', mt: isSmDown ? 1.75 : 2 }}>
                <UINewTypography
                  variant={isSmDown ? 'bodySmall' : 'bodyRegular'}
                  sx={{
                    width: '100%'
                  }}
                >
                  <FormattedMessage id="StartAnEngagingConvo" />
                </UINewTypography>
              </Box>
            </BoxMain>
          </MainChildContainer>

          <Box sx={{ mt: isSmDown ? 6 : 12, display: 'flex', justifyContent: 'center' }}>
            <UIThemeShadowButton variant="contained" sx={{ width: '100%', maxWidth: '195px' }}>
              <UINewTypography variant="buttonLargeBold" sx={{ lineHeight: '150%' }}>
                <FormattedMessage id="JoinForFREE" />
              </UINewTypography>
            </UIThemeShadowButton>
          </Box>
        </Box>
      </HomeMainContainer>
    </>
  );
};

export default HomeConnections;
