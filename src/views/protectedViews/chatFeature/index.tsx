'use client';

import {
  CometChatConversationsWithMessages,
  CometChatThemeContext,
  CometChatUIKit,
  ConversationsConfiguration,
  MessageComposerConfiguration,
  MessageHeaderConfiguration,
  MessageHeaderStyle,
  MessageInformationConfiguration,
  MessageListConfiguration,
  MessagesConfiguration,
  UIKitSettingsBuilder
} from '@cometchat/chat-uikit-react';
import coreTheme from 'themes/theme';
import { useContext, useEffect, useState } from 'react';
import { CometChat, User } from '@cometchat/chat-sdk-javascript';
import { COMETCHAT_CONSTANTS } from 'views/protectedViews/callingFeature/CallInitialize';
import { ChatFeatureMainBox, conversationsStyle, listItemStyle, messagesStyle, receiptStyle } from './ChatFeature.styled';
import { Box, Tooltip, useMediaQuery } from '@mui/material';
import { useSession } from 'next-auth/react';
import { User as AuthUser } from 'app/(guest)/layout';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const CometChatFeature = () => {
  const authSession = useSession();
  const customerUser = (authSession?.data?.user as AuthUser)?.picture;
  const customerData = JSON.parse(customerUser || '{}');

  const path = usePathname();
  const [sessionUser, seSessiontUser] = useState<User | null>(null);
  const [conversationUser, setConversationUser] = useState<User | null>(null);
  const isMobileView = useMediaQuery(coreTheme.breakpoints.down('sm'));

  let { theme } = useContext(CometChatThemeContext);

  theme.palette.setMode('dark'); // Dark mode
  theme.typography.setFontFamily('Manrope'); // Correctly set font family
  theme.palette.setPrimary({ light: '#1E0815', dark: '#1E0815' }); // Primary palette
  theme.palette.setSecondary({ light: '#611441', dark: '#611441' }); // Primary palette
  theme.palette.setAccent({ light: '#E9E8EB', dark: '#E9E8EB' }); // Accent palette
  theme.palette.setAccent50({ light: '#232027', dark: '#232027' }); //background of send message UI Box
  theme.palette.setAccent100({ light: '#232027', dark: '#232027' }); //background of active user
  theme.palette.setAccent500({ light: '#E9E8EB', dark: '#E9E8EB' }); //background of auxilary menu send message UI Box
  theme.palette.setAccent600({ light: '#B7B5B9', dark: '#B7B5B9' }); //set color of time and day label and read tick
  // theme.palette.setAccent700({ light: '#232027', dark: 'red' }); //set color of avatar background
  // theme.palette.setAccent900({ light: '#232027', dark: 'red' }); //set color of font inside avatar background
  theme.palette.setBackground({ light: 'var(--Surface-cards, #100B19)', dark: 'var(--Surface-cards, #100B19)' }); // Background color

  // Title1 Typo
  theme.typography.setTitle1({ fontFamily: "'Manrope', sans-serif", fontSize: '20px', fontWeight: '600' });

  // Title2 Typo  //set Contact FONT
  theme.typography.setTitle2({ fontFamily: "'Manrope', sans-serif", fontSize: '16px', fontWeight: '700' });

  // Contact sub title set
  theme.typography.setSubtitle2({ fontFamily: "'Manrope', sans-serif", fontSize: '14px', fontWeight: '500' });

  //Time label typo set user side panel
  theme.typography.setCaption2({ fontFamily: "'Manrope', sans-serif", fontSize: '14px', fontWeight: '500' });

  useEffect(() => {
    const init = async () => {
      try {
        const UIKitSettings = new UIKitSettingsBuilder()
          .setAppId(COMETCHAT_CONSTANTS.APP_ID)
          .setRegion(COMETCHAT_CONSTANTS.REGION)
          .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
          .subscribePresenceForAllUsers()
          .build();

        await CometChatUIKit.init(UIKitSettings);

        let user = await CometChatUIKit.getLoggedinUser();
        if (user?.getUid()) seSessiontUser(user);
        if (!user) {
          user = await CometChatUIKit.login(customerData.customer_user_name);
        }
      } catch (e) {
        console.log('error', e);
      }
    };
    init();
  }, []);

  useEffect(() => {
    const fetchConversationUser = async () => {
      try {
        const userName = path?.split('/')?.[2];
        if (userName && sessionUser?.getUid()) {
          const c_user = await CometChat.getUser(userName);
          if (c_user) setConversationUser(c_user);
        }
      } catch (e) {
        console.log('error::::::::::::::::', e);
      }
    };
    fetchConversationUser();
  }, [path, sessionUser]);

  return (
    <div>
      {sessionUser && (
        <ChatFeatureMainBox>
          <CometChatThemeContext.Provider value={{ theme }}>
            <CometChatConversationsWithMessages
              user={conversationUser as User}
              messageText="Conversations With Messages"
              isMobileView={isMobileView}
              conversationsConfiguration={
                new ConversationsConfiguration({
                  conversationsStyle: conversationsStyle,
                  receiptStyle: receiptStyle,
                  hideSeparator: true,
                  listItemStyle: {
                    padding: '12px 0'
                  },
                  menu: () => null
                })
              }
              messagesConfiguration={
                new MessagesConfiguration({
                  messageHeaderConfiguration: new MessageHeaderConfiguration({
                    menu: () => (
                      <Tooltip title="start video call" placement="left-start">
                        <Box sx={{ cursor: 'pointer', marginRight: 1.5 }}>
                          <Image src="/images/workercards/chat-video-call.svg" alt="video-call" height={40} width={40} />
                        </Box>
                      </Tooltip>
                    ),
                    messageHeaderStyle: new MessageHeaderStyle({
                      backButtonIconTint: 'white',
                      typingIndicatorTextColor: 'white',
                      subtitleTextFont: 'red'
                    })
                  }),
                  messagesStyle: messagesStyle,
                  messageListConfiguration: new MessageListConfiguration({
                    messageInformationConfiguration: new MessageInformationConfiguration({
                      listItemStyle: listItemStyle
                    })
                  }),
                  messageComposerConfiguration: new MessageComposerConfiguration({
                    auxilaryButtonView: () => <></>,
                    secondaryButtonView: () => <></>,
                    hideVoiceRecording: true,
                    hideLayoutMode: true
                  })
                })
              }
            />
          </CometChatThemeContext.Provider>
        </ChatFeatureMainBox>
      )}
    </div>
  );
};

export default CometChatFeature;
