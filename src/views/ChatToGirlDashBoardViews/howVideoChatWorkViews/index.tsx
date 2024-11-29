'use client';
import Box from '@mui/material/Box';
import React from 'react';
import { HowChatWorksInnerBox, HowChatWorksMainContainer, HowChatWorksTableBox, HowVideoChatWorksTypography } from './howChatWorks.styled';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { ChatWhyChooseTitleTypography } from '../startVideoChatViews/startVideoChat.styled';
import { FormattedMessage } from 'react-intl';

const HowChatWorks = () => (
  <HomeMainContainer>
    <HowChatWorksMainContainer>
      <Box>
        <ChatWhyChooseTitleTypography>
          <FormattedMessage id="HowFlirtBateVideoChatWorks" />
        </ChatWhyChooseTitleTypography>
      </Box>
      <HowChatWorksInnerBox>
        <HowChatWorksTableBox>
          <HowVideoChatWorksTypography variant="bodyLight">🍑</HowVideoChatWorksTypography>
          <HowVideoChatWorksTypography variant="bodyLight">
            <FormattedMessage id="BrowseModels" />
          </HowVideoChatWorksTypography>
        </HowChatWorksTableBox>
        <HowChatWorksTableBox>
          <HowVideoChatWorksTypography variant="bodyLight">🍑</HowVideoChatWorksTypography>
          <HowVideoChatWorksTypography variant="bodyLight">
            <FormattedMessage id="SelectYourGirl" />
          </HowVideoChatWorksTypography>
        </HowChatWorksTableBox>
        <HowChatWorksTableBox>
          <HowVideoChatWorksTypography variant="bodyLight">🍑</HowVideoChatWorksTypography>
          <HowVideoChatWorksTypography variant="bodyLight">
            <FormattedMessage id="StarttheChat" />
          </HowVideoChatWorksTypography>
        </HowChatWorksTableBox>
        <HowChatWorksTableBox>
          <HowVideoChatWorksTypography variant="bodyLight">🍑</HowVideoChatWorksTypography>
          <HowVideoChatWorksTypography variant="bodyLight">
            <FormattedMessage id="ExperiencePrivateConnections" />
          </HowVideoChatWorksTypography>
        </HowChatWorksTableBox>
      </HowChatWorksInnerBox>
    </HowChatWorksMainContainer>
  </HomeMainContainer>
);

export default HowChatWorks;
