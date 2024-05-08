import UINewTypography from 'components/UIComponents/UINewTypography';
import { LiveIconFirstBoxWorkerCard, LiveIconSecBoxWorkerCard, UIStyledSelectButton } from 'components/UIComponents/UIStyledSelectButton';
import { FormattedMessage } from 'react-intl';

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
        <UINewTypography>
          <FormattedMessage id="CurrentlyOnline" />
        </UINewTypography>
      </UIStyledSelectButton>
    </>
  );
};

export default CurrentlyOnline;
