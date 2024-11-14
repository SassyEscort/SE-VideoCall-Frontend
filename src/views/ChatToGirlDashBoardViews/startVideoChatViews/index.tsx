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

const StartYourVideoChatLevel = () => (
  <ChatWhyChooseMainContainer>
    <ChatWhyChooseContainer>
      <ChatToGirlsChooseModalInnerContainer>
        <ChatWhyChooseTitleTypography>Start Your Video Chat with a Girl Today!</ChatWhyChooseTitleTypography>
      </ChatToGirlsChooseModalInnerContainer>
      <ChatToGirlsChooseModalSubTextStyledBox>
        <ChatWhyChooseSubTitleTypography>
          FlirtBate is the ultimate destination for real-time video chat with babes. Our models are not only beautiful but also friendly,
          engaging, and ready to offer you a personalized experience that will leave you coming back for more. With just a few clicks, you
          can be chatting with a stunning woman who is eager to get to know you.
        </ChatWhyChooseSubTitleTypography>
        <ChatWhyChooseSubTitleTypography>
          Create your free account today and dive into a world of video chats with beautiful girls who are ready to make your experience
          unforgettable!
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
                <ChatWhyChooseDescriptionTitleTypography>No Strings Attached </ChatWhyChooseDescriptionTitleTypography>
                <ChatWhyChooseDescriptionSubTitleTypography>
                  Enjoy fun and flirty conversations, or take things to the next level with a private horny girl video chat.{' '}
                </ChatWhyChooseDescriptionSubTitleTypography>
              </ChatWhyChooseInfoContainer>
            </ChatWhyChooseInfoMainContainer>
          </Grid>
          <Grid item xs={4}>
            <ChatWhyChooseInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/Private.png" width="26px" height="26px" />
              <ChatWhyChooseInfoContainer>
                <ChatWhyChooseDescriptionTitleTypography>Available 24/7 </ChatWhyChooseDescriptionTitleTypography>
                <ChatWhyChooseDescriptionSubTitleTypography>
                  Our models are online around the clock, so you can enjoy a video chat with girls whenever it suits you.{' '}
                </ChatWhyChooseDescriptionSubTitleTypography>
              </ChatWhyChooseInfoContainer>
            </ChatWhyChooseInfoMainContainer>
          </Grid>
          <Grid item xs={4}>
            <ChatWhyChooseInfoMainContainer>
              <Box component="img" src="/images/camtocamDashboard/People.png" width="32px" height="100%" />
              <ChatWhyChooseInfoContainer>
                <ChatWhyChooseDescriptionTitleTypography>HD Quality Video Chats </ChatWhyChooseDescriptionTitleTypography>
                <ChatWhyChooseDescriptionSubTitleTypography>
                  Experience video chat with babes in clear HD, for a seamless and thrilling interaction.{' '}
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
