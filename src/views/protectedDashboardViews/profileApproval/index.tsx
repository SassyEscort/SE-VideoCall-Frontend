import React from 'react';
import { BoxSecond, ImageBox, MainContainer, UINewTypographyText } from './ProfileApproval.styled';

const ProfileApproval = () => {
  return (
    <MainContainer>
      <ImageBox src="/images/vectorimg.png" />
      <BoxSecond>
        <UINewTypographyText>Your profile is under review and you will be notified over mail on your profile approval.</UINewTypographyText>
      </BoxSecond>
    </MainContainer>
  );
};

export default ProfileApproval;
