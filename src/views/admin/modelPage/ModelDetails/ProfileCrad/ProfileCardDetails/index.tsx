import StyledAvatar from 'components/UIComponents/StyledAvatar';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { calculateAge } from 'constants/adminAgeCalculate';
import React from 'react';
import { ModelDetailsRes } from 'services/adminModel/types';
import { ProfileCradDetailsBox, ProfileCradDetailsTextBox } from './ProfileCardDetails.styled';

const ProfileCardDetails = ({ modelData }: { modelData: ModelDetailsRes }) => {
  const photo = modelData?.data?.photos?.filter((item) => item.favourite === 1 && item.link)[0]?.link;

  return (
    <ProfileCradDetailsBox>
      <StyledAvatar image={photo} color="secondary.light" />
      <ProfileCradDetailsTextBox>
        <UINewTypography variant="h4" color="secondary.dark">
          {modelData?.data ? modelData?.data?.name : ''}
        </UINewTypography>
        <UINewTypography variant="bodyLight" color="secondary.800">
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
  );
};

export default ProfileCardDetails;
