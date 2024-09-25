'use client';
import {
  CometChatConversationsWithMessages,
  CometChatThemeContext,
  CometChatUIKit,
  ConversationsConfiguration,
  ConversationsStyle,
  ListItemStyle,
  MessageComposerConfiguration,
  MessageHeaderConfiguration,
  MessageHeaderStyle,
  MessageInformationConfiguration,
  MessageListConfiguration,
  MessagesConfiguration,
  MessagesStyle,
  ReceiptStyle,
  UIKitSettingsBuilder
} from '@cometchat/chat-uikit-react';
import coreTheme from 'themes/theme';
import { useContext, useEffect, useState } from 'react';
import { CometChat, User } from '@cometchat/chat-sdk-javascript';
import { COMETCHAT_CONSTANTS } from 'views/protectedViews/callingFeature/CallInitialize';
import { ChatFeatureMainBox } from './ChatPoc.styled';
import { useMediaQuery } from '@mui/material';
import { useSession } from 'next-auth/react';
import { User as AuthUser } from 'app/(guest)/layout';

const ChatPoc = () => {
  const authSession = useSession();
  const customerUser = (authSession?.data?.user as AuthUser)?.picture;
  const customerData = JSON.parse(customerUser || '{}');
  console.log('customerData', customerData);
  const [user, setUser] = useState(false);
  const [userData, setUserData] = useState<User>();
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
          user = await CometChatUIKit.login(customerData.customer_user_name || 'stevie-S7nzwtH');
        }

        const c_user = await CometChat.getUser('kendall-GLz6dMd');
        console.log(c_user, 'c_user');

        setUserData(c_user);
        CometChatUIKit.getLoggedinUser().then((user) => {
          if (!user) {
            CometChatUIKit.login('stevie-S7nzwtH');
          }
        });
      } catch (e) {
        console.log('error', e);
      }
    };
    init();
  }, []);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const usersRequest = new CometChat.UsersRequestBuilder()
  //       .setLimit(100)
  //       .setStatus(CometChat.USER_STATUS.ONLINE) // Fetch only online users
  //       .build();

  //     try {
  //       const userDataList = await usersRequest.fetchNext();
  //       // Filter out users whose role is "model"
  //       const filteredUsers = userDataList.filter((item) => {
  //         return item.getStatus() === CometChat.USER_STATUS.ONLINE && item.role !== 'model';
  //       });
  //       console.log(filteredUsers, '::::::::::::filteredUsers');

  //       setUsers(filteredUsers);
  //     } catch (error) {
  //       console.error('Error fetching users:', error);
  //     }
  //   };

  //   fetchUsers();
  // }, []);

  // const handleItemClick = async (conversation: any) => {
  //   console.log(conversation, 'conversation');
  //   const data = await CometChat.getUser(conversation.conversationWith.uid);
  //   console.log(data, '::::::::::::data');
  //   setUserData(data);
  //   // // conversation object contains the selected user's details
  //   // const selectedUser = conversation.conversationWith.name;
  //   // setSelectedUserName(selectedUser);
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
  // const receiverUser = async (): User => {
  //   const c_user = await CometChat.getUser('kendall-GLz6dMd');
  //   console.log(c_user, 'c_user');

  //   setUserData(c_user);

  //   return c_user;
  // };

  // const handleSendMessage = (message: string) => {
  //   const receiverID = 'RECEIVER_UID';
  //   const receiverType = CometChat.RECEIVER_TYPE.USER;

  //   const textMessage = new CometChat.TextMessage(receiverID, message, receiverType);

  //   CometChat.sendMessage(textMessage).then(
  //     (message) => console.log('Message sent successfully:', message),
  //     (error) => console.log('Message sending failed with error:', error)
  //   );
  // };

  // CometChat.getLoggedinUser().then(
  //   (userData) => {
  //     console.log('Logged in user details:', userData);
  //     const senderUID = userData?.uid; // sender's user ID
  //     console.log('senderUID', senderUID);
  //   },
  //   (error) => {
  //     console.log('Error fetching logged in user details:', error);
  //   }
  // );

  // CometChat.addMessageListener(
  //   'senderUID',
  //   new CometChat.MessageListener({
  //     onTextMessageReceived: (message) => {
  //       console.log('Message received:', message);
  //       const receiverUID = message?.receiver?.uid;
  //       const senderUID = message?.sender?.uid;
  //     }
  //   })
  // );

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

  // useEffect(() => {
  //   const fetchConversations = async () => {
  //     try {
  //       const conversationRequest = new CometChat.ConversationsRequestBuilder()
  //         .setLimit(50) // You can adjust the limit based on your needs
  //         .build();

  //       const conversations = await conversationRequest.fetchNext();

  //       if (conversations && conversations.length > 0) {
  //         // Assuming the first conversation is the active one or define your logic
  //         setActiveConversation(conversations[0]);
  //         console.log('Active Conversation:', conversations[0]);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching conversations:', error);
  //     }
  //   };

  //   fetchConversations();
  // }, []);
  // console.log('users', users);

  return (
    <div>
      {user && (
        <ChatFeatureMainBox>
          <CometChatThemeContext.Provider value={{ theme }}>
            <CometChatConversationsWithMessages
              user={userData}
              messageText="Conversations With Messages"
              // ref={conversationRef}
              isMobileView={isMobileView}
              conversationsConfiguration={
                new ConversationsConfiguration({
                  conversationsRequestBuilder: new CometChat.ConversationsRequestBuilder().setConversationType('user').setLimit(10),
                  conversationsStyle: conversationsStyle,
                  receiptStyle: receiptStyle,
                  hideSeparator: true,
                  listItemStyle: {
                    padding: '12px 0'
                  },
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
                  // messageComposerView: () => <CustomComposerView onSendMessage={handleSendMessage} modelName={userData?.getName()} />,
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

              // usersConfiguration={
              //   new UsersConfiguration({
              //     onItemClick: handleOnItemClick,
              //     usersRequestBuilder: new CometChat.UsersRequestBuilder()
              //       .sortBy("name")
              //       .setLimit(10),
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
