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

const SexyChatAtFingertips = () => (
  <SexyChatAtFingertipsMainContainer>
    <SexyChatAtFingertipsContainer>
      <WhySexChatInnerContainer>
        <SexyChatAtFingertipsTitleTypography>Sexy Chat at Your Fingertips</SexyChatAtFingertipsTitleTypography>
      </WhySexChatInnerContainer>
      <WhySexChatSubTextStyledBox>
        <SexyChatAtFingertipsSubTitleTypography>
          Skip the text-based sexting chat rooms and enjoy sexy cam sessions where you can see and speak with models in real-time. FlirtBate
          is all about bringing that personal touch to every interaction, letting you enjoy 1 on 1 sex chat the way it was meant to be—live,
          intimate, and tailored to you.
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
                <SexyChatAtFingertipsDescriptionTitleTypography>Private Dirty Video Chat </SexyChatAtFingertipsDescriptionTitleTypography>
                <SexyChatAtFingertipsDescriptionSubTitleTypography>
                  Have exclusive video calls with no one else involved, just you and the model.
                </SexyChatAtFingertipsDescriptionSubTitleTypography>
              </SexyChatAtFingertipsInfoContainer>
            </SexyChatAtFingertipsInfoMainContainer>
          </Grid>
          <Grid item xs={4}>
            <SexyChatAtFingertipsInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/Private.png" width="26px" height="26px" />
              <SexyChatAtFingertipsInfoContainer>
                <SexyChatAtFingertipsDescriptionTitleTypography>
                  Adult Chat Rooms with a Twist{' '}
                </SexyChatAtFingertipsDescriptionTitleTypography>
                <SexyChatAtFingertipsDescriptionSubTitleTypography>
                  While FlirtBate doesn’t offer group chat rooms, we provide an even more personalized experience with one on one sex chat.
                </SexyChatAtFingertipsDescriptionSubTitleTypography>
              </SexyChatAtFingertipsInfoContainer>
            </SexyChatAtFingertipsInfoMainContainer>
          </Grid>
          <Grid item xs={4}>
            <SexyChatAtFingertipsInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/People.png" width="32px" height="100%" />
              <SexyChatAtFingertipsInfoContainer>
                <SexyChatAtFingertipsDescriptionTitleTypography>Instant Connection </SexyChatAtFingertipsDescriptionTitleTypography>
                <SexyChatAtFingertipsDescriptionSubTitleTypography>
                  Models are available for sexy chat and video calls 24/7. Whether you`re in the mood for casual chat or something more
                  risqué, FlirtBate has you covered.
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
