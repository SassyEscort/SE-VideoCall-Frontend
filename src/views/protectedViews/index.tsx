'use client';

import MainLayoutNav from './protectedLayout';
import MyProfile from './myProfile';
import { CustomerDetails } from 'services/customerDetails/customerDetails.services';

const ProfilePage = ({ customerData, token }: { customerData: CustomerDetails | null; token: string }) => {
  return (
    <>
      <MainLayoutNav variant={'worker'} enlargedFooter={true}>
        <MyProfile customerData={customerData} token={token} />
      </MainLayoutNav>
    </>
  );
};

export default ProfilePage;
