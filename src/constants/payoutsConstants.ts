export const PayoutsModelTabs = [
  {
    name: 'Request Payout',
    path: ''
  },
  {
    name: 'Payment Methods',
    path: ''
  },
  {
    name: 'Payout History',
    path: ''
  },
  {
    name: 'FAQs',
    path: ''
  }
];

export enum PAYOUT_ACTION {
  PENDING = 'Pending',
  APPROVE = 'Approved',
  REJECT = 'Rejected'
}

export enum CALL_LOG_ACTION {
  ENDED = 'Ended',
  CANCELLED = 'Cancelled',
  UNANSWERED = 'Unanswered'
}
