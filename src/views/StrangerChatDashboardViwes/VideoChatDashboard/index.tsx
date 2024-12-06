'use client';
import Box from '@mui/material/Box';
import React from 'react';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { FormattedMessage } from 'react-intl';
import { SexyChatAtFingertipsTitleTypography } from 'views/SexChatDashboardViews/SexyChatAtFingertips/SexyChatAtFingertips.styled';
import { VideoChatInnerBox, VideoChatMainContainer, VideoChatTableBox, VideoChatTypography } from './VideoChat.styled';

const VideoChatDashboard = () => (
  <HomeMainContainer>
    <VideoChatMainContainer>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <SexyChatAtFingertipsTitleTypography variant="h2">
          <FormattedMessage id="WhyUseFlirtBateForRandom" />
        </SexyChatAtFingertipsTitleTypography>

        <VideoChatTypography>
          <FormattedMessage id="AtFlirtBateWeMakeVideoChatTalk" />
        </VideoChatTypography>
      </Box>
      <VideoChatInnerBox>
        <VideoChatTableBox>
          <VideoChatTypography variant="bodyLight">🍑</VideoChatTypography>
          <VideoChatTypography>
            <FormattedMessage id="HighQualityStreamingExperienceClear" />
          </VideoChatTypography>
        </VideoChatTableBox>
        <VideoChatTableBox>
          <VideoChatTypography variant="bodyLight">🍑</VideoChatTypography>
          <VideoChatTypography>
            <FormattedMessage id="SafeAndPrivateWeEnsureThatEvery" />
          </VideoChatTypography>
        </VideoChatTableBox>
        <VideoChatTableBox>
          <VideoChatTypography variant="bodyLight">🍑</VideoChatTypography>
          <VideoChatTypography>
            <FormattedMessage id="MeetNewPeopleAnytimeFlirtBateConnects" />
          </VideoChatTypography>
        </VideoChatTableBox>
        <VideoChatTableBox>
          <VideoChatTypography variant="bodyLight">🍑</VideoChatTypography>
          <VideoChatTypography>
            <FormattedMessage id="GlobalConnectionsTalkToPeople" />
          </VideoChatTypography>
        </VideoChatTableBox>
      </VideoChatInnerBox>
    </VideoChatMainContainer>
  </HomeMainContainer>
);

export default VideoChatDashboard;
