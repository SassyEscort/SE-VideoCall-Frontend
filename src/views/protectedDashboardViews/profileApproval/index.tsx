import React from 'react';
import { BoxSecond, ImageBox, MainContainer, UINewTypographyText } from './ProfileApproval.styled';
import { FormattedMessage } from 'react-intl';

const ProfileApproval = () => {
  return (
    <MainContainer>
      <ImageBox src="/images/vectorimg.png" alt="vector_icon" />
      <BoxSecond>
        <UINewTypographyText>
          <FormattedMessage id="YourProfileIsUnderReview" />
        </UINewTypographyText>
      </BoxSecond>
    </MainContainer>
  );
};

export default ProfileApproval;
