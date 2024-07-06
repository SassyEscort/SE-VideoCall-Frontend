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
import { CometChatCalls } from '@cometchat/calls-sdk-javascript';

interface CallFeatureContextProps {
  call: CometChat.Call | undefined;
  handleCancelCall: () => void;
  handleCallInitiate: (guestId: number, isCallIniate: boolean, callTime: number, modelName: string, modelPhoto: string) => void;
  isCallAccepted: boolean;
  isCustomer: boolean;
  isCallIncoming: boolean;
  modelName: string;
  modelPhoto: string;
}

const CallContext = createContext<CallFeatureContextProps>({
  call: undefined,
  handleCancelCall: () => {},
  handleCallInitiate: () => {},
  isCallAccepted: false,
  isCustomer: false,
  isCallIncoming: false,
  modelName: '',
  modelPhoto: ''
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
  const [isCallIncoming, setIsCallIncoming] = useState(false);
  const [modelName, setModelName] = useState('');
  const [modelPhoto, setModelPhoto] = useState('');

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

  const handleCancelCall = async () => {
    await CometChat.rejectCall(sessionId, CometChat.CALL_STATUS.CANCELLED);
    setCall(undefined);
  };

  const handleCallInitiate = async (
    guestId: number,
    isCreditAvailable: boolean,
    callTime: number,
    modelName: string,
    modelPhoto: string
  ) => {
    if (guestId && isCreditAvailable && !endStatus) {
      await init();
      setEndCallTime(callTime);
      setModelId(guestId);
      setModelName(modelName);
      setModelPhoto(modelPhoto);
      const callObject = new CometChat.Call(
        guestId,
        CometChatUIKitConstants.MessageTypes.video,
        CometChatUIKitConstants.MessageReceiverType.user
      );
      const callInitiate = await CometChat.initiateCall(callObject);
      setCall(callInitiate);
      setSessionId(callInitiate.getSessionId());
      await creditPutCallLog(guestId, callInitiate.getSessionId(), '');
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
        setEndStatus(true);
        setIsCallAccepted(false);
        await CometChat.endCall(call.getSessionId());
        await CometChatUIKit.logout();
      }
    }
  };

  useEffect(() => {
    CometChatCalls.addCallEventListener(String(modelId), {
      onCallEnded: async () => {
        setIsCallAccepted(false);
        setCall(undefined);
        CometChat.removeUserListener(String(modelId));
        if (isCustomer) {
          await creditPutCallLog(modelId, sessionId, CALLING_STATUS.ENDED);
          await CometChatUIKit.logout();
        }
      },
      onCallEndButtonPressed: async () => {
        setIsCallAccepted(false);
        setCall(undefined);
        CometChat.removeUserListener(String(modelId));
        if (isCustomer) {
          await creditPutCallLog(modelId, sessionId, CALLING_STATUS.ENDED);
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
        if (isCustomer) {
          await creditPutCallLog(modelId, call.getSessionId(), CALLING_STATUS.ENDED);
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

  setInterval(async () => {
    if (call) {
      await creditPutCallLog(modelId, call.getSessionId(), '');
    }
  }, 60000);

  setTimeout(async () => {
    if (isCallAccepted || endStatus) {
      setCall(undefined);
      setIsCallAccepted(false);
      await CometChat.endCall(sessionId);
      await CometChatUIKit.logout();
      await creditPutCallLog(modelId, sessionId, CALLING_STATUS.ENDED);
    }
  }, endCallTime);

  return (
    <CallContext.Provider
      value={{ call, handleCancelCall, handleCallInitiate, isCallAccepted, isCustomer, isCallIncoming, modelName, modelPhoto }}
    >
      {children}
    </CallContext.Provider>
  );
};

export const useCallFeatureContext = (): CallFeatureContextProps => {
  const context = useContext(CallContext);
  return context;
};
