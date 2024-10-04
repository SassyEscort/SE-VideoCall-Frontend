'use client';
import { useEffect, useState } from 'react';
import { orderBy, collection, query, onSnapshot } from 'firebase/firestore';
import { firbase_db } from 'utils/firebase/config';
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

const ChatFeature = () => {
  const [messageInput, setMessageInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatData, setChatData] = useState<IMessageResponse>();
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });

  const authSession = useSession();
  const customerUser = (authSession?.data?.user as User)?.picture;
  const customerData = JSON.parse(customerUser || '{}');

  const path = usePathname();
  const modelUserName = path?.split('/')?.[2];

  useEffect(() => {
    // Reference to the messages collection
    const messagesRef = collection(firbase_db, 'messages');
    const q = query(messagesRef, orderBy('timestamp', 'asc'));

    // Real-time listener for Firestore collection
    const unsubscribe = onSnapshot(q, (snapshot) => {
      console.log('snapshotcall');
      const messagesData: any[] = [];
      snapshot.forEach((doc) => {
        console.log('doc data', doc.data());

        messagesData.push({ id: doc.id, ...doc.data() });
      });
      setMessages(messagesData);
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []);
  console.log('messages', messages, customerData, modelUserName);

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data.id, token: data.token });
    };

    userToken();
  }, []);

  const handleMessageInputChange = (input: string) => {
    setMessageInput(input);
    fetchEarningHistoryDetails(input);
  };
  const fetchEarningHistoryDetails = async (text: string) => {
    try {
      const params = {
        senderUID: customerData?.customer_user_name,
        receiverUID: modelUserName,
        message: text
      };
      if (token.token) {
        // setChatData(true);
        const data = await ChatService.sendChatMessage(params, token.token);
        console.log('data', data);
        // if (data) {
        //   setChatData(false);
        // }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };
  // useEffect(() => {

  //   fetchEarningHistoryDetails();
  // }, []);

  return (
    <ChatMainBoxContainer>
      <ChatSidbar />

      <ChatDescription handleMessageInputChange={handleMessageInputChange} />
    </ChatMainBoxContainer>
  );
};

export default ChatFeature;
