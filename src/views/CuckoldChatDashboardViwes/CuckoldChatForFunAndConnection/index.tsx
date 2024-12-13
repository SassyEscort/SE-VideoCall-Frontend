'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FormattedMessage } from 'react-intl';
import { WhySexChatInnerContainer, WhySexChatSubTextStyledBox } from 'views/SexChatDashboardViews/WhySexChatView/WhySexChat.styled';
import {
  CuckoldAndConnectionContainer,
  CuckoldAndConnectionDescriptionSubTitleTypography,
  CuckoldAndConnectionDescriptionTitleTypography,
  CuckoldAndConnectionInfoContainer,
  CuckoldAndConnectionInfoMainContainer,
  CuckoldAndConnectionMainContainer,
  CuckoldAndConnectionSubTitleTypography,
  CuckoldAndConnectionTitleTypography,
  LightCirclesBox,
  PinkLightCirclesBox
} from './CuckoldChatForFunAndConnection.styled';

const CuckoldChatForFunAndConnection = () => (
  <CuckoldAndConnectionMainContainer>
    <CuckoldAndConnectionContainer>
      <WhySexChatInnerContainer>
        <CuckoldAndConnectionTitleTypography variant="h2">
          <FormattedMessage id="WhyFlirtBateIsTheBestCuck" />
        </CuckoldAndConnectionTitleTypography>
      </WhySexChatInnerContainer>
      <WhySexChatSubTextStyledBox>
        <CuckoldAndConnectionSubTitleTypography variant="h6">
          <FormattedMessage id="AtFlirtBateWeUnderstand" />
        </CuckoldAndConnectionSubTitleTypography>
      </WhySexChatSubTextStyledBox>
    </CuckoldAndConnectionContainer>

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
            <CuckoldAndConnectionInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/Video.png" width="32px" height="100%" />
              <CuckoldAndConnectionInfoContainer>
                <CuckoldAndConnectionDescriptionTitleTypography variant="h4">
                  <FormattedMessage id="PersonalizedChats" />
                </CuckoldAndConnectionDescriptionTitleTypography>
                <CuckoldAndConnectionDescriptionSubTitleTypography variant="h6">
                  <FormattedMessage id="MeetCuckBasedOn" />
                </CuckoldAndConnectionDescriptionSubTitleTypography>
              </CuckoldAndConnectionInfoContainer>
            </CuckoldAndConnectionInfoMainContainer>
          </Grid>
          <Grid item xs={4}>
            <CuckoldAndConnectionInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/Private.png" width="26px" height="26px" />
              <CuckoldAndConnectionInfoContainer>
                <CuckoldAndConnectionDescriptionTitleTypography variant="h4">
                  <FormattedMessage id="ExcitingEncounters" />
                </CuckoldAndConnectionDescriptionTitleTypography>
                <CuckoldAndConnectionDescriptionSubTitleTypography variant="h6">
                  <FormattedMessage id="EveryMatureCuckold" />
                </CuckoldAndConnectionDescriptionSubTitleTypography>
              </CuckoldAndConnectionInfoContainer>
            </CuckoldAndConnectionInfoMainContainer>
          </Grid>
          <Grid item xs={4}>
            <CuckoldAndConnectionInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/People.png" width="32px" height="100%" />
              <CuckoldAndConnectionInfoContainer>
                <CuckoldAndConnectionDescriptionTitleTypography variant="h4">
                  <FormattedMessage id="StayAnonymous" />
                </CuckoldAndConnectionDescriptionTitleTypography>
                <CuckoldAndConnectionDescriptionSubTitleTypography variant="h6">
                  <FormattedMessage id="KeepYourIdentityPrivateCuckold" />
                </CuckoldAndConnectionDescriptionSubTitleTypography>
              </CuckoldAndConnectionInfoContainer>
            </CuckoldAndConnectionInfoMainContainer>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </CuckoldAndConnectionMainContainer>
);

export default CuckoldChatForFunAndConnection;
