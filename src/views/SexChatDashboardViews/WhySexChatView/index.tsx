'use client';

import { FormattedMessage } from 'react-intl';
import {
  WhySexChatContainer,
  WhySexChatMainContainer,
  WhySexChatSubTextStyledBox,
  WhySexChatSubTitlePointTypography,
  WhySexChatWhyChooseTitleTypography,
  WhySexChatWhyChooseSubTitleTypography
} from './WhySexChat.styled';

const WhySexChatComponent = () => (
  <WhySexChatMainContainer>
    <WhySexChatContainer>
      <WhySexChatWhyChooseTitleTypography variant="h2">
        <FormattedMessage id="WhyChooseSexChat" />
      </WhySexChatWhyChooseTitleTypography>
      <WhySexChatSubTextStyledBox>
        <WhySexChatSubTitlePointTypography variant="h4">
          <FormattedMessage id="PersonalizedExperiences" />
        </WhySexChatSubTitlePointTypography>
        <WhySexChatWhyChooseSubTitleTypography variant="h6">
          <FormattedMessage id="EveryChatIsTailoredPreferences" />
        </WhySexChatWhyChooseSubTitleTypography>
        <WhySexChatSubTitlePointTypography variant="h4">
          <FormattedMessage id="NoTextOnlyChats" />
        </WhySexChatSubTitlePointTypography>
        <WhySexChatWhyChooseSubTitleTypography variant="h6">
          <FormattedMessage id="UnlikeOtherFreeSexting" />
        </WhySexChatWhyChooseSubTitleTypography>
        <WhySexChatSubTitlePointTypography variant="h4">
          <FormattedMessage id="HighQualityStreamingSexChat" />
        </WhySexChatSubTitlePointTypography>
        <WhySexChatWhyChooseSubTitleTypography variant="h6">
          <FormattedMessage id="OurHDVideoEnsures" />
        </WhySexChatWhyChooseSubTitleTypography>
      </WhySexChatSubTextStyledBox>
    </WhySexChatContainer>
  </WhySexChatMainContainer>
);

export default WhySexChatComponent;
