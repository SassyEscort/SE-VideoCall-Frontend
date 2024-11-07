'use client';

import { useMediaQuery } from '@mui/material';
import Image from 'next/image';
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

const WebcamDashboardBeyond = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.down(330));
  return (
    <HomeMainContainer>
      <WebBannerBeyondContainer>
        <WebBannerBeyondImageCard>
          <Image
            alt="home_model"
            decoding="async"
            width={isSm && isSmDown ? 300 : isSmDown ? 347 : 580}
            height={isSmDown ? 339 : 540}
            src="/images/beyond.webp"
            priority={true}
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 600px) 300px, (max-width: 768px) 347px, 462px"
          />
        </WebBannerBeyondImageCard>
        <WebFirstBeyondBoxContainer>
          <WebSecBoxBeyondContainer>
            <WebInlineBeyondBox>
              <FormattedMessage id="WhatIsCamToCam" />
            </WebInlineBeyondBox>
            <WebBannerTypographySubtitleBox>
              <FormattedMessage id="OnFlirtBateCamToCam" />
            </WebBannerTypographySubtitleBox>
            <WebBannerTypographySubtitleBox>
              <FormattedMessage id="WithHighQuality" />
            </WebBannerTypographySubtitleBox>
            <WebBannerTypographySubtitleBox>
              <FormattedMessage id="WhetherYouWantASimple" />
            </WebBannerTypographySubtitleBox>
          </WebSecBoxBeyondContainer>
        </WebFirstBeyondBoxContainer>
      </WebBannerBeyondContainer>
    </HomeMainContainer>
  );
};

export default WebcamDashboardBeyond;
