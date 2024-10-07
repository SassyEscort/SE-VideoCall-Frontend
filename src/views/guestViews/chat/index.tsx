'use client';
import { useEffect, useState } from 'react';
import { orderBy, collection, query, onSnapshot, where } from 'firebase/firestore';
import { firebase_db } from 'utils/firebase/config';
import { Message } from 'yup';
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
import { ChatService, IMessageResponse } from 'services/chatServices/chat.service';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import { useAuthContext } from '../../../../context/AuthContext';

const ChatFeature = () => {
  const { isCustomer } = useAuthContext();

  const [messageInput, setMessageInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatData, setChatData] = useState<IMessageResponse>();
  const [isSentMessage, setIsSentMessage] = useState<boolean>(false);
  const [lastTimestamp, setLastTimestamp] = useState<string | null>(null);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [selectedModel, setSelectedModel] = useState<boolean>(true);
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const [modelDetails, setModelDetails] = useState<ModelDetailsResponse>();
  console.log(token, 'token');
  console.log(isCustomer, 'isCustomer');

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
      const modelData = await ModelDetailsService.getModelDetails(token.token, isCustomer);
      if (modelData) {
        console.log(modelData, 'modelData');
        setModelDetails(modelData.data);
      }
    };
    if (token.token) {
      modelDetails();
    }
  }, [isCustomer, token.id, token.token]);

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
    const res = await ChatService.fetchChatMessage(bodyData, token.token);
    console.log(res, ':::::::::res');
    // setMessages(res.data.data);
    // if (res.data.length > 0) {
    //   setLastTimestamp(res.data[res.data.data.length - 1].createdAt);
    // }
  }
  useEffect(() => {
    if (token.token) fetchMessages();
  }, [customerData.customer_user_name, modelUserName, token.token]);

  useEffect(() => {
    if (lastTimestamp) {
      const messagesQuery = query(
        collection(firebase_db, 'messages'),
        where('senderUID', 'in', [customerData.customer_user_name, modelUserName]),
        where('receiverUID', 'in', [customerData.customer_user_name, modelUserName]),
        where('createdAt', '>', new Date(lastTimestamp)),
        orderBy('createdAt')
      );

      const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc?.data(), 'doc.data()');
          setLastTimestamp(doc?.data()?.createdAt?._seconds?.toDate().toISOString());

          // setMessages((prevMessages) => [...prevMessages, doc.data()]);
          // setLastTimestamp(doc.data().createdAt.toDate().toISOString());
        });
      });

      return () => unsubscribe();
    }
  }, [lastTimestamp, customerData.customer_user_name, modelUserName]);

  return (
    <ChatMainBoxContainer>
      {isSmUp || !selectedModel ? (
        <ChatSidbar onSelectModel={handleModelSelect} modelDetails={modelDetails} />
      ) : (
        <ChatDescription handleMessageInputChange={handleMessageInputChange} />
      )}
      {isSmUp && <ChatDescription handleMessageInputChange={handleMessageInputChange} />}
    </ChatMainBoxContainer>
  );
};

export default ChatFeature;
