'use client';
import {
  ChatWhyChooseInfoContainer,
  ChatWhyChooseInfoMainContainer,
  ChatWhyChooseMainContainer,
  ChatWhyChooseContainer,
  ChatWhyChooseDescriptionSubTitleTypography,
  ChatWhyChooseDescriptionTitleTypography,
  ChatWhyChooseSubTitleTypography,
  ChatWhyChooseTitleTypography,
  LightCirclesBox,
  PinkLightCirclesBox
} from './startVideoChat.styled';
import { ChatToGirlsChooseModalInnerContainer, ChatToGirlsChooseModalSubTextStyledBox } from '../chatChooseModalViews/chooseModal.styled';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FormattedMessage } from 'react-intl';

const StartYourVideoChatLevel = () => (
  <ChatWhyChooseMainContainer>
    <ChatWhyChooseContainer>
      <ChatToGirlsChooseModalInnerContainer>
        <ChatWhyChooseTitleTypography>
          <FormattedMessage id="StartYourVideoChat" />
        </ChatWhyChooseTitleTypography>
      </ChatToGirlsChooseModalInnerContainer>
      <ChatToGirlsChooseModalSubTextStyledBox>
        <ChatWhyChooseSubTitleTypography>
          <FormattedMessage id="FlirtBateIstheUltimate" />
        </ChatWhyChooseSubTitleTypography>
        <ChatWhyChooseSubTitleTypography>
          <FormattedMessage id="CreateYourFreeAccountVideoChats" />
        </ChatWhyChooseSubTitleTypography>
      </ChatToGirlsChooseModalSubTextStyledBox>
    </ChatWhyChooseContainer>

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
            <ChatWhyChooseInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/Video.png" width="32px" height="100%" />
              <ChatWhyChooseInfoContainer>
                <ChatWhyChooseDescriptionTitleTypography>
                  <FormattedMessage id="NoStringsAttached" />
                </ChatWhyChooseDescriptionTitleTypography>
                <ChatWhyChooseDescriptionSubTitleTypography>
                  <FormattedMessage id="EnjoyFunandFlirty" />
                </ChatWhyChooseDescriptionSubTitleTypography>
              </ChatWhyChooseInfoContainer>
            </ChatWhyChooseInfoMainContainer>
          </Grid>
          <Grid item xs={4}>
            <ChatWhyChooseInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/Private.png" width="26px" height="26px" />
              <ChatWhyChooseInfoContainer>
                <ChatWhyChooseDescriptionTitleTypography>
                  <FormattedMessage id="Available24/7" />
                </ChatWhyChooseDescriptionTitleTypography>
                <ChatWhyChooseDescriptionSubTitleTypography>
                  <FormattedMessage id="ModelsareOnlineAround" />
                </ChatWhyChooseDescriptionSubTitleTypography>
              </ChatWhyChooseInfoContainer>
            </ChatWhyChooseInfoMainContainer>
          </Grid>
          <Grid item xs={4}>
            <ChatWhyChooseInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/People.png" width="32px" height="100%" />
              <ChatWhyChooseInfoContainer>
                <ChatWhyChooseDescriptionTitleTypography>
                  <FormattedMessage id="HDQualityVideoChats" />
                </ChatWhyChooseDescriptionTitleTypography>
                <ChatWhyChooseDescriptionSubTitleTypography>
                  <FormattedMessage id="ExperienceVideoChat" />
                </ChatWhyChooseDescriptionSubTitleTypography>
              </ChatWhyChooseInfoContainer>
            </ChatWhyChooseInfoMainContainer>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </ChatWhyChooseMainContainer>
);

export default StartYourVideoChatLevel;
