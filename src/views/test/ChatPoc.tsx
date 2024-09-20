'use client';
import {
  CometChatConversationsWithMessages,
  CometChatThemeContext,
  CometChatUIKit,
  ConversationsConfiguration,
  ConversationsStyle,
  ListItemStyle,
  MessageInformationConfiguration,
  MessageListConfiguration,
  MessageListStyle,
  MessagesConfiguration,
  MessagesStyle,
  // ContactsConfiguration,
  // ContactsStyle,
  // ConversationsConfiguration,
  // ConversationsStyle,
  UIKitSettingsBuilder
} from '@cometchat/chat-uikit-react';
import { useContext, useEffect, useState } from 'react';
import { COMETCHAT_CONSTANTS } from 'views/protectedViews/callingFeature/CallInitialize';
import { ChatFeatureMainBox } from './ChatPoc.styled';

const ChatPoc = () => {
  const [user, setUser] = useState(false);

  let { theme } = useContext(CometChatThemeContext);

  theme.palette.setMode('dark'); // Light mode
  theme.typography.setFontFamily('Manrope'); // Correctly set font family
  // theme.typography.caption1 = '12px'; // You can apply specific styling if required
  theme.palette.setPrimary({ light: '#E9E8EB', dark: '#E9E8EB' }); // Primary palette
  theme.palette.setAccent({ light: '#E9E8EB', dark: '#E9E8EB' }); // Accent palette
  theme.palette.setBackground({ light: 'var(--Surface-cards, #100B19)', dark: 'var(--Surface-cards, #100B19)' }); // Background color

  // Title1 Typo
  theme.typography.setTitle1({ fontFamily: "'Manrope', sans-serif", fontSize: '20px', fontWeight: '600' });

  // Title2 Typo  //set Contact FONT
  theme.typography.setTitle2({ fontFamily: "'Manrope', sans-serif", fontSize: '16px', fontWeight: '700' });

  // Contact sub title set
  theme.typography.setSubtitle2({ fontFamily: "'Manrope', sans-serif", fontSize: '14px', fontWeight: '500' });

  //Time label typo set
  theme.typography.setCaption2({ fontFamily: "'Manrope', sans-serif", fontSize: '12px', fontWeight: '500' });

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
        console.log(user, 'user');
      } catch (e) {
        console.log('error', e);
      }
    };
    init();
  }, []);

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
    // background: 'var(--Surface-cards, #100B19)',
    titleTextColor: '#B7B5B9'
  });

  const messagesStyle = new MessagesStyle({
    height: '100%'
    // background: 'var(--Surface-cards, #100B19)'
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

  return (
    <div>
      {user && (
        <ChatFeatureMainBox>
          <CometChatThemeContext.Provider value={{ theme }}>
            <CometChatConversationsWithMessages
              conversationsConfiguration={
                new ConversationsConfiguration({
                  conversationsStyle: conversationsStyle,
                  hideSeparator: true,
                  listItemStyle: {
                    padding: '12px 0'
                  }
                })
              }
              messagesConfiguration={
                new MessagesConfiguration({
                  messagesStyle: messagesStyle,
                  messageListConfiguration: new MessageListConfiguration({
                    messageListStyle: new MessageListStyle({ nameTextColor: 'red' }),
                    messageInformationConfiguration: new MessageInformationConfiguration({
                      listItemStyle: new ListItemStyle({
                        background: 'transparent',
                        titleColor: '#E9E8EB',
                        titleFont: 'Manrope'
                      })
                    })
                  })
                })
              }
              // theme: theme,
              // conversationsConfiguration={
              //   new ConversationsConfiguration({
              //     conversationsStyle: conversationsStyle
              //   })
              // }
              // startConversationConfiguration={
              //   new ContactsConfiguration({
              //     contactsStyle: contactsStyle,
              //     hideSubmitButton: true
              //   })
              // }
            />
          </CometChatThemeContext.Provider>
        </ChatFeatureMainBox>
      )}
    </div>
  );
};

export default ChatPoc;
