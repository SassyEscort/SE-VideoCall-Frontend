'use client';
import Box from '@mui/material/Box';
import React from 'react';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { FormattedMessage } from 'react-intl';
import { SexyChatAtFingertipsTitleTypography } from 'views/SexChatDashboardViews/SexyChatAtFingertips/SexyChatAtFingertips.styled';
import { CuckoldInnerBox, CuckoldMainContainer, CuckoldTableBox, CuckoldTypography } from './VideoChatCuckold.styled';

const VideoChatCuckoldDashboard = () => (
  <HomeMainContainer>
    <CuckoldMainContainer>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <SexyChatAtFingertipsTitleTypography variant="h2">
          <FormattedMessage id="FeaturesOfFlirtBateCuckold" />
        </SexyChatAtFingertipsTitleTypography>
      </Box>
      <CuckoldInnerBox>
        <CuckoldTableBox>
          <CuckoldTypography variant="bodyLight">🍑</CuckoldTypography>
          <CuckoldTypography>
            <FormattedMessage id="ModelProfilesCuckold" />
          </CuckoldTypography>
        </CuckoldTableBox>
        <CuckoldTableBox>
          <CuckoldTypography variant="bodyLight">🍑</CuckoldTypography>
          <CuckoldTypography>
            <FormattedMessage id="FlexiblePricingCuckold" />
          </CuckoldTypography>
        </CuckoldTableBox>
        <CuckoldTableBox>
          <CuckoldTypography variant="bodyLight">🍑</CuckoldTypography>
          <CuckoldTypography>
            <FormattedMessage id="HDVideoQuality" />
          </CuckoldTypography>
        </CuckoldTableBox>
        <CuckoldTableBox>
          <CuckoldTypography variant="bodyLight">🍑</CuckoldTypography>
          <CuckoldTypography>
            <FormattedMessage id="PrivateChatRooms" />
          </CuckoldTypography>
        </CuckoldTableBox>
        <CuckoldTableBox>
          <CuckoldTypography variant="bodyLight">🍑</CuckoldTypography>
          <CuckoldTypography>
            <FormattedMessage id="CustomizableExperiences" />
          </CuckoldTypography>
        </CuckoldTableBox>
      </CuckoldInnerBox>
    </CuckoldMainContainer>
  </HomeMainContainer>
);

export default VideoChatCuckoldDashboard;
