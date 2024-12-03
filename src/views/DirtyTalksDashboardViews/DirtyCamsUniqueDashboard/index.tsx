import Box from '@mui/material/Box';
import React from 'react';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { FormattedMessage } from 'react-intl';
import { SexyChatAtFingertipsTitleTypography } from 'views/SexChatDashboardViews/SexyChatAtFingertips/SexyChatAtFingertips.styled';
import {
  DirtyCamsUniqueChatTypography,
  DirtyCamsUniqueInnerBox,
  DirtyCamsUniqueMainContainer,
  DirtyCamsUniqueTableBox
} from './DirtyCamsUniqueDashboard.styled';

const DirtyCamsUniqueDashboard = () => (
  <HomeMainContainer>
    <DirtyCamsUniqueMainContainer>
      <Box>
        <SexyChatAtFingertipsTitleTypography>
          <FormattedMessage id="FeaturesThatMakeFlirtBate’s" />
        </SexyChatAtFingertipsTitleTypography>
      </Box>
      <DirtyCamsUniqueInnerBox>
        <DirtyCamsUniqueTableBox>
          <DirtyCamsUniqueChatTypography variant="bodyLight">🍑</DirtyCamsUniqueChatTypography>
          <DirtyCamsUniqueChatTypography variant="bodyLight">
            <FormattedMessage id="DirtyChatForum" />
          </DirtyCamsUniqueChatTypography>
        </DirtyCamsUniqueTableBox>
        <DirtyCamsUniqueTableBox>
          <DirtyCamsUniqueChatTypography variant="bodyLight">🍑</DirtyCamsUniqueChatTypography>
          <DirtyCamsUniqueChatTypography variant="bodyLight">
            <FormattedMessage id="ModelVariety" />
          </DirtyCamsUniqueChatTypography>
        </DirtyCamsUniqueTableBox>
        <DirtyCamsUniqueTableBox>
          <DirtyCamsUniqueChatTypography variant="bodyLight">🍑</DirtyCamsUniqueChatTypography>
          <DirtyCamsUniqueChatTypography variant="bodyLight">
            <FormattedMessage id="High-QualityStreaming" />
          </DirtyCamsUniqueChatTypography>
        </DirtyCamsUniqueTableBox>
        <DirtyCamsUniqueTableBox>
          <DirtyCamsUniqueChatTypography variant="bodyLight">🍑</DirtyCamsUniqueChatTypography>
          <DirtyCamsUniqueChatTypography variant="bodyLight">
            <FormattedMessage id="Private&Secure" />
          </DirtyCamsUniqueChatTypography>
        </DirtyCamsUniqueTableBox>
      </DirtyCamsUniqueInnerBox>
    </DirtyCamsUniqueMainContainer>
  </HomeMainContainer>
);

export default DirtyCamsUniqueDashboard;
