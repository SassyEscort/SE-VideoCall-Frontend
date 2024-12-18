import { io, Socket } from 'socket.io-client';
import { ISocketMessage } from './chat.service';
import { IHistoryOfChats } from 'views/protectedModelViews/verification/verificationTypes';

export class SocketService {
  private static socket: Socket | null = null;

  // Initialize the socket connection
  static InitializeSocket = (): Socket | null => {
    if (!this.socket) {
      this.socket = io(process.env.NEXT_PUBLIC_SOCKET_BASE_URL!);
    }
    return this.socket;
  };

  // Join a room
  static JoinRoom = (customerUserName: string): void => {
    const initializeSocketData = this.InitializeSocket();
    if (initializeSocketData) {
      initializeSocketData.on('connect', () => {
        initializeSocketData.emit('join', customerUserName);
      });
    }
  };

  // Emit unseen messages as seen
  static EmitUnseenMessages = (messages: ISocketMessage[], userId: string): void => {
    if (!this.socket) return;
    const unseenMessages = messages.filter((msg) => msg.sender_id !== userId && !msg.seen);
    unseenMessages.forEach((msg) => {
      this.socket?.emit('mark-message-seen', { id: msg.id, sender_id: msg.sender_id, receiver_id: msg.receiver_id });
    });
  };

  // Listen to message-seen event
  static MessageSeen = (messages: ISocketMessage[]): ISocketMessage[] | null => {
    let newSocket: Socket | null = this.socket;
    if (this.socket) {
      newSocket = this.socket;
    } else {
      newSocket = this.InitializeSocket();
    }
    let updatedMessages: ISocketMessage[] = [];
    if (newSocket) {
      newSocket.on('message-seen', () => {
        updatedMessages = messages.map((message) => {
          if (!message.seen) {
            return { ...message, seen: true };
          }
          return message;
        });
      });
    }
    return updatedMessages;
  };

  // Emit Get Chat History
  static GetChatHistoryOFConnetedUser = (customerId: string, modelUserId: string): void => {
    let newSocket: Socket | null = this.socket;
    if (this.socket) {
      newSocket = this.socket;
    } else {
      newSocket = this.InitializeSocket();
    }
    !newSocket
      ? ''
      : newSocket.emit('getChatHistory', {
          userId: customerId,
          otherUserId: modelUserId
        });
  };

  // Emit Get Chat History
  static ChatMessageSend = (
    customerId: string,
    modelUserId: string,
    selectedModelDetails: IHistoryOfChats,
    prevMessages: ISocketMessage[]
  ): ISocketMessage[] => {
    let newSocket: Socket | null = this.socket;
    let newMessge: ISocketMessage[] = [];
    if (this.socket) {
      newSocket = this.socket;
    } else {
      newSocket = this.InitializeSocket();
    }
    !newSocket
      ? ''
      : newSocket.on('chat-message', (message: ISocketMessage) => {
          if (
            message.sender_id ===
            (selectedModelDetails.receiver_id === customerId
              ? selectedModelDetails.sender_id
              : selectedModelDetails.receiver_id || modelUserId)
          ) {
            newMessge = [...prevMessages.filter((item) => item.id !== '123'), message];
          } else if (message.sender_id === customerId) {
            newMessge = [...prevMessages.filter((item) => item.id !== '123'), message];
          }
          //   handleChatedModleHistoryList();
        });
    return newMessge;
  };

  // Disconnect the socket
  static disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
      console.log('Socket disconnected');
    }
  }
}
