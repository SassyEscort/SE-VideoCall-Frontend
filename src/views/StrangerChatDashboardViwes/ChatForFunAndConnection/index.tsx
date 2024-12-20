'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FormattedMessage } from 'react-intl';
import { WhySexChatInnerContainer, WhySexChatSubTextStyledBox } from 'views/SexChatDashboardViews/WhySexChatView/WhySexChat.styled';
import {
  ChatForFunAndConnectionContainer,
  ChatForFunAndConnectionDescriptionSubTitleTypography,
  ChatForFunAndConnectionDescriptionTitleTypography,
  ChatForFunAndConnectionInfoContainer,
  ChatForFunAndConnectionInfoMainContainer,
  ChatForFunAndConnectionMainContainer,
  ChatForFunAndConnectionSubTitleTypography,
  ChatForFunAndConnectionTitleTypography,
  LightCirclesBox,
  PinkLightCirclesBox
} from './ChatForFunAndConnection.styled';

const ChatForFunAndConnection = () => (
  <ChatForFunAndConnectionMainContainer>
    <ChatForFunAndConnectionContainer>
      <WhySexChatInnerContainer>
        <ChatForFunAndConnectionTitleTypography variant="h2">
          <FormattedMessage id="RandomCamChatForFun" />
        </ChatForFunAndConnectionTitleTypography>
      </WhySexChatInnerContainer>
      <WhySexChatSubTextStyledBox>
        <ChatForFunAndConnectionSubTitleTypography variant="h6">
          <FormattedMessage id="LookingForAFunWayToTalkToStrangers" />
        </ChatForFunAndConnectionSubTitleTypography>
      </WhySexChatSubTextStyledBox>
    </ChatForFunAndConnectionContainer>

    <Box position="relative">
      <Box
        component="img"
        src="/images/camtocamDashboard/camConnectLevel.png"
        width="100%"
        height="48px"
        position="absolute"
        sx={{ zIndex: -1 }}
        alt="connect-level"
      />
      <LightCirclesBox />
      <PinkLightCirclesBox />
      <Box sx={{ mt: '8px', color: 'white.main' }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <ChatForFunAndConnectionInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/Video.png" width="32px" height="100%" alt="video" />
              <ChatForFunAndConnectionInfoContainer>
                <ChatForFunAndConnectionDescriptionTitleTypography variant="h4">
                  <FormattedMessage id="PersonalizedChats" />
                </ChatForFunAndConnectionDescriptionTitleTypography>
                <ChatForFunAndConnectionDescriptionSubTitleTypography variant="h6">
                  <FormattedMessage id="MeetStrangersBasedOn" />
                </ChatForFunAndConnectionDescriptionSubTitleTypography>
              </ChatForFunAndConnectionInfoContainer>
            </ChatForFunAndConnectionInfoMainContainer>
          </Grid>
          <Grid item xs={4}>
            <ChatForFunAndConnectionInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/Private.png" width="26px" height="26px" alt="private" />
              <ChatForFunAndConnectionInfoContainer>
                <ChatForFunAndConnectionDescriptionTitleTypography variant="h4">
                  <FormattedMessage id="ExcitingEncounters" />
                </ChatForFunAndConnectionDescriptionTitleTypography>
                <ChatForFunAndConnectionDescriptionSubTitleTypography variant="h6">
                  <FormattedMessage id="EveryStrangerCamChatIsDifferent" />
                </ChatForFunAndConnectionDescriptionSubTitleTypography>
              </ChatForFunAndConnectionInfoContainer>
            </ChatForFunAndConnectionInfoMainContainer>
          </Grid>
          <Grid item xs={4}>
            <ChatForFunAndConnectionInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/People.png" width="32px" height="100%" alt="people" />
              <ChatForFunAndConnectionInfoContainer>
                <ChatForFunAndConnectionDescriptionTitleTypography variant="h4">
                  <FormattedMessage id="StayAnonymous" />
                </ChatForFunAndConnectionDescriptionTitleTypography>
                <ChatForFunAndConnectionDescriptionSubTitleTypography variant="h6">
                  <FormattedMessage id="KeepYourIdentityPrivate" />
                </ChatForFunAndConnectionDescriptionSubTitleTypography>
              </ChatForFunAndConnectionInfoContainer>
            </ChatForFunAndConnectionInfoMainContainer>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </ChatForFunAndConnectionMainContainer>
);

export default ChatForFunAndConnection;
