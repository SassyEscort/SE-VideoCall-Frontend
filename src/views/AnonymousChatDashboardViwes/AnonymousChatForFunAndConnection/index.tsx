'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FormattedMessage } from 'react-intl';
import { WhySexChatInnerContainer, WhySexChatSubTextStyledBox } from 'views/SexChatDashboardViews/WhySexChatView/WhySexChat.styled';
import {
  AnonymousAndConnectionContainer,
  AnonymousAndConnectionDescriptionSubTitleTypography,
  AnonymousAndConnectionDescriptionTitleTypography,
  AnonymousAndConnectionInfoContainer,
  AnonymousAndConnectionInfoMainContainer,
  AnonymousAndConnectionMainContainer,
  AnonymousAndConnectionSubTitleTypography,
  AnonymousAndConnectionTitleTypography,
  LightCirclesBox,
  PinkLightCirclesBox
} from './AnonymousChatForFunAndConnection.styled';

const AnonymousChatForFunAndConnection = () => (
  <AnonymousAndConnectionMainContainer>
    <AnonymousAndConnectionContainer>
      <WhySexChatInnerContainer>
        <AnonymousAndConnectionTitleTypography variant="h2">
          <FormattedMessage id="WhyChooseFlirtBateForAnonymous" />
        </AnonymousAndConnectionTitleTypography>
      </WhySexChatInnerContainer>
      <WhySexChatSubTextStyledBox>
        <AnonymousAndConnectionSubTitleTypography variant="h6">
          <FormattedMessage id="WithFlirtBateYouDonthaveTo" />
        </AnonymousAndConnectionSubTitleTypography>
      </WhySexChatSubTextStyledBox>
    </AnonymousAndConnectionContainer>

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
            <AnonymousAndConnectionInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/Video.png" width="32px" height="100%" alt="video" />
              <AnonymousAndConnectionInfoContainer>
                <AnonymousAndConnectionDescriptionTitleTypography variant="h4">
                  <FormattedMessage id="HideYourLocation" />
                </AnonymousAndConnectionDescriptionTitleTypography>
                <AnonymousAndConnectionDescriptionSubTitleTypography variant="h6">
                  <FormattedMessage id="KeepYourCityOrCountry" />
                </AnonymousAndConnectionDescriptionSubTitleTypography>
              </AnonymousAndConnectionInfoContainer>
            </AnonymousAndConnectionInfoMainContainer>
          </Grid>
          <Grid item xs={4}>
            <AnonymousAndConnectionInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/Private.png" width="26px" height="26px" alt="private" />
              <AnonymousAndConnectionInfoContainer>
                <AnonymousAndConnectionDescriptionTitleTypography variant="h4">
                  <FormattedMessage id="FacePrivacyOptions" />
                </AnonymousAndConnectionDescriptionTitleTypography>
                <AnonymousAndConnectionDescriptionSubTitleTypography variant="h6">
                  <FormattedMessage id="IfDesiredModelsCan" />
                </AnonymousAndConnectionDescriptionSubTitleTypography>
              </AnonymousAndConnectionInfoContainer>
            </AnonymousAndConnectionInfoMainContainer>
          </Grid>
          <Grid item xs={4}>
            <AnonymousAndConnectionInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/People.png" width="32px" height="100%" alt="people" />
              <AnonymousAndConnectionInfoContainer>
                <AnonymousAndConnectionDescriptionTitleTypography variant="h4">
                  <FormattedMessage id="PrivateSecureSpace" />
                </AnonymousAndConnectionDescriptionTitleTypography>
                <AnonymousAndConnectionDescriptionSubTitleTypography variant="h6">
                  <FormattedMessage id="AllVideoCallsTakePlaceInSecure" />
                </AnonymousAndConnectionDescriptionSubTitleTypography>
              </AnonymousAndConnectionInfoContainer>
            </AnonymousAndConnectionInfoMainContainer>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </AnonymousAndConnectionMainContainer>
);

export default AnonymousChatForFunAndConnection;
