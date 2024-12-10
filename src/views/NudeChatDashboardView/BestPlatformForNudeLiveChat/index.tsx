'use client';

import { Grid } from '@mui/material';
import React from 'react';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { FormattedMessage } from 'react-intl';
import {
  BestPlatformForNudeLiveChateBackgroundImageBox,
  BestPlatformForNudeLiveChatGridContainer,
  BestPlatformForNudeLiveChatInnerContainer,
  BestPlatformForNudeLiveChatMainContainer,
  TypographySubtitleBox,
  TypographyTitleBox
} from './BestPlatformForNudeLiveChat.styled';

const BestPlatformForNudeLiveChat = () => (
  <BestPlatformForNudeLiveChatMainContainer>
    <HomeMainContainer>
      <Grid container direction={{ xs: 'column-reverse', sm: 'column-reverse', md: 'row' }} sx={{ padding: '15px' }}>
        <BestPlatformForNudeLiveChatGridContainer item xs={12} md={6}>
          <BestPlatformForNudeLiveChatInnerContainer>
            <TypographyTitleBox variant="h2">
              <FormattedMessage id="WhyFlirtBateIsTheBest" />
            </TypographyTitleBox>

            <TypographySubtitleBox variant="h6">
              <FormattedMessage id="DiverseSelectionOfNudeWebcamModels" />
            </TypographySubtitleBox>
            <TypographySubtitleBox variant="h6">
              <FormattedMessage id="SafeAndSecureNudeLiveStreams" />
            </TypographySubtitleBox>
            <TypographySubtitleBox variant="h6">
              <FormattedMessage id="VarietyOfNudeChatRooms" />
            </TypographySubtitleBox>
          </BestPlatformForNudeLiveChatInnerContainer>
        </BestPlatformForNudeLiveChatGridContainer>
        <Grid item xs={12} md={6}>
          <BestPlatformForNudeLiveChateBackgroundImageBox />
        </Grid>
      </Grid>
    </HomeMainContainer>
  </BestPlatformForNudeLiveChatMainContainer>
);

export default BestPlatformForNudeLiveChat;
