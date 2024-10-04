'use client';
import { useEffect, useState } from 'react';
import { orderBy, collection, query, onSnapshot } from 'firebase/firestore';
import { firbase_db } from 'utils/firebase/config';
import { Message } from 'yup';
import ChatSidbar from './ChatSidbar';
import { ChatMainBoxContainer } from './Chat.styled';
import ChatDescription from './ChatDescription';

const ChatFeature = () => {
  const [messages, setMessages] = useState<Message[]>([]);

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
      <ChatSidbar />

      <ChatDescription />
    </ChatMainBoxContainer>
  );
};

export default ChatFeature;
