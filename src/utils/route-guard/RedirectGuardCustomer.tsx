'use client';

import React, { useEffect } from 'react';
import { GuardProps } from 'types/auth';
import { usePathname, useRouter } from 'next/navigation';
import { PROVIDERCUSTOM_TYPE } from 'constants/signUpConstants';
import { useAuthContext } from '../../contexts/AuthContext';

const RedirectGuardCustomer = ({ children }: GuardProps) => {
  const { session } = useAuthContext();
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      const res: any = await fetch('/api/auth/protected');
      const json = await res?.json();
      let picture;
      if (json?.user?.picture) {
        try {
          picture = JSON.parse(json.user.picture);
        } catch (error) {}
      }
      const role = picture?.role;
      if (
        json?.user?.provider === PROVIDERCUSTOM_TYPE.PROVIDERCUSTOM &&
        role === 'customer' &&
        typeof window !== 'undefined' &&
        pathName === '/model'
      ) {
        router.push('/');
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, [session]);

  return <>{children}</>;
};

export default RedirectGuardCustomer;
