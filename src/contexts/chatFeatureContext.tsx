'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useAuthContext } from './AuthContext';
import { useParams } from 'next/navigation';
import { io, Socket } from 'socket.io-client';
import { ChatService, ISocketMessage } from 'services/chatServices/chat.service';
import { IHistoryOfChats, ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';

interface ChatFeatureContextProps {
  selectedModel: boolean;
  userId: string;
  modelDetails: ModelDetailsResponse | undefined;
  historyOfModels: IHistoryOfChats[];
  selectedModelDetails: IHistoryOfChats;
  messages: ISocketMessage[];
  handleModelSelect: (model: boolean) => void;
  handleSelectedModelDetails: (model: IHistoryOfChats) => void;
  handleMessageInputChange: (input: string) => void;
}

const initialState: ChatFeatureContextProps = {
  userId: '',
  selectedModel: true,
  modelDetails: {
    id: 0,
    gender: '',
    name: '',
    country: {
      id: '',
      name: '',
      isAddOption: undefined
    },
    nationality: {
      id: '',
      name: '',
      isAddOption: undefined
    },
    documents: [],
    bio: '',
    email: '',
    dob: '',
    languages: [],
    photos: [],
    verification_step: '',
    video_call_prices: [],
    email_verified: 0,
    updated_at: '',
    is_online: 0,
    user_name: '',
    profile_status: '',
    rejection_reason: '',
    favourite: 0,
    rating: 0,
    model_ratings: {
      model_rating_list: [],
      model_rating_info: [],
      aggregate: {
        total_rows: 0,
        page_size: 0,
        offset: 0
      }
    }
  },
  historyOfModels: [],
  messages: [],
  selectedModelDetails: {
    id: '',
    sender_id: '',
    receiver_id: '',
    message_content: '',
    seen: false,
    message_type: '',
    time_stamp: '',
    name: '',
    profile_pic: '',
    unread_count: 0
  },
  handleModelSelect: () => {},
  handleSelectedModelDetails: () => {},
  handleMessageInputChange: () => {}
};

const ChatFeatureContext = createContext(initialState);

export const ChatFeatureProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isCustomer, token, user } = useAuthContext();
  const userDetails = user && JSON.parse(user);
  const { id: userId } = useParams();

  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<ISocketMessage[]>([]);
  const [selectedModel, setSelectedModel] = useState<boolean>(true);
  const [modelDetails, setModelDetails] = useState<ModelDetailsResponse | undefined>();
  const [historyOfModels, setHistoryOfModels] = useState<IHistoryOfChats[]>([]);
  const [selectedModelDetails, setSelectedModelDetails] = useState<IHistoryOfChats>({} as IHistoryOfChats);

  const handleModelSelect = (model: boolean) => {
    setMessages([]);
    setSelectedModel(model);
  };

  const handleSelectedModelDetails = (model: IHistoryOfChats) => {
    setSelectedModelDetails(model);
  };

  const sendMessage = (input: string) => {
    if (socket && input.trim() !== '') {
      const newMessage = {
        sender_id: userDetails.customer_user_name,
        receiver_id: selectedModelDetails?.receiver_id || userId[0],
        message: input,
        message_type: 'text',
        receiver_type: isCustomer ? 'model' : 'customers',
        sender_type: isCustomer ? 'customers' : 'model'
      };

      socket.emit('chat-message', newMessage);
      handleChatedModleList();
    }
  };

  const handleMessageInputChange = (input: string) => {
    sendMessage(input);
  };

  const handleChatedModleList = async () => {
    try {
      if (token.token) {
        const data = await ChatService.chatHistoryMessage(userDetails.customer_user_name, token.token);
        setHistoryOfModels(data.data);
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };

  useEffect(() => {
    const modelDetails = async () => {
      const modelData = await ModelDetailsService.getModelDetails(token.token, isCustomer, { user_name: userId[0] });
      if (modelData) {
        setModelDetails(modelData.data);
      }
    };
    if (token.token && userId[0]) {
      modelDetails();
      handleChatedModleList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCustomer, token.id, token.token, userId[0]]);

  useEffect(() => {
    const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_BASE_URL!);
    setSocket(newSocket);

    newSocket.on('connect', () => {
      newSocket.emit('join', userDetails.customer_user_name);
    });

    newSocket.on('disconnect', () => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages, userId]);

  useEffect(() => {
    if (socket) {
      const unseenMessages = messages.filter((msg) => msg.sender_id === userDetails.customer_user_name && !msg.seen).map((msg) => msg._id); // Get array of message IDs

      if (unseenMessages.length > 0) {
        socket.emit('mark-messages-seen', {
          messageIds: unseenMessages,
          sender_id: userDetails.customer_user_name
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages, socket]);

  useEffect(() => {
    const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_BASE_URL!);
    setSocket(newSocket);

    newSocket.on('connect', () => {
      newSocket.emit('join', userDetails.customer_user_name);

      // Emit the getChatHistory event when connected
      newSocket.emit('getChatHistory', {
        userId: userDetails.customer_user_name,
        otherUserId: selectedModelDetails?.receiver_id || userId[0]
      });
    });

    newSocket.on('disconnect', () => {});

    newSocket.on('chat-message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Handle the received chat history
    newSocket.on('chatHistory', (chatHistory) => {
      setMessages(chatHistory);
    });

    return () => {
      newSocket.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId[0], selectedModelDetails]);

  return (
    <ChatFeatureContext.Provider
      value={{
        userId: userId?.[0] || '',
        messages,
        modelDetails,
        historyOfModels,
        selectedModel,
        selectedModelDetails,
        handleMessageInputChange,
        handleModelSelect,
        handleSelectedModelDetails
      }}
    >
      {children}
    </ChatFeatureContext.Provider>
  );
};

export const useChatFeatureContext = (): ChatFeatureContextProps => {
  const context = useContext(ChatFeatureContext);
  return context;
};
