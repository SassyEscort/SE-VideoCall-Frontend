'use client';

import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import React from 'react';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import UINewTypography from 'components/UIComponents/UINewTypography';
import {
  Cam2CamMainContainer,
  BackGroundContainer,
  Cam2CamInnerContainer,
  HeadingTypography,
  SubtitleTypography,
  ButtonBox,
  CamExperienceBannerInnerBox
} from './camExperienceBanner.styled';
import { FormattedMessage } from 'react-intl';

const CamExperienceBanner = () => (
  <Cam2CamMainContainer>
    <BackGroundContainer>
      <HomeMainContainer>
        <Cam2CamInnerContainer>
          <CamExperienceBannerInnerBox>
            <HeadingTypography>
              <FormattedMessage id="StartYourFlirtBateCam2CamExperienceNow" />
            </HeadingTypography>
            <SubtitleTypography>
              <FormattedMessage id="ThousandsOfModelsAreReady" />
            </SubtitleTypography>
          </CamExperienceBannerInnerBox>
          <ButtonBox>
            <UIThemeShadowButton variant="contained" sx={{ width: '236px' }}>
              <UINewTypography variant="body" color="common.white">
                <FormattedMessage id="StartFreeVideoChat" />
              </UINewTypography>
            </UIThemeShadowButton>
          </ButtonBox>
        </Cam2CamInnerContainer>
      </HomeMainContainer>
    </BackGroundContainer>
  </Cam2CamMainContainer>
);

export default CamExperienceBanner;
