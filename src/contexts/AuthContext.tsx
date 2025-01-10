'use client';
import { User } from 'app/(guest)/layout';
import UIStyledDialog from 'components/UIComponents/UIStyledDialog';
import { ErrorMessage } from 'constants/common.constants';
import { CHATROOM } from 'constants/languageConstants';
import { ROLE } from 'constants/workerVerification';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { createContext, ReactNode, useContext, useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { CustomerFreeCreditsService } from 'services/customerFreeCredits/customerFreeCredits.services';
import { FunnelfluxService } from 'services/funnelFlux/funnelflux.service';
import { gaEventTrigger } from 'utils/analytics';
import { randomID } from 'utils/videoCall';
import { TokenIdType } from 'views/protectedModelViews/verification';
import CreditsAdded from 'views/protectedViews/CreditsAdded/CreditsAdded';

export type AdminUserPermissions = {
  module_id: number;
  module_name: string;
  permission: string;
};

export type AuthContextProps = {
  session: Session | null;
  isCustomer: boolean;
  user: string | undefined;
  funnelHitId: string;
  isFreeCreditAvailable: number;
  status: string;
  roomID: string;
  handleFreeCreditClaim: () => void;
  isFreeCreditsClaimed: boolean;
  isModel: boolean;
  isAdmin: boolean;
  isNameChange: boolean;
  handelNameChange: () => void;
  handleCreateNewRoomID: () => void;
  handleOpen: () => void;
  handleCreditDrawerClose: () => void;
  openCreditDrawer: boolean;
  token: TokenIdType;
  adminUserPermissions: AdminUserPermissions[] | undefined;
  fetchPageName: () => void;
  handleSetBalance: (val: number) => void;
  balance: number;
};

const AuthContext = createContext<AuthContextProps>({
  session: null,
  isCustomer: false,
  user: '',
  isFreeCreditAvailable: 0,
  status: '',
  roomID: '',
  handleFreeCreditClaim: () => {},
  isFreeCreditsClaimed: false,
  isModel: false,
  isNameChange: false,
  handleOpen: () => {},
  handelNameChange: () => {},
  handleCreditDrawerClose: () => {},
  handleCreateNewRoomID: () => {},
  openCreditDrawer: false,
  token: { id: 0, token: '' },
  isAdmin: false,
  adminUserPermissions: [{} as AdminUserPermissions],
  funnelHitId: '',
  fetchPageName: () => {},
  handleSetBalance: () => {},
  balance: 0
});

const AuthFeaturProvider = ({ children }: { children: ReactNode }) => {
  const { data, status } = useSession();
  const [session, setSession] = useState<Session | null>(null);
  const [isFreeCreditAvailable, setIsFreeCreditAvailable] = useState(0);
  const [isFreeCreditsClaimed, setIsFreeCreditsClaimed] = useState(false);
  const [isNameChange, setIsNameChange] = useState(false);
  const [addedCredits, setAddedCredits] = useState(0);
  const [roomID, setRoomID] = useState('');
  const [balance, setBalance] = useState(0);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [funnelHitId, setfunnelHitId] = useState('');
  const [openCreditDrawer, setOpenCreditDrawer] = useState(false);

  const user = (data?.user as User)?.picture;
  const providerData = JSON.parse(user || '{}');

  const isCustomer = providerData?.role === ROLE.CUSTOMER;
  const isModel = providerData?.role === ROLE.MODEL;
  const tokenDetails = { id: providerData?.customer_id || 0, token: providerData?.token || '' };
  const isAdmin = providerData?.role === ROLE.ADMIN;

  const adminUserPermissions = providerData?.module_permissions;

  const path = usePathname();
  const userName = path.split('/')[2];

  const customerInfo = {
    email: providerData?.customer_email,
    name: providerData?.customer_name,
    username: providerData?.customer_user_name,
    model_username: userName
  };

  const handleOpen = () => setOpenCreditDrawer(true);
  const handleSetBalance = (val: number) => setBalance(val);

  const pathname = usePathname();
  const router = useRouter();

  const searchParams = useSearchParams();
  const credit = searchParams?.get('credit') || '';
  const totalBal = searchParams?.get('total_credits_after_txn') || '';
  const totalBalValue = searchParams?.get('total_amount_after_txn') || '';
  const transaction_id = searchParams?.get('transaction_id') || '';

  const handleFreeCreditClaim = () => setIsFreeCreditsClaimed(!isFreeCreditsClaimed);

  const handelNameChange = () => setIsNameChange(!isNameChange);

  const handleClose = () => {
    setOpenSuccess(false);
    router.push(pathname);
  };

  const handleCreateNewRoomID = () => {
    const id = randomID();
    setRoomID(id);
  };

  const handleCreditDrawerClose = () => setOpenCreditDrawer(false);

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
    handleCreateNewRoomID();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setBalance(Number(totalBal));
    setAddedCredits(Number(credit));
    if (credit) {
      setOpenSuccess(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window !== 'undefined' && window?.flux && window.document) {
        if (window?.flux?.get && window?.flux?.get('{hit}')) {
          setfunnelHitId(window?.flux?.get('{hit}') as string);
          clearInterval(interval);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (totalBalValue && transaction_id) {
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
      const checkFluxLoaded = async () => {
        if (window?.flux && window.document && window?.flux?.get && window?.flux?.get('{hit}')) {
          const hitID = window?.flux?.get('{hit}') as string;
          await FunnelfluxService.funnelfluxConversionEvent(
            {
              hit_id: hitID,
              revenue: Number(totalBalValue || 0),
              transaction_id: transaction_id.toString()
            },
            tokenDetails.token
          );
          clearInterval(intervalId);
        }
      };
      const intervalId = setInterval(checkFluxLoaded, 100);
      return () => clearInterval(intervalId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalBalValue, transaction_id]);

  const fetchPageName = () => {
    let pageName = 'homepage';
    if (CHATROOM.some((a) => pathname.includes(a.url))) {
      const page = CHATROOM?.find((a) => pathname?.includes(a?.url));
      pageName = page?.title || 'homepage';
    } else if (pathname?.includes('/models')) {
      pageName = 'model-details';
    } else {
      pageName = pathname;
    }
    return pageName.startsWith('/') ? pageName.slice(1).replace(/\//g, '-') : pageName.replace(/\//g, '-');
  };

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
        handleCreditDrawerClose,
        handleCreateNewRoomID,
        handleSetBalance,
        token: tokenDetails,
        isAdmin,
        adminUserPermissions,
        roomID,
        funnelHitId,
        fetchPageName,
        balance
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
export default AuthFeaturProvider;
