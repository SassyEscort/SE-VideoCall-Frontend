'use client';

import Box from '@mui/material/Box';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import { FormattedMessage } from 'react-intl';
import { FooterButton } from 'views/guestViews/guestLayout/footer/MainFooter.styled';
import {
  CamBanner,
  CamTextContainerMain,
  CamTextContainer,
  CamSubTitleText,
  CamTitleText,
  CamBannerImg,
  CamBannerInnerBox,
  CamBannerInnerBoxContainer
} from './camDashboard.styled';

const CamToCamDashboardBanner = () => (
  <CamBanner>
    <CamTextContainerMain>
      <CamTextContainer>
        <CamBannerInnerBoxContainer sx={{ gap: 6 }}>
          <CamBannerInnerBoxContainer sx={{ gap: 2 }}>
            <CamSubTitleText>
              <FormattedMessage id="WELCOMETOFLIRTBATE" />
            </CamSubTitleText>
            <CamTitleText>
              <FormattedMessage id="FreeSexVideoChatCalls" />
            </CamTitleText>
            <CamSubTitleText>
              <FormattedMessage id="JoinThousandsOfUsers" />
            </CamSubTitleText>
          </CamBannerInnerBoxContainer>
          <CamBannerInnerBox>
            <Box sx={{ width: '100%', maxWidth: '236px' }}>
              <UIThemeShadowButton fullWidth variant="contained">
                <FooterButton variant="buttonLargeBold" color="common.white">
                  <FormattedMessage id="StartFreeVideoChat" />
                </FooterButton>
              </UIThemeShadowButton>
            </Box>
          </CamBannerInnerBox>
        </CamBannerInnerBoxContainer>
      </CamTextContainer>
    </CamTextContainerMain>
    <CamBannerImg />
  </CamBanner>
);

export default CamToCamDashboardBanner;
