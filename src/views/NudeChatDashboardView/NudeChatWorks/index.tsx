'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FormattedMessage } from 'react-intl';
import { WhySexChatInnerContainer, WhySexChatSubTextStyledBox } from 'views/SexChatDashboardViews/WhySexChatView/WhySexChat.styled';
import {
  LightCirclesBox,
  NudeChatWorksContainer,
  NudeChatWorksDescriptionSubTitleTypography,
  NudeChatWorksDescriptionTitleTypography,
  NudeChatWorksInfoContainer,
  NudeChatWorksInfoMainContainer,
  NudeChatWorksMainContainer,
  NudeChatWorksSubTitleTypography,
  NudeChatWorksSubTitleTypographyContainer,
  NudeChatWorksTitleTypography,
  PinkLightCirclesBox
} from './NudeChatWorks.styled';

const NudeChatWorks = () => (
  <NudeChatWorksMainContainer>
    <NudeChatWorksContainer>
      <WhySexChatInnerContainer>
        <NudeChatWorksTitleTypography variant="h2">
          <FormattedMessage id="HowFlirtBate’sNudeChatWorks" />
        </NudeChatWorksTitleTypography>
      </WhySexChatInnerContainer>
      <WhySexChatSubTextStyledBox>
        <NudeChatWorksSubTitleTypography variant="h4">
          <FormattedMessage id="BrowseModelss" />
        </NudeChatWorksSubTitleTypography>
        <NudeChatWorksSubTitleTypographyContainer variant="h4">
          <FormattedMessage id="ExploreOurListOfFreeNudeWebcam" />
        </NudeChatWorksSubTitleTypographyContainer>
      </WhySexChatSubTextStyledBox>
    </NudeChatWorksContainer>

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
            <NudeChatWorksInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/Video.png" width="32px" height="100%" />
              <NudeChatWorksInfoContainer>
                <NudeChatWorksDescriptionTitleTypography variant="h4">
                  <FormattedMessage id="ChooseYourExperience" />
                </NudeChatWorksDescriptionTitleTypography>
                <NudeChatWorksDescriptionSubTitleTypography variant="h6">
                  <FormattedMessage id="OnceYou’veFoundThePerfectModel" />
                </NudeChatWorksDescriptionSubTitleTypography>
              </NudeChatWorksInfoContainer>
            </NudeChatWorksInfoMainContainer>
          </Grid>
          <Grid item xs={4}>
            <NudeChatWorksInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/Private.png" width="26px" height="26px" />
              <NudeChatWorksInfoContainer>
                <NudeChatWorksDescriptionTitleTypography variant="h4">
                  <FormattedMessage id="Enjoy1On1VideoChat" />
                </NudeChatWorksDescriptionTitleTypography>
                <NudeChatWorksDescriptionSubTitleTypography variant="h6">
                  <FormattedMessage id="StartYourPersonalAdultVideoChat" />
                </NudeChatWorksDescriptionSubTitleTypography>
              </NudeChatWorksInfoContainer>
            </NudeChatWorksInfoMainContainer>
          </Grid>
          <Grid item xs={4}>
            <NudeChatWorksInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/People.png" width="32px" height="100%" />
              <NudeChatWorksInfoContainer>
                <NudeChatWorksDescriptionTitleTypography variant="h4">
                  <FormattedMessage id="PayAsYouGo" />
                </NudeChatWorksDescriptionTitleTypography>
                <NudeChatWorksDescriptionSubTitleTypography variant="h6">
                  <FormattedMessage id="FlirtBate’sCreditsSystemAllowsYou" />
                </NudeChatWorksDescriptionSubTitleTypography>
              </NudeChatWorksInfoContainer>
            </NudeChatWorksInfoMainContainer>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </NudeChatWorksMainContainer>
);

export default NudeChatWorks;
