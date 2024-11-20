'use client';
import { CancelCallInvitationFunc, ZegoUIKitPrebuilt, ZegoUser } from '@zegocloud/zego-uikit-prebuilt';
import { useSession } from 'next-auth/react';
import { createContext, useContext, useRef, useState } from 'react';
import { User } from 'app/(guest)/layout';
import { usePathname } from 'next/navigation';
import { randomID } from 'utils/videoCall';

interface ICustomerInfo {
  id: string;
  email: string;
  name: string;
  username: string;
  model_username: string;
}

interface IUserRef {
  userID: string;
  userName: string;
  endedBy: string;
  isUserLeave: boolean;
  isCustomerLeave: boolean;
  call_ID: string;
}

interface ICallDuration {
  startTime: string;
  endTime: string;
}

interface IModelRef {
  id: number;
  userName: string;
  modelPhoto: string;
}

interface VideoCallContextProps {
  callInstance: ZegoUIKitPrebuilt | null;
  isCallAccepted: boolean;
  isCallIncoming: boolean;
  modelName: string;
  modelPhoto: string;
  modelUsername: string;
  isLoading: boolean;
  isCallEnded: boolean;
  isBusy: boolean;
  avaialbleCredits: number;
  modelCreditPrice: string;
  isModelAvailable: number;
  user: string | undefined;
  isUnanswered: boolean;
  isFavouriteModel: number;
  isModelJoin: boolean;
  outgoingCallDialogOpen: boolean;
  callLogId: number;
  isModelEndedCall: boolean;
  isCallInitiated: boolean;
  customerInfo: ICustomerInfo;
  userId: number;
  modelId: number;
  endCallTime: number;
  sessionId: string;
  reviewOpen: boolean;
  isCreditAvailable: boolean;
  callTime: number;
  userRef: React.MutableRefObject<IUserRef>;
  callDurationRef: React.MutableRefObject<ICallDuration>;
  modelRef: React.MutableRefObject<IModelRef>;
  outgoingCallInfo: { caller: ZegoUser } | null;

  // Setter functions
  handleOutGoingCallCancel: () => void;
  handleOutgoingCallCancel: () => void;
  handleBusyClose: () => void;
  handleSetBusy: (val?: boolean) => void;
  handleSetCallEnd: (val?: boolean) => void;
  handleModelOfflineClose: () => void;
  handleSetCallInstance: (callInstance: ZegoUIKitPrebuilt | null) => void;
  handleSetModelId: (val: number) => void;
  handleSetCallLogId: (val: number) => void;
  handleSetCallTime: (val: number) => void;
  handleSetFavouriteModel: (val: number) => void;
  handleSetEndCallTime: (val: number) => void;
  handleSetAvailableCredits: (val: number) => void;
  handleSetUserId: (val: number) => void;
  handleSetModelPhoto: (val: string) => void;
  handleSetModelName: (val: string) => void;
  handleSetModelUsername: (val: string) => void;
  handleSetIsModelJoin: (val: boolean) => void;
  handleSetSessionId: (val: string) => void;
  handleSetModelCreditPrice: (val: string) => void;
  handleSetIsAutodisconnected: (val: boolean) => void;
  handleSetIsUnanswered: (val: boolean) => void;
  handleSetIsCreditAvailable: (val: boolean) => void;
  handleSetIsCallAccepted: (val: boolean) => void;
  handleSetIsCallIncoming: (val: boolean) => void;
  handleSetIsCallInitiated: (val: boolean) => void;
  handleSetIsModelEndedCall: (val: boolean) => void;
  handleSetReviewOpen: (val: boolean) => void;
  handleSetIsLoading: (val: boolean) => void;
  handleSetOutgoingCallDialogOpen: (val: boolean) => void;
  handleSetCancelCallInvitationFn: (fn: CancelCallInvitationFunc | null) => void;
  handleReviewClose: (isPreventReload?: boolean) => void;
  handleSetUserRef: (
    userID: string,
    userName: string,
    endedBy: string,
    isUserLeave: boolean,
    isCustomerLeave: boolean,
    call_ID: string
  ) => void;
  handleSetModelDetails: (id: number, userName: string, modelPhoto: string) => void;
  handleCallDurationRef: (startTime: string, endTime: string) => void;
  handleSetOutgoingCallInfo: (callees?: ZegoUser[]) => void;
  handleSetIsModelAvailable: (val: number) => void;
  handleGetRoomId: () => void;
  handleRemovedRoomId: () => void;
  handleGetModelId: () => void;
}

