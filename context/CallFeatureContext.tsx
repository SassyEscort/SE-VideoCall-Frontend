'use client';
import { useRouter } from 'next/navigation';
import { createContext, useState, useContext, ReactNode } from 'react';
import { CometChatUIKitConstants } from '@cometchat/uikit-resources';
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { toast } from 'react-toastify';

interface CallFeatureContextProps {
  call: CometChat.Call | undefined;
  handleCancelCall: () => void;
  handleCallInitiate: (guestId: number, isCallIniate: boolean) => void;
}

const CallContext = createContext<CallFeatureContextProps>({
  call: undefined,
  handleCancelCall: () => {},
  handleCallInitiate: () => {}
});

export const CallFeatureProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [call, setCall] = useState<CometChat.Call | undefined>(undefined);

  const handleCancelCall = () => {
    setCall(undefined);
    router.push('/');
  };

  const handleCallInitiate = (guestId: number, isCreditAvailable: boolean) => {
    if (guestId && isCreditAvailable) {
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

  return <CallContext.Provider value={{ call, handleCancelCall, handleCallInitiate }}>{children}</CallContext.Provider>;
};

export const useCallFeatureContext = (): CallFeatureContextProps => {
  const context = useContext(CallContext);
  return context;
};
