'use client';
import Box from '@mui/material/Box';
import React from 'react';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { FormattedMessage } from 'react-intl';
import { SexyChatAtFingertipsTitleTypography } from 'views/SexChatDashboardViews/SexyChatAtFingertips/SexyChatAtFingertips.styled';
import { LesbianInnerBox, LesbianMainContainer, LesbianTableBox, LesbianTypography } from './VideoChatLesbianDashboard.styled';

const VideoChatLesbianDashboard = () => (
  <HomeMainContainer>
    <LesbianMainContainer>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <SexyChatAtFingertipsTitleTypography variant="h2">
          <FormattedMessage id="LesbianAdultChatFeatures" />
        </SexyChatAtFingertipsTitleTypography>
      </Box>
      <LesbianInnerBox>
        <LesbianTableBox>
          <LesbianTypography variant="bodyLight">🍑</LesbianTypography>
          <LesbianTypography>
            <FormattedMessage id="PrivateLesbianWebcamChat" />
          </LesbianTypography>
        </LesbianTableBox>
        <LesbianTableBox>
          <LesbianTypography variant="bodyLight">🍑</LesbianTypography>
          <LesbianTypography>
            <FormattedMessage id="LiveAndDirect" />
          </LesbianTypography>
        </LesbianTableBox>
        <LesbianTableBox>
          <LesbianTypography variant="bodyLight">🍑</LesbianTypography>
          <LesbianTypography>
            <FormattedMessage id="ExploreYourDesires" />
          </LesbianTypography>
        </LesbianTableBox>
        <LesbianTableBox>
          <LesbianTypography variant="bodyLight">🍑</LesbianTypography>
          <LesbianTypography>
            <FormattedMessage id="FlexibleAndFun" />
          </LesbianTypography>
        </LesbianTableBox>
      </LesbianInnerBox>
    </LesbianMainContainer>
  </HomeMainContainer>
);

export default VideoChatLesbianDashboard;
