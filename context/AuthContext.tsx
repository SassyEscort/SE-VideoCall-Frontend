'use client';
import { User } from 'app/(guest)/layout';
import UIStyledDialog from 'components/UIComponents/UIStyledDialog';
import { ErrorMessage } from 'constants/common.constants';
import { ROLE } from 'constants/workerVerification';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { createContext, ReactNode, useContext, useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { CustomerFreeCreditsService } from 'services/customerFreeCredits/customerFreeCredits.services';
import { gaEventTrigger } from 'utils/analytics';
import CreditsAdded from 'views/protectedViews/CreditsAdded/CreditsAdded';

export type AuthContextProps = {
  session: Session | null;
  isCustomer: boolean;
  user: string | undefined;
  isFreeCreditAvailable: number;
  status: string;
  handleFreeCreditClaim: () => void;
  isFreeCreditsClaimed: boolean;
  isModel: boolean;
  isNameChange: boolean;
  handelNameChange: () => void;
  handleOpen: () => void;
  handleCreditDrawerClose: () => void;
  openCreditDrawer: boolean;
};

const AuthContext = createContext<AuthContextProps>({
  session: null,
  isCustomer: false,
  user: '',
  isFreeCreditAvailable: 1,
  status: '',
  handleFreeCreditClaim: () => {},
  isFreeCreditsClaimed: false,
  isModel: false,
  isNameChange: false,
  handleOpen: () => {},
  handelNameChange: () => {},
  handleCreditDrawerClose: () => {},
  openCreditDrawer: false
});

export const AuthFeaturProvider = ({ children }: { children: ReactNode }) => {
  const { data, status } = useSession();
  const [session, setSession] = useState<Session | null>(null);
  const [isFreeCreditAvailable, setIsFreeCreditAvailable] = useState(1);
  const [isFreeCreditsClaimed, setIsFreeCreditsClaimed] = useState(false);
  const [isNameChange, setIsNameChange] = useState(false);
  const [addedCredits, setAddedCredits] = useState(0);
  const [balance, setBalance] = useState(0);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openCreditDrawer, setOpenCreditDrawer] = useState(false);

  const user = (session?.user as User)?.picture;
  const providerData = JSON.parse(user || '{}');
  const isCustomer = providerData?.role === ROLE.CUSTOMER;
  const isModel = providerData?.role === ROLE.MODEL;

  const path = usePathname();
  const userName = path.split('/')[2];

  const customerInfo = {
    email: providerData?.customer_email,
    name: providerData?.customer_name,
    username: providerData?.customer_user_name,
    model_username: userName
  };

  const handleOpen = () => {
    setOpenCreditDrawer(true);
  };

  const pathname = usePathname();
  const router = useRouter();

  const searchParams = useSearchParams();
  const credit = searchParams.get('credit');
  const totalBal = searchParams.get('total_credits_after_txn');
  const totalBalValue = searchParams.get('total_amount_after_txn');
  // const transaction_id = searchParams.get('transaction_id');

  const handleFreeCreditClaim = () => {
    setIsFreeCreditsClaimed(!isFreeCreditsClaimed);
  };

  const handelNameChange = () => {
    setIsNameChange(!isNameChange);
  };

  const handleClose = () => {
    setOpenSuccess(false);
    router.push(pathname);
  };

  const handleCreditDrawerClose = () => {
    setOpenCreditDrawer(false);
    // setOpenSuccess(false);
    // router.push(pathname);
  };

  const handleCustomerFreeCredits = useCallback(async () => {
    try {
      const res = await CustomerFreeCreditsService.getCustomerFreeCredits();
      setIsFreeCreditAvailable(res?.data?.free_credits_available);
    } catch (error) {
      toast.error(ErrorMessage);
    }
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

  useEffect(() => {
    setBalance(Number(totalBal));
    setAddedCredits(Number(credit));
    if (credit) {
      gaEventTrigger(
        'purchase',
        {
          action: 'purchase',
          category: 'Page change',
          label: 'purchase',
          value: JSON.stringify(customerInfo)
        },
        Number(totalBalValue)
      );
      setOpenSuccess(true);
      // if (typeof window !== 'undefined' && window?.flux)
      //   window.flux.track('conversion', { rev: Number(credit), tx: transaction_id?.toString() });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <AuthContext.Provider
      value={{
        session,
        isNameChange,
        handelNameChange,
        isCustomer,
        user,
        isFreeCreditAvailable,
        status,
        handleFreeCreditClaim,
        isFreeCreditsClaimed,
        isModel,
        handleOpen,
        openCreditDrawer,
        handleCreditDrawerClose
      }}
    >
      {children}
      <UIStyledDialog open={openSuccess} maxWidth="md" fullWidth scroll="body">
        <CreditsAdded addedCredits={addedCredits} newBalance={balance} onClose={handleClose} isOutOfCredits={false} />
      </UIStyledDialog>
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextProps => {
  const context = useContext(AuthContext);
  return context;
};
