import { StareIcone, UIStyledArrivalsButton } from 'components/UIComponents/UIStyledArrivalsButton';
import Image from 'next/image';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

const NewArrivals = ({ onClick }: { onClick?: () => void }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
    if (onClick) onClick();
  };

  return (
    <>
      <UIStyledArrivalsButton
        onClick={handleClick}
        isClicked={isClicked}
        startIcon={
          <StareIcone>
            <Image alt="arrivals_img" width={24} height={24} src="/images/home/arrivals-img1.png" />
          </StareIcone>
        }
        sx={{ width: '100%', minWidth: { lg: '144px', sm: '280px', md: '144px' } }}
      >
        <FormattedMessage id="NewArrivals" />
      </UIStyledArrivalsButton>
    </>
  );
};

export default NewArrivals;
