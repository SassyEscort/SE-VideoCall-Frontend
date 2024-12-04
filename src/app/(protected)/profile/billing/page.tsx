import { ModelBillingHistoryService } from 'services/guestBilling/guestBillingHistory.services';
import { getUserDataServerSide } from 'utils/getSessionData';
import BillingHistory from 'views/protectedViews/BillingHistory';

const BillingPage = async () => {
  const session = await getUserDataServerSide();
  const payload = {
    page: 1,
    limit: 20,
    offset: 0
  };
  const newPayload = { ...payload, category: '', details: '' };
  const data = await ModelBillingHistoryService.getBillingHistoryDetails(newPayload, session.token);
  return <BillingHistory billingData={data} billingFilter={payload} token={session?.token || ''} />;
};

export default BillingPage;
