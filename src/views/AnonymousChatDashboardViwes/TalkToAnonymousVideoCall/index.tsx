'use client';

import { Grid } from '@mui/material';
import React from 'react';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { FormattedMessage } from 'react-intl';
import {
  TalkToAnonymousStrangerVideoCallBackgroundImageBox,
  TalkToAnonymousStrangerVideoCallGridContainer,
  TalkToAnonymousStrangerVideoCallInnerContainer,
  TalkToAnonymousStrangerVideoCallMainContainer,
  TypographySubtitleBox,
  TypographyTitleBox
} from './TalkToAnonymousVideoCall.styled';

const TalkToAnonymousVideoCall = () => (
  <TalkToAnonymousStrangerVideoCallMainContainer>
    <HomeMainContainer>
      <Grid container direction={{ xs: 'column-reverse', sm: 'column-reverse', md: 'row' }} sx={{ padding: '15px' }}>
        <TalkToAnonymousStrangerVideoCallGridContainer item xs={12} md={6}>
          <TalkToAnonymousStrangerVideoCallInnerContainer>
            <TypographyTitleBox variant="h2">
              <FormattedMessage id="HowItWorksAnonymous" />
            </TypographyTitleBox>

            <TypographySubtitleBox variant="h6">
              <FormattedMessage id="SelectYourModel" />
            </TypographySubtitleBox>
            <TypographySubtitleBox variant="h6">
              <FormattedMessage id="StartAPrivateCall" />
            </TypographySubtitleBox>
            <TypographySubtitleBox variant="h6">
              <FormattedMessage id="StayAnonymousAnonymous" />
            </TypographySubtitleBox>
          </TalkToAnonymousStrangerVideoCallInnerContainer>
        </TalkToAnonymousStrangerVideoCallGridContainer>
        <Grid item xs={12} md={6}>
          <TalkToAnonymousStrangerVideoCallBackgroundImageBox />
        </Grid>
      </Grid>
    </HomeMainContainer>
  </TalkToAnonymousStrangerVideoCallMainContainer>
);

export default TalkToAnonymousVideoCall;
