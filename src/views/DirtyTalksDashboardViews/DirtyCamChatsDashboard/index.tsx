'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FormattedMessage } from 'react-intl';
import {
  DirtyCamChartsMainContainer,
  DirtyCamChatsContainer,
  DirtyCamChatsDescriptionSubTitleTypography,
  DirtyCamChatsDescriptionTitleTypography,
  DirtyCamChatsInfoContainer,
  DirtyCamChatsInfoMainContainer,
  DirtyCamChatsSubTitleTypography,
  DirtyCamChatsSubTitleTypographyContainer,
  DirtyCamChatsTitleTypography,
  LightCirclesBox,
  PinkLightCirclesBox
} from './DirtyCamChatsDashboard.styled';
import { WhySexChatInnerContainer, WhySexChatSubTextStyledBox } from 'views/SexChatDashboardViews/WhySexChatView/WhySexChat.styled';

const DirtyCamChatsDashboard = () => (
  <DirtyCamChartsMainContainer>
    <DirtyCamChatsContainer>
      <WhySexChatInnerContainer>
        <DirtyCamChatsTitleTypography variant="h2">
          <FormattedMessage id="GetStartedWithFlirtBate’s" />
        </DirtyCamChatsTitleTypography>
      </WhySexChatInnerContainer>
      <WhySexChatSubTextStyledBox>
        <DirtyCamChatsSubTitleTypography variant="h4">
          <FormattedMessage id="CreateYourAccount" />
        </DirtyCamChatsSubTitleTypography>
        <DirtyCamChatsSubTitleTypographyContainer variant="h4">
          <FormattedMessage id="SignUpForFreeAndStart" />
        </DirtyCamChatsSubTitleTypographyContainer>
      </WhySexChatSubTextStyledBox>
    </DirtyCamChatsContainer>

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
            <DirtyCamChatsInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/Video.png" width="32px" height="100%" alt="video" />
              <DirtyCamChatsInfoContainer>
                <DirtyCamChatsDescriptionTitleTypography variant="h4">
                  <FormattedMessage id="ChooseYourModell" />
                </DirtyCamChatsDescriptionTitleTypography>
                <DirtyCamChatsDescriptionSubTitleTypography variant="h6">
                  <FormattedMessage id="ExploreProfilesAndPick" />
                </DirtyCamChatsDescriptionSubTitleTypography>
              </DirtyCamChatsInfoContainer>
            </DirtyCamChatsInfoMainContainer>
          </Grid>
          <Grid item xs={4}>
            <DirtyCamChatsInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/Private.png" width="26px" height="26px" alt="private" />
              <DirtyCamChatsInfoContainer>
                <DirtyCamChatsDescriptionTitleTypography variant="h4">
                  <FormattedMessage id="StartTheCall" />
                </DirtyCamChatsDescriptionTitleTypography>
                <DirtyCamChatsDescriptionSubTitleTypography variant="h6">
                  <FormattedMessage id="UseYourCreditsToInstantly" />
                </DirtyCamChatsDescriptionSubTitleTypography>
              </DirtyCamChatsInfoContainer>
            </DirtyCamChatsInfoMainContainer>
          </Grid>
          <Grid item xs={4}>
            <DirtyCamChatsInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/People.png" width="32px" height="100%" alt="people" />
              <DirtyCamChatsInfoContainer>
                <DirtyCamChatsDescriptionTitleTypography variant="h4">
                  <FormattedMessage id="StayInControl" />
                </DirtyCamChatsDescriptionTitleTypography>
                <DirtyCamChatsDescriptionSubTitleTypography variant="h6">
                  <FormattedMessage id="EnjoyFilthySexTalkAndSexy" />
                </DirtyCamChatsDescriptionSubTitleTypography>
              </DirtyCamChatsInfoContainer>
            </DirtyCamChatsInfoMainContainer>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </DirtyCamChartsMainContainer>
);

export default DirtyCamChatsDashboard;
