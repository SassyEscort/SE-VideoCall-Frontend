import StyledAvatar from 'components/UIComponents/StyledAvatar';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { calculateAge } from 'constants/adminAgeCalculate';
import React from 'react';
import { ModelDetailsRes } from 'services/adminModel/types';
import {
  ApproveButtonContainer,
  ButtonMainBoxContainer,
  ButtonTextContainer,
  DeclineButtonContainer,
  ProfileCradDetailsBox,
  ProfileCradDetailsTextBox,
  ProfileCradMainBoxContainer
} from './ProfileCardDetails.styled';

const ProfileCardDetails = ({ modelData }: { modelData: ModelDetailsRes }) => {
  const photo = modelData?.data?.photos?.filter((item) => item.favourite === 1 && item.link)[0]?.link;

  return (
    <ProfileCradMainBoxContainer>
      <ProfileCradDetailsBox>
        <StyledAvatar image={photo} color="secondary.light" />
        <ProfileCradDetailsTextBox>
          <UINewTypography variant="bodySemiBold" color="black.main">
            {modelData?.data ? modelData?.data?.name : ''}
          </UINewTypography>
          <UINewTypography variant="buttonLargeMenu" color="#666666">
            {modelData?.data?.email}
          </UINewTypography>
          <UINewTypography variant="buttonLargeMenu" color="#666666">
            {modelData?.data?.dob && calculateAge(modelData?.data?.dob)} |{' '}
            {modelData?.data?.nationality && modelData?.data?.nationality?.name} |{' '}
            {modelData?.data?.languages &&
              modelData?.data?.languages
                .filter((item) => item?.language_name)
                .map((item) => item?.language_name)
                .join(', ')}
          </UINewTypography>
        </ProfileCradDetailsTextBox>
      </ProfileCradDetailsBox>

      <ButtonMainBoxContainer>
        <DeclineButtonContainer>
          <ButtonTextContainer>Decline</ButtonTextContainer>
        </DeclineButtonContainer>

        <ApproveButtonContainer>
          <ButtonTextContainer>Approve</ButtonTextContainer>
        </ApproveButtonContainer>
      </ButtonMainBoxContainer>
    </ProfileCradMainBoxContainer>
  );
};

export default ProfileCardDetails;
