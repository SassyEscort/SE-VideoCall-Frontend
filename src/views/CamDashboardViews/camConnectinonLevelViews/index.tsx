import React from 'react';
import Typography from '@mui/material/Typography';
import {
  CamConnectinonLevelMainContainer,
  CamConnectinonLevelRotateChipContainer,
  LightCirclesBox,
  PinkLightCirclesBox
} from './camConnectinonLevel.styled';
import UINewTypography from 'components/UIComponents/UINewTypography';
import {
  CamChooseModalContainer,
  CamChooseModalInnerContainer,
  CamChooseModalSubTextStyledBox,
  CamChooseModalTitleStyledBox
} from '../camChooseModalViews/chooseModal.styled';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const CamConnectinonLevel = () => (
  <CamConnectinonLevelMainContainer>
    <CamChooseModalContainer>
      <CamChooseModalInnerContainer>
        <Typography variant="h1">Live Cam to Cam – A New</Typography>
        <CamChooseModalTitleStyledBox>
          <Typography variant="h1">Level of</Typography>
          <CamConnectinonLevelRotateChipContainer>
            <Typography variant="h1">Connection❤️💋</Typography>
          </CamConnectinonLevelRotateChipContainer>
        </CamChooseModalTitleStyledBox>
      </CamChooseModalInnerContainer>
      <CamChooseModalSubTextStyledBox>
        <UINewTypography variant="subtitle">
          Experience the thrill of real-time interaction with FlirtBate’s cam match feature, where every cam to cam session is private,
          personalized, and secure.
        </UINewTypography>
        <UINewTypography variant="subtitle">
          This isn’t just a call—this is an immersive adult webcam encounter with real models ready to explore your desires. Whether you’re
          looking for a soft flirtation or steamy cam to cam nude sessions, you’ll find exactly what you&apos;re searching for.
        </UINewTypography>
      </CamChooseModalSubTextStyledBox>
    </CamChooseModalContainer>
    <Box position="relative">
      <Box
        component="img"
        src="/images/camtocamDashboard/camConnectLevel.png"
        width="100%"
        height="48px"
        position={'absolute'}
        sx={{ zIndex: -1 }}
      />

      <LightCirclesBox />
      <PinkLightCirclesBox />

      <Box sx={{ mt: '8px', color: '#fff' }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '55px' }}>
              <Box component="img" src="/images/camtocamDashboard/Video.svg" width="100%" height="32px" />
              <Box sx={{ width: '100%', maxWidth: '361px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <UINewTypography variant="newTitle">INTERACTIVE VIDEO CALLS</UINewTypography>
                <UINewTypography variant="body1">Engage in live, two-way video chats with models.</UINewTypography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '55px' }}>
              <Box component="img" src="/images/camtocamDashboard/People.svg" width="100%" height="32px" />
              <Box sx={{ width: '100%', maxWidth: '361px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <UINewTypography variant="newTitle">PRIVATE AND PERSONALIZED</UINewTypography>
                <UINewTypography variant="body1">Every session is tailored to your preferences, making each call unique.</UINewTypography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '55px' }}>
              <Box component="img" src="/images/camtocamDashboard/Private.svg" width="100%" height="32px" />
              <Box sx={{ width: '100%', maxWidth: '361px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <UINewTypography variant="newTitle">REAL PEOPLE, REAL MOMENTS</UINewTypography>
                <UINewTypography variant="body1">You choose the model you want to interact with—no random matching.</UINewTypography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </CamConnectinonLevelMainContainer>
);

export default CamConnectinonLevel;
