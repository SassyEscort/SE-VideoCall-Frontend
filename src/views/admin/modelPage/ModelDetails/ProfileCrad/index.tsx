import React from 'react';
import ProfileCardDetails from './ProfileCardDetails';
import { ModelDetailsRes } from 'services/adminModel/types';
import { ProfileCradBox } from './ProfileCrad.styled';

const ProfileCrad = ({ modelData }: { modelData: ModelDetailsRes }) => {
  return (
    <ProfileCradBox>
      <ProfileCardDetails modelData={modelData} />
    </ProfileCradBox>
  );
};

export default ProfileCrad;
