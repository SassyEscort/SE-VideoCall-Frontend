import Box from '@mui/material/Box';
import React from 'react';
import { HowChatWorksInnerBox, HowChatWorksMainContainer, HowChatWorksTableBox, HowVideoChatWorksTypography } from './howChatWorks.styled';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { ChatWhyChooseTitleTypography } from '../startVideoChatViews/startVideoChat.styled';

const HowChatWorks = () => (
  <HomeMainContainer>
    <HowChatWorksMainContainer>
      <Box>
        <ChatWhyChooseTitleTypography>How FlirtBate Video Chat Works:</ChatWhyChooseTitleTypography>
      </Box>
      <HowChatWorksInnerBox>
        <HowChatWorksTableBox>
          <HowVideoChatWorksTypography variant="bodyLight">🍑</HowVideoChatWorksTypography>
          <HowVideoChatWorksTypography variant="bodyLight">
            Browse Models: Explore profiles of hot babes from all over the world, each ready for a personal video chat.
          </HowVideoChatWorksTypography>
        </HowChatWorksTableBox>
        <HowChatWorksTableBox>
          <HowVideoChatWorksTypography variant="bodyLight">🍑</HowVideoChatWorksTypography>
          <HowVideoChatWorksTypography variant="bodyLight">
            Select Your Girl: Choose from a variety of models and pick the one who fits your mood and desires.
          </HowVideoChatWorksTypography>
        </HowChatWorksTableBox>
        <HowChatWorksTableBox>
          <HowVideoChatWorksTypography variant="bodyLight">🍑</HowVideoChatWorksTypography>
          <HowVideoChatWorksTypography variant="bodyLight">
            Start the Chat: Engage in a video chat with babes, enjoying the conversation in real-time. You’re in control, from how long you
            chat to what you discuss.
          </HowVideoChatWorksTypography>
        </HowChatWorksTableBox>
        <HowChatWorksTableBox>
          <HowVideoChatWorksTypography variant="bodyLight">🍑</HowVideoChatWorksTypography>
          <HowVideoChatWorksTypography variant="bodyLight">
            Experience Private Connections: Whether you’re in the mood for a flirty conversation or a more intimate horny girl video chat,
            FlirtBate lets you tailor every moment to your liking.
          </HowVideoChatWorksTypography>
        </HowChatWorksTableBox>
      </HowChatWorksInnerBox>
    </HowChatWorksMainContainer>
  </HomeMainContainer>
);

export default HowChatWorks;
