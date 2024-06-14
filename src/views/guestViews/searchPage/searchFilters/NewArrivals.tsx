import { StareIcone, UIStyledArrivalsButton } from 'components/UIComponents/UIStyledArrivalsButton';
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';

const NewArrivals = () => {
  return (
    <>
      <UIStyledArrivalsButton
        startIcon={
          <StareIcone>
            <Image alt="home_model" width={24} height={24} src="/images/home/arrivals-img1.png" />
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
