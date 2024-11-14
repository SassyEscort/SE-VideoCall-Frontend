'use client';

import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import {
  WhyDashboardContainer,
  WhyDashboardBannerImageCard,
  WhyDashboardCamSubtitleTypographyBox,
  WhyDashboardSubtitlePointsTypography,
  WhyDashboardFirstBoxContainer,
  WhyDashboardInlineBox,
  WhyDashboardSecBoxContainer
} from './whyChooseDashboard.styled';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import Box from '@mui/system/Box';

const WebcamDashboard = () => {
  const isXsDown = useMediaQuery(theme.breakpoints.down(321));
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isMdDown = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLgDown = useMediaQuery(theme.breakpoints.down('lg'));

  let imageWidth, imageHeight;
  if (isXsDown) {
    imageWidth = 300;
    imageHeight = 300;
  } else if (isSmDown) {
    imageWidth = 337;
    imageHeight = 339;
  } else if (isMdDown) {
    imageWidth = 580;
    imageHeight = 500;
  } else if (isLgDown) {
    imageWidth = 600;
    imageHeight = 540;
  } else {
    imageWidth = 780;
    imageHeight = 540;
  }

  return (
    <HomeMainContainer>
      <WhyDashboardContainer>
        <WhyDashboardFirstBoxContainer>
          <WhyDashboardSecBoxContainer>
            <WhyDashboardInlineBox>Why Choose FlirtBate to Video Chat with Girls?</WhyDashboardInlineBox>
            <WhyDashboardSubtitlePointsTypography>Exclusive One-on-One Video Chats : </WhyDashboardSubtitlePointsTypography>
            <WhyDashboardCamSubtitleTypographyBox>
              When you want to video chat with babes, privacy and intimacy matter. FlirtBate offers exclusive private video chats, allowing
              you to focus on getting to know the model of your choice without distractions. These horny girl video chat sessions are
              designed to create a space for genuine connections and thrilling encounters.
            </WhyDashboardCamSubtitleTypographyBox>
          </WhyDashboardSecBoxContainer>
        </WhyDashboardFirstBoxContainer>
        <WhyDashboardBannerImageCard>
          <Box
            component="img"
            alt="home_model"
            decoding="async"
            width={imageWidth}
            height={imageHeight}
            src="/images/web-cam.webp"
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 600px) 300px, (max-width: 768px) 347px, (max-width: 1024px) 580px, 780px"
          />
        </WhyDashboardBannerImageCard>
      </WhyDashboardContainer>
    </HomeMainContainer>
  );
};

export default WebcamDashboard;
