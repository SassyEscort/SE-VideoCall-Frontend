import { Divider, Box, useMediaQuery } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { memo, useEffect, useRef, useState } from 'react';
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
import moment from 'moment';
import { useChatFeatureContext } from 'contexts/chatFeatureContext';

const ChatDescription = () => {
  const chatRef = useRef<HTMLDivElement | null>(null);
  const { modelDetails, messages, selectedModelDetails, handleMessageInputChange } = useChatFeatureContext();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const favPhoto = modelDetails?.photos?.filter((x) => x.favourite).map((item) => item.link)[0];

  const [showSidebar, setShowSidebar] = useState(false);

  const handleBackClick = () => {
    setShowSidebar(true);
  };

  useEffect(() => {
    if (chatRef?.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    if (modelDetails?.name || selectedModelDetails?.name) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  }, [modelDetails?.name, selectedModelDetails?.name]);

  return (
    <>
      {!isSmUp && showSidebar ? (
        <ChatSidbar onSelectModel={() => setShowSidebar(false)} />
      ) : (
        <>
          {isSmUp && (
            <>
              <Divider orientation="vertical" flexItem sx={{ borderColor: '#E9E8EB29' }} />
              {(modelDetails?.name || selectedModelDetails?.name) && (
                <ChatBoxMainContainer>
                  <ChatBoxInnerContainer>
                    <ModelDetailsInnerBoxContainer>
                      <Box>
                        <ChatBoxHeaderContainer>
                          <ChatBoxHeaderInnerContainer>
                            <ModelNameContainer>
                              <ProfileImageContainer
                                sx={{
                                  backgroundImage: `url(${selectedModelDetails?.profile_pic || favPhoto})`
                                }}
                              />
                              <UINewTypography variant="subtitle" color="text.secondary">
                                {selectedModelDetails?.name || modelDetails?.name}
                              </UINewTypography>
                            </ModelNameContainer>

                            {(selectedModelDetails?.is_online === 1 || modelDetails?.is_online === 1) && (
                              <OnlineFirstBoxContainer>
                                <OnlineSecBoxContainer />
                              </OnlineFirstBoxContainer>
                            )}
                          </ChatBoxHeaderInnerContainer>
                          {/* <Box component="img" src="/images/icons/video-call-icon.svg" width={40} height={40} sx={{ cursor: 'pointer' }} /> */}
                        </ChatBoxHeaderContainer>
                        <Divider orientation="horizontal" flexItem sx={{ borderColor: '#E9E8EB29', mt: '16px' }} />
                      </Box>
                      <Box
                        ref={chatRef}
                        sx={{
                          maxHeight: '65vh',
                          overflowY: 'auto'
                        }}
                      >
                        {Array.isArray(messages) &&
                          messages?.map((message, index) => (
                            <TextMainBoxContainer key={index}>
                              {message.sender_type === 'customers' ? (
                                <ClientChatMainBoxContainer>
                                  <ClientChatTextBoxContainer>
                                    <UINewTypography variant="body1" color="text.secondary">
                                      {message.sender_type === 'customers' ? message?.message_content : ''}
                                    </UINewTypography>
                                  </ClientChatTextBoxContainer>

                                  <UINewTypography
                                    variant="SubtitleSmallRegular"
                                    color="secondary.700"
                                    sx={{ display: 'flex', justifyContent: 'end' }}
                                  >
                                    {message?.time_stamp ? moment(message.time_stamp).format('LT') : moment().format('LT')}
                                  </UINewTypography>
                                </ClientChatMainBoxContainer>
                              ) : (
                                <ModelChatMainBoxContainer>
                                  <ModelChatTextBoxContainer>
                                    <UINewTypography variant="body1" color="text.secondary">
                                      {message.sender_type !== 'customers' ? message?.message_content : ''}
                                    </UINewTypography>
                                  </ModelChatTextBoxContainer>

                                  <UINewTypography variant="SubtitleSmallRegular" color="secondary.700">
                                    {message?.time_stamp ? moment(message.time_stamp).format('LT') : moment().format('LT')}
                                  </UINewTypography>
                                </ModelChatMainBoxContainer>
                              )}
                            </TextMainBoxContainer>
                          ))}
                      </Box>
                    </ModelDetailsInnerBoxContainer>

                    <CustomComposerView onSendMessage={handleMessageInputChange} />
                  </ChatBoxInnerContainer>
                </ChatBoxMainContainer>
              )}
            </>
          )}

          {!isSmUp && (
            <>
              {(modelDetails?.name || selectedModelDetails?.name) && (
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
                                  backgroundImage: `url(${selectedModelDetails?.profile_pic || favPhoto})`
                                }}
                              />
                              <UINewTypography variant="subtitle" color="text.secondary">
                                {selectedModelDetails?.name || modelDetails?.name}
                              </UINewTypography>
                            </ModelNameContainer>

                            {(selectedModelDetails?.is_online === 1 || modelDetails?.is_online === 1) && (
                              <OnlineFirstBoxContainer>
                                <OnlineSecBoxContainer />
                              </OnlineFirstBoxContainer>
                            )}
                          </ChatBoxHeaderInnerContainer>
                          {/* <Box component="img" src="/images/icons/video-call-icon.svg" width={40} height={40} sx={{ cursor: 'pointer' }} /> */}
                        </ChatBoxHeaderContainer>
                        <Divider orientation="horizontal" flexItem sx={{ borderColor: '#E9E8EB29', mt: '16px' }} />
                      </Box>
                      <Box
                        ref={chatRef}
                        sx={{
                          maxHeight: '70vh',
                          overflowY: 'auto'
                        }}
                      >
                        {Array.isArray(messages) &&
                          messages?.map((message, index) => (
                            <TextMainBoxContainer key={index}>
                              {message.sender_type === 'customers' ? (
                                <ClientChatMainBoxContainer>
                                  <ClientChatTextBoxContainer>
                                    <UINewTypography variant="body1" color="text.secondary">
                                      {message.sender_type === 'customers' ? message?.message_content : ''}
                                    </UINewTypography>
                                  </ClientChatTextBoxContainer>

                                  <UINewTypography
                                    variant="SubtitleSmallRegular"
                                    color="secondary.700"
                                    sx={{ display: 'flex', justifyContent: 'end' }}
                                  >
                                    {message?.time_stamp ? moment(message.time_stamp).format('LT') : moment().format('LT')}
                                  </UINewTypography>
                                </ClientChatMainBoxContainer>
                              ) : (
                                <ModelChatMainBoxContainer>
                                  <ModelChatTextBoxContainer>
                                    <UINewTypography variant="body1" color="text.secondary">
                                      {message.sender_type !== 'customers' ? message?.message_content : ''}
                                    </UINewTypography>
                                  </ModelChatTextBoxContainer>

                                  <UINewTypography variant="SubtitleSmallRegular" color="secondary.700">
                                    {message?.time_stamp ? moment(message.time_stamp).format('LT') : moment().format('LT')}
                                  </UINewTypography>
                                </ModelChatMainBoxContainer>
                              )}
                            </TextMainBoxContainer>
                          ))}
                      </Box>
                    </ModelDetailsInnerBoxContainer>

                    <CustomComposerView onSendMessage={handleMessageInputChange} />
                  </ChatBoxInnerContainer>
                </ChatBoxMainContainer>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default memo(ChatDescription);
