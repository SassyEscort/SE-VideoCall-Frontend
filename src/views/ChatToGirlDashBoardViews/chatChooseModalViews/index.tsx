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
      <ChatWhyChooseTitleTypography>
        <FormattedMessage id="WhyChooseFlirtBate" />
      </ChatWhyChooseTitleTypography>
      <ChatToGirlsChooseModalSubTextStyledBox>
        <ChatSubTitlePointTypography>
          <FormattedMessage id="ChooseFromHundreds" />
        </ChatSubTitlePointTypography>
        <ChatWhyChooseSubTitleTypography>
          <FormattedMessage id="AtFlirtBateWeGiveYouFreedom" />
        </ChatWhyChooseSubTitleTypography>
        <ChatSubTitlePointTypography>
          <FormattedMessage id="HighQualityVideoCalls" />
        </ChatSubTitlePointTypography>
        <ChatWhyChooseSubTitleTypography>
          <FormattedMessage id="OurPlatformEnsures" />
        </ChatWhyChooseSubTitleTypography>
      </ChatToGirlsChooseModalSubTextStyledBox>
    </ChatToGirlsChooseModalContainer>
  </ChatToGirlsChooseModalMainContainer>
);

export default WhyChatChooseModal;
