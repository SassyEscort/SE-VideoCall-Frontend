'use client';

import { useEffect } from 'react';

// NEXT
import { useRouter } from 'next/navigation';

// PROJECT IMPORTS
import Loader from 'components/Loader';

// TYPES
import { GuardProps } from 'types/auth';
import { signOut, useSession } from 'next-auth/react';

// ==============================|| AUTH GUARD ||============================== //

const AdminGuard = ({ children }: GuardProps) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const tokenExpiry = session?.user?.image && JSON.parse(session?.user?.image!).expiry;

  useEffect(() => {
    const fetchData = async () => {
      const res: any = await fetch('/api/auth/protected');
      const json = await res?.json();
      if (!json?.protected || json.user.provider !== 'providerAdmin' || tokenExpiry < parseInt((Date.now() / 1000).toFixed(0))) {
        signOut({ redirect: false });
        router.push('/admin/login');
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  if (status == 'loading' || !session?.user) return <Loader />;

  return <>{children}</>;
};

export default AdminGuard;
