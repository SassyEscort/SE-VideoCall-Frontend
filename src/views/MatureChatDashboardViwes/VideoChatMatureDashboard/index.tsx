'use client';
import Box from '@mui/material/Box';
import React from 'react';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { FormattedMessage } from 'react-intl';
import { SexyChatAtFingertipsTitleTypography } from 'views/SexChatDashboardViews/SexyChatAtFingertips/SexyChatAtFingertips.styled';
import { MatureInnerBox, MatureMainContainer, MatureTableBox, MatureTypography } from './VideoChatMature.styled';

const VideoChatMatureDashboard = () => (
  <HomeMainContainer>
    <MatureMainContainer>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <SexyChatAtFingertipsTitleTypography variant="h2">
          <FormattedMessage id="WhyUseFlirtBateForRandomMature" />
        </SexyChatAtFingertipsTitleTypography>
      </Box>
      <MatureInnerBox>
        <MatureTableBox>
          <MatureTypography variant="bodyLight">🍑</MatureTypography>
          <MatureTypography>
            <FormattedMessage id="HighQualityStreamingMature" />
          </MatureTypography>
        </MatureTableBox>
        <MatureTableBox>
          <MatureTypography variant="bodyLight">🍑</MatureTypography>
          <MatureTypography>
            <FormattedMessage id="SafeAndPrivateWeEnsureMature" />
          </MatureTypography>
        </MatureTableBox>
        <MatureTableBox>
          <MatureTypography variant="bodyLight">🍑</MatureTypography>
          <MatureTypography>
            <FormattedMessage id="MeetNewPeopleAnytimeMature" />
          </MatureTypography>
        </MatureTableBox>
        <MatureTableBox>
          <MatureTypography variant="bodyLight">🍑</MatureTypography>
          <MatureTypography>
            <FormattedMessage id="GlobalConnectionsMature" />
          </MatureTypography>
        </MatureTableBox>
      </MatureInnerBox>
    </MatureMainContainer>
  </HomeMainContainer>
);

export default VideoChatMatureDashboard;
