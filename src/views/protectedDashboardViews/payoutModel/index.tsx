'use client';
import { useEffect, useState } from 'react';
import DashboardProfile from '..';

import { TokenIdType } from 'views/protectedModelViews/verification';
import { getUserDataClient } from 'utils/getSessionData';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import PayoutModelProfileConatiner from './PayoutModelProfileConatiner';
import PayoutMobileSidebar from '../payoutSidebarDropDown';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';

const PayoutModel = () => {
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [modelDetails, setModelDetails] = useState<ModelDetailsResponse>();
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data.id, token: data.token });
    };

    userToken();
  }, []);

  useEffect(() => {
    const modelDetails = async () => {
      const modelData = await ModelDetailsService.getModelDetails(token.token);
      setModelDetails(modelData.data);
    };
    if (token.token) {
      modelDetails();
    }
  }, [token.id, token.token]);

  return (
    <DashboardProfile>
      {isMdDown ? (
        <PayoutMobileSidebar token={token} modelDetails={modelDetails ?? ({} as ModelDetailsResponse)} />
      ) : (
        <PayoutModelProfileConatiner token={token} modelDetails={modelDetails ?? ({} as ModelDetailsResponse)} />
      )}
    </DashboardProfile>
  );
};

export default PayoutModel;
