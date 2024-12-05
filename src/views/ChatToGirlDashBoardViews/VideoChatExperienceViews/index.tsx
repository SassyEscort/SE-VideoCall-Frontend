'use client';

import { Grid } from '@mui/material';
import React from 'react';
import {
  VideoChatExperienceBackgroundImageBox,
  VideoChatExperienceGridContainer,
  VideoChatExperienceInnerContainer,
  VideoChatExperienceMainContainer,
  TypographyGradiantSubtitleBox,
  TypographySubtitleBox,
  TypographyTitleBox
} from './VideoChatExperience.styled';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { FormattedMessage } from 'react-intl';

const VideoChatExperience = () => (
  <VideoChatExperienceMainContainer>
    <HomeMainContainer>
      <Grid container direction={{ xs: 'column-reverse', sm: 'column-reverse', md: 'row' }} sx={{ padding: '15px' }}>
        <VideoChatExperienceGridContainer item xs={12} md={6}>
          <VideoChatExperienceInnerContainer>
            <TypographyTitleBox variant="h2">
              <FormattedMessage id="ReadyExperienceSexChat" />
            </TypographyTitleBox>
            <TypographySubtitleBox variant="h6">
              <FormattedMessage id="ExploreTheWorldOfSexChat" />
            </TypographySubtitleBox>
          </VideoChatExperienceInnerContainer>
          <TypographyGradiantSubtitleBox variant="h2">
            <FormattedMessage id="NoRandomnessJustPure" />
          </TypographyGradiantSubtitleBox>
        </VideoChatExperienceGridContainer>
        <Grid item xs={12} md={6}>
          <VideoChatExperienceBackgroundImageBox />
        </Grid>
      </Grid>
    </HomeMainContainer>
  </VideoChatExperienceMainContainer>
);

export default VideoChatExperience;
