'use client';

import { Grid } from '@mui/material';
import React from 'react';
import {
  CamSexExperienceBackgroundImageBox,
  CamSexExperienceGridContainer,
  CamSexExperienceInnerContainer,
  CamSexExperienceMainContainer,
  TypographyGradiantSubtitleBox,
  TypographySubtitleBox,
  TypographyTitleBox
} from './camSexExperience.styled';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { FormattedMessage } from 'react-intl';

const CamSexExperience = () => (
  <CamSexExperienceMainContainer>
    <HomeMainContainer>
      <Grid container direction={{ xs: 'column-reverse', sm: 'column-reverse', md: 'row' }} sx={{ padding: '15px' }}>
        <CamSexExperienceGridContainer item xs={12} md={6}>
          <CamSexExperienceInnerContainer>
            <TypographyTitleBox>
              <FormattedMessage id="ExperienceCam2CamSex" />
            </TypographyTitleBox>
            <TypographySubtitleBox>
              <FormattedMessage id="ExploreTheWorldOfCam2CamSex" />
            </TypographySubtitleBox>
          </CamSexExperienceInnerContainer>
          <TypographyGradiantSubtitleBox>
            <FormattedMessage id="NoRandomnessJustPure" />
          </TypographyGradiantSubtitleBox>
        </CamSexExperienceGridContainer>
        <Grid item xs={12} md={6}>
          <CamSexExperienceBackgroundImageBox />
        </Grid>
      </Grid>
    </HomeMainContainer>
  </CamSexExperienceMainContainer>
);

export default CamSexExperience;
