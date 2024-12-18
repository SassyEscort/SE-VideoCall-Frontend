export interface Root {
  message: string;
  code: number;
  error: any;
  data: NotificationData;
}

export interface NotificationData {
  aggregate: Aggregate;
  notifications: Notification[];
}

export interface Aggregate {
  total_rows: number;
  offset: number;
  page_size: number;
  disabled: number;
  enabled: number;
}

export interface Notification {
  id: number;
  customer_id: number;
  model_id: number;
  admin_id: number;
  message: string;
  link: string;
  category: string;
  is_active: boolean;
  created_at: string;
  title: string;
}

export interface ChatPOPNotification {
  id: number;
  customer_id: number;
  model_id: number;
  admin_id: number;
  message: string;
  link: string;
  category: string;
  is_active: boolean;
  created_at: string;
  title: string;
  user_name: string;
}
export interface ChatNotificationData {
  aggregate: Aggregate;
  notifications: ChatPOPNotification[];
}

export interface ChatNotificationRoot {
  message: string;
  code: number;
  error: any;
  data: ChatNotificationData;
}
