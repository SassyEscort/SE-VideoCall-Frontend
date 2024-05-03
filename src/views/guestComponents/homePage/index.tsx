'use client';

import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import { FormattedMessage } from 'react-intl';
import { toast } from 'react-toastify';

const HomeContainer = () => {
  const handle = () => {
    toast.success('flirtbate');
  };

  return (
    <UIThemeButton variant="contained" onClick={handle}>
      <FormattedMessage id="flirtbate" />
    </UIThemeButton>
  );
};

export default HomeContainer;
