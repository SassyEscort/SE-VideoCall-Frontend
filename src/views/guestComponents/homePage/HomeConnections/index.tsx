import {
  BoxImageBackground,
  BoxImageBackgroundChild,
  BoxMain,
  DullCircles,
  DullCircles2,
  HomeMainBox,
  MainChildContainer,
  TextTitleTyporaphy,
  VectorLines,
  VectorLinesMobile
} from './HomeConnections.styled';
import Box from '@mui/material/Box';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import Image from 'next/image';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import HomeMainContainer from 'views/guestComponents/guestLayout/homeContainer';
import UINewTypography from 'components/UIComponents/UINewTypography';

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
          {isSmDown ? <VectorLinesMobile /> : <VectorLines />}
          <HomeMainBox>
            <UINewTypography variant={isSmDown ? 'h5' : 'MediumSemiBold'} sx={{ color: 'text.secondary', width: '100%' }}>
              Seamless Connections Made Simple
            </UINewTypography>
            <TextTitleTyporaphy>
              Discover how easy it is to meet and inFAQSubTitleteract with our models. Follow these simple steps to start your journey.
            </TextTitleTyporaphy>
          </HomeMainBox>

          <MainChildContainer
            sx={{
              mt: isSmDown ? 7 : 15.5,
              flexDirection: isSmDown ? 'column' : 'row',
              gap: isSmDown ? 5 : 0
            }}
          >
            <BoxMain>
              <BoxImageBackground>
                <BoxImageBackgroundChild>
                  <Image alt="home_model" width={24} height={24} src="/images/home-search-img.png" />
                </BoxImageBackgroundChild>
              </BoxImageBackground>
              <UINewTypography variant={isSmDown ? 'body' : 'h6'} color={'#E9E8EB'} mt={2.75}>
                Sign Up / Log In
              </UINewTypography>
              <Box sx={{ width: '100%', maxWidth: '314px', mt: isSmDown ? 1 : 2 }}>
                <UINewTypography
                  variant={isSmDown ? 'bodySmall' : 'bodyRegular'}
                  sx={{
                    width: '100%'
                  }}
                >
                  Create your free account or log in. Begin exploring with just a few clicks, ensuring your privacy and security from the
                  start.
                </UINewTypography>
              </Box>
            </BoxMain>

            <BoxMain>
              <BoxImageBackground>
                <BoxImageBackgroundChild>
                  <Image alt="home_model" width={24} height={24} src="/images/home-choose-your-model-img.png" />
                </BoxImageBackgroundChild>
              </BoxImageBackground>
              <UINewTypography variant={isSmDown ? 'body' : 'h6'} color={'#E9E8EB'} mt={2.75}>
                Choose your Model
              </UINewTypography>
              <Box sx={{ width: '100%', maxWidth: '314px', mt: isSmDown ? 1 : 2 }}>
                <UINewTypography
                  variant={isSmDown ? 'bodySmall' : 'bodyRegular'}
                  sx={{
                    width: '100%'
                  }}
                >
                  Whether you are seeking passionate encounters or bodily exploration our video call feature will serve all your fantasies.
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
                  <Image alt="home_model" width={24} height={24} src="/images/home-connect-instantly-img.png" />
                </BoxImageBackgroundChild>
              </BoxImageBackground>
              <UINewTypography variant={isSmDown ? 'body' : 'h6'} color={'#E9E8EB'} mt={2.75}>
                Connect Instantly
              </UINewTypography>

              <Box sx={{ width: '100%', maxWidth: '314px', mt: isSmDown ? 1 : 2 }}>
                <UINewTypography
                  variant={isSmDown ? 'bodySmall' : 'bodyRegular'}
                  sx={{
                    width: '100%'
                  }}
                >
                  Start an engaging convo. through video call or chat. We offer high-quality, secure connections for your private
                  interactions.
                </UINewTypography>
              </Box>
            </BoxMain>
          </MainChildContainer>

          <Box sx={{ mt: isSmDown ? 6 : 12, display: 'flex', justifyContent: 'center' }}>
            <UIThemeShadowButton variant="contained">
              <UINewTypography variant="buttonLargeBold">Join for FREE</UINewTypography>
            </UIThemeShadowButton>
          </Box>
        </Box>
      </HomeMainContainer>
    </>
  );
};

export default HomeConnections;
