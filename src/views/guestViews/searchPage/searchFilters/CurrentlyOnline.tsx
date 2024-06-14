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
        sx={{ width: '100%', maxWidth: { lg: '203px', sm: '240px' } }}
      >
        <UINewTypography>
          <FormattedMessage id="CurrentlyOnline" />
        </UINewTypography>
      </UIStyledSelectButton>
    </>
  );
};

export default CurrentlyOnline;
