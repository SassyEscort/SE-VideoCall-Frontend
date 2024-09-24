'use client';
import {
  CometChatConversationsWithMessages,
  CometChatThemeContext,
  CometChatUIKit,
  ConversationsConfiguration,
  ConversationsStyle,
  ListItemStyle,
  MessageHeaderConfiguration,
  MessageHeaderStyle,
  MessageInformationConfiguration,
  MessageListConfiguration,
  MessagesConfiguration,
  MessagesStyle,
  ReceiptStyle,
  // ContactsConfiguration,
  // ContactsStyle,
  // ConversationsConfiguration,
  // ConversationsStyle,
  UIKitSettingsBuilder
} from '@cometchat/chat-uikit-react';
import coreTheme from 'themes/theme';
import { useContext, useEffect, useState } from 'react';
import { COMETCHAT_CONSTANTS } from 'views/protectedViews/callingFeature/CallInitialize';
import { ChatFeatureMainBox } from './ChatPoc.styled';
import { useMediaQuery } from '@mui/material';
import CustomComposerView from './CustomComposerView';
import { CometChat } from '@cometchat/chat-sdk-javascript';

const ChatPoc = () => {
  const [user, setUser] = useState(false);
  // const [selectedUserName, setSelectedUserName] = useState('');
  const isMobileView = useMediaQuery(coreTheme.breakpoints.down('sm'));

  let { theme } = useContext(CometChatThemeContext);
  // const conversationRef = useRef(null);

  theme.palette.setMode('dark'); // Light mode
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
        const userUid = user?.getUid();
        if (userUid) {
          setUser(true);
        }

        if (!user) {
          user = await CometChatUIKit.login('zia-dd0dd2');
        }

        CometChatUIKit.getLoggedinUser().then((user) => {
          if (!user) {
            CometChatUIKit.login('zia-dd0dd2');
          }
        });
        // console.log(user, 'user');
      } catch (e) {
        console.log('error', e);
      }
    };
    init();
  }, []);

  // const handleItemClick = (conversation: IConversation) => {
  //   console.log(conversation, 'conversation');

  //   // conversation object contains the selected user's details
  //   const selectedUser = conversation.conversationWith.name;
  //   setSelectedUserName(selectedUser);
  // };

  // useEffect(() => {
  //   if (user) {
  //     CometChat?.callExtension('message-translation', 'POST', 'v2/translate', {
  //       msgId: 18420,
  //       text: 'Hey there! How are you?',
  //       languages: ['hi']
  //     })
  //       .then((result: any) => {
  //         console.log(result, 'ressulttt');

  //         // Result of translations
  //       })
  //       .catch((error: any) => {
  //         console.log(error, 'error');
  //         // Some error occured
  //       });

  //     const messageText = 'Hey there! How are you?';

  //     const metadata = {
  //       'message-translation': {
  //         ru: 'Эй там! Как ты?',
  //         hi: 'अरे वहाँ! आप कैसे हैं?'
  //       }
  //     };

  //     const textMessage = new CometChat.TextMessage('heli-sehfsr2', messageText, 'user');
  //     textMessage.setMetadata(metadata);

  //     CometChat.sendMessage(textMessage).then(
  //       (message) => {
  //         console.log('Message sent successfully:', message.getRawMessage());
  //         // setMessage(message.getRawMessage())
  //       },
  //       (error) => {
  //         console.log('Message sending failed with error:', error);
  //       }
  //     );
  //   }
  // }, [user]);

  // const conversationsStyle = new ConversationsStyle({
  //   width: '100%',
  //   height: '100%',
  //   background: '#100B19',
  //   titleTextColor: '#fff'
  // });

  const conversationsStyle = new ConversationsStyle({
    titleTextColor: '#B7B5B9',
    typingIndictorTextColor: '#B7B5B9',
    lastMessageTextColor: '#B7B5B9'
  });

  const messagesStyle = new MessagesStyle({
    height: '100%'
  });

  const receiptStyle = new ReceiptStyle({
    width: '16px',
    height: '16px',
    readIconTint: '#B7B5B9',
    sentIconTint: '#B7B5B9'
  });

  const listItemStyle = new ListItemStyle({
    background: 'transparent',
    titleColor: '#E9E8EB',
    titleFont: 'Manrope'
  });

  // const messageListStyle = new MessageComposerStyle({
  //   AIIconTint: '#ec03fc',
  //   attachIcontint: '#ec03fc',
  //   background: '#fffcff',
  //   border: '2px solid #b30fff',
  //   borderRadius: '20px',
  //   inputBackground: '#e2d5e8',
  //   textColor: '#ff299b',
  //   sendIconTint: '#ff0088'
  // });

  // const contactsStyle = new ContactsStyle({
  //   background: 'linear-gradient(#ee7752, #e73c7e, #23a6d5, #23d5ab)',
  //   width: '100%',
  //   height: '100%',
  //   titleTextColor: '#7E57C2',
  //   activeTabBackground: '#100B19'
  // });

  const CustomMenu = () => null;

  const handleSendMessage = (message: string) => {
    const receiverID = 'RECEIVER_UID';
    const receiverType = CometChat.RECEIVER_TYPE.USER;

    const textMessage = new CometChat.TextMessage(receiverID, message, receiverType);

    CometChat.sendMessage(textMessage).then(
      (message) => console.log('Message sent successfully:', message),
      (error) => console.log('Message sending failed with error:', error)
    );
  };

  // useEffect(() => {
  //   const getSelectedConversation = async () => {
  //     console.log(conversationRef, 'conversationRef');
  //     if (conversationRef.current) {
  //       const currentConversation = await CometChat.getConversation(conversationRef.current.conversationId);
  //       if (currentConversation && currentConversation.conversationWith) {
  //         setSelectedUserName(currentConversation.conversationWith.name);
  //       }
  //     }
  //   };

  //   // Call the function to get the selected conversation on mount
  //   getSelectedConversation();

  //   // Optionally, you can set an interval to check for conversation changes
  //   const interval = setInterval(getSelectedConversation, 3000); // Check every 3 seconds

  //   return () => clearInterval(interval); // Clean up the interval on unmount
  // }, [conversationRef.current]);

  return (
    <div>
      {user && (
        <ChatFeatureMainBox>
          <CometChatThemeContext.Provider value={{ theme }}>
            <CometChatConversationsWithMessages
              // ref={conversationRef}
              isMobileView={isMobileView}
              conversationsConfiguration={
                new ConversationsConfiguration({
                  conversationsStyle: conversationsStyle,
                  receiptStyle: receiptStyle,
                  hideSeparator: true,
                  listItemStyle: {
                    padding: '12px 0'
                  },
                  // onItemClick: handleItemClick,
                  menu: <CustomMenu />
                })
              }
              messagesConfiguration={
                new MessagesConfiguration({
                  messageHeaderConfiguration: new MessageHeaderConfiguration({
                    messageHeaderStyle: new MessageHeaderStyle({
                      backButtonIconTint: 'red'
                    })
                  }),
                  messageComposerView: () => <CustomComposerView onSendMessage={handleSendMessage} modelName={'Zia'} />,
                  messagesStyle: messagesStyle,
                  messageListConfiguration: new MessageListConfiguration({
                    messageInformationConfiguration: new MessageInformationConfiguration({
                      listItemStyle: listItemStyle
                    })
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

export default ChatPoc;
