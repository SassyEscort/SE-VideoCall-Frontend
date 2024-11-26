'use client';

import { createContext, MutableRefObject, useContext, useEffect, useRef, useState } from 'react';
import { useAuthContext } from './AuthContext';
import { useParams } from 'next/navigation';
import { io, Socket } from 'socket.io-client';
import { ChatService, ISocketMessage } from 'services/chatServices/chat.service';
import { IHistoryOfChats, ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { debounce } from 'lodash';

interface ChatFeatureContextProps {
  selectedModel: boolean;
  userId: string;
  modelDetails: ModelDetailsResponse | undefined;
  historyOfModels: IHistoryOfChats[];
  selectedModelDetails: IHistoryOfChats;
  messages: ISocketMessage[];
  modelHistoryListSearch: string;
  handleModelSelect: (model: boolean) => void;
  handleSelectedModelDetails: (model: IHistoryOfChats) => void;
  handleMessageInputChange: (input: string) => void;
  handleHistoryModleListSearch: (searchQuery: string) => void;
  chatRef: MutableRefObject<null> | null;
}

const initialState: ChatFeatureContextProps = {
  userId: '',
  modelHistoryListSearch: '',
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
  chatRef: null,
  handleModelSelect: () => {},
  handleSelectedModelDetails: () => {},
  handleMessageInputChange: () => {},
  handleHistoryModleListSearch: () => {}
};

const ChatFeatureContext = createContext(initialState);

export const ChatFeatureProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isCustomer, token, user } = useAuthContext();
  const chatRef = useRef(null);
  const userDetails = user && JSON.parse(user);
  const { id: userId } = useParams();

  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<ISocketMessage[]>([]);
  const [selectedModel, setSelectedModel] = useState<boolean>(true);
  const [modelDetails, setModelDetails] = useState<ModelDetailsResponse | undefined>();
  const [historyOfModels, setHistoryOfModels] = useState<IHistoryOfChats[]>([]);
  const [selectedModelDetails, setSelectedModelDetails] = useState<IHistoryOfChats>({} as IHistoryOfChats);
  const [modelHistoryListSearch, setModelHistoryListSearch] = useState('');

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
        receiver_id:
          selectedModelDetails.receiver_id === userDetails.customer_user_name
            ? selectedModelDetails.sender_id
            : selectedModelDetails.receiver_id || userId[0],
        message: input,
        message_type: 'text',
        receiver_type: isCustomer ? 'model' : 'customers',
        sender_type: isCustomer ? 'customers' : 'model'
      };

      socket.emit('chat-message', newMessage);
      handleChatedModleHistoryList();
    }
  };

  const handleMessageInputChange = (input: string) => {
    sendMessage(input);
  };

  const handleHistoryModleListSearch = (input: string) => {
    setModelHistoryListSearch(input);
  };

  const debouncedChangeSearch = debounce((val: string) => {
    handleChatedModleHistoryList(val);
  }, 500);

  const handleChatedModleHistoryList = async (searchQuery?: string) => {
    try {
      if (token.token) {
        const params = {
          user_name: userDetails?.customer_user_name,
          search: searchQuery || ''
        };
        const data = await ChatService.chatHistoryMessage(params, token.token);
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
      handleChatedModleHistoryList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCustomer, token.id, token.token, userId[0]]);

  useEffect(() => {
    const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_BASE_URL!);
    setSocket(newSocket);

    newSocket.on('connect', () => {
      newSocket.emit('join', userDetails.customer_user_name);
    });

    // // Emit message-seen events for all unseen messages in the current chat
    const unseenMessages = messages.filter((msg) => msg.sender_id !== userId && !msg.seen);

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
  }, [messages, userId]);

  useEffect(() => {
    const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_BASE_URL!);
    setSocket(newSocket);

    newSocket.on('connect', () => {
      newSocket.emit('join', userDetails.customer_user_name);

      // Emit the getChatHistory event when connected
      newSocket.emit('getChatHistory', {
        userId: userDetails.customer_user_name,
        otherUserId:
          selectedModelDetails.receiver_id === userDetails.customer_user_name
            ? selectedModelDetails.sender_id
            : selectedModelDetails.receiver_id || userId[0]
      });
    });

    newSocket.on('disconnect', () => {});

    newSocket.on('chat-message', (message: ISocketMessage) => {
      if (
        message.sender_id ===
        (selectedModelDetails.receiver_id === userDetails.customer_user_name
          ? selectedModelDetails.sender_id
          : selectedModelDetails.receiver_id || userId[0])
      ) {
        setMessages((prevMessages) => [...prevMessages, message]);
      } else if (message.sender_id === userDetails.customer_user_name) {
        setMessages((prevMessages) => [...prevMessages, message]);
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
  }, [userId[0], selectedModelDetails]);

  useEffect(() => {
    debouncedChangeSearch(modelHistoryListSearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modelHistoryListSearch]);

  useEffect(() => {
    if (socket) {
      const unseenMessages = messages
        .filter(
          (msg) =>
            msg.sender_id ===
              (selectedModelDetails.receiver_id === userDetails.customer_user_name
                ? selectedModelDetails.sender_id
                : selectedModelDetails.receiver_id || userId[0]) && !msg.seen
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
  }, [userDetails.customer_user_name, messages, socket]);

  return (
    <ChatFeatureContext.Provider
      value={{
        chatRef,
        userId: userId?.[0] || '',
        messages,
        modelDetails,
        historyOfModels,
        selectedModel,
        selectedModelDetails,
        modelHistoryListSearch,
        handleMessageInputChange,
        handleModelSelect,
        handleSelectedModelDetails,
        handleHistoryModleListSearch
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
