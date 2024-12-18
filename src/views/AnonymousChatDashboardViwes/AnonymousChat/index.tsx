'use client';

import { FormattedMessage } from 'react-intl';
import {
  AnonymousChatContainer,
  AnonymousChatMainContainer,
  AnonymousChatSubTextStyledBox,
  AnonymousChatWhyChooseSubTitleTypography,
  AnonymousChatWhyChooseTitleTypography
} from './AnonymousChat.Styled';

const AnonymousChat = () => (
  <AnonymousChatMainContainer>
    <AnonymousChatContainer>
      <AnonymousChatWhyChooseTitleTypography variant="h2">
        <FormattedMessage id="ExplorePrivateVideo" />
      </AnonymousChatWhyChooseTitleTypography>
      <AnonymousChatSubTextStyledBox>
        <AnonymousChatWhyChooseSubTitleTypography variant="h6">
          <FormattedMessage id="AtFlirtBateWeOfferASafeSpace" />
        </AnonymousChatWhyChooseSubTitleTypography>
        <AnonymousChatWhyChooseSubTitleTypography variant="h6">
          <FormattedMessage id="EncryptedVideoCalls" />
        </AnonymousChatWhyChooseSubTitleTypography>
        <AnonymousChatWhyChooseSubTitleTypography variant="h6">
          <FormattedMessage id="ModelSelection" />
        </AnonymousChatWhyChooseSubTitleTypography>
      </AnonymousChatSubTextStyledBox>
    </AnonymousChatContainer>
  </AnonymousChatMainContainer>
);

export default AnonymousChat;
