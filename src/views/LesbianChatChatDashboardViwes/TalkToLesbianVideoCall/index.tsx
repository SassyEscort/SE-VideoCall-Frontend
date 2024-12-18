'use client';

import { Grid } from '@mui/material';
import React from 'react';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { FormattedMessage } from 'react-intl';
import {
  TalkToLesbianVideoCallBackgroundImageBox,
  TalkToLesbianVideoCallGridContainer,
  TalkToLesbianVideoCallInnerContainer,
  TalkToLesbianVideoCallMainContainer,
  TypographySubtitleBox,
  TypographyTitleBox
} from './TalkToLesbianVideoCall.styled';

const TalkToLesbianVideoCall = () => (
  <TalkToLesbianVideoCallMainContainer>
    <HomeMainContainer>
      <Grid container direction={{ xs: 'column-reverse', sm: 'column-reverse', md: 'row' }} sx={{ padding: '15px' }}>
        <TalkToLesbianVideoCallGridContainer item xs={12} md={6}>
          <TalkToLesbianVideoCallInnerContainer>
            <TypographyTitleBox variant="h2">
              <FormattedMessage id="HowToGetStartedOn" />
            </TypographyTitleBox>

            <TypographySubtitleBox variant="h6">
              <FormattedMessage id="SignUpForFreeLesbian" />
            </TypographySubtitleBox>
            <TypographySubtitleBox variant="h6">
              <FormattedMessage id="BrowseProfilesLesbian" />
            </TypographySubtitleBox>
            <TypographySubtitleBox variant="h6">
              <FormattedMessage id="StartChattingLesbian" />
            </TypographySubtitleBox>
            <TypographySubtitleBox variant="h6">
              <FormattedMessage id="UpgradeForMoreLesbian" />
            </TypographySubtitleBox>
          </TalkToLesbianVideoCallInnerContainer>
        </TalkToLesbianVideoCallGridContainer>
        <Grid item xs={12} md={6}>
          <TalkToLesbianVideoCallBackgroundImageBox />
        </Grid>
      </Grid>
    </HomeMainContainer>
  </TalkToLesbianVideoCallMainContainer>
);

export default TalkToLesbianVideoCall;
