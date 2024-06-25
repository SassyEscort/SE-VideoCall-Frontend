import { GenericResponse } from 'types/commonApiTypes';

export type GetAllNotificationsParams = {
  page: number;
  pageSize: number;
  isRead?: number;
};

export type WorkerNotification = {
  id: number;
  customer_id: number;
  message: string;
  link: string;
  category: string;
  is_active: boolean;
};

export type NotificationsData = {
  page: number;
  size: number;
  unReadCount: number;
  totalRecords: number;
  data: WorkerNotification[];
};

export type GetAllNotificationsResponse = GenericResponse & {
  data: NotificationsData;
};
