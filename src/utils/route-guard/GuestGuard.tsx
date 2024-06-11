'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Loader from 'components/Loader';
import { GuardProps } from 'types/auth';
import { useSession } from 'next-auth/react';

const GuestGuard = ({ children }: GuardProps) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res: any = await fetch('/api/auth/protected');
      const json = await res?.json();
      if (json?.protected) {
        router.push('/profile');
      }
    };
    fetchData();
  }, [router]);

  if (status === 'loading' || !session?.user) return <Loader />;

  return <>{children}</>;
};

export default GuestGuard;
