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

const CamConnectinonLevel = () => (
  <CamConnectinonLevelMainContainer>
    <CamConnectionContainer>
      <CamChooseModalInnerContainer>
        <CamConnectionTitleTypography>
          <FormattedMessage id="LiveCamtoCamANew" />
        </CamConnectionTitleTypography>
        <CamConnectionTitleStyledBox>
          <CamConnectionTitleTypography>
            <FormattedMessage id="LevelOf" />
          </CamConnectionTitleTypography>
          <CamConnectinonLevelRotateChipContainer>
            <CamConnectionTitleTypography>
              <FormattedMessage id="Connection" />
            </CamConnectionTitleTypography>
          </CamConnectinonLevelRotateChipContainer>
        </CamConnectionTitleStyledBox>
      </CamChooseModalInnerContainer>
      <CamChooseModalSubTextStyledBox>
        <CamConnectionSubTitleTypography>
          <FormattedMessage id="ExperienceTheThrill" />
        </CamConnectionSubTitleTypography>
        <CamConnectionSubTitleTypography>
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
      />
      <LightCirclesBox />
      <PinkLightCirclesBox />
      <Box sx={{ mt: '8px', color: 'white.main' }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <CamConnectinonInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/Video.svg" width="100%" height="32px" />
              <CamConnectinonInfoContainer>
                <CamConnectionDescriptionTitleTypography>
                  <FormattedMessage id="INTERACTIVEVIDEO" />
                </CamConnectionDescriptionTitleTypography>
                <CamConnectionDescriptionSubTitleTypography>
                  <FormattedMessage id="EngageInLive" />
                </CamConnectionDescriptionSubTitleTypography>
              </CamConnectinonInfoContainer>
            </CamConnectinonInfoMainContainer>
          </Grid>
          <Grid item xs={4}>
            <CamConnectinonInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/People.svg" width="100%" height="32px" />
              <CamConnectinonInfoContainer>
                <CamConnectionDescriptionTitleTypography>
                  <FormattedMessage id="PrivateAndPersonalized" />
                </CamConnectionDescriptionTitleTypography>
                <CamConnectionDescriptionSubTitleTypography>
                  <FormattedMessage id="EverySessionIsTailored" />
                </CamConnectionDescriptionSubTitleTypography>
              </CamConnectinonInfoContainer>
            </CamConnectinonInfoMainContainer>
          </Grid>
          <Grid item xs={4}>
            <CamConnectinonInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/Private.svg" width="100%" height="32px" />
              <CamConnectinonInfoContainer>
                <CamConnectionDescriptionTitleTypography>
                  <FormattedMessage id="RealPeopleRealMoments" />
                </CamConnectionDescriptionTitleTypography>
                <CamConnectionDescriptionSubTitleTypography>
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

export default CamConnectinonLevel;
