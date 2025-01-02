import dynamic from 'next/dynamic';
import { CustomerDetailsService } from 'services/customerDetails/customerDetails.services';
import { getUserDataServerSide } from 'utils/getSessionData';
const ProfilePage = dynamic(() => import('views/protectedViews'), { ssr: false });

const index = async () => {
  const session = await getUserDataServerSide();
  const customerData = await CustomerDetailsService.customerModelDetails(session.token);
  return <ProfilePage customerData={customerData?.data || null} token={session?.token || ''} />;
};

export default index;
