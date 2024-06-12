'use client';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';

const TokenUtils = ({ myData }: any) => {
  const Mydata = useSession();

  function getAdminToken(myData: any) {
    if (myData?.data?.user?.picture) {
      try {
        const pictureData = JSON.parse(myData.data.user.picture);
        return pictureData.token;
      } catch (error) {
        toast.error('Failed to parse picture data');
        return null;
      }
    } else {
      toast.error('Picture data is not defined or is invalid');
      return null;
    }
  }

  const token = getAdminToken(Mydata);
  return token;
};

export default TokenUtils;
