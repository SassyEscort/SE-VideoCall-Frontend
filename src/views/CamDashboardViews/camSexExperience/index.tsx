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

const CamSexExperience = () => (
  <CamSexExperienceMainContainer>
    <HomeMainContainer>
      <Grid container direction={{ xs: 'column-reverse', sm: 'column-reverse', md: 'row' }} sx={{ padding: '15px' }}>
        <CamSexExperienceGridContainer item xs={12} md={6}>
          <CamSexExperienceInnerContainer>
            <TypographyTitleBox>Ready to Experience Cam2Cam Sex?</TypographyTitleBox>
            <TypographySubtitleBox>
              If you&apos;re ready to explore the world of cam2cam sex, sign up for free on FlirtBate today. With a wide selection of models
              available, you can browse profiles, select based on your interests, and start a personalized cam match with ease.
            </TypographySubtitleBox>
          </CamSexExperienceInnerContainer>
          <TypographyGradiantSubtitleBox>
            No randomness—just pure, one-on-one connections with the person you want to engage with.
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
