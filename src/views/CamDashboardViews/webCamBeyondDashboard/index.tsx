'use client';

import { useMediaQuery } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import theme from 'themes/theme';
import {
  WebBannerBeyondContainer,
  WebBannerBeyondImageCard,
  WebBannerTypographySubtitleBox,
  WebFirstBeyondBoxContainer,
  WebInlineBeyondBox,
  WebSecBoxBeyondContainer
} from './webCamBeyondDashboard.styled';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import Box from '@mui/system/Box';

const WebcamDashboardBeyond = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.down(330));
  return (
    <HomeMainContainer>
      <WebBannerBeyondContainer>
        <WebBannerBeyondImageCard>
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
        </WebBannerBeyondImageCard>
        <WebFirstBeyondBoxContainer>
          <WebSecBoxBeyondContainer>
            <WebInlineBeyondBox component="h3">
              <FormattedMessage id="WhatIsCamToCam" />
            </WebInlineBeyondBox>
            <WebBannerTypographySubtitleBox variant="h6">
              <FormattedMessage id="OnFlirtBateCamToCam" />
            </WebBannerTypographySubtitleBox>
            <WebBannerTypographySubtitleBox variant="h6">
              <FormattedMessage id="WithHighQuality" />
            </WebBannerTypographySubtitleBox>
            <WebBannerTypographySubtitleBox variant="h6">
              <FormattedMessage id="WhetherYouWantASimple" />
            </WebBannerTypographySubtitleBox>
          </WebSecBoxBeyondContainer>
        </WebFirstBeyondBoxContainer>
      </WebBannerBeyondContainer>
    </HomeMainContainer>
  );
};

export default WebcamDashboardBeyond;
