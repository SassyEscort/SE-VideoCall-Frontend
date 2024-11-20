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

export const DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSS[Z]';
export const RINGING_TUNE = 'https://dl.prokerala.com/downloads/ringtones/files/mp3/iphone-ringtone-47958.mp3';
