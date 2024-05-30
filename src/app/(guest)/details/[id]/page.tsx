import EscortDetailPage from 'views/guestViews/details/EscortDetailPage';

const WorkerDetailPage = ({ userName }: { userName: string }) => {
  return <>{<EscortDetailPage userName={userName} />}</>;
};

export default WorkerDetailPage;
