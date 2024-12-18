'use client';
import Box from '@mui/material/Box';
import React from 'react';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { FormattedMessage } from 'react-intl';
import { SexyChatAtFingertipsTitleTypography } from 'views/SexChatDashboardViews/SexyChatAtFingertips/SexyChatAtFingertips.styled';
import {
  FeaturesNudeChatInnerBox,
  FeaturesNudeChatMainContainer,
  FeaturesNudeChatTableBox,
  FeaturesNudeChatTypography
} from './FeaturesNudeChat.styled';

const FeaturesNudeChat = () => (
  <HomeMainContainer>
    <FeaturesNudeChatMainContainer>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <SexyChatAtFingertipsTitleTypography variant="h2">
          <FormattedMessage id="FeaturesOfFlirtBateNudeChat" />
        </SexyChatAtFingertipsTitleTypography>
      </Box>
      <FeaturesNudeChatInnerBox>
        <FeaturesNudeChatTableBox>
          <FeaturesNudeChatTypography variant="bodyLight">🍑</FeaturesNudeChatTypography>
          <FeaturesNudeChatTypography>
            <FormattedMessage id="PersonalizedNudeVideoChats" />
          </FeaturesNudeChatTypography>
        </FeaturesNudeChatTableBox>
        <FeaturesNudeChatTableBox>
          <FeaturesNudeChatTypography variant="bodyLight">🍑</FeaturesNudeChatTypography>
          <FeaturesNudeChatTypography>
            <FormattedMessage id="ModelProfiles" />
          </FeaturesNudeChatTypography>
        </FeaturesNudeChatTableBox>
        <FeaturesNudeChatTableBox>
          <FeaturesNudeChatTypography variant="bodyLight">🍑</FeaturesNudeChatTypography>
          <FeaturesNudeChatTypography>
            <FormattedMessage id="HDStreamingQuality" />
          </FeaturesNudeChatTypography>
        </FeaturesNudeChatTableBox>
        <FeaturesNudeChatTableBox>
          <FeaturesNudeChatTypography variant="bodyLight">🍑</FeaturesNudeChatTypography>
          <FeaturesNudeChatTypography>
            <FormattedMessage id="CompletePrivacy" />
          </FeaturesNudeChatTypography>
        </FeaturesNudeChatTableBox>
        <FeaturesNudeChatTableBox>
          <FeaturesNudeChatTypography variant="bodyLight">🍑</FeaturesNudeChatTypography>
          <FeaturesNudeChatTypography>
            <FormattedMessage id="EasyToUseInterface" />
          </FeaturesNudeChatTypography>
        </FeaturesNudeChatTableBox>
        <FeaturesNudeChatTableBox>
          <FeaturesNudeChatTypography variant="bodyLight">🍑</FeaturesNudeChatTypography>
          <FeaturesNudeChatTypography>
            <FormattedMessage id="AvailableAnytime" />
          </FeaturesNudeChatTypography>
        </FeaturesNudeChatTableBox>
      </FeaturesNudeChatInnerBox>
    </FeaturesNudeChatMainContainer>
  </HomeMainContainer>
);

export default FeaturesNudeChat;
