'use client';
import { useEffect, useState } from 'react';
import { orderBy, collection, query, onSnapshot, where } from 'firebase/firestore';
import { firebase_db, generateFirebaseId } from 'utils/firebase/config';
import ChatSidbar from './ChatSidbar';
import { ChatMainBoxContainer } from './Chat.styled';
import ChatDescription from './ChatDescription';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { User } from 'app/(guest)/layout';
import { ErrorMessage } from 'constants/common.constants';
import { toast } from 'react-toastify';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
// import { ChatService, IMessage, IMessageResponse } from 'services/chatServices/chat.service';
import { ChatService, IMessage } from 'services/chatServices/chat.service';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import { useAuthContext } from '../../../../context/AuthContext';

const ChatFeature = () => {
  const { isCustomer } = useAuthContext();

  // const [messageInput, setMessageInput] = useState<string>('');
  const [, setMessageInput] = useState<string>('');
  const [messages, setMessages] = useState<IMessage[]>([]);
  // const [chatData, setChatData] = useState<IMessageResponse>();
  const [isSentMessage, setIsSentMessage] = useState<boolean>(false);
  const [lastTimestamp, setLastTimestamp] = useState<string | null>(null);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [selectedModel, setSelectedModel] = useState<boolean>(true);
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const [modelDetails, setModelDetails] = useState<ModelDetailsResponse>();

  const handleModelSelect = (model: boolean) => {
    setSelectedModel(model);
  };

  const authSession = useSession();
  const customerUser = (authSession?.data?.user as User)?.picture;
  const customerData = JSON.parse(customerUser || '{}');

  const path = usePathname();
  const modelUserName = path?.split('/')?.[2];

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      if (data) {
        setToken({ id: data.id, token: data.token });
      }
    };

    userToken();
  }, []);

  useEffect(() => {
    const modelDetails = async () => {
      const modelData = await ModelDetailsService.getModelDetails(token.token, isCustomer, { user_name: modelUserName });
      if (modelData) {
        setModelDetails(modelData.data);
      }
    };
    if (token.token && modelUserName) {
      modelDetails();
    }
  }, [isCustomer, token.id, token.token, modelUserName]);

  // const userChatsRef = doc(firebase_db, 'messages', customerData.customer_user_name);
  // useEffect(() => {
  //   const messagesRef = collection(firbase_db, 'messages');
  //   // Reference to the messages collection
  //   const q = query(messagesRef, orderBy('createdAt', 'asc'));

  //   // Real-time listener for Firestore collection
  //   const unsubscribe = onSnapshot(q, (snapshot) => {
  //     console.log('snapshotcall', snapshot);
  //     const messagesData: any[] = [];
  //     snapshot.forEach((doc) => {
  //       console.log('doc data', doc.data());

  //       messagesData.push({ id: doc.id, ...doc.data() });
  //     });
  //     setMessages(messagesData);
  //   });

  //   // Clean up the listener on unmount
  //   return () => unsubscribe();
  // }, [isSentMessage]);

  // useEffect(() => {
  //   const messagesRef = collection(firebase_db, 'messages');
  //   // Reference to the messages collection

  //   console.log('calledasdsassdd');
  //   const q = query(messagesRef, orderBy('createdAt', 'asc'));

  //   // Real-time listener for Firestore collection
  //   const unsubscribe = onSnapshot(q, (snapshot) => {
  //     if (!snapshot.empty) {
  //       const messagesData: any[] = snapshot.docs.map((doc) => {
  //         return { id: doc.id, ...doc.data() }; // Extract the document id and data
  //       });
  //       console.log('Messages data:', messagesData);
  //       setMessages(messagesData);
  //     } else {
  //       console.log('No messages found');
  //       setMessages([]); // Handle empty snapshot case
  //     }
  //   });

  //   // Clean up the listener on unmount
  //   return () => unsubscribe();
  // }, [isSentMessage, userChatsRef]);

  // useEffect(() => {
  //   const unSub = onSnapshot(doc(firebase_db, 'messages', customerData.customer_user_name), async (res) => {
  //     console.log(res, '::::::::::::::::::::::');
  //   });

  //   return () => {
  //     unSub();
  //   };
  // }, [isSentMessage]);

  const handleMessageInputChange = (input: string) => {
    setMessageInput(input);
    sendMessageHandler(input);
  };

  const sendMessageHandler = async (text: string) => {
    try {
      const params = {
        senderUID: customerData?.customer_user_name,
        receiverUID: modelUserName,
        message: text,
        message_type: 'text'
      };
      if (token.token) {
        const data = await ChatService.sendChatMessage(params, token.token);
        if (data.data.createdAt) {
          setLastTimestamp(data.data.createdAt);
        }

        setIsSentMessage(!isSentMessage);
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };

  async function fetchMessages() {
    const bodyData = {
      senderUID: customerData.customer_user_name,
      receiverUID: modelUserName
    };
    const chatHistory = await ChatService.fetchChatMessage(bodyData, token.token);
    if (chatHistory?.length > 0) {
      setMessages(chatHistory);
      setLastTimestamp(chatHistory[chatHistory.length - 1]?.createdAt?.toString());
    }
  }
  useEffect(() => {
    if (token.token) fetchMessages();
  }, [customerData.customer_user_name, modelUserName, token.token]);

  useEffect(() => {
    if (customerData.customer_user_name && modelUserName) {
      const messagesQuery = query(
        collection(firebase_db, 'messages'),
        where('senderUID', 'in', [customerData.customer_user_name, modelUserName]),
        where('receiverUID', 'in', [customerData.customer_user_name, modelUserName]),
        lastTimestamp ? where('createdAt', '>', new Date(lastTimestamp)) : orderBy('createdAt'),
        orderBy('createdAt')
      );

      const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
        snapshot.forEach((doc) => {
          const newChatData: IMessage[] = [
            ...messages,
            {
              ...doc.data(),
              id: generateFirebaseId(),
              createdAt: doc.data().createdAt?.toDate().toISOString()
            } as IMessage
          ];
          setMessages(newChatData);
          setLastTimestamp(doc?.data()?.createdAt?.toDate().toISOString());
        });
      });

      return () => unsubscribe();
    }
  }, [messages, lastTimestamp, customerData.customer_user_name, modelUserName]);

  return (
    <ChatMainBoxContainer>
      {isSmUp || !selectedModel ? (
        <ChatSidbar onSelectModel={handleModelSelect} modelDetails={modelDetails} />
      ) : (
        <ChatDescription handleMessageInputChange={handleMessageInputChange} modelDetails={modelDetails} messages={messages} />
      )}
      {isSmUp && <ChatDescription handleMessageInputChange={handleMessageInputChange} modelDetails={modelDetails} messages={messages} />}
    </ChatMainBoxContainer>
  );
};

export default ChatFeature;
