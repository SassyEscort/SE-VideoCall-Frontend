'use client';

import {
  CamConnectinonInfoContainer,
  CamConnectinonInfoMainContainer,
  CamConnectinonLevelMainContainer,
  CamConnectinonLevelRotateChipContainer,
  CamConnectionContainer,
  CamConnectionDescriptionSubTitleTypography,
  CamConnectionDescriptionTitleTypography,
  CamConnectionSubTitleTypography,
  CamConnectionTitleStyledBox,
  CamConnectionTitleTypography,
  LightCirclesBox,
  PinkLightCirclesBox
} from './camConnectinonLevel.styled';
import { CamChooseModalInnerContainer, CamChooseModalSubTextStyledBox } from '../camChooseModalViews/chooseModal.styled';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FormattedMessage } from 'react-intl';

const CamConnectionLevel = () => (
  <CamConnectinonLevelMainContainer>
    <CamConnectionContainer>
      <CamChooseModalInnerContainer>
        <CamConnectionTitleTypography variant="h2">
          <FormattedMessage id="LiveCamtoCamANew" />
        </CamConnectionTitleTypography>
        <CamConnectionTitleStyledBox>
          <CamConnectionTitleTypography variant="h2">
            <FormattedMessage id="LevelOf" />
          </CamConnectionTitleTypography>
          <CamConnectinonLevelRotateChipContainer>
            <CamConnectionTitleTypography variant="h2">
              <FormattedMessage id="Connection" />
            </CamConnectionTitleTypography>
          </CamConnectinonLevelRotateChipContainer>
        </CamConnectionTitleStyledBox>
      </CamChooseModalInnerContainer>
      <CamChooseModalSubTextStyledBox>
        <CamConnectionSubTitleTypography variant="h6">
          <FormattedMessage id="ExperienceTheThrill" />
        </CamConnectionSubTitleTypography>
        <CamConnectionSubTitleTypography variant="h6">
          <FormattedMessage id="ThisIsnotJustACall" />
        </CamConnectionSubTitleTypography>
      </CamChooseModalSubTextStyledBox>
    </CamConnectionContainer>

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
            <CamConnectinonInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/Video.png" width="32px" height="100%" alt="video" />
              <CamConnectinonInfoContainer>
                <CamConnectionDescriptionTitleTypography variant="h4">
                  <FormattedMessage id="INTERACTIVEVIDEO" />
                </CamConnectionDescriptionTitleTypography>
                <CamConnectionDescriptionSubTitleTypography variant="h6">
                  <FormattedMessage id="EngageInLive" />
                </CamConnectionDescriptionSubTitleTypography>
              </CamConnectinonInfoContainer>
            </CamConnectinonInfoMainContainer>
          </Grid>
          <Grid item xs={4}>
            <CamConnectinonInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/Private.png" width="26px" height="26px" alt="private" />
              <CamConnectinonInfoContainer>
                <CamConnectionDescriptionTitleTypography variant="h4">
                  <FormattedMessage id="PrivateAndPersonalized" />
                </CamConnectionDescriptionTitleTypography>
                <CamConnectionDescriptionSubTitleTypography variant="h6">
                  <FormattedMessage id="EverySessionIsTailored" />
                </CamConnectionDescriptionSubTitleTypography>
              </CamConnectinonInfoContainer>
            </CamConnectinonInfoMainContainer>
          </Grid>
          <Grid item xs={4}>
            <CamConnectinonInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/People.png" width="32px" height="100%" alt="people" />
              <CamConnectinonInfoContainer>
                <CamConnectionDescriptionTitleTypography variant="h4">
                  <FormattedMessage id="RealPeopleRealMoments" />
                </CamConnectionDescriptionTitleTypography>
                <CamConnectionDescriptionSubTitleTypography variant="h6">
                  <FormattedMessage id="ChooseYourModelRandomMatching" />
                </CamConnectionDescriptionSubTitleTypography>
              </CamConnectinonInfoContainer>
            </CamConnectinonInfoMainContainer>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </CamConnectinonLevelMainContainer>
);

export default CamConnectionLevel;
