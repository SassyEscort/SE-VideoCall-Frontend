'use client';

import { Grid } from '@mui/material';
import React from 'react';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { FormattedMessage } from 'react-intl';
import {
  TalkToMatureStrangerVideoCallBackgroundImageBox,
  TalkToMatureStrangerVideoCallGridContainer,
  TalkToMatureStrangerVideoCallInnerContainer,
  TalkToMatureStrangerVideoCallMainContainer,
  TypographySubtitleBox,
  TypographyTitleBox
} from './TalkToMatureVideoCall.styled';

const TalkToMatureVideoCall = () => (
  <TalkToMatureStrangerVideoCallMainContainer>
    <HomeMainContainer>
      <Grid container direction={{ xs: 'column-reverse', sm: 'column-reverse', md: 'row' }} sx={{ padding: '15px' }}>
        <TalkToMatureStrangerVideoCallGridContainer item xs={12} md={6}>
          <TalkToMatureStrangerVideoCallInnerContainer>
            <TypographyTitleBox variant="h2">
              <FormattedMessage id="TalkToMatureVideoCall" />
            </TypographyTitleBox>

            <TypographySubtitleBox variant="h6">
              <FormattedMessage id="CamToCamChatsEnjoyMature" />
            </TypographySubtitleBox>
            <TypographySubtitleBox variant="h6">
              <FormattedMessage id="InstantMatchingClickAndConnectMature" />
            </TypographySubtitleBox>
            <TypographySubtitleBox variant="h6">
              <FormattedMessage id="SecureConversationsMature" />
            </TypographySubtitleBox>
            <TypographySubtitleBox variant="h6">
              <FormattedMessage id="FilterAndSelectModelsFindMature" />
            </TypographySubtitleBox>
          </TalkToMatureStrangerVideoCallInnerContainer>
        </TalkToMatureStrangerVideoCallGridContainer>
        <Grid item xs={12} md={6}>
          <TalkToMatureStrangerVideoCallBackgroundImageBox />
        </Grid>
      </Grid>
    </HomeMainContainer>
  </TalkToMatureStrangerVideoCallMainContainer>
);

export default TalkToMatureVideoCall;
