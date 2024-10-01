'use client';

import { useEffect } from 'react';

// NEXT
import { useRouter } from 'next/navigation';

// PROJECT IMPORTS
import Loader from 'components/Loader';

// TYPES
import { GuardProps } from 'types/auth';
import { signOut } from 'next-auth/react';
import { PROVIDERCUSTOM_TYPE } from 'constants/signUpConstants';
import { useAuthContext } from '../../../context/AuthContext';

// ==============================|| AUTH GUARD ||============================== //

const GuestGuard = ({ children }: GuardProps) => {
  const { session, status } = useAuthContext();
  const router = useRouter();
  const tokenExpiry = session?.user?.image && JSON.parse(session?.user?.image!).expiry;

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
        json?.protected &&
        json.user.provider === PROVIDERCUSTOM_TYPE.PROVIDERCUSTOM &&
        role === 'customer' &&
        tokenExpiry < parseInt((Date.now() / 1000).toFixed(0))
      ) {
        signOut({ redirect: false });
        router.push('/');
      } else if (role !== 'customer') {
        router.push('/');
      }
    };
    fetchData();

    // eslint-disable-next-line
  }, [session]);

  if (status == 'loading' || !session?.user) return <Loader />;

  return <>{children}</>;
};

export default GuestGuard;
