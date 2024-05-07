import Typography from '@mui/material/Typography';
import {
  BoxImageBackground,
  BoxImageBackgroundChild,
  BoxMain,
  DullCircles,
  DullCircles2,
  HomeMainBox,
  MainChildContainer,
  VectorLines,
  VectorLinesMobile
} from './HomeConnections.styled';
import Box from '@mui/material/Box';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import Image from 'next/image';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import HomeMainContainer from 'views/guestComponents/guestLayout/homeContainer';

const HomeConnections = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isMdDown = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <>
      <HomeMainContainer>
        <Box
          sx={{
            position: 'relative',
            mt: '112px'
          }}
        >
          {isSmDown ? <VectorLinesMobile /> : <VectorLines />}
          <DullCircles />
          <DullCircles2 />
          <HomeMainBox>
            <Typography variant="h2" sx={{ color: 'text.secondary', width: '100%' }}>
              Seamless Connections Made Simple
            </Typography>
            <Typography
              sx={{
                width: '100%',
                maxWidth: '610px'
              }}
            >
              Discover how easy it is to meet and interact with our models. Follow these simple steps to start your journey.
            </Typography>
          </HomeMainBox>

          <MainChildContainer
            sx={{
              mt: isSmDown ? 7 : 15.5,
              flexDirection: isSmDown ? 'column' : 'row',
              gap: isSmDown ? 5 : 0
              // px: isSmDown || isMdDown ? 0 : '134px'
            }}
          >
            <BoxMain>
              <BoxImageBackground>
                <BoxImageBackgroundChild>
                  <Image alt="home_model" width={24} height={24} src="/images/home-search-img.png" />
                </BoxImageBackgroundChild>
              </BoxImageBackground>
              <Typography variant="h6" color={'#E9E8EB'} mt={2.75}>
                Sign Up / Log In
              </Typography>
              <Box sx={{ width: '100%', maxWidth: '314px', mt: 2 }}>
                <Typography
                  variant="bodyRegular"
                  sx={{
                    width: '100%'
                  }}
                >
                  Create your free account or log in. Begin exploring with just a few clicks, ensuring your privacy and security from the
                  start.
                </Typography>
              </Box>
            </BoxMain>

            <BoxMain>
              <BoxImageBackground>
                <BoxImageBackgroundChild>
                  <Image alt="home_model" width={24} height={24} src="/images/home-choose-your-model-img.png" />
                </BoxImageBackgroundChild>
              </BoxImageBackground>
              <Typography variant="h6" color={'#E9E8EB'} mt={2.75}>
                Choose your Model
              </Typography>
              <Box sx={{ width: '100%', maxWidth: '314px', mt: 2 }}>
                <Typography
                  variant="bodyRegular"
                  sx={{
                    width: '100%'
                  }}
                >
                  Whether you are seeking passionate encounters or bodily exploration our video call feature will serve all your fantasies.
                </Typography>
              </Box>
            </BoxMain>
            <Box
              component="img"
              src="/images/line.png"
              sx={{
                position: 'absolute',
                top: '200px',
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
              <Typography variant="h6" color={'#E9E8EB'} mt={2.75}>
                Connect Instantly
              </Typography>

              <Box sx={{ width: '100%', maxWidth: '314px', mt: 2 }}>
                <Typography
                  variant="bodyRegular"
                  sx={{
                    width: '100%'
                  }}
                >
                  Start an engaging convo. through video call or chat. We offer high-quality, secure connections for your private
                  interactions.
                </Typography>
              </Box>
            </BoxMain>
          </MainChildContainer>

          <Box sx={{ mt: 12, display: 'flex', justifyContent: 'center' }}>
            <UIThemeShadowButton variant="contained">
              <Typography variant="buttonLargeBold">Join for FREE</Typography>
            </UIThemeShadowButton>
          </Box>
        </Box>
      </HomeMainContainer>
    </>
  );
};

export default HomeConnections;
