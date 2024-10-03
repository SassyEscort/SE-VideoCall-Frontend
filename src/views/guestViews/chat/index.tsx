'use client';
import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { useEffect, useState } from 'react';
import {
  ChatBoxHeaderContainer,
  ChatBoxHeaderInnerContainer,
  ChatBoxInnerContainer,
  ChatBoxMainContainer,
  ChatMainBoxContainer,
  ClientChatMainBoxContainer,
  ClientChatTextBoxContainer,
  ImageContainer,
  MobileSearchBoxContainer,
  ModelChatMainBoxContainer,
  ModelChatTextBoxContainer,
  ModelDescriptionText,
  ModelDetailsInnerBoxContainer,
  ModelDetailsMainBoxContainer,
  ModelHeaderBoxContainer,
  ModelInformationInnerBoxContainer,
  ModelInformationMainBoxContainer,
  ModelNameBoxContainer,
  ModelNameContainer,
  ModelNameText,
  ModelReplyBoxContainer,
  OnlineFirstBoxContainer,
  OnlineSecBoxContainer,
  PendingInnerBoxContainer,
  PendingMainBoxContainer,
  ProfileImageContainer,
  SearchBoxContainer,
  TextMainBoxContainer
} from './Chat.styled';
import CustomComposerView from './CustomComposerView';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { orderBy, collection, query, onSnapshot } from 'firebase/firestore';
import { firbase_db } from 'utils/firebase/config';
import { Message } from 'yup';
import theme from 'themes/theme';
import useMediaQuery from '@mui/material/useMediaQuery';

const ChatFeature = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(() => {
    // Reference to the messages collection
    const messagesRef = collection(firbase_db, 'messages');
    const q = query(messagesRef, orderBy('timestamp', 'asc'));

    // Real-time listener for Firestore collection
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesData: any[] = [];
      snapshot.forEach((doc) => {
        messagesData.push({ id: doc.id, ...doc.data() });
      });
      setMessages(messagesData);
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []);
  console.log('messages', messages);

  return (
    <ChatMainBoxContainer>
      <ModelDetailsMainBoxContainer>
        {isSmUp && (
          <>
            <ModelHeaderBoxContainer>
              <UINewTypography variant="newTitle" color="text.primary">
                Chat
              </UINewTypography>
              <ModelReplyBoxContainer>
                <OnlineFirstBoxContainer>
                  <OnlineSecBoxContainer />
                </OnlineFirstBoxContainer>

                <UINewTypography variant="SubtitleSmallMedium" color="text.primary">
                  (2)
                </UINewTypography>
              </ModelReplyBoxContainer>
            </ModelHeaderBoxContainer>

            <SearchBoxContainer
              fullWidth
              variant="outlined"
              placeholder="Search for a profile"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon style={{ color: '#E9E8EB' }} />
                  </InputAdornment>
                )
              }}
            />
          </>
        )}

        {!isSmUp && (
          <MobileSearchBoxContainer
            fullWidth
            variant="outlined"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: '#E9E8EB' }} />
                </InputAdornment>
              )
            }}
          />
        )}

        <ModelDetailsInnerBoxContainer>
          <ModelInformationMainBoxContainer>
            <ModelInformationInnerBoxContainer>
              <ImageContainer />
              <ModelNameBoxContainer>
                <ModelNameText color="text.secondary">Kat Winter</ModelNameText>
                <ModelDescriptionText color="text.primary">Hey Sammy, How are...</ModelDescriptionText>
              </ModelNameBoxContainer>
            </ModelInformationInnerBoxContainer>

            <UINewTypography variant="bodySmall" color="text.primary" sx={{ whiteSpace: 'nowrap' }}>
              30 mins ago
            </UINewTypography>
          </ModelInformationMainBoxContainer>

          <Divider orientation="horizontal" flexItem sx={{ borderColor: '#E9E8EB29' }} />

          <ModelInformationMainBoxContainer>
            <ModelInformationInnerBoxContainer>
              <ImageContainer />
              <ModelNameBoxContainer>
                <ModelNameText color="text.secondary">Kat Winter</ModelNameText>
                <ModelDescriptionText color="text.primary">Hey Sammy, How are...</ModelDescriptionText>
              </ModelNameBoxContainer>
            </ModelInformationInnerBoxContainer>

            <PendingMainBoxContainer>
              <UINewTypography variant="bodySmall" color="text.primary" sx={{ whiteSpace: 'nowrap' }}>
                30 mins ago
              </UINewTypography>
              <PendingInnerBoxContainer>
                <UINewTypography variant="SubtitleSmallMedium" color="text.secondary">
                  2
                </UINewTypography>
              </PendingInnerBoxContainer>
            </PendingMainBoxContainer>
          </ModelInformationMainBoxContainer>

          <Divider orientation="horizontal" flexItem sx={{ borderColor: '#E9E8EB29' }} />
        </ModelDetailsInnerBoxContainer>
      </ModelDetailsMainBoxContainer>
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
                    <Box component="img" src="/images/icons/chat-video-call.svg" width={40} height={40} />
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

                    <UINewTypography variant="SubtitleSmallRegular" color="secondary.700" sx={{ display: 'flex', justifyContent: 'end' }}>
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

                    <UINewTypography variant="SubtitleSmallRegular" color="secondary.700" sx={{ display: 'flex', justifyContent: 'end' }}>
                      6:34 PM
                    </UINewTypography>
                  </ClientChatMainBoxContainer>
                </TextMainBoxContainer>
              </ModelDetailsInnerBoxContainer>

              <CustomComposerView />
            </ChatBoxInnerContainer>
          </ChatBoxMainContainer>
        </>
      )}
    </ChatMainBoxContainer>
  );
};

export default ChatFeature;
