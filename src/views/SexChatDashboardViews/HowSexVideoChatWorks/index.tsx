'use client';
import Box from '@mui/material/Box';
import React from 'react';
import { HowChatWorksInnerBox, HowChatWorksMainContainer, HowChatWorksTableBox, SexChatTypography } from './HowSexVideoChatWorks.styled';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { SexyChatAtFingertipsTitleTypography } from '../SexyChatAtFingertips/SexyChatAtFingertips.styled';
import { FormattedMessage } from 'react-intl';

const HowSexVideoChatWorks = () => (
  <HomeMainContainer>
    <HowChatWorksMainContainer>
      <Box>
        <SexyChatAtFingertipsTitleTypography variant="h2">
          <FormattedMessage id="HowSexyVideoChatWorks" />
        </SexyChatAtFingertipsTitleTypography>
      </Box>
      <HowChatWorksInnerBox>
        <HowChatWorksTableBox>
          <SexChatTypography variant="bodyLight">🍑</SexChatTypography>
          <SexChatTypography>
            <FormattedMessage id="GettingStartedWithFlirtbateIsEasy" />
          </SexChatTypography>
        </HowChatWorksTableBox>
        <HowChatWorksTableBox>
          <SexChatTypography variant="bodyLight">🍑</SexChatTypography>
          <SexChatTypography>
            <FormattedMessage id="BrowseModelsForSexyVideoChat" />
          </SexChatTypography>
        </HowChatWorksTableBox>
        <HowChatWorksTableBox>
          <SexChatTypography variant="bodyLight">🍑</SexChatTypography>
          <SexChatTypography>
            <FormattedMessage id="StartPrivateChat" />
          </SexChatTypography>
        </HowChatWorksTableBox>
        <HowChatWorksTableBox>
          <SexChatTypography variant="bodyLight">🍑</SexChatTypography>
          <SexChatTypography>
            <FormattedMessage id="Enjoy1on1Conversations" />
          </SexChatTypography>
        </HowChatWorksTableBox>
      </HowChatWorksInnerBox>
    </HowChatWorksMainContainer>
  </HomeMainContainer>
);

export default HowSexVideoChatWorks;
