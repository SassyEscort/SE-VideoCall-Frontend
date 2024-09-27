'use client';
import { User } from 'app/(guest)/layout';
import { ROLE } from 'constants/workerVerification';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { createContext, ReactNode, useContext, useEffect, useState, useCallback } from 'react';
import { CustomerFreeCreditsService } from 'services/customerFreeCredits/customerFreeCredits.services';

export type AuthContextProps = {
  session: Session | null;
  isCustomer: boolean;
  user: string | undefined;
  isFreeCreditAvailable: number;
  status: string;
};

const AuthContext = createContext<AuthContextProps>({
  session: null,
  isCustomer: false,
  user: '',
  isFreeCreditAvailable: 1,
  status: ''
});

export const AuthFeaturProvider = ({ children }: { children: ReactNode }) => {
  const { data, status } = useSession();
  const [session, setSession] = useState<Session | null>(null);
  const [isFreeCreditAvailable, setIsFreeCreditAvailable] = useState(1);

  const user = (session?.user as User)?.picture;
  const providerData = JSON.parse(user || '{}');
  const isCustomer = providerData?.role === ROLE.CUSTOMER;

  const handleCustomerFreeCredits = useCallback(async () => {
    const res = await CustomerFreeCreditsService.getCustomerFreeCredits();
    setIsFreeCreditAvailable(res.data.free_credits_available);
  }, []);

  useEffect(() => {
    if (status === 'authenticated') {
      setSession(data);
    }
  }, [status, data]);

  useEffect(() => {
    handleCustomerFreeCredits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AuthContext.Provider value={{ session, isCustomer, user, isFreeCreditAvailable, status }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = (): AuthContextProps => {
  const context = useContext(AuthContext);
  return context;
};
