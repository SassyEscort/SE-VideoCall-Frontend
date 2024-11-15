export enum CALLING_STATUS {
  UNASWERED = 'Unanswered',
  REJECTED = 'Rejected',
  CANCELED = 'Cancelled',
  ENDED = 'Ended',
  BUSY = 'busy'
}

export const CALL_INVITATION_END_REASON = {
  DECLINED: 'Declined',
  TIMEOUT: 'Timeout',
  CANCELED: 'Canceled',
  BUSY: 'Busy',
  LEAVEROOM: 'LeaveRoom',
  ENDED: 'Ended'
};

export const CALL_ENDED_BY = {
  CUSTOMER: 'customer',
  MODEL: 'model'
};
