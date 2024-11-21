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
            <TypographyTitleBox>Ready to Start Your 1 on 1 Sex Chat?</TypographyTitleBox>
            <TypographySubtitleBox>
              It’s time to upgrade your experience. Dive into dirty video chats with models who are ready to connect. With FlirtBate’s
              real-time video chat, every interaction is personal, exciting, and unforgettable.
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
