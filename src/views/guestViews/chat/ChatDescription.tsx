import { Divider, Box, useMediaQuery } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React, { useState } from 'react';
import {
  ChatBoxMainContainer,
  ChatBoxInnerContainer,
  ModelDetailsInnerBoxContainer,
  ChatBoxHeaderContainer,
  ChatBoxHeaderInnerContainer,
  ModelNameContainer,
  ProfileImageContainer,
  OnlineFirstBoxContainer,
  OnlineSecBoxContainer,
  TextMainBoxContainer,
  ClientChatMainBoxContainer,
  ClientChatTextBoxContainer,
  ModelChatMainBoxContainer,
  ModelChatTextBoxContainer,
  ArrowBoxWraper
} from './Chat.styled';
import CustomComposerView from './CustomComposerView';
import theme from 'themes/theme';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChatSidbar from './ChatSidbar';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import { IMessage } from 'services/chatServices/chat.service';
import moment from 'moment';
interface IChatDescriptionProps {
  handleMessageInputChange: (val: string) => void;
  modelDetails?: ModelDetailsResponse;
  messages: IMessage[];
}
const ChatDescription = ({ handleMessageInputChange, modelDetails, messages }: IChatDescriptionProps) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const handleBackClick = () => {
    setShowSidebar(true);
  };
  const favPhoto = modelDetails?.photos?.filter((x) => x.favourite).map((item) => item.link)[0];

  return (
    <>
      {showSidebar ? (
        <ChatSidbar onSelectModel={() => setShowSidebar(false)} modelDetails={modelDetails} />
      ) : (
        <>
          {isSmUp && (
            <>
              <Divider orientation="vertical" flexItem sx={{ borderColor: '#E9E8EB29' }} />

              <ChatBoxMainContainer>
                <ChatBoxInnerContainer>
                  <ModelDetailsInnerBoxContainer>
                    <Box>
                      <ChatBoxHeaderContainer>
                        <ChatBoxHeaderInnerContainer>
                          <ModelNameContainer>
                            <ProfileImageContainer
                              sx={{
                                backgroundImage: `url(${favPhoto})`
                              }}
                            />
                            <UINewTypography variant="subtitle" color="text.secondary">
                              {modelDetails?.name}
                            </UINewTypography>
                          </ModelNameContainer>

                          <OnlineFirstBoxContainer>
                            <OnlineSecBoxContainer />
                          </OnlineFirstBoxContainer>
                        </ChatBoxHeaderInnerContainer>
                        <Box component="img" src="/images/icons/video-call-icon.svg" width={40} height={40} sx={{ cursor: 'pointer' }} />
                      </ChatBoxHeaderContainer>
                      <Divider orientation="horizontal" flexItem sx={{ borderColor: '#E9E8EB29', mt: '16px' }} />
                    </Box>
                    <Box
                      sx={{
                        maxHeight: '60vh',
                        overflowY: 'auto'
                      }}
                    >
                      {messages.map((messages, index) => (
                        <TextMainBoxContainer key={index}>
                          <ClientChatMainBoxContainer>
                            <ClientChatTextBoxContainer>
                              <UINewTypography variant="body1" color="text.secondary">
                                {messages?.message}
                              </UINewTypography>
                            </ClientChatTextBoxContainer>

                            <UINewTypography
                              variant="SubtitleSmallRegular"
                              color="secondary.700"
                              sx={{ display: 'flex', justifyContent: 'end' }}
                            >
                              {messages?.createdAt ? moment(messages.createdAt).format('LT') : moment().format('LT')}
                            </UINewTypography>
                          </ClientChatMainBoxContainer>

                          <ModelChatMainBoxContainer>
                            <ModelChatTextBoxContainer>
                              <UINewTypography variant="body1" color="text.secondary">
                                Hey Aesha, are you available at 8 in the evening?
                              </UINewTypography>
                            </ModelChatTextBoxContainer>

                            <UINewTypography variant="SubtitleSmallRegular" color="secondary.700">
                              6:38 PM
                            </UINewTypography>
                          </ModelChatMainBoxContainer>
                        </TextMainBoxContainer>
                      ))}
                    </Box>
                  </ModelDetailsInnerBoxContainer>

                  <CustomComposerView onSendMessage={handleMessageInputChange} />
                </ChatBoxInnerContainer>
              </ChatBoxMainContainer>
            </>
          )}

          {!isSmUp && (
            <>
              <ChatBoxMainContainer>
                <ChatBoxInnerContainer>
                  <ModelDetailsInnerBoxContainer>
                    <Box>
                      <ChatBoxHeaderContainer>
                        <ArrowBoxWraper onClick={handleBackClick}>
                          <ArrowBackIcon />
                        </ArrowBoxWraper>
                        <ChatBoxHeaderInnerContainer>
                          <ModelNameContainer>
                            <ProfileImageContainer
                              sx={{
                                backgroundImage: `url(${favPhoto})`
                              }}
                            />
                            <UINewTypography variant="subtitle" color="text.secondary">
                              {modelDetails?.name}
                            </UINewTypography>
                          </ModelNameContainer>

                          <OnlineFirstBoxContainer>
                            <OnlineSecBoxContainer />
                          </OnlineFirstBoxContainer>
                        </ChatBoxHeaderInnerContainer>
                        <Box component="img" src="/images/icons/video-call-icon.svg" width={40} height={40} sx={{ cursor: 'pointer' }} />
                      </ChatBoxHeaderContainer>
                      <Divider orientation="horizontal" flexItem sx={{ borderColor: '#E9E8EB29', mt: '16px' }} />
                    </Box>
                    {messages.map((messages, index) => (
                      <TextMainBoxContainer key={index}>
                        <ClientChatMainBoxContainer>
                          <ClientChatTextBoxContainer>
                            <UINewTypography variant="body1" color="text.secondary">
                              {messages.message}
                            </UINewTypography>
                          </ClientChatTextBoxContainer>

                          <UINewTypography
                            variant="SubtitleSmallRegular"
                            color="secondary.700"
                            sx={{ display: 'flex', justifyContent: 'end' }}
                          >
                            {messages?.createdAt ? moment(messages.createdAt).format('LT') : moment().format('LT')}
                          </UINewTypography>
                        </ClientChatMainBoxContainer>

                        <ModelChatMainBoxContainer>
                          <ModelChatTextBoxContainer>
                            <UINewTypography variant="body1" color="text.secondary">
                              Hey Aesha, are you available at 8 in the evening?
                            </UINewTypography>
                          </ModelChatTextBoxContainer>

                          <UINewTypography variant="SubtitleSmallRegular" color="secondary.700">
                            6:38 PM
                          </UINewTypography>
                        </ModelChatMainBoxContainer>
                      </TextMainBoxContainer>
                    ))}
                  </ModelDetailsInnerBoxContainer>

                  <CustomComposerView onSendMessage={handleMessageInputChange} />
                </ChatBoxInnerContainer>
              </ChatBoxMainContainer>
            </>
          )}
        </>
      )}
    </>
  );
};

export default ChatDescription;
