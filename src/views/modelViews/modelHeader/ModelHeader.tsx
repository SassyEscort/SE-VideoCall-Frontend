'use client';
import React, { useEffect, useState } from 'react';
import HeaderModelComponent from '../modelLayout/Header';
import Header from 'views/protectedViews/protectedLayout/Header';
import { AuthUser } from 'app/(guest)/layout';
import { getUserTokenClient } from 'utils/getSessionData';

const ModelHeader = () => {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const fetchAuthUser = async () => {
      const user = await getUserTokenClient();
      setAuthUser(user);
    };

    fetchAuthUser();
  }, []);

  return <>{authUser ? <Header variant="dashboard" /> : <HeaderModelComponent />}</>;
};

export default ModelHeader;
