import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

export type InternalProps = {
  bgColor: string;
  icon: EmotionJSX.Element;
  href: string;
  isReadMore: boolean;
};

export type NotificationTypeDetailsTypeAdmin = {
  [Credits_Credited: string]: InternalProps;
  Password_Updated: InternalProps;
  Missed_Call: InternalProps;
  Credits_Redeemed: InternalProps;
};
