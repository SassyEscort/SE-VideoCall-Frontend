import Box from '@mui/material/Box';
import Image from 'next/image';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import UINewTypography from 'components/UIComponents/UINewTypography';
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
} from './HomeModelConnections.styled';
import HomeMainModelContainer from 'views/modelViews/modelLayout/homeModelContainer';

const HomeModelConnections = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <HomeMainModelContainer>
        <Box
          sx={{
            position: 'relative',
            mt: isSmDown ? '96px' : '170px'
          }}
        >
          {isSmDown ? <VectorLinesMobile /> : <VectorLines />}
          <DullCircles />
          <DullCircles2 />
          <DullCircles3 />
          <DullCircles4 />
          <DullCircles5 />
          <HomeMainBox>
            <TextMainTitleTyporaphy>Why Join us?</TextMainTitleTyporaphy>
            <TextTitleTyporaphy>Empowering you, Empowering your career.</TextTitleTyporaphy>
          </HomeMainBox>

          <MainChildContainer
            sx={{
              mt: isSmDown ? 7 : 7,
              flexDirection: isSmDown ? 'column' : 'row',
              gap: isSmDown ? 5 : 0
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
                    style={{ width: isSmDown ? 14 : 17, height: isSmDown ? 14 : 17 }}
                  />
                </BoxImageBackgroundChild>
              </BoxImageBackground>
              <UINewTypography variant={isSmDown ? 'body' : 'h6'} color={'#E9E8EB'} sx={{ mt: { xs: 2, sm: 2.75 } }}>
                Work on Your Terms
              </UINewTypography>
              <Box sx={{ width: '100%', maxWidth: '314px', mt: isSmDown ? 1.75 : 2 }}>
                <UINewTypography
                  variant={isSmDown ? 'bodySmall' : 'bodyRegular'}
                  sx={{
                    width: '100%'
                  }}
                >
                  Enjoy the freedom to set your own hours and work from anywhere in the world. You control your schedule.
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
                    src="/images/icons/doller.png"
                    style={{ width: isSmDown ? 14 : 17, height: isSmDown ? 14 : 17 }}
                  />
                </BoxImageBackgroundChild>
              </BoxImageBackground>
              <UINewTypography variant={isSmDown ? 'body' : 'h6'} color={'#E9E8EB'} sx={{ mt: { xs: 2, sm: 2.75 } }}>
                Competitive Earnings
              </UINewTypography>
              <Box sx={{ width: '100%', maxWidth: '314px', mt: isSmDown ? 1.75 : 2 }}>
                <UINewTypography
                  variant={isSmDown ? 'bodySmall' : 'bodyRegular'}
                  sx={{
                    width: '100%'
                  }}
                >
                  Benefit from competitive pay rates and a transparent payout system. Our platform enables you to enhance your earnings.
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
                    src="/images/icons/lock.png"
                    style={{ width: isSmDown ? 14 : 17, height: isSmDown ? 14 : 17 }}
                  />
                </BoxImageBackgroundChild>
              </BoxImageBackground>
              <UINewTypography variant={isSmDown ? 'body' : 'h6'} color={'#E9E8EB'} sx={{ mt: { xs: 2, sm: 2.75 } }}>
                Your Privacy, Our Priority
              </UINewTypography>

              <Box sx={{ width: '100%', maxWidth: '314px', mt: isSmDown ? 1.75 : 2 }}>
                <UINewTypography
                  variant={isSmDown ? 'bodySmall' : 'bodyRegular'}
                  sx={{
                    width: '100%'
                  }}
                >
                  We are committed to maintaining a safe & secure environ. Advanced privacy settings allow you to manage what you share.
                </UINewTypography>
              </Box>
            </BoxMain>
          </MainChildContainer>

          <MainChildContainer
            sx={{
              mt: isSmDown ? 7 : 6,
              flexDirection: isSmDown ? 'column' : 'row',
              gap: isSmDown ? 5 : 0
            }}
          >
            <BoxMain>
              <BoxImageBackground>
                <BoxImageBackgroundChild>
                  <Image
                    alt="home_model"
                    width={24}
                    height={24}
                    src="/images/icons/earth.png"
                    style={{ width: isSmDown ? 14 : 17, height: isSmDown ? 14 : 17 }}
                  />
                </BoxImageBackgroundChild>
              </BoxImageBackground>
              <UINewTypography variant={isSmDown ? 'body' : 'h6'} color={'#E9E8EB'} sx={{ mt: { xs: 2, sm: 2.75 } }}>
                Connect with a Global Audience
              </UINewTypography>
              <Box sx={{ width: '100%', maxWidth: '314px', mt: isSmDown ? 1.75 : 2 }}>
                <UINewTypography
                  variant={isSmDown ? 'bodySmall' : 'bodyRegular'}
                  sx={{
                    width: '100%'
                  }}
                >
                  Expand your reach & connect with clients from all over the world. We offers you establish a diverse & expansive clientele.
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
                    src="/images/icons/user.png"
                    style={{ width: isSmDown ? 14 : 17, height: isSmDown ? 14 : 17 }}
                  />
                </BoxImageBackgroundChild>
              </BoxImageBackground>
              <UINewTypography variant={isSmDown ? 'body' : 'h6'} color={'#E9E8EB'} sx={{ mt: { xs: 2, sm: 2.75 } }}>
                24/7 Live Support
              </UINewTypography>
              <Box sx={{ width: '100%', maxWidth: '314px', mt: isSmDown ? 1.75 : 2 }}>
                <UINewTypography
                  variant={isSmDown ? 'bodySmall' : 'bodyRegular'}
                  sx={{
                    width: '100%'
                  }}
                >
                  Day or night, our dedicated support team is just a click away. Whether you have a quick question or need assistance.
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
                    src="/images/icons/users.png"
                    style={{ width: isSmDown ? 14 : 17, height: isSmDown ? 14 : 17 }}
                  />
                </BoxImageBackgroundChild>
              </BoxImageBackground>
              <UINewTypography variant={isSmDown ? 'body' : 'h6'} color={'#E9E8EB'} sx={{ mt: { xs: 2, sm: 2.75 } }}>
                Join a Thriving Community
              </UINewTypography>

              <Box sx={{ width: '100%', maxWidth: '314px', mt: isSmDown ? 1.75 : 2 }}>
                <UINewTypography
                  variant={isSmDown ? 'bodySmall' : 'bodyRegular'}
                  sx={{
                    width: '100%'
                  }}
                >
                  Become part of a supportive network of peers who share your passions & ambitions. Support, inspire, & collaborate
                </UINewTypography>
              </Box>
            </BoxMain>
          </MainChildContainer>
        </Box>
      </HomeMainModelContainer>
    </>
  );
};

export default HomeModelConnections;
