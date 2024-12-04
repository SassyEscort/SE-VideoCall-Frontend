'use client';
import Box from '@mui/material/Box';
import React from 'react';
import { CamPerkInnerBox, CamPerkMainContainer, CamPerkRotateChipContainer, CamPerkTableBox, PerksTypography } from './camPerks.styled';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { FormattedMessage } from 'react-intl';
import { CamConnectionTitleTypography } from '../camConnectinonLevelViews/camConnectinonLevel.styled';

const CamPerks = () => (
  <HomeMainContainer>
    <CamPerkMainContainer>
      <Box>
        <CamConnectionTitleTypography>
          <FormattedMessage id="ThePerksOfFlirtBate" />
        </CamConnectionTitleTypography>
        <CamPerkRotateChipContainer>
          <CamConnectionTitleTypography>
            <FormattedMessage id="AdultCamChat" />
          </CamConnectionTitleTypography>
        </CamPerkRotateChipContainer>
      </Box>
      <CamPerkInnerBox>
        <CamPerkTableBox>
          <PerksTypography variant="bodyLight">🍑</PerksTypography>
          <PerksTypography variant="bodyLight">
            <FormattedMessage id="TailoredConnections" />
          </PerksTypography>
        </CamPerkTableBox>
        <CamPerkTableBox>
          <PerksTypography variant="bodyLight">🍑</PerksTypography>
          <PerksTypography variant="bodyLight">
            <FormattedMessage id="InstantAccessToModels" />
          </PerksTypography>
        </CamPerkTableBox>
        <CamPerkTableBox>
          <PerksTypography variant="bodyLight">🍑</PerksTypography>
          <PerksTypography variant="bodyLight">
            <FormattedMessage id="NoPressure" />
          </PerksTypography>
        </CamPerkTableBox>
        <CamPerkTableBox>
          <PerksTypography variant="bodyLight">🍑</PerksTypography>
          <PerksTypography variant="bodyLight">
            <FormattedMessage id="HighQualityStreaming" />
          </PerksTypography>
        </CamPerkTableBox>
        <CamPerkTableBox>
          <PerksTypography variant="bodyLight">🍑</PerksTypography>
          <PerksTypography variant="bodyLight">
            <FormattedMessage id="PrivacyFirstEnsures" />
          </PerksTypography>
        </CamPerkTableBox>
      </CamPerkInnerBox>
    </CamPerkMainContainer>
  </HomeMainContainer>
);

export default CamPerks;
