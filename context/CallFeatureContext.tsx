'use client';
import { useRouter } from 'next/navigation';
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { CometChatUIKitConstants } from '@cometchat/uikit-resources';
import { Call, CometChat } from '@cometchat/chat-sdk-javascript';
import { toast } from 'react-toastify';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { getUserDataClient } from 'utils/getSessionData';
import { CallingService } from 'services/calling/calling.services';
import { CALLING_STATUS } from 'constants/callingConstants';

interface CallFeatureContextProps {
  call: CometChat.Call | undefined;
  handleCancelCall: () => void;
  handleCallInitiate: (guestId: number, isCallIniate: boolean, callTime: number) => void;
  isCallAccepted: boolean;
  isCallEnded: boolean;
}

const CallContext = createContext<CallFeatureContextProps>({
  call: undefined,
  handleCancelCall: () => {},
  handleCallInitiate: () => {},
  isCallAccepted: false,
  isCallEnded: false
});

export const CallFeatureProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [call, setCall] = useState<CometChat.Call | undefined>(undefined);
  const [modelId, setModelId] = useState(0);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [isCallAccepted, setIsCallAccepted] = useState(false);
  const [isCallEnded, setIsCallEnded] = useState(false);

  const handleCancelCall = () => {
    setCall(undefined);
    router.push('/');
  };

  const handleCallInitiate = (guestId: number, isCreditAvailable: boolean, callTime: number) => {
    if (guestId && isCreditAvailable) {
      setModelId(guestId);
      const callObject = new CometChat.Call(
        guestId,
        CometChatUIKitConstants.MessageTypes.video,
        CometChatUIKitConstants.MessageReceiverType.user
      );
      CometChat.initiateCall(callObject).then((c: any) => {
        setCall(c);
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
      if (creditLogData.end_call && call) {
        setCall(undefined);
        CometChat.endCall(call.getSessionId());
      }
    }
  };

  useEffect(() => {
    CometChat.addCallListener(
      String(modelId),
      new CometChat.CallListener({
        onIncomingCallReceived: (call: Call) => {
          setIsCallAccepted(true);
          creditPutCallLog(modelId, call.getSessionId(), CALLING_STATUS.UNASWERED);
        },
        onOutgoingCallAccepted: (call: Call) => {
          setIsCallAccepted(true);
          creditPutCallLog(modelId, call.getSessionId(), '');
        },
        onOutgoingCallRejected: (call: Call) => {
          setIsCallAccepted(false);
          setIsCallEnded(true);
          creditPutCallLog(modelId, call.getSessionId(), CALLING_STATUS.REJECTED);
        },

        onIncomingCallCancelled: (call: Call) => {
          setIsCallAccepted(false);
          setIsCallEnded(true);
          creditPutCallLog(modelId, call.getSessionId(), CALLING_STATUS.CANCELED);
        },
        onCallEndedMessageReceived: (call: Call) => {
          setIsCallAccepted(false);
          setIsCallEnded(true);
          creditPutCallLog(modelId, call.getSessionId(), CALLING_STATUS.ENDED);
        }
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modelId]);

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

  return (
    <CallContext.Provider value={{ call, handleCancelCall, handleCallInitiate, isCallAccepted, isCallEnded }}>
      {children}
    </CallContext.Provider>
  );
};

export const useCallFeatureContext = (): CallFeatureContextProps => {
  const context = useContext(CallContext);
  return context;
};
