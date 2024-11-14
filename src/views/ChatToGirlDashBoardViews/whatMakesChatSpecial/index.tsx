'use client';

import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import {
  ChatSpecialContainer,
  ChatSpecialBannerBeyondImageCard,
  ChatSpecialBannerPointTypography,
  ChatSpecialBannerTypographySubtitleBox,
  ChatSpecialFirstBeyondBoxContainer,
  ChatSpecialInlineBeyondBox,
  ChatSpecialSecBoxBeyondContainer
} from './whatMakesChatSpecial.styled';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import Box from '@mui/system/Box';

const WebcamDashboardBeyond = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.down(330));
  return (
    <HomeMainContainer>
      <ChatSpecialContainer>
        <ChatSpecialBannerBeyondImageCard>
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
        </ChatSpecialBannerBeyondImageCard>
        <ChatSpecialFirstBeyondBoxContainer>
          <ChatSpecialSecBoxBeyondContainer>
            <ChatSpecialInlineBeyondBox>What Makes FlirtBate Special?</ChatSpecialInlineBeyondBox>
            <ChatSpecialBannerTypographySubtitleBox>
              <ChatSpecialBannerPointTypography> Instant Access to Beautiful Girls :</ChatSpecialBannerPointTypography>
              When you join FlirtBate, you can instantly connect to gorgeous models who are eager to chat. You have the flexibility to start
              a video chat with girls whenever you want, making it easy to enjoy a spontaneous encounter or plan ahead for a more extended
              interaction.
            </ChatSpecialBannerTypographySubtitleBox>
            <ChatSpecialBannerTypographySubtitleBox>
              <ChatSpecialBannerPointTypography> Customizable Chats : </ChatSpecialBannerPointTypography>
              Every model on FlirtBate offers a unique experience. You can customize your chats, focusing on the kind of interaction you’re
              looking for—whether that’s playful banter, flirty teasing, or a more personal video chat with babes.
            </ChatSpecialBannerTypographySubtitleBox>
            <ChatSpecialBannerTypographySubtitleBox>
              <ChatSpecialBannerPointTypography>Safe and Confidential :</ChatSpecialBannerPointTypography>
              All your video chats with girls on FlirtBate are private and secure. We use top-tier encryption to ensure that your
              interactions remain confidential, so you can relax and enjoy your time chatting with our beautiful models.
            </ChatSpecialBannerTypographySubtitleBox>
          </ChatSpecialSecBoxBeyondContainer>
        </ChatSpecialFirstBeyondBoxContainer>
      </ChatSpecialContainer>
    </HomeMainContainer>
  );
};

export default WebcamDashboardBeyond;
