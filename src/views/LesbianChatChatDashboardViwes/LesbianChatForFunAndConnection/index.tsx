'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FormattedMessage } from 'react-intl';
import { WhySexChatInnerContainer, WhySexChatSubTextStyledBox } from 'views/SexChatDashboardViews/WhySexChatView/WhySexChat.styled';
import {
  LesbianAndConnectionContainer,
  LesbianAndConnectionDescriptionSubTitleTypography,
  LesbianAndConnectionDescriptionTitleTypography,
  LesbianAndConnectionInfoContainer,
  LesbianAndConnectionInfoMainContainer,
  LesbianAndConnectionMainContainer,
  LesbianAndConnectionSubTitleTypography,
  LesbianAndConnectionTitleTypography,
  LightCirclesBox,
  PinkLightCirclesBox
} from './LesbianChatForFunAndConnection.styled';

const LesbianChatForFunAndConnection = () => (
  <LesbianAndConnectionMainContainer>
    <LesbianAndConnectionContainer>
      <WhySexChatInnerContainer>
        <LesbianAndConnectionTitleTypography variant="h2">
          <FormattedMessage id="SafeAndSecureLesbian" />
        </LesbianAndConnectionTitleTypography>
      </WhySexChatInnerContainer>
      <WhySexChatSubTextStyledBox>
        <LesbianAndConnectionSubTitleTypography variant="h6">
          <FormattedMessage id="AtFlirtBateYourPrivacy" />
        </LesbianAndConnectionSubTitleTypography>
      </WhySexChatSubTextStyledBox>
    </LesbianAndConnectionContainer>

    <Box position="relative">
      <Box
        component="img"
        src="/images/camtocamDashboard/camConnectLevel.png"
        width="100%"
        height="48px"
        position="absolute"
        sx={{ zIndex: -1 }}
      />
      <LightCirclesBox />
      <PinkLightCirclesBox />
      <Box sx={{ mt: '8px', color: 'white.main' }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <LesbianAndConnectionInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/Video.png" width="32px" height="100%" />
              <LesbianAndConnectionInfoContainer>
                <LesbianAndConnectionDescriptionTitleTypography variant="h4">
                  <FormattedMessage id="EncryptedConversations" />
                </LesbianAndConnectionDescriptionTitleTypography>
                <LesbianAndConnectionDescriptionSubTitleTypography variant="h6">
                  <FormattedMessage id="AllLesbianWebcamChats" />
                </LesbianAndConnectionDescriptionSubTitleTypography>
              </LesbianAndConnectionInfoContainer>
            </LesbianAndConnectionInfoMainContainer>
          </Grid>
          <Grid item xs={4}>
            <LesbianAndConnectionInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/Private.png" width="26px" height="26px" />
              <LesbianAndConnectionInfoContainer>
                <LesbianAndConnectionDescriptionTitleTypography variant="h4">
                  <FormattedMessage id="AnonymousChatting" />
                </LesbianAndConnectionDescriptionTitleTypography>
                <LesbianAndConnectionDescriptionSubTitleTypography variant="h6">
                  <FormattedMessage id="StayDiscreetAndEnjoy" />
                </LesbianAndConnectionDescriptionSubTitleTypography>
              </LesbianAndConnectionInfoContainer>
            </LesbianAndConnectionInfoMainContainer>
          </Grid>
          <Grid item xs={4}>
            <LesbianAndConnectionInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/People.png" width="32px" height="100%" />
              <LesbianAndConnectionInfoContainer>
                <LesbianAndConnectionDescriptionTitleTypography variant="h4">
                  <FormattedMessage id="CompleteControl" />
                </LesbianAndConnectionDescriptionTitleTypography>
                <LesbianAndConnectionDescriptionSubTitleTypography variant="h6">
                  <FormattedMessage id="YouHaveFullControlOver" />
                </LesbianAndConnectionDescriptionSubTitleTypography>
              </LesbianAndConnectionInfoContainer>
            </LesbianAndConnectionInfoMainContainer>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </LesbianAndConnectionMainContainer>
);

export default LesbianChatForFunAndConnection;
