'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';
import { getUserDataClient } from 'utils/getSessionData';
import { ErrorMessage } from 'constants/common.constants';
import { User } from 'app/(guest)/layout';
import { useAuthContext } from '../../../../context/AuthContext';

const ModelLastActive = () => {
  const { session } = useAuthContext();
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    const fetchUserToken = async () => {
      try {
        const data = await getUserDataClient();
        setToken(data.token);
      } catch (error) {
        toast.error('Failed to fetch user data');
      }
    };
    if ((session?.user as User)?.provider === 'providerModel') {
      fetchUserToken();
    }
  }, [session?.user]);

  useEffect(() => {
    if (token && (session?.user as User)?.provider === 'providerModel') {
      const fetchModelLastActive = async () => {
        try {
          const response = await ModelDetailsService.modelLastActive(token);
          if (response.data) {
          } else {
            toast.error(response.message);
          }
        } catch (error) {
          toast.error(ErrorMessage);
        }
      };
      fetchModelLastActive();
      const intervalId = setInterval(fetchModelLastActive, 15000);
      return () => clearInterval(intervalId);
    }
  }, [session?.user, token]);

  return <></>;
};

export default ModelLastActive;
