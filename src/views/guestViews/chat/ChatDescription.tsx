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
interface IChatDescriptionProps {
  handleMessageInputChange: (val: string) => void;
}
const ChatDescription = ({ handleMessageInputChange }: IChatDescriptionProps) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const handleBackClick = () => {
    setShowSidebar(true);
  };

  return (
    <>
      {showSidebar ? (
        <ChatSidbar onSelectModel={() => setShowSidebar(false)} />
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
                            <ProfileImageContainer />
                            <UINewTypography variant="subtitle" color="text.secondary">
                              Aesha
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

                    <TextMainBoxContainer>
                      <ClientChatMainBoxContainer>
                        <ClientChatTextBoxContainer>
                          <UINewTypography variant="body1" color="text.secondary">
                            Hey Aesha, are you available at 8 in the evening?
                          </UINewTypography>
                        </ClientChatTextBoxContainer>

                        <UINewTypography
                          variant="SubtitleSmallRegular"
                          color="secondary.700"
                          sx={{ display: 'flex', justifyContent: 'end' }}
                        >
                          6:34 PM
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

                      <ClientChatMainBoxContainer>
                        <ClientChatTextBoxContainer>
                          <UINewTypography variant="body1" color="text.secondary">
                            🤩 💞
                          </UINewTypography>
                        </ClientChatTextBoxContainer>

                        <UINewTypography
                          variant="SubtitleSmallRegular"
                          color="secondary.700"
                          sx={{ display: 'flex', justifyContent: 'end' }}
                        >
                          6:34 PM
                        </UINewTypography>
                      </ClientChatMainBoxContainer>
                    </TextMainBoxContainer>
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
                            <ProfileImageContainer />
                            <UINewTypography variant="subtitle" color="text.secondary">
                              Aesha
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

                    <TextMainBoxContainer>
                      <ClientChatMainBoxContainer>
                        <ClientChatTextBoxContainer>
                          <UINewTypography variant="body1" color="text.secondary">
                            Hey Aesha, are you available at 8 in the evening?
                          </UINewTypography>
                        </ClientChatTextBoxContainer>

                        <UINewTypography
                          variant="SubtitleSmallRegular"
                          color="secondary.700"
                          sx={{ display: 'flex', justifyContent: 'end' }}
                        >
                          6:34 PM
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

                      <ClientChatMainBoxContainer>
                        <ClientChatTextBoxContainer>
                          <UINewTypography variant="body1" color="text.secondary">
                            🤩 💞
                          </UINewTypography>
                        </ClientChatTextBoxContainer>

                        <UINewTypography
                          variant="SubtitleSmallRegular"
                          color="secondary.700"
                          sx={{ display: 'flex', justifyContent: 'end' }}
                        >
                          6:34 PM
                        </UINewTypography>
                      </ClientChatMainBoxContainer>
                    </TextMainBoxContainer>
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
