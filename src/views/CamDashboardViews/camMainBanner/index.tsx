'use client';
import Box from '@mui/material/Box';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import { FormattedMessage } from 'react-intl';
import { FooterButton } from 'views/guestViews/guestLayout/footer/MainFooter.styled';
import { CamBanner, CamTextContainerMain, CamTextContainer, CamSubTitleText, CamTitleText, CamBannerImg } from './camDashboard.styled';

export const CamToCamDashboardBanner = () => {
  return (
    <>
      <CamBanner>
        <CamTextContainerMain>
          <CamTextContainer>
            <Box>
              <Box display="flex" flexDirection="column" gap="16px" width="100%" alignItems="center">
                <CamSubTitleText>
                  <FormattedMessage id="WELCOMETOFLIRTBATE" />
                </CamSubTitleText>
                <CamTitleText>
                  <FormattedMessage id="FreeSexVideoChatCalls" />
                </CamTitleText>
                <CamSubTitleText>
                  <FormattedMessage id="JoinThousandsOfUsers" />
                </CamSubTitleText>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                  mt: { xs: '32px', sm: '40px' }
                }}
              >
                <Box sx={{ width: '100%', maxWidth: '195px' }}>
                  <UIThemeShadowButton fullWidth variant="contained">
                    <FooterButton variant="buttonLargeBold">
                      <FormattedMessage id="SignUpNow" />
                    </FooterButton>
                    <Box component="img" src="/images/icons/signup-img.png" sx={{ width: '16px', height: '16px' }} alt="signup" />
                  </UIThemeShadowButton>
                </Box>
              </Box>
            </Box>
          </CamTextContainer>
        </CamTextContainerMain>
        <CamBannerImg
          sx={{
            backgroundImage: `url('/images/cam-main-new-min.png')`
          }}
        />
      </CamBanner>
    </>
  );
};
