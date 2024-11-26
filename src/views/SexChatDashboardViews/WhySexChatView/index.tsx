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
      <WhySexChatWhyChooseTitleTypography>
        <FormattedMessage id="WhyChooseSexChat" />
      </WhySexChatWhyChooseTitleTypography>
      <WhySexChatSubTextStyledBox>
        <WhySexChatSubTitlePointTypography>
          <FormattedMessage id="PersonalizedExperiences" />
        </WhySexChatSubTitlePointTypography>
        <WhySexChatWhyChooseSubTitleTypography>
          <FormattedMessage id="EveryChatIsTailoredPreferences" />
        </WhySexChatWhyChooseSubTitleTypography>
        <WhySexChatSubTitlePointTypography>
          <FormattedMessage id="NoTextOnlyChats" />
        </WhySexChatSubTitlePointTypography>
        <WhySexChatWhyChooseSubTitleTypography>
          <FormattedMessage id="UnlikeOtherFreeSexting" />
        </WhySexChatWhyChooseSubTitleTypography>
        <WhySexChatSubTitlePointTypography>
          <FormattedMessage id="HighQualityStreamingSexChat" />
        </WhySexChatSubTitlePointTypography>
        <WhySexChatWhyChooseSubTitleTypography>
          <FormattedMessage id="OurHDVideoEnsures" />
        </WhySexChatWhyChooseSubTitleTypography>
      </WhySexChatSubTextStyledBox>
    </WhySexChatContainer>
  </WhySexChatMainContainer>
);

export default WhySexChatComponent;
