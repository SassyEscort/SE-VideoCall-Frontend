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

const CamSexExperience = () => (
  <VideoChatExperienceMainContainer>
    <HomeMainContainer>
      <Grid container direction={{ xs: 'column-reverse', sm: 'column-reverse', md: 'row' }} sx={{ padding: '15px' }}>
        <VideoChatExperienceGridContainer item xs={12} md={6}>
          <VideoChatExperienceInnerContainer>
            <TypographyTitleBox>Ready to Experience Sex Chat ? </TypographyTitleBox>
            <TypographySubtitleBox>
              If you{`'`}re ready to explore the world of sex chat, sign up for free on FlirtBate today. With a wide selection of models
              available, you can browse profiles, select based on your interests, and start a personalized cam match with ease.
            </TypographySubtitleBox>
          </VideoChatExperienceInnerContainer>
          <TypographyGradiantSubtitleBox>
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

export default CamSexExperience;
