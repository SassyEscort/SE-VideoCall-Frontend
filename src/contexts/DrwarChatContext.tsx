'use client';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { ChatService, ISocketMessage } from 'services/chatServices/chat.service';
import { io, Socket } from 'socket.io-client';
import { SelectedModelChatDetails } from 'views/guestViews/homePage/homeImageCards';
import { useAuthContext } from './AuthContext';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { IHistoryOfChats } from 'views/protectedModelViews/verification/verificationTypes';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';

export type DrawerChatContextProps = {
  selectedModel: SelectedModelChatDetails | undefined;
  messages: ISocketMessage[];
  historyOfModels: IHistoryOfChats[];
  handleSendChatMessage: (input: string, type: string) => void;
  handleSelectModel: (model: SelectedModelChatDetails | undefined) => void;
  selectedModelRef: React.MutableRefObject<SelectedModelChatDetails | undefined>;
};

const DrawerContext = createContext<DrawerChatContextProps>({
  selectedModel: {
    name: '',
    photoUrl: '',
    user_Name: '',
    opne: false
  },
  messages: [],
  historyOfModels: [],
  handleSendChatMessage: (input: string, type: string) => {},
  handleSelectModel: (model: SelectedModelChatDetails | undefined) => {},
  selectedModelRef: { current: { name: '', photoUrl: '', user_Name: '', opne: false } }
});

export const DrawerChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, token, handleSetBalance } = useAuthContext();
  const userDetails = user && JSON.parse(user);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<ISocketMessage[]>([]);
  const [selectedModel, setSelectedModel] = useState<SelectedModelChatDetails | undefined>();
  const [historyOfModels, setHistoryOfModels] = useState<IHistoryOfChats[]>([]);

  const selectedModelRef = useRef<SelectedModelChatDetails | undefined>();

  const handleChatedModleHistoryList = async (searchQuery?: string) => {
    try {
      if (token) {
        const params = {
          user_name: userDetails?.customer_user_name,
          search: searchQuery || ''
        };
        const data = await ChatService.chatHistoryMessage(params, token.token);
        setHistoryOfModels(data?.data?.history_list);
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };

  const handleSendChatMessage = (input: string, type: string) => {
    if (socket && input.trim() !== '') {
      const newMessage = {
        sender_id: userDetails.customer_user_name,
        receiver_id: selectedModel?.user_Name,
        message: type === 'text' ? input : '',
        message_type: type,
        receiver_type: 'model',
        sender_type: 'customers',
        link: type !== 'text' ? input : ''
      };

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          _id: '',
          id: '123',
          sender_id: newMessage.sender_id,
          receiver_id: newMessage.receiver_id ?? '',
          sender_type: newMessage.sender_type,
          receiver_type: newMessage.receiver_type,
          message_content: newMessage.message,
          seen: true,
          message_type: type,
          time_stamp: new Date().toISOString(),
          __v: 0,
          link: newMessage.link
        }
      ]);
      socket.emit('chat-message', newMessage);
      if (newMessage.message_type !== 'text') {
        handleCredits();
      }
      handleChatedModleHistoryList();
    }
  };

  const handleSelectModel = (model: SelectedModelChatDetails | undefined) => {
    selectedModelRef.current = model;
    setSelectedModel(model);
    setMessages([]);
  };

  const handleCredits = async () => {
    const getModel = await ModelDetailsService.getModelWithDraw(token.token);

    if (getModel?.data?.credits === null) {
      handleSetBalance(0);
    } else {
      handleSetBalance(getModel?.data?.credits);
    }
  };

  useEffect(() => {
    const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_BASE_URL!);
    setSocket(newSocket);

    newSocket.on('connect', () => {
      newSocket.emit('join', userDetails?.customer_user_name);

      // Emit the getChatHistory event when connected
      newSocket.emit('getChatHistory', {
        userId: userDetails?.customer_user_name,
        otherUserId: selectedModel?.user_Name
      });
    });

    newSocket.on('disconnect', () => {});

    newSocket.on('chat-message', (message: ISocketMessage) => {
      if (message.sender_id === selectedModel?.user_Name) {
        setMessages((prevMessages) => {
          return [...prevMessages.filter((item) => item.id !== '123'), message];
        });
      } else if (message.sender_id === userDetails.customer_user_name) {
        setMessages((prevMessages) => {
          return [...prevMessages.filter((item) => item.id !== '123'), message];
        });
      }
      handleChatedModleHistoryList();
    });

    // Handle the received chat history
    newSocket.on('chatHistory', (chatHistory: ISocketMessage[]) => {
      setMessages(chatHistory.sort((a, b) => Number(new Date(a.time_stamp)) - Number(new Date(b.time_stamp))));
    });

    return () => {
      newSocket.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedModel, userDetails?.customer_user_name]);

  useEffect(() => {
    if (token) {
      handleChatedModleHistoryList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_BASE_URL!);
    setSocket(newSocket);

    newSocket.on('connect', () => {
      newSocket.emit('join', userDetails?.customer_user_name);
    });

    // // Emit message-seen events for all unseen messages in the current chats
    const unseenMessages = messages.filter((msg) => msg.sender_id !== selectedModel?.user_Name && !msg.seen);

    unseenMessages.forEach((msg) => {
      newSocket.emit('mark-message-seen', { id: msg.id, sender_id: msg.sender_id, receiver_id: msg.receiver_id });
    });

    newSocket.on('message-seen', ({ id }) => {
      setMessages((prev) => {
        const updatedMessages = prev.map((message) => {
          if (!message.seen) {
            return {
              ...message,
              seen: true
            };
          }
          return message;
        });

        return updatedMessages;
      });
    });

    newSocket.on('disconnect', () => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages, selectedModel]);

  useEffect(() => {
    if (socket) {
      const unseenMessages = messages
        .filter(
          (msg) =>
            msg.sender_id ===
              (msg.sender_id === userDetails?.customer_user_name ? userDetails?.customer_user_name : selectedModel?.user_Name) && !msg.seen
        )
        .map((msg) => msg._id);

      if (unseenMessages.length > 0) {
        socket.emit('mark-messages-seen', {
          messageIds: unseenMessages,
          sender_id: userDetails.customer_user_name
        });
        handleChatedModleHistoryList();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetails?.customer_user_name, messages, socket]);

  return (
    <DrawerContext.Provider
      value={{
        selectedModelRef,
        messages,
        historyOfModels,
        selectedModel,
        handleSendChatMessage,
        handleSelectModel
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawerChatFeatureContext = (): DrawerChatContextProps => {
  const context = useContext(DrawerContext);
  return context;
};
