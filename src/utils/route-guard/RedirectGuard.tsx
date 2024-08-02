'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { GuardProps } from 'types/auth';
import { useRouter } from 'next/navigation';

const RedirectGuard = ({ children }: GuardProps) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res: any = await fetch('/api/auth/protected');
      const json = await res?.json();
      if (json?.user?.provider === 'providerModel' && window?.location?.pathname === '/') {
        router.push('/model/dashboard');
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, [session]);

  return <>{children}</>;
};

export default RedirectGuard;
