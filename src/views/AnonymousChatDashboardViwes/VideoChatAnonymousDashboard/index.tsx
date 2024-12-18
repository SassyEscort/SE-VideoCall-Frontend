'use client';
import Box from '@mui/material/Box';
import React from 'react';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { FormattedMessage } from 'react-intl';
import { SexyChatAtFingertipsTitleTypography } from 'views/SexChatDashboardViews/SexyChatAtFingertips/SexyChatAtFingertips.styled';
import { AnonymousInnerBox, AnonymousMainContainer, AnonymousTableBox, AnonymousTypography } from './VideoChatAnonymousDashboard.styled';

const VideoChatAnonymousDashboard = () => (
  <HomeMainContainer>
    <AnonymousMainContainer>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <SexyChatAtFingertipsTitleTypography variant="h2">
          <FormattedMessage id="FeaturesOfFlirtBatesCuckoldChatRoom" />
        </SexyChatAtFingertipsTitleTypography>
      </Box>
      <AnonymousInnerBox>
        <AnonymousTableBox>
          <AnonymousTypography variant="bodyLight">🍑</AnonymousTypography>
          <AnonymousTypography>
            <FormattedMessage id="ModelProfilesCuckold" />
          </AnonymousTypography>
        </AnonymousTableBox>
        <AnonymousTableBox>
          <AnonymousTypography variant="bodyLight">🍑</AnonymousTypography>
          <AnonymousTypography>
            <FormattedMessage id="FlexiblePricingCuckold" />
          </AnonymousTypography>
        </AnonymousTableBox>
        <AnonymousTableBox>
          <AnonymousTypography variant="bodyLight">🍑</AnonymousTypography>
          <AnonymousTypography>
            <FormattedMessage id="HDVideoQuality" />
          </AnonymousTypography>
        </AnonymousTableBox>
        <AnonymousTableBox>
          <AnonymousTypography variant="bodyLight">🍑</AnonymousTypography>
          <AnonymousTypography>
            <FormattedMessage id="PrivateChatRooms" />
          </AnonymousTypography>
        </AnonymousTableBox>
        <AnonymousTableBox>
          <AnonymousTypography variant="bodyLight">🍑</AnonymousTypography>
          <AnonymousTypography>
            <FormattedMessage id="CustomizableExperiences" />
          </AnonymousTypography>
        </AnonymousTableBox>
      </AnonymousInnerBox>
    </AnonymousMainContainer>
  </HomeMainContainer>
);

export default VideoChatAnonymousDashboard;
