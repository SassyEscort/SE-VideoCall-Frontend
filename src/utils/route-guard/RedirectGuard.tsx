'use client';

import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { GuardProps } from 'types/auth';
import { useRouter } from 'next/navigation';
import { PROVIDERCUSTOM_TYPE } from 'constants/signUpConstants';
import { MODEL_ACTION } from 'constants/profileConstants';

const RedirectGuard = ({ children }: GuardProps) => {
  const { data: session } = useSession();
  const router = useRouter();

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
      if (json?.user?.provider === PROVIDERCUSTOM_TYPE.PROVIDERCUSTOM && role === 'model' && window?.location?.pathname === '/') {
        if (session && session.user) {
          const parsedPicture = JSON.parse((session?.user as any)?.picture);
          if (parsedPicture.profile_status === MODEL_ACTION.REJECT) {
            router.push('/model/profile-reject');
          } else if (parsedPicture.profile_status === MODEL_ACTION.APPROVE) {
            router.push('/model/dashboard');
          } else if (parsedPicture.profile_status === MODEL_ACTION.PENDING) {
            router.push('/model/profile');
          }
        }
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, [session]);

  return <>{children}</>;
};

export default RedirectGuard;
