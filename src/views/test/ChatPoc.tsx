'use client';
import {
  CometChatConversationsWithMessages,
  CometChatThemeContext,
  CometChatUIKit,
  ContactsConfiguration,
  ContactsStyle,
  ConversationsConfiguration,
  ConversationsStyle,
  UIKitSettingsBuilder
} from '@cometchat/chat-uikit-react';
import { useContext, useEffect, useState } from 'react';
import { COMETCHAT_CONSTANTS } from 'views/protectedViews/callingFeature/CallInitialize';

const ChatPoc = () => {
  const [user, setUser] = useState(false);

  let { theme } = useContext(CometChatThemeContext);

  theme.palette.setMode('light'); // Light mode
  theme.typography.fontFamily = "'Manrope', sans-serif"; // Correctly set font family
  // theme.typography.caption1 = '12px'; // You can apply specific styling if required
  theme.palette.setPrimary({ light: '#E9E8EB', dark: '#E9E8EB' }); // Primary palette
  theme.palette.setAccent({ light: '#E9E8EB', dark: '#E9E8EB' }); // Accent palette

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

  const conversationsStyle = new ConversationsStyle({
    width: '100%',
    height: '100%',
    background: '#100B19',
    titleTextColor: '#fff'
  });

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
        <>
          <CometChatThemeContext.Provider value={{ theme }}>
            <CometChatConversationsWithMessages
              conversationsConfiguration={
                new ConversationsConfiguration({
                  conversationsStyle: conversationsStyle
                })
              }
              // startConversationConfiguration={
              //   new ContactsConfiguration({
              //     contactsStyle: contactsStyle,
              //     hideSubmitButton: true
              //   })
              // }
            />
          </CometChatThemeContext.Provider>
        </>
      )}
    </div>
  );
};

export default ChatPoc;
