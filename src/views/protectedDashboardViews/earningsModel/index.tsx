'use client';
import { useEffect, useState } from 'react';
import DashboardProfile from '..';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { getUserDataClient } from 'utils/getSessionData';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import EarningsModelProfileConatiner from './EarningsModelProfileContainer';
import EarningMobileSidebar from '../earningSidebarDropDown';

const EarningModel = () => {
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });

  const islgDown = useMediaQuery(theme.breakpoints.down('lg'));

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data.id, token: data.token });
    };

    userToken();
  }, []);

  return (
    <DashboardProfile>
      {islgDown ? <EarningMobileSidebar token={token} /> : <EarningsModelProfileConatiner token={token} />}
    </DashboardProfile>
  );
};

export default EarningModel;
