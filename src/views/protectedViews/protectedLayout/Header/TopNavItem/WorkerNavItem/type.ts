import { EmotionJSX } from "@emotion/react/types/jsx-namespace";

export type InternalProps = {
  bgColor: string;
  icon: EmotionJSX.Element;
  href: string;
  isReadMore: boolean;
};

export type NotificationTypeDetailsType = {
  [PROFILE_APPROVE: string]: InternalProps;
  PROFILE_REJECT: InternalProps;
  SUBSCRIBE: InternalProps;
  CREDIT_ADDED: InternalProps;
};
