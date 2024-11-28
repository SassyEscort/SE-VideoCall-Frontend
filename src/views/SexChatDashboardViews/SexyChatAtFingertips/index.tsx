'use client';

import {
  SexyChatAtFingertipsInfoContainer,
  SexyChatAtFingertipsInfoMainContainer,
  SexyChatAtFingertipsMainContainer,
  SexyChatAtFingertipsContainer,
  SexyChatAtFingertipsDescriptionSubTitleTypography,
  SexyChatAtFingertipsDescriptionTitleTypography,
  SexyChatAtFingertipsSubTitleTypography,
  SexyChatAtFingertipsTitleTypography,
  LightCirclesBox,
  PinkLightCirclesBox
} from './SexyChatAtFingertips.styled';
import { WhySexChatInnerContainer, WhySexChatSubTextStyledBox } from '../WhySexChatView/WhySexChat.styled';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FormattedMessage } from 'react-intl';

const SexyChatAtFingertips = () => (
  <SexyChatAtFingertipsMainContainer>
    <SexyChatAtFingertipsContainer>
      <WhySexChatInnerContainer>
        <SexyChatAtFingertipsTitleTypography>
          <FormattedMessage id="SexyChatYourFingertips" />
        </SexyChatAtFingertipsTitleTypography>
      </WhySexChatInnerContainer>
      <WhySexChatSubTextStyledBox>
        <SexyChatAtFingertipsSubTitleTypography>
          <FormattedMessage id="SkipTextBasedSextingChat" />
        </SexyChatAtFingertipsSubTitleTypography>
      </WhySexChatSubTextStyledBox>
    </SexyChatAtFingertipsContainer>

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
            <SexyChatAtFingertipsInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/Video.png" width="32px" height="100%" />
              <SexyChatAtFingertipsInfoContainer>
                <SexyChatAtFingertipsDescriptionTitleTypography>
                  <FormattedMessage id="PrivateDirtyVideoChat" />
                </SexyChatAtFingertipsDescriptionTitleTypography>
                <SexyChatAtFingertipsDescriptionSubTitleTypography>
                  <FormattedMessage id="HaveExclusiveVideoCalls" />
                </SexyChatAtFingertipsDescriptionSubTitleTypography>
              </SexyChatAtFingertipsInfoContainer>
            </SexyChatAtFingertipsInfoMainContainer>
          </Grid>
          <Grid item xs={4}>
            <SexyChatAtFingertipsInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/Private.png" width="26px" height="26px" />
              <SexyChatAtFingertipsInfoContainer>
                <SexyChatAtFingertipsDescriptionTitleTypography>
                  <FormattedMessage id="AdultChatRoomswithTwist" />
                </SexyChatAtFingertipsDescriptionTitleTypography>
                <SexyChatAtFingertipsDescriptionSubTitleTypography>
                  <FormattedMessage id="FlirtbatenotOfferGroupChatRooms" />
                </SexyChatAtFingertipsDescriptionSubTitleTypography>
              </SexyChatAtFingertipsInfoContainer>
            </SexyChatAtFingertipsInfoMainContainer>
          </Grid>
          <Grid item xs={4}>
            <SexyChatAtFingertipsInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/People.png" width="32px" height="100%" />
              <SexyChatAtFingertipsInfoContainer>
                <SexyChatAtFingertipsDescriptionTitleTypography>
                  <FormattedMessage id="InstantConnection"></FormattedMessage>
                </SexyChatAtFingertipsDescriptionTitleTypography>
                <SexyChatAtFingertipsDescriptionSubTitleTypography>
                  <FormattedMessage id="ModelsAreAvailableForSexyChat" />
                </SexyChatAtFingertipsDescriptionSubTitleTypography>
              </SexyChatAtFingertipsInfoContainer>
            </SexyChatAtFingertipsInfoMainContainer>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </SexyChatAtFingertipsMainContainer>
);

export default SexyChatAtFingertips;