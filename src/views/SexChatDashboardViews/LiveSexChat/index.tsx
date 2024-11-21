'use client';

import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import {
  LiveSexChatContainer,
  LiveSexChatBannerBeyondImageCard,
  LiveSexChatBannerPointTypography,
  LiveSexChatBannerTypographySubtitleBox,
  LiveSexChatFirstBeyondBoxContainer,
  LiveSexChatInlineBeyondBox,
  LiveSexChatSecBoxBeyondContainer
} from './LiveSexChat.styled';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import Box from '@mui/system/Box';

const LiveSexChatDashboard = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.down(330));
  return (
    <HomeMainContainer>
      <LiveSexChatContainer>
        <LiveSexChatBannerBeyondImageCard>
          <Box
            component="img"
            alt="home_model"
            decoding="async"
            width={isSm && isSmDown ? 300 : isSmDown ? 347 : 580}
            height={isSmDown ? 339 : 540}
            src="/images/beyond.webp"
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 600px) 300px, (max-width: 768px) 347px, 462px"
          />
        </LiveSexChatBannerBeyondImageCard>
        <LiveSexChatFirstBeyondBoxContainer>
          <LiveSexChatSecBoxBeyondContainer>
            <LiveSexChatInlineBeyondBox>Live 1 on 1 Sex Chat with Real Models</LiveSexChatInlineBeyondBox>
            <LiveSexChatBannerTypographySubtitleBox>
              At FlirtBate, we go beyond the usual sex chat and adult chat rooms—here, you can experience live video calls with beautiful
              models ready to connect with you. Whether you`re seeking a casual conversation or something a bit more intimate, our models
              are available for dirty video chat sessions that are personalized to your tastes.
            </LiveSexChatBannerTypographySubtitleBox>
            <LiveSexChatBannerTypographySubtitleBox>
              <LiveSexChatBannerPointTypography>1 on 1 Sex Chat: </LiveSexChatBannerPointTypography>
              Enjoy private, one on one sex chat with the model of your choice, no interruptions.
            </LiveSexChatBannerTypographySubtitleBox>
            <LiveSexChatBannerTypographySubtitleBox>
              <LiveSexChatBannerPointTypography>Sexy Cam:</LiveSexChatBannerPointTypography>
              Connect with real models in live video chat, making every interaction more intense and personal.
            </LiveSexChatBannerTypographySubtitleBox>
            <LiveSexChatBannerTypographySubtitleBox>
              <LiveSexChatBannerPointTypography>Real-Time Conversations:</LiveSexChatBannerPointTypography>
              FlirtBate takes the experience beyond simple sexting—have real, engaging conversations through live video.{' '}
            </LiveSexChatBannerTypographySubtitleBox>
          </LiveSexChatSecBoxBeyondContainer>
        </LiveSexChatFirstBeyondBoxContainer>
      </LiveSexChatContainer>
    </HomeMainContainer>
  );
};

export default LiveSexChatDashboard;
