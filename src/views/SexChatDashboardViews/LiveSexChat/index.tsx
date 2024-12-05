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
import { FormattedMessage } from 'react-intl';

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
            <LiveSexChatInlineBeyondBox component="h3">
              <FormattedMessage id="Live1SexChat" />
            </LiveSexChatInlineBeyondBox>
            <LiveSexChatBannerTypographySubtitleBox variant="h5">
              <FormattedMessage id="FlirtbateWeGoBeyondTheUsualSexChat" />
            </LiveSexChatBannerTypographySubtitleBox>
            <LiveSexChatBannerTypographySubtitleBox>
              <LiveSexChatBannerPointTypography>
                <FormattedMessage id="1on1SexChat" />
              </LiveSexChatBannerPointTypography>
              <FormattedMessage id="EnjoyPrivateOneOnOne" />
            </LiveSexChatBannerTypographySubtitleBox>
            <LiveSexChatBannerTypographySubtitleBox>
              <LiveSexChatBannerPointTypography>
                <FormattedMessage id="SexyCam" />
              </LiveSexChatBannerPointTypography>
              <FormattedMessage id="ConnectWithRealModels" />
            </LiveSexChatBannerTypographySubtitleBox>
            <LiveSexChatBannerTypographySubtitleBox>
              <LiveSexChatBannerPointTypography>
                <FormattedMessage id="RealTimeConversations" />
              </LiveSexChatBannerPointTypography>
              <FormattedMessage id="FlirtbateTakesTheExperience" />
            </LiveSexChatBannerTypographySubtitleBox>
          </LiveSexChatSecBoxBeyondContainer>
        </LiveSexChatFirstBeyondBoxContainer>
      </LiveSexChatContainer>
    </HomeMainContainer>
  );
};

export default LiveSexChatDashboard;
