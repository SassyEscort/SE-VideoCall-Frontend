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
import { FormattedMessage } from 'react-intl';

const WhySpecialDashboardBeyond = () => {
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
            <ChatSpecialInlineBeyondBox component="h2">
              <FormattedMessage id="WhatFlirtBateSpecial" />
            </ChatSpecialInlineBeyondBox>
            <ChatSpecialBannerTypographySubtitleBox>
              <ChatSpecialBannerPointTypography>
                <FormattedMessage id="InstantAccessBeautiful" />
              </ChatSpecialBannerPointTypography>
              <FormattedMessage id="WhenYouJoinFlirtBateYouInstantlyConnect" />
            </ChatSpecialBannerTypographySubtitleBox>
            <ChatSpecialBannerTypographySubtitleBox>
              <ChatSpecialBannerPointTypography>
                <FormattedMessage id="CustomizableChats" />
              </ChatSpecialBannerPointTypography>
              <FormattedMessage id="ModelOnFlirtBateOffersUnique" />
            </ChatSpecialBannerTypographySubtitleBox>
            <ChatSpecialBannerTypographySubtitleBox>
              <ChatSpecialBannerPointTypography>
                <FormattedMessage id="SafeAndConfidential" />
              </ChatSpecialBannerPointTypography>
              <FormattedMessage id="AllYourVideoChatsWithGirls" />
            </ChatSpecialBannerTypographySubtitleBox>
          </ChatSpecialSecBoxBeyondContainer>
        </ChatSpecialFirstBeyondBoxContainer>
      </ChatSpecialContainer>
    </HomeMainContainer>
  );
};

export default WhySpecialDashboardBeyond;
