import { Divider, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import React from 'react';
import {
  CallHistoryMainContainer,
  CallHistoryName,
  CallHistoryText,
  ImgBoxContainer,
  SecImgBoxContainer,
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
import MainLayoutNav from '../protectedLayout';
import UINewTypography from 'components/UIComponents/UINewTypography';
import theme from 'themes/theme';

const CallHistory = () => {
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmDown = useMediaQuery(theme.breakpoints.down(330));
  return (
    <MainLayoutNav variant={'worker'} enlargedFooter={true}>
      <CallHistoryMainContainer>
        <CallHistoryText>
          <UINewTypography variant="h2" color="text.secondary">
            Calls History
          </UINewTypography>
        </CallHistoryText>
        <SecondContainer>
          <SecondSubContainer>
            <SecondSubTextMainContainer>
              <SecondSubFirstBox>
                <SecondSubFirstPartBox>
                  <WorkerImg src="/images/workercards/workercard-img.jpeg" />
                  <SecondSubFirstPartSecondBox>
                    <SecondSubFirstPartSecondBoxFirstText>
                      <CallHistoryName variant="h6" color="white.main" whiteSpace="nowrap">
                        Kat Winter
                      </CallHistoryName>
                      <SecondSubFirstPartSecondBoxSecText>
                        <UINewTypography variant="SubtitleSmallMedium" color="text.primary" lineHeight="120%">
                          24
                        </UINewTypography>
                        <Divider orientation="vertical" flexItem sx={{ borderColor: '#B7B5B9' }} />
                        <UINewTypography variant="SubtitleSmallMedium" color="#B7B5B9" lineHeight="120%">
                          English, Spanish
                        </UINewTypography>
                      </SecondSubFirstPartSecondBoxSecText>
                    </SecondSubFirstPartSecondBoxFirstText>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, marginTop: isSm ? '8px' : 'auto' }}>
                      <ImgBoxContainer src="/images/workercards/dollar-img.png" />
                      <UINewTypography variant="captionLargeBold" color="#E9E8EB">
                        20 credits/hr
                      </UINewTypography>
                    </Box>
                  </SecondSubFirstPartSecondBox>
                </SecondSubFirstPartBox>
                {!isSmDown && (
                  <SecondSubFirstPartThiredBox marginRight={{ sm: '32px' }}>
                    <UINewTypography variant="buttonLargeMenu" color="text.primary">
                      Duration: 30 mins
                    </UINewTypography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1.5 }}>
                      <UINewTypography variant="buttonLargeMenu" color="text.primary" whiteSpace="nowrap">
                        Credits used:
                      </UINewTypography>
                      <SecondSubFirstPartThiredBoxText>
                        <ImgBoxContainer src="/images/workercards/dollar-img.png" />
                        <UINewTypography variant="buttonLargeMenu" color="text.primary">
                          35
                        </UINewTypography>
                      </SecondSubFirstPartThiredBoxText>
                    </Box>
                  </SecondSubFirstPartThiredBox>
                )}
              </SecondSubFirstBox>
              {isSmDown && (
                <SecondSubFirstPartThiredBox gap="8px !important">
                  <UINewTypography variant="buttonLargeMenu" color="text.primary">
                    Duration: 30 mins
                  </UINewTypography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1.5 }}>
                    <UINewTypography variant="buttonLargeMenu" color="text.primary" whiteSpace="nowrap">
                      Credits used:
                    </UINewTypography>
                    <SecondSubFirstPartThiredBoxText>
                      <ImgBoxContainer src="/images/workercards/dollar-img.png" />
                      <UINewTypography variant="buttonLargeMenu" color="text.primary">
                        35
                      </UINewTypography>
                    </SecondSubFirstPartThiredBoxText>
                  </Box>
                </SecondSubFirstPartThiredBox>
              )}
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '12px' }}>
                <UIThemeShadowButton variant="contained" sx={{ width: '100%', maxWidth: { xs: '363px', sm: '173px' } }}>
                  <Box sx={{ display: 'flex', gap: 1.25 }}>
                    <SecImgBoxContainer src="/images/home-connect-instantly-img.png" />
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
