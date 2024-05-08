import { StareIcone, UIStyledArrivalsButton } from 'components/UIComponents/UIStyledArrivalsButton';
import Image from 'next/image';

const NewArrivals = () => {
  return (
    <>
      <UIStyledArrivalsButton
        startIcon={
          <StareIcone>
            <Image alt="home_model" width={24} height={24} src="/images/home/arrivals-img1.png" />
          </StareIcone>
        }
        sx={{ whiteSpace: 'nowrap', width: '100%', minWidth: '145px' }}
      >
        New Arrivals
      </UIStyledArrivalsButton>
    </>
  );
};

export default NewArrivals;
