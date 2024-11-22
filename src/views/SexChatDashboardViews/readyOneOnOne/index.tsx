'use client';

import { Grid } from '@mui/material';
import React from 'react';
import {
  ReadyOneOnOneBackgroundImageBox,
  ReadyOneOnOneGridContainer,
  ReadyOneOnOneInnerContainer,
  ReadyOneOnOneMainContainer,
  TypographyGradiantSubtitleBox,
  TypographySubtitleBox,
  TypographyTitleBox
} from './ReadyOneOnOne.styled';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { FormattedMessage } from 'react-intl';

const ReadyOneOnOneComponent = () => (
  <ReadyOneOnOneMainContainer>
    <HomeMainContainer>
      <Grid container direction={{ xs: 'column-reverse', sm: 'column-reverse', md: 'row' }} sx={{ padding: '15px' }}>
        <ReadyOneOnOneGridContainer item xs={12} md={6}>
          <ReadyOneOnOneInnerContainer>
            <TypographyTitleBox>
              <FormattedMessage id="ReadyStartYour1On1SexChat" />
            </TypographyTitleBox>
            <TypographySubtitleBox>
              <FormattedMessage id="TimeToUpgradeYourExperience" />
            </TypographySubtitleBox>
          </ReadyOneOnOneInnerContainer>
          <TypographyGradiantSubtitleBox>
            <FormattedMessage id="NoRandomnessJustPure" />
          </TypographyGradiantSubtitleBox>
        </ReadyOneOnOneGridContainer>
        <Grid item xs={12} md={6}>
          <ReadyOneOnOneBackgroundImageBox />
        </Grid>
      </Grid>
    </HomeMainContainer>
  </ReadyOneOnOneMainContainer>
);

export default ReadyOneOnOneComponent;
