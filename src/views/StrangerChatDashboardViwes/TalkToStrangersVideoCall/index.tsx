'use client';

import { Grid } from '@mui/material';
import React from 'react';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { FormattedMessage } from 'react-intl';
import {
  TalkToStrangersVideoCallBackgroundImageBox,
  TalkToStrangerVideoCallGridContainer,
  TalkToStrangerVideoCallInnerContainer,
  TalkToStrangerVideoCallMainContainer,
  TypographyGradiantSubtitleBox,
  TypographySubtitleBox,
  TypographyTitleBox
} from './TalkToStrangersVideoCall.styled';

const TalkToStrangersVideoCall = () => (
  <TalkToStrangerVideoCallMainContainer>
    <HomeMainContainer>
      <Grid container direction={{ xs: 'column-reverse', sm: 'column-reverse', md: 'row' }} sx={{ padding: '15px' }}>
        <TalkToStrangerVideoCallGridContainer item xs={12} md={6}>
          <TalkToStrangerVideoCallInnerContainer>
            <TypographyTitleBox variant="h2">
              <FormattedMessage id="TalkToStrangersVideoCall" />
            </TypographyTitleBox>
            <TypographySubtitleBox variant="h6">
              <FormattedMessage id="Here’sWhyFlirtBate’sRandomVideoChat" />
            </TypographySubtitleBox>

            <TypographySubtitleBox variant="h6">
              <FormattedMessage id="CamToCamChatsEnjoyStranger" />
            </TypographySubtitleBox>
            <TypographySubtitleBox variant="h6">
              <FormattedMessage id="InstantMatchingClickAndConnect" />
            </TypographySubtitleBox>
            <TypographySubtitleBox variant="h6">
              <FormattedMessage id="SecureConversationsYourPrivacyMatters" />
            </TypographySubtitleBox>
            <TypographySubtitleBox variant="h6">
              <FormattedMessage id="FilterAndSelectModelsFindThePerfect" />
            </TypographySubtitleBox>
          </TalkToStrangerVideoCallInnerContainer>
          {/* <TypographyGradiantSubtitleBox variant="h2">
            <FormattedMessage id="NoRandomnessJustPure" />
          </TypographyGradiantSubtitleBox> */}
        </TalkToStrangerVideoCallGridContainer>
        <Grid item xs={12} md={6}>
          <TalkToStrangersVideoCallBackgroundImageBox />
        </Grid>
      </Grid>
    </HomeMainContainer>
  </TalkToStrangerVideoCallMainContainer>
);

export default TalkToStrangersVideoCall;
