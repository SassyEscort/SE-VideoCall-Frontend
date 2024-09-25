import { CustomMessage, Group, MediaMessage, TextMessage, User } from '@cometchat/chat-sdk-javascript';

export interface IConversation {
  conversationId: string;
  conversationType: string;
  lastReadMessageId: string;
  lastMessage: TextMessage | MediaMessage | CustomMessage | any;
  conversationWith: Group | User;
  unreadMessageCount: number;
}

export interface IUser {
  hasBlockedMe: boolean;
  blockedByMe: boolean;
  deactivatedAt: number;
  uid: string;
  name: string;
  authToken: string;
  lastActiveAt: number;
  role: string;
  status: string;
}
