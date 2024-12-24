'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FormattedMessage } from 'react-intl';
import { WhySexChatInnerContainer, WhySexChatSubTextStyledBox } from 'views/SexChatDashboardViews/WhySexChatView/WhySexChat.styled';
import {
  MatureAndConnectionContainer,
  MatureAndConnectionDescriptionSubTitleTypography,
  MatureAndConnectionDescriptionTitleTypography,
  MatureAndConnectionInfoContainer,
  MatureAndConnectionInfoMainContainer,
  MatureAndConnectionMainContainer,
  MatureAndConnectionSubTitleTypography,
  MatureAndConnectionTitleTypography,
  LightCirclesBox,
  PinkLightCirclesBox
} from './MatureChatForFunAndConnection.styled';

const MatureChatForFunAndConnection = () => (
  <MatureAndConnectionMainContainer>
    <MatureAndConnectionContainer>
      <WhySexChatInnerContainer>
        <MatureAndConnectionTitleTypography variant="h2">
          <FormattedMessage id="RandomMatureForFun" />
        </MatureAndConnectionTitleTypography>
      </WhySexChatInnerContainer>
      <WhySexChatSubTextStyledBox>
        <MatureAndConnectionSubTitleTypography variant="h6">
          <FormattedMessage id="LookingForAFunWayToTalkToMature" />
        </MatureAndConnectionSubTitleTypography>
      </WhySexChatSubTextStyledBox>
    </MatureAndConnectionContainer>

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
            <MatureAndConnectionInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/Video.png" width="32px" height="100%" alt="video" />
              <MatureAndConnectionInfoContainer>
                <MatureAndConnectionDescriptionTitleTypography variant="h4">
                  <FormattedMessage id="PersonalizedChats" />
                </MatureAndConnectionDescriptionTitleTypography>
                <MatureAndConnectionDescriptionSubTitleTypography variant="h6">
                  <FormattedMessage id="MeetStrangersBasedOnMature" />
                </MatureAndConnectionDescriptionSubTitleTypography>
              </MatureAndConnectionInfoContainer>
            </MatureAndConnectionInfoMainContainer>
          </Grid>
          <Grid item xs={4}>
            <MatureAndConnectionInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/Private.png" width="26px" height="26px" alt="private" />
              <MatureAndConnectionInfoContainer>
                <MatureAndConnectionDescriptionTitleTypography variant="h4">
                  <FormattedMessage id="ExcitingEncounters" />
                </MatureAndConnectionDescriptionTitleTypography>
                <MatureAndConnectionDescriptionSubTitleTypography variant="h6">
                  <FormattedMessage id="EveryMatureChatIsDifferent" />
                </MatureAndConnectionDescriptionSubTitleTypography>
              </MatureAndConnectionInfoContainer>
            </MatureAndConnectionInfoMainContainer>
          </Grid>
          <Grid item xs={4}>
            <MatureAndConnectionInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/People.png" width="32px" height="100%" alt="people" />
              <MatureAndConnectionInfoContainer>
                <MatureAndConnectionDescriptionTitleTypography variant="h4">
                  <FormattedMessage id="StayAnonymous" />
                </MatureAndConnectionDescriptionTitleTypography>
                <MatureAndConnectionDescriptionSubTitleTypography variant="h6">
                  <FormattedMessage id="KeepYourIdentityPrivateMature" />
                </MatureAndConnectionDescriptionSubTitleTypography>
              </MatureAndConnectionInfoContainer>
            </MatureAndConnectionInfoMainContainer>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </MatureAndConnectionMainContainer>
);

export default MatureChatForFunAndConnection;
