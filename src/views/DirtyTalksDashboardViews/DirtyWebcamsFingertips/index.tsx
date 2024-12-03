'use client';

import { Grid } from '@mui/material';
import React from 'react';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { FormattedMessage } from 'react-intl';
import {
  DirtyWebcamsFingertipsBackgroundImageBox,
  DirtyWebcamsFingertipsGridContainer,
  DirtyWebcamsFingertipsInnerContainer,
  DirtyWebcamsFingertipsMainContainer,
  TypographyGradiantSubtitleBox,
  TypographySubtitleBox,
  TypographyTitleBox
} from './DirtyWebcamsFingertips.styled';

const DirtyWebcamsFingertips = () => (
  <DirtyWebcamsFingertipsMainContainer>
    <HomeMainContainer>
      <Grid container direction={{ xs: 'column-reverse', sm: 'column-reverse', md: 'row' }} sx={{ padding: '15px' }}>
        <DirtyWebcamsFingertipsGridContainer item xs={12} md={6}>
          <DirtyWebcamsFingertipsInnerContainer>
            <TypographyTitleBox>
              <FormattedMessage id="AWorldOfDirtyWebcams" />
            </TypographyTitleBox>
            <TypographySubtitleBox>
              <FormattedMessage id="ReadyToExploreTheDirtiest" />
            </TypographySubtitleBox>
          </DirtyWebcamsFingertipsInnerContainer>
          <TypographyGradiantSubtitleBox>
            <FormattedMessage id="NoRandomnessJustPure" />
          </TypographyGradiantSubtitleBox>
        </DirtyWebcamsFingertipsGridContainer>
        <Grid item xs={12} md={6}>
          <DirtyWebcamsFingertipsBackgroundImageBox />
        </Grid>
      </Grid>
    </HomeMainContainer>
  </DirtyWebcamsFingertipsMainContainer>
);

export default DirtyWebcamsFingertips;
