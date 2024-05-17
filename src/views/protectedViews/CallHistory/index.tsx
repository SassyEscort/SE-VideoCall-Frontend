import { Divider, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import React from 'react';
import {
  CallHistoryMainContainer,
  CallHistoryText,
  SecondContainer,
  SecondSubContainer,
  SecondSubFirstBox,
  SecondSubFirstPartBox,
  SecondSubFirstPartSecondBox,
  SecondSubFirstPartSecondBoxFirstText,
  SecondSubFirstPartSecondBoxSecText,
  SecondSubFirstPartThiredBox,
  SecondSubFirstPartThiredBoxText,
  SecondSubTextMainContainer,
  WorkerImg
} from './CallHistory.styled';
import UINewTypography from 'components/UIComponents/UINewTypography';
import MainLayoutNav from '../protectedLayout';

const CallHistory = () => {
  return (
    <MainLayoutNav variant={'worker'} enlargedFooter={true}>
      <CallHistoryMainContainer>
        <CallHistoryText>
          <Typography variant="h2" color="text.secondary">
            Calls History
          </Typography>
        </CallHistoryText>
        <SecondContainer>
          <SecondSubContainer>
            <SecondSubTextMainContainer>
              <SecondSubFirstBox>
                <SecondSubFirstPartBox>
                  <WorkerImg src="/images/workercards/workercard-img.jpeg" />
                  <SecondSubFirstPartSecondBox>
                    <SecondSubFirstPartSecondBoxFirstText>
                      <UINewTypography variant="h6" color="white.main" whiteSpace="nowrap">
                        Kat Winter
                      </UINewTypography>
                      <SecondSubFirstPartSecondBoxSecText>
                        <UINewTypography variant="SubtitleSmallMedium" color="text.primary">
                          24
                        </UINewTypography>
                        <Divider orientation="vertical" flexItem sx={{ borderColor: '#B7B5B9', lineHeight: '120%' }} />
                        <UINewTypography variant="SubtitleSmallMedium" color="#B7B5B9">
                          English, Spanish
                        </UINewTypography>
                      </SecondSubFirstPartSecondBoxSecText>
                    </SecondSubFirstPartSecondBoxFirstText>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                      <Box
                        component="img"
                        src="/images/workercards/dollar-img.png"
                        sx={{
                          width: '100%',
                          maxWidth: '16px',
                          height: '100%',
                          maxHeight: '16px'
                        }}
                      />
                      <UINewTypography variant="captionLargeBold" color="#E9E8EB">
                        20 credits/hr
                      </UINewTypography>
                    </Box>
                  </SecondSubFirstPartSecondBox>
                </SecondSubFirstPartBox>
                <SecondSubFirstPartThiredBox>
                  <UINewTypography variant="buttonLargeMenu" color="text.primary">
                    Duration: 30 mins
                  </UINewTypography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1.5 }}>
                    <UINewTypography variant="buttonLargeMenu" color="text.primary" whiteSpace="nowrap">
                      Credits used:
                    </UINewTypography>
                    <SecondSubFirstPartThiredBoxText>
                      <Box
                        component="img"
                        src="/images/workercards/dollar-img.png"
                        sx={{
                          width: '100%',
                          maxWidth: '16px',
                          height: '100%',
                          maxHeight: '16px'
                        }}
                      />
                      <UINewTypography variant="buttonLargeMenu" color="text.primary">
                        35
                      </UINewTypography>
                    </SecondSubFirstPartThiredBoxText>
                  </Box>
                </SecondSubFirstPartThiredBox>
              </SecondSubFirstBox>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '12px' }}>
                <UIThemeShadowButton variant="contained" sx={{ width: '100%', maxWidth: { xs: '363px', sm: '173px' } }}>
                  <Box sx={{ display: 'flex', gap: 1.25 }}>
                    <Box
                      component="img"
                      src="/images/home-connect-instantly-img.png"
                      sx={{
                        width: '100%',
                        maxWidth: '24px',
                        height: '100%',
                        maxHeight: '24px'
                      }}
                    />
                    <Box sx={{ whiteSpace: 'nowrap' }}>
                      <UINewTypography variant="bodySemiBold" color="white.main">
                        Call again
                      </UINewTypography>
                    </Box>
                  </Box>
                </UIThemeShadowButton>
              </Box>
            </SecondSubTextMainContainer>
          </SecondSubContainer>
          <Divider
            orientation="horizontal"
            flexItem
            sx={{ border: '1px solid', borderColor: 'primary.700', width: '100%', maxWidth: '929px' }}
          />
        </SecondContainer>
      </CallHistoryMainContainer>
    </MainLayoutNav>
  );
};

export default CallHistory;
