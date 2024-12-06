'use client';

import {
  ChatToGirlsChooseModalContainer,
  ChatToGirlsChooseModalMainContainer,
  ChatToGirlsChooseModalSubTextStyledBox
} from './chooseModal.styled';
import {
  ChatWhyChooseSubTitleTypography,
  ChatWhyChooseTitleTypography,
  ChatSubTitlePointTypography
} from '../startVideoChatViews/startVideoChat.styled';
import { FormattedMessage } from 'react-intl';

const WhyChatChooseModal = () => (
  <ChatToGirlsChooseModalMainContainer>
    <ChatToGirlsChooseModalContainer>
      <ChatWhyChooseTitleTypography variant="h2">
        <FormattedMessage id="WhyChooseFlirtBate" />
      </ChatWhyChooseTitleTypography>
      <ChatToGirlsChooseModalSubTextStyledBox>
        <ChatSubTitlePointTypography variant="h5">
          <FormattedMessage id="ChooseFromHundreds" />
        </ChatSubTitlePointTypography>
        <ChatWhyChooseSubTitleTypography variant="h6">
          <FormattedMessage id="AtFlirtBateWeGiveYouFreedom" />
        </ChatWhyChooseSubTitleTypography>
        <ChatSubTitlePointTypography variant="h5">
          <FormattedMessage id="HighQualityVideoCalls" />
        </ChatSubTitlePointTypography>
        <ChatWhyChooseSubTitleTypography variant="h6">
          <FormattedMessage id="OurPlatformEnsures" />
        </ChatWhyChooseSubTitleTypography>
      </ChatToGirlsChooseModalSubTextStyledBox>
    </ChatToGirlsChooseModalContainer>
  </ChatToGirlsChooseModalMainContainer>
);

export default WhyChatChooseModal;
