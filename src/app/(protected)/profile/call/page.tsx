import { CallHistoryService } from 'services/callHistory/callHistory.services';
import { getUserDataServerSide } from 'utils/getSessionData';
import CallHistory from 'views/protectedViews/CallHistory';

const CallPage = async () => {
  const session = await getUserDataServerSide();
  const payload = {
    page: 1,
    limit: 20,
    offset: 0
  };
  const data = await CallHistoryService.getCallHistoryDetails(session?.token || '', payload);
  return (
    <>
      <CallHistory token={session?.token || ''} historyData={data} filterPayload={payload} />
    </>
  );
};

export default CallPage;