const VideoCallContext = createContext<VideoCallContextProps>({
  callInstance: null,
  isCallAccepted: false,
  isCallIncoming: false,
  modelId: 0,
  modelName: '',
  modelPhoto: '',
  modelUsername: '',
  isBusy: false,
  isLoading: false,
  isCallEnded: false,
  avaialbleCredits: 0,
  modelCreditPrice: '',
  isModelAvailable: 0,
  user: '',
  isUnanswered: false,
  isFavouriteModel: 0,
  isModelJoin: false,
  outgoingCallDialogOpen: false,
  callLogId: 0,
  isModelEndedCall: false,
  isCallInitiated: false,
  customerInfo: { id: '', email: '', name: '', model_username: '', username: '' },
  userId: 0,
  // modelId: 0,
  endCallTime: 180000,
  sessionId: '',
  reviewOpen: false,
  isCreditAvailable: false,
  callTime: 0,
  modelRef: { current: { id: 0, userName: '', modelPhoto: '' } },
  userRef: { current: { call_ID: '', endedBy: '', isCustomerLeave: false, isUserLeave: false, userID: '', userName: '' } },
  callDurationRef: { current: { endTime: '', startTime: '' } },
  outgoingCallInfo: null,
  // Setter functions
  handleOutgoingCallCancel: () => {},
  handleBusyClose: () => {},
  handleSetBusy: () => {},
  handleSetCallEnd: () => {},
  handleModelOfflineClose: () => {},
  handleOutGoingCallCancel: () => {},
  handleSetCallInstance: () => {},
  handleSetModelId: () => {},
  handleSetCallLogId: () => {},
  handleSetCallTime: () => {},
  handleSetFavouriteModel: () => {},
  handleSetEndCallTime: () => {},
  handleSetAvailableCredits: () => {},
  handleSetUserId: () => {},
  handleSetModelPhoto: () => {},
  handleSetModelName: () => {},
  handleSetModelUsername: () => {},
  handleSetIsModelJoin: () => {},
  handleSetSessionId: () => {},
  handleSetModelCreditPrice: () => {},
  handleSetIsAutodisconnected: () => {},
  handleSetIsUnanswered: () => {},
  handleSetIsCreditAvailable: () => {},
  handleSetIsCallAccepted: () => {},
  handleSetIsCallIncoming: () => {},
  handleSetIsCallInitiated: () => {},
  handleSetIsModelEndedCall: () => {},
  handleSetIsLoading: () => {},
  handleSetCancelCallInvitationFn: () => {},
  handleSetOutgoingCallDialogOpen: () => {},
  handleReviewClose: () => {},
  handleSetUserRef: () => {},
  handleSetModelDetails: () => {},
  handleCallDurationRef: () => {},
  handleSetOutgoingCallInfo: () => {},
  handleSetReviewOpen: () => {},
  handleSetIsModelAvailable: () => {},
  handleGetRoomId: () => {},
  handleRemovedRoomId: () => {},
  handleGetModelId: () => {}
});

