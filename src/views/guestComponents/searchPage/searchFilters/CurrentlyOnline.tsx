import UINewTypography from 'components/UIComponents/UINewTypography';
import { LiveIconFirstBoxWorkerCard, LiveIconSecBoxWorkerCard, UIStyledSelectButton } from 'components/UIComponents/UIStyledSelectButton';

const CurrentlyOnline = () => {
  return (
    <>
      <UIStyledSelectButton
        startIcon={
          <LiveIconFirstBoxWorkerCard>
            <LiveIconSecBoxWorkerCard />
          </LiveIconFirstBoxWorkerCard>
        }
      >
        <UINewTypography>Currently Online</UINewTypography>
      </UIStyledSelectButton>
    </>
  );
};

export default CurrentlyOnline;
