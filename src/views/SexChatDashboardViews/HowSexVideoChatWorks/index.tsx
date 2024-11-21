import Box from '@mui/material/Box';
import React from 'react';
import { HowChatWorksInnerBox, HowChatWorksMainContainer, HowChatWorksTableBox, SexChatTypography } from './HowSexVideoChatWorks.styled';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { SexyChatAtFingertipsTitleTypography } from '../SexyChatAtFingertips/SexyChatAtFingertips.styled';

const HowSexVideoChatWorks = () => (
  <HomeMainContainer>
    <HowChatWorksMainContainer>
      <Box>
        <SexyChatAtFingertipsTitleTypography>How FlirtBate’s Sexy Video Chat Works</SexyChatAtFingertipsTitleTypography>
      </Box>
      <HowChatWorksInnerBox>
        <HowChatWorksTableBox>
          <SexChatTypography variant="bodyLight">🍑</SexChatTypography>
          <SexChatTypography variant="bodyLight">
            Getting started with FlirtBate is easy. Simply browse through the profiles of available models, pick the one that excites you,
            and initiate a one on one sex chat. You can see live previews, read model descriptions, and choose the perfect companion for
            your sexy chat session.
          </SexChatTypography>
        </HowChatWorksTableBox>
        <HowChatWorksTableBox>
          <SexChatTypography variant="bodyLight">🍑</SexChatTypography>
          <SexChatTypography variant="bodyLight">
            Browse Models: Explore hundreds of live models ready for an intimate, real-time dirty video chat.
          </SexChatTypography>
        </HowChatWorksTableBox>
        <HowChatWorksTableBox>
          <SexChatTypography variant="bodyLight">🍑</SexChatTypography>
          <SexChatTypography variant="bodyLight">
            Start a Private Chat: Once you find the model who catches your eye, start your sexy cam session.{' '}
          </SexChatTypography>
        </HowChatWorksTableBox>
        <HowChatWorksTableBox>
          <SexChatTypography variant="bodyLight">🍑</SexChatTypography>
          <SexChatTypography variant="bodyLight">
            Enjoy 1 on 1 Conversations: In a free sexting online experience, you can get to know the model through live chat before diving
            into a private sex video call.
          </SexChatTypography>
        </HowChatWorksTableBox>
      </HowChatWorksInnerBox>
    </HowChatWorksMainContainer>
  </HomeMainContainer>
);

export default HowSexVideoChatWorks;
