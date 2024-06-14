'use client';

import MainLayoutNav from './protectedLayout';
import MyProfile from './myProfile';

const ProfilePage = () => {
  return (
    <>
      <MainLayoutNav variant={'worker'} enlargedFooter={true}>
        <MyProfile />
      </MainLayoutNav>
    </>
  );
};

export default ProfilePage;
