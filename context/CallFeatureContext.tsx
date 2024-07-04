'use client';
import { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import { CometChatUIKitConstants } from '@cometchat/uikit-resources';
import { Call, CometChat } from '@cometchat/chat-sdk-javascript';
import { toast } from 'react-toastify';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { getUserDataClient } from 'utils/getSessionData';
import { CallingService } from 'services/calling/calling.services';
import { CALLING_STATUS } from 'constants/callingConstants';
import { CometChatUIKit, UIKitSettingsBuilder } from '@cometchat/chat-uikit-react';
import { useSession } from 'next-auth/react';
import { User } from 'app/(guest)/layout';
import { ErrorMessage } from 'constants/common.constants';
import { COMETCHAT_CONSTANTS } from 'views/protectedViews/callingFeature/CallInitialize';

interface CallFeatureContextProps {
  call: CometChat.Call | undefined;
  handleCancelCall: () => void;
  handleCallInitiate: (guestId: number, isCallIniate: boolean, callTime: number) => void;
  isCallAccepted: boolean;
  isCustomer: boolean;
}

const CallContext = createContext<CallFeatureContextProps>({
  call: undefined,
  handleCancelCall: () => {},
  handleCallInitiate: () => {},
  isCallAccepted: false,
  isCustomer: false
});

export const CallFeatureProvider = ({ children }: { children: ReactNode }) => {
  const tokenCometChat = useSession();
  const cometChatUID = (tokenCometChat?.data?.user as User)?.id;
  const isCustomer = (tokenCometChat?.data?.user as User)?.provider === 'providerGuest';

  const [call, setCall] = useState<CometChat.Call | undefined>(undefined);
  const [modelId, setModelId] = useState(0);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [isCallAccepted, setIsCallAccepted] = useState(false);
  const [endCallTime, setEndCallTime] = useState(180000);
  const [sessionId, setSessionId] = useState('');
  const [endStatus, setEndStatus] = useState(false);

  const uniqueEventListener = 'Unique_123';

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

      if (!user && cometChatUID && isCustomer) {
        user = await CometChatUIKit.login(cometChatUID);
      }

      CometChatUIKit.getLoggedinUser().then((user) => {
        if (!user && cometChatUID && isCustomer) {
          CometChatUIKit.login(cometChatUID);
        }
      });
    } catch (e) {
      toast.error(ErrorMessage);
    }
  }, [cometChatUID, isCustomer]);

  const handleCancelCall = () => {
    if (call) {
      setCall(undefined);
      CometChat.endCall(call.getSessionId());
    }
  };

  const handleCallInitiate = async (guestId: number, isCreditAvailable: boolean, callTime: number) => {
    await init();
    if (guestId && isCreditAvailable) {
      setEndCallTime(callTime);
      setModelId(guestId);
      const callObject = new CometChat.Call(
        guestId,
        CometChatUIKitConstants.MessageTypes.video,
        CometChatUIKitConstants.MessageReceiverType.user
      );
      CometChat.initiateCall(callObject).then((c: any) => {
        setCall(c);
        setSessionId(c.getSessionId());
      });
    } else {
      toast.error('Credit balance should more than 3 minutes');
    }
  };

  const creditPutCallLog = async (model_id: number, comet_chat_session_id: string, status: string) => {
    const creditLog = {
      model_id: model_id,
      comet_chat_session_id: comet_chat_session_id,
      status: status
    };
    if (token.token) {
      const creditLogData = await CallingService.creditPutCallLog(creditLog, token.token);
      if (call && (creditLogData.end_call || status === CALLING_STATUS.ENDED)) {
        setCall(undefined);
        CometChat.endCall(call.getSessionId());
      }
    }
  };

  useEffect(() => {
    const callListener = new CometChat.CallListener({
      onIncomingCallReceived: (call: Call) => {
        setSessionId(call.getSessionId());
        creditPutCallLog(modelId, call.getSessionId(), CALLING_STATUS.UNASWERED);
      },
      onOutgoingCallAccepted: (call: Call) => {
        setIsCallAccepted(true);
        creditPutCallLog(modelId, call.getSessionId(), '');
      },
      onOutgoingCallRejected: async (call: Call) => {
        setCall(undefined);
        creditPutCallLog(modelId, call.getSessionId(), CALLING_STATUS.REJECTED);
        setEndCallTime(180000);
        if (isCustomer) {
          await CometChatUIKit.logout();
        }
      },
      onIncomingCallCancelled: async (call: Call) => {
        setCall(undefined);
        creditPutCallLog(modelId, call.getSessionId(), CALLING_STATUS.CANCELED);
        setEndCallTime(180000);
        if (isCustomer) {
          await CometChatUIKit.logout();
        }
      },
      onCallEndedMessageReceived: async (call: Call) => {
        setIsCallAccepted(false);
        setCall(undefined);
        CometChat.removeUserListener(uniqueEventListener);
        await CometChat.endCall(call.getSessionId());
        if (isCustomer) {
          await CometChatUIKit.logout();
        }
      }
    });

    CometChat.addCallListener(uniqueEventListener, callListener);

    return () => {
      CometChat.removeCallListener(uniqueEventListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modelId, isCustomer, call]);

  useEffect(() => {
    let intervalId: number | undefined;
    if (isCallAccepted) {
      intervalId = window.setInterval(async () => {
        const callStatus = await CallingService.fetchCallStatus(sessionId);
        if (callStatus === 'ended') {
          setCall(undefined);
          setIsCallAccepted(false);
          setEndStatus(true);
        }
      }, 2000);
    }
    return () => {
      if (intervalId !== undefined) {
        clearInterval(intervalId);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCallAccepted, endStatus]);

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      if (data) {
        setToken({ id: data.id, token: data.token });
      }
    };
    userToken();
  }, []);

  setInterval(() => {
    if (call) {
      creditPutCallLog(modelId, call.getSessionId(), '');
    }
  }, 60000);

  setTimeout(() => {
    if (isCallAccepted) {
      CometChat.endCall(sessionId);
      setCall(undefined);
      setIsCallAccepted(false);
      creditPutCallLog(modelId, sessionId, CALLING_STATUS.ENDED);
    }
  }, endCallTime);

  return (
    <CallContext.Provider value={{ call, handleCancelCall, handleCallInitiate, isCallAccepted, isCustomer }}>
      {children}
    </CallContext.Provider>
  );
};

export const useCallFeatureContext = (): CallFeatureContextProps => {
  const context = useContext(CallContext);
  return context;
};
