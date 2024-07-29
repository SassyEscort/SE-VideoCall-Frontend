'use client';
import { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import { CometChatUIKitConstants } from '@cometchat/uikit-resources';
import { Call, CometChat } from '@cometchat/chat-sdk-javascript';
import { toast } from 'react-toastify';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { getUserDataClient } from 'utils/getSessionData';
import { CallingService, CreditCallRes } from 'services/calling/calling.services';
import { CALLING_STATUS } from 'constants/callingConstants';
import { CometChatUIKit } from '@cometchat/chat-uikit-react';
import { useSession } from 'next-auth/react';
import { User } from 'app/(guest)/layout';
import { ErrorMessage } from 'constants/common.constants';
import { COMETCHAT_CONSTANTS } from 'views/protectedViews/callingFeature/CallInitialize';
import { CometChatCalls } from '@cometchat/calls-sdk-javascript';
import UIStyledDialog, { ModelCreditsUIStyledDialog } from 'components/UIComponents/UIStyledDialog';
import ModelCredits from 'views/protectedViews/Credites/ModelCredits';
import { usePathname, useSearchParams } from 'next/navigation';
import CreditsAdded from 'views/protectedViews/CreditsAdded/CreditsAdded';
import { useRouter } from 'next/navigation';
import { UIKitSettingsBuilder } from '@cometchat/uikit-shared';

interface CallFeatureContextProps {
  call: CometChat.Call | undefined;
  handleCancelCall: () => void;
  handleCallInitiate: (
    guestId: number,
    isCallIniate: boolean,
    callTime: number,
    modelName: string,
    modelPhoto: string,
    userName: string,
    modelPrice: string
  ) => void;
  handelNameChange: () => void;
  isNameChange: boolean;
  isCallAccepted: boolean;
  isCustomer: boolean;
  isCallIncoming: boolean;
  modelName: string;
  modelPhoto: string;
  isLoading: boolean;
  isCallEnded: boolean;
  isBusy: boolean;
  handleBusyClose: () => void;
  avaialbleCredits: number;
  getToken: (token: TokenIdType) => void;
  handleOpen: () => void;
  modelCreditPrice: string;
}

const CallContext = createContext<CallFeatureContextProps>({
  call: undefined,
  handleCancelCall: () => {},
  handleCallInitiate: () => {},
  handelNameChange: () => {},
  isNameChange: false,
  isCallAccepted: false,
  isCustomer: false,
  isCallIncoming: false,
  modelName: '',
  modelPhoto: '',
  isBusy: false,
  handleBusyClose: () => {},
  isLoading: false,
  isCallEnded: false,
  avaialbleCredits: 0,
  getToken: () => {},
  handleOpen: () => {},
  modelCreditPrice: ''
});

export const CallFeatureProvider = ({ children }: { children: ReactNode }) => {
  const tokenCometChat = useSession();
  const customerUser = (tokenCometChat?.data?.user as User)?.picture;
  const customerUsername = customerUser && JSON.parse(customerUser);

  const isCustomer = (tokenCometChat?.data?.user as User)?.provider === 'providerGuest';

  const searchParams = useSearchParams();

  const path = usePathname();
  const userName = path.split('/')[2];

  const [call, setCall] = useState<CometChat.Call | undefined>(undefined);
  const [modelId, setModelId] = useState(0);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [isCallAccepted, setIsCallAccepted] = useState(false);
  const [endCallTime, setEndCallTime] = useState(180000);
  const [sessionId, setSessionId] = useState('');
  const [isCallIncoming, setIsCallIncoming] = useState(false);
  const [modelName, setModelName] = useState('');
  const [modelPhoto, setModelPhoto] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCallEnded, setIsCallEnded] = useState(false);
  const [open, setOpen] = useState(false);
  const [isOutOfCredits, setIsOutOfCredits] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const [addedCredits, setAddedCredits] = useState(0);
  const [balance, setBalance] = useState(0);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [avaialbleCredits, setAvailableCredits] = useState(0);
  const [isNameChange, setIsNameChange] = useState(false);
  const [modelCreditPrice, setModelCreditPrice] = useState('');

  const pathname = usePathname();
  const router = useRouter();
  const init = useCallback(async () => {
    try {
      const UIKitSettings = new UIKitSettingsBuilder()
        .setAppId(COMETCHAT_CONSTANTS.APP_ID)
        .setRegion(COMETCHAT_CONSTANTS.REGION)
        .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
        .subscribePresenceForAllUsers()
        .build();

      await CometChatUIKit.init(UIKitSettings);
      let user = await CometChatUIKit.getLoggedinUser();

      if (!user && customerUsername && isCustomer) {
        user = await CometChatUIKit.login(customerUsername?.customer_user_name);
      }

      CometChatUIKit.getLoggedinUser().then((user) => {
        if (!user && customerUsername && isCustomer) {
          CometChatUIKit.login(customerUsername?.customer_user_name);
        }
      });
    } catch (e) {
      toast.error(ErrorMessage);
    }
  }, [customerUsername, isCustomer]);

  const handelNameChange = () => {
    setIsNameChange(!isNameChange);
  };

  const handleCancelCall = async () => {
    await creditPutCallLog(modelId, sessionId, CALLING_STATUS.CANCELED);
    await CometChat.rejectCall(sessionId, CometChat.CALL_STATUS.CANCELLED);
    setCall(undefined);
  };

  const getToken = (token: TokenIdType) => {
    setToken(token);
  };

  const handleCallInitiate = async (
    guestId: number,
    isCreditAvailable: boolean,
    callTime: number,
    modelName: string,
    modelPhoto: string,
    userName: string,
    modelPrice: string
  ) => {
    setModelCreditPrice(modelPrice);
    if (guestId && isCreditAvailable && !call && Boolean(token.token)) {
      const isModelBusy = await CallingService.getModelCallStatus(guestId, token.token);
      setModelId(guestId);
      setModelName(modelName);
      setModelPhoto(modelPhoto);

      if (isModelBusy.data.ongoing_calls) {
        setIsBusy(true);
      } else {
        setIsLoading(true);
        await init();

        setEndCallTime(callTime);
        const callObject = new CometChat.Call(
          userName,
          CometChatUIKitConstants.MessageTypes.video,
          CometChatUIKitConstants.MessageReceiverType.user
        );
        const callInitiate = await CometChat.initiateCall(callObject);
        setCall(callInitiate);
        setSessionId(callInitiate.getSessionId());
        setIsCallEnded(false);
        await creditPutCallLog(guestId, callInitiate.getSessionId(), '');
        setIsLoading(false);
      }
    } else if (call) {
      toast.error('Please end your ONGOING call');
      setIsLoading(false);
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setOpenSuccess(false);
    router.push(pathname);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleBusyClose = () => {
    setIsBusy(false);
  };

  const creditPutCallLog = async (model_id: number, comet_chat_session_id: string, status: string): Promise<CreditCallRes | undefined> => {
    const creditLog = {
      model_id: model_id,
      comet_chat_session_id: comet_chat_session_id,
      status: status
    };
    if (token.token) {
      const creditLogData = await CallingService.creditPutCallLog(creditLog, token.token);
      if (call && (creditLogData.end_call || status === CALLING_STATUS.ENDED)) {
        setCall(undefined);
        setIsCallAccepted(false);
        await CometChat.endCall(call.getSessionId());
        CometChatCalls.endSession();
        setAvailableCredits(creditLogData.available_credits);
        if (isCustomer && creditLogData.out_of_credits) {
          setIsOutOfCredits(true);
          setOpen(true);
          await CometChatUIKit.logout();
        }
      }
      return creditLogData;
    }
  };

  useEffect(() => {
    CometChatCalls.addCallEventListener(String(modelId), {
      onCallEnded: async () => {
        setIsCallAccepted(false);
        setCall(undefined);
        setIsCallEnded(true);
        CometChat.removeUserListener(String(modelId));
        if (isCustomer) {
          const endCallData = await creditPutCallLog(modelId, sessionId, CALLING_STATUS.ENDED);
          if (endCallData) {
            setAvailableCredits(endCallData.available_credits);
          }
          await CometChatUIKit.logout();
        }
      },
      onCallEndButtonPressed: async () => {
        setIsCallAccepted(false);
        setCall(undefined);
        setIsCallEnded(true);
        CometChat.removeUserListener(String(modelId));
        if (isCustomer) {
          const endCallData = await creditPutCallLog(modelId, sessionId, CALLING_STATUS.ENDED);
          if (endCallData) {
            setAvailableCredits(endCallData.available_credits);
          }
          await CometChatUIKit.logout();
        }
      }
    });
    return () => CometChatCalls.removeCallEventListener(String(modelId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCustomer, modelId, sessionId]);

  useEffect(() => {
    const callListener = new CometChat.CallListener({
      onIncomingCallReceived: async (call: Call) => {
        setIsCallIncoming(true);
        setSessionId(call.getSessionId());
        await creditPutCallLog(modelId, call.getSessionId(), CALLING_STATUS.UNASWERED);
      },
      onOutgoingCallAccepted: async () => {
        setIsCallAccepted(true);
      },
      onOutgoingCallRejected: async (call: Call) => {
        if (call.getStatus() === CALLING_STATUS.BUSY) {
          setIsBusy(true);
        }
        setCall(undefined);
        await creditPutCallLog(modelId, call.getSessionId(), CALLING_STATUS.REJECTED);
        setEndCallTime(180000);
        if (isCustomer) {
          await CometChatUIKit.logout();
        }
      },
      onIncomingCallCancelled: async (call: Call) => {
        setCall(undefined);
        await creditPutCallLog(modelId, call.getSessionId(), CALLING_STATUS.CANCELED);
        setEndCallTime(180000);
        if (isCustomer) {
          await CometChatUIKit.logout();
        }
      },
      onCallEndedMessageReceived: async (call: Call) => {
        setIsCallAccepted(false);
        setCall(undefined);
        CometChat.removeUserListener(String(modelId));
        await CometChat.endCall(call.getSessionId());
        setIsCallEnded(true);
        if (isCustomer) {
          const endCallData = await creditPutCallLog(modelId, call.getSessionId(), CALLING_STATUS.ENDED);
          if (endCallData) {
            setAvailableCredits(endCallData.available_credits);
          }
          await CometChatUIKit.logout();
        }
      }
    });

    CometChat.addCallListener(String(modelId), callListener);

    return () => {
      CometChat.removeCallListener(String(modelId));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modelId, isCustomer, call]);

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      if (data) {
        setToken({ id: data.id, token: data.token });
      }
    };
    userToken();
  }, []);

  useEffect(() => {
    const credit = searchParams.get('credit');
    const totalBal = searchParams.get('total_credits_after_txn');
    setBalance(Number(totalBal));
    setAddedCredits(Number(credit));
    if (credit) {
      setOpenSuccess(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      if (isCallAccepted && isCustomer) {
        try {
          const endCall = await creditPutCallLog(modelId, sessionId, '');
          if (endCall && endCall.end_call) {
            setIsCallEnded(true);
            clearInterval(intervalId);
            return;
          }
        } catch (error) {
          toast.error(ErrorMessage);
        }
      }
    }, 60000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCallAccepted, isCustomer, modelId, sessionId, isCallEnded]);

  useEffect(() => {
    const timerId = setTimeout(async () => {
      if (isCallAccepted || isCallEnded) {
        setCall(undefined);
        setIsCallAccepted(false);
        setIsCallEnded(true);
        await CometChat.endCall(sessionId);
        CometChatCalls.endSession();
        if (isCustomer) {
          const endCallData = await creditPutCallLog(modelId, sessionId, CALLING_STATUS.ENDED);
          if (endCallData) {
            setAvailableCredits(endCallData.available_credits);
          }
          setOpen(true);
          await CometChatUIKit.logout();
          return;
        }
      }
    }, endCallTime);

    return () => clearTimeout(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCallAccepted, isCallEnded, isCustomer, modelId, sessionId]);

  return (
    <CallContext.Provider
      value={{
        call,
        handleCancelCall,
        handleCallInitiate,
        handelNameChange,
        isNameChange,
        isCallAccepted,
        isCustomer,
        isCallIncoming,
        modelName,
        modelPhoto,
        isCallEnded,
        isBusy,
        handleBusyClose,
        isLoading,
        avaialbleCredits,
        getToken,
        handleOpen,
        modelCreditPrice
      }}
    >
      {children}
      <ModelCreditsUIStyledDialog open={open} maxWidth="md" fullWidth scroll="body">
        <ModelCredits onClose={handleClose} isOutOfCredits={isOutOfCredits} userName={userName} modelCreditPrice={modelCreditPrice} />
      </ModelCreditsUIStyledDialog>
      <UIStyledDialog open={openSuccess} maxWidth="md" fullWidth>
        <CreditsAdded addedCredits={addedCredits} newBalance={balance} onClose={handleClose} isOutOfCredits={isOutOfCredits} />
      </UIStyledDialog>
    </CallContext.Provider>
  );
};

export const useCallFeatureContext = (): CallFeatureContextProps => {
  const context = useContext(CallContext);
  return context;
};
