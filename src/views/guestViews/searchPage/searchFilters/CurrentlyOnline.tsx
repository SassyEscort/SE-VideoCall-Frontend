import { LiveIconFirstBoxWorkerCard, LiveIconSecBoxWorkerCard, UIStyledSelectButton } from 'components/UIComponents/UIStyledSelectButton';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { CurrentlyOnlineTyporagphyBox } from './Country.styled';

const CurrentlyOnline = ({ onClick }: { onClick?: () => void }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
    if (onClick) onClick();
  };

  return (
    <>
      <UIStyledSelectButton
        onClick={handleClick}
        isClicked={isClicked}
        startIcon={
          <LiveIconFirstBoxWorkerCard>
            <LiveIconSecBoxWorkerCard />
          </LiveIconFirstBoxWorkerCard>
        }
        sx={{ width: '100%', maxWidth: { lg: '203px' } }}
      >
        <CurrentlyOnlineTyporagphyBox>
          <FormattedMessage id="CurrentlyOnline" />
        </CurrentlyOnlineTyporagphyBox>
      </UIStyledSelectButton>
    </>
  );
};

export default CurrentlyOnline;
