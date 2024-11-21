'use client';

import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import {
  ExclusiveSexChatContainer,
  ExclusiveSexChatBannerImageCard,
  ExclusiveSexChatCamSubtitleTypographyBox,
  ExclusiveSexChatFirstBoxContainer,
  ExclusiveSexChatInlineBox,
  ExclusiveSexChatSecBoxContainer
} from './ExclusiveSexChatDashboard.styled';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import Box from '@mui/system/Box';

const ExclusiveSexChatDashboard = () => {
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
      <ExclusiveSexChatContainer>
        <ExclusiveSexChatFirstBoxContainer>
          <ExclusiveSexChatSecBoxContainer>
            <ExclusiveSexChatInlineBox>FlirtBate - Exclusive 1 on 1 Sex Chat and Dirty Video Chat Experience</ExclusiveSexChatInlineBox>
            <ExclusiveSexChatCamSubtitleTypographyBox>
              Welcome to FlirtBate Sex Chat, where you can engage in sexy 1 on 1 video chats with real models. We’ve created an adult
              platform designed to bring your fantasies to life through intimate, live video sessions. If you`re looking for more than just
              sexting chat rooms, FlirtBate offers real-time, sexy cam experiences that will make your heart race.
            </ExclusiveSexChatCamSubtitleTypographyBox>
          </ExclusiveSexChatSecBoxContainer>
        </ExclusiveSexChatFirstBoxContainer>
        <ExclusiveSexChatBannerImageCard>
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
        </ExclusiveSexChatBannerImageCard>
      </ExclusiveSexChatContainer>
    </HomeMainContainer>
  );
};

export default ExclusiveSexChatDashboard;