export const VideoCallProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const tokenCometChat = useSession();
  const user = (tokenCometChat?.data?.user as User)?.picture;
  const providerData = JSON.parse(user || '{}');
  const path = usePathname();
  const userName = path.split('/')[2];

  const customerInfo = {
    id: providerData?.customer_id,
    email: providerData?.customer_email,
    name: providerData?.customer_name,
    username: providerData?.customer_user_name,
    model_username: userName
  };

  const callDurationRef = useRef<{
    startTime: string;
    endTime: string;
  }>({
    startTime: '',
    endTime: ''
  });

  const modelRef = useRef<{
    id: number;
    userName: string;
    modelPhoto: string;
  }>({
    id: 0,
    userName: '',
    modelPhoto: ''
  });

  const [callInstance, setCallInstance] = useState<ZegoUIKitPrebuilt | null>(null);
  const [roomId, setRoomId] = useState('');
  const [modelId, setModelId] = useState(0);
  const [userId, setUserId] = useState(0);
  const [modelName, setModelName] = useState('');
  const [modelPhoto, setModelPhoto] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [modelCreditPrice, setModelCreditPrice] = useState('');
  const [isModelAvailable, setIsModelAvailable] = useState(1);
  const [callTime, setCallTime] = useState(0);
  const [callLogId, setCallLogId] = useState(0);
  const [isFavouriteModel, setIsFavouriteModel] = useState(0);
  const [endCallTime, setEndCallTime] = useState(180000);
  const [avaialbleCredits, setAvailableCredits] = useState(0);
  const [modelUsername, setModelUsername] = useState(userName || '');
  const [isCallAccepted, setIsCallAccepted] = useState(false);
  const [isCallIncoming, setIsCallIncoming] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCallEnded, setIsCallEnded] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const [isUnanswered, setIsUnanswered] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [isCreditAvailable, setIsCreditAvailable] = useState(false);
  const [isModelJoin, setIsModelJoin] = useState(false);
  const [, setIsAutodisconnected] = useState(false);
  const [isCallInitiated, setIsCallInitiated] = useState(false);

  const [cancelCallInvitationFn, setCancelCallInvitationFn] = useState<CancelCallInvitationFunc | null>(null);
  const [outgoingCallDialogOpen, setOutgoingCallDialogOpen] = useState(false);
  const [outgoingCallInfo, setOutgoingCallInfo] = useState<{ caller: ZegoUser } | null>(null);
  const [isModelEndedCall, setIsModelEndedCall] = useState(false);

  const handleOutGoingCallCancel = () => {
    setOutgoingCallDialogOpen(false);
    setOutgoingCallInfo(null);
    cancelCallInvitationFn && cancelCallInvitationFn();
    callInstance?.hangUp();
  };

  const handleGetRoomId = () => {
    if (roomId) return roomId;
    const id = randomID();
    setRoomId(id);
    return id;
  };

  const handleGetModelId = () => {
    return modelId || 0;
  };

  const userRef = useRef<{
    userID: string;
    userName: string;
    endedBy: string;
    isUserLeave: boolean;
    isCustomerLeave: boolean;
    call_ID: string;
  }>({
    userID: '',
    userName: '',
    endedBy: '',
    isUserLeave: false,
    isCustomerLeave: false,
    call_ID: handleGetRoomId()
  });

  const handleSetUserRef = (
    userID: string,
    userName: string,
    endedBy: string,
    isUserLeave = false,
    isCustomerLeave = false,
    call_ID: string
  ) => {
    userRef.current = {
      userID: userID || '',
      userName: userName || '',
      endedBy: endedBy || '-',
      isUserLeave: isUserLeave,
      isCustomerLeave: isCustomerLeave,
      call_ID: call_ID || handleGetRoomId()
    };
  };

  const handleCallDurationRef = (startTime: string, endTime: string) => {
    callDurationRef.current = {
      startTime: startTime || '',
      endTime: endTime || ''
    };
  };

  const handleSetModelDetails = (id: number, userName: string, modelPhoto: string) => {
    modelRef.current = {
      id: id || modelId || 0,
      userName: userName || '',
      modelPhoto: modelPhoto || ''
    };
  };

  const handleRemovedRoomId = () => setRoomId('');
  const handleSetCallInstance = (callInstance: ZegoUIKitPrebuilt | null) => setCallInstance(callInstance);
  const handleSetModelId = (val: number) => setModelId(val);
  const handleSetCallLogId = (val: number) => setCallLogId(val);
  const handleSetCallTime = (val: number) => setCallTime(val);
  const handleSetFavouriteModel = (val: number) => setIsFavouriteModel(val);
  const handleSetEndCallTime = (val: number) => setEndCallTime(val);
  const handleSetAvailableCredits = (val: number) => setAvailableCredits(val);
  const handleSetUserId = (val: number) => setUserId(val);

  const handleSetModelPhoto = (val: string) => setModelPhoto(val);
  const handleSetModelName = (val: string) => setModelName(val);
  const handleSetModelUsername = (val: string) => setModelUsername(val);
  const handleSetIsModelJoin = (val: boolean) => setIsModelJoin(val);

  const handleSetSessionId = (val: string) => setSessionId(val);
  const handleSetModelCreditPrice = (val: string) => setModelCreditPrice(val);

  const handleSetIsAutodisconnected = (val: boolean) => setIsAutodisconnected(val);

  const handleSetIsUnanswered = (val: boolean) => setIsUnanswered(val);
  const handleSetIsCreditAvailable = (val: boolean) => setIsCreditAvailable(val);
  const handleSetIsCallAccepted = (val: boolean) => setIsCallAccepted(val);
  const handleSetIsCallIncoming = (val: boolean) => setIsCallIncoming(val);
  const handleSetIsCallInitiated = (val: boolean) => setIsCallInitiated(val);
  const handleSetIsModelEndedCall = (val: boolean) => setIsModelEndedCall(val);
  const handleSetIsLoading = (val: boolean) => setIsLoading(val);
  const handleSetOutgoingCallDialogOpen = (val: boolean) => setOutgoingCallDialogOpen(val);
  const handleSetReviewOpen = (val: boolean) => setReviewOpen(val);

  const handleSetCancelCallInvitationFn = (fn: CancelCallInvitationFunc | null) => setCancelCallInvitationFn(fn);

  const handleSetBusy = (val = false) => setIsBusy(val);
  const handleBusyClose = () => {
    handleSetBusy(false);
    // window?.location?.reload();
  };
  const handleSetCallEnd = (val = false) => setIsCallEnded(val);

  const handleReviewClose = (isPreventReload?: boolean) => {
    handleSetReviewOpen(false);
    if (!isPreventReload) window.location.reload();
  };

  const handleSetIsModelAvailable = (val: number) => setIsModelAvailable(val);

  const handleModelOfflineClose = () => setIsModelAvailable(1);
  const handleSetOutgoingCallInfo = (callees?: ZegoUser[]) => {
    if (callees) {
      setOutgoingCallInfo({
        caller: {
          userID: callees[0]?.userID,
          userName: callees[0]?.userName
        }
      });
    } else {
      setOutgoingCallInfo(null);
    }
  };

  const handleOutgoingCallCancel = async () => {
    setOutgoingCallDialogOpen(false);
    setOutgoingCallInfo(null);
    cancelCallInvitationFn && cancelCallInvitationFn();
    setCallInstance(null);
  };

  return (
    <VideoCallContext.Provider
      value={{
        callInstance,
        userId,
        modelId,
        sessionId,
        customerInfo,
        isCallAccepted,
        isCallIncoming,
        modelName,
        modelPhoto,
        modelUsername,
        isCallEnded,
        isBusy,
        isLoading,
        avaialbleCredits,
        modelCreditPrice,
        isModelAvailable,
        user,
        isUnanswered,
        isFavouriteModel,
        isModelJoin,
        outgoingCallDialogOpen,
        callLogId,
        isModelEndedCall,
        isCallInitiated,
        reviewOpen,
        isCreditAvailable,
        callTime,
        outgoingCallInfo,
        endCallTime,
        userRef,
        modelRef,
        callDurationRef,
        handleOutgoingCallCancel,
        handleBusyClose,
        handleSetBusy,
        handleSetCallEnd,
        handleModelOfflineClose,
        handleSetFavouriteModel,
        handleOutGoingCallCancel,
        handleSetCallInstance,
        handleSetModelId,
        handleSetCallLogId,
        handleSetCallTime,
        handleSetEndCallTime,
        handleSetAvailableCredits,
        handleSetUserId,
        handleSetModelPhoto,
        handleSetModelName,
        handleSetModelUsername,
        handleSetIsModelJoin,
        handleSetSessionId,
        handleSetModelCreditPrice,
        handleSetIsAutodisconnected,
        handleSetIsUnanswered,
        handleSetIsCreditAvailable,
        handleSetIsCallAccepted,
        handleSetIsCallIncoming,
        handleSetIsCallInitiated,
        handleSetIsModelEndedCall,
        handleSetIsLoading,
        handleSetCancelCallInvitationFn,
        handleReviewClose,
        handleSetOutgoingCallDialogOpen,
        handleSetOutgoingCallInfo,
        handleSetModelDetails,
        handleSetUserRef,
        handleSetReviewOpen,
        handleCallDurationRef,
        handleSetIsModelAvailable,
        handleGetRoomId,
        handleRemovedRoomId,
        handleGetModelId
      }}
    >
      {children}
    </VideoCallContext.Provider>
  );
};

export const useVideoCallContext = (): VideoCallContextProps => {
  const context = useContext(VideoCallContext);
  if (!context) {
    throw new Error('useVideoCallContext must be used within a CallProvider');
  }
  return context;
};
