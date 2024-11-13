/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useContext, useState, useEffect, useCallback, lazy, useRef } from 'react';
import {
  ZegoUIKitPrebuilt,
  ZegoInvitationType,
  CancelCallInvitationFunc,
  ZegoCloudRoomConfig,
  ZegoUser
} from '@zegocloud/zego-uikit-prebuilt';
import { ZIM } from 'zego-zim-web';
import { usePathname } from 'next/navigation';
import { randomID } from 'utils/videoCall';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { useAuthContext } from './AuthContext';
import { CALL_ENDED_BY, CALL_INVITATION_END_REASON, CALLING_STATUS } from 'constants/callingConstants';
import { CallingService, CreditCallRes, CreditZegoCallRes } from 'services/calling/calling.services';
import { useSession } from 'next-auth/react';
import { useIntl } from 'react-intl';
import { User } from 'app/(guest)/layout';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';
import { ROLE } from 'constants/workerVerification';
import { CustomerDetailsService } from 'services/customerDetails/customerDetails.services';
import moment from 'moment';

type CallFeatureContextProps = {
  call: ZegoUIKitPrebuilt | null;
  handleCallInitiate: (
    guestId: number,
    isCallIniate: boolean,
    callTime: number,
    modelName: string,
    modelPhoto: string,
    userName: string,
    modelPrice: string,
    isFavourite: number
  ) => void;
  handleCancelCall: () => void;
  isCallAccepted: boolean;
  isCustomer: boolean;
  isCallIncoming: boolean;
  modelName: string;
  modelPhoto: string;
  modelUsername: string;
  isLoading: boolean;
  isCallEnded: boolean;
  isBusy: boolean;
  handleBusyClose: () => void;
  avaialbleCredits: number;
  getToken: () => TokenIdType;
  handleOpen: () => void;
  modelCreditPrice: string;
  handleCallEnd: () => void;
  isModelAvailable: number;
  handleModelOfflineClose: () => void;
  user: string | undefined;
  isUnanswered: boolean;
  isFavouriteModel: number;
  handelIsFavouriteModelChange: (val: number) => void;
  isModelJoin: boolean;
  outgoingCallDialogOpen: boolean;
  callLogId: number;
  isModelEndedCall: boolean;
  token: TokenIdType;
  // Add more properties and methods as required
};

const CallContext = createContext<CallFeatureContextProps>({
  call: null,
  handleCancelCall: () => {},
  handleCallInitiate: () => {},
  isCallAccepted: false,
  isCustomer: false,
  isCallIncoming: false,
  modelName: '',
  modelPhoto: '',
  modelUsername: '',
  isBusy: false,
  handleBusyClose: () => {},
  isLoading: false,
  isCallEnded: false,
  avaialbleCredits: 0,
  getToken: () => ({ id: 0, token: '' }),
  handleOpen: () => {},
  modelCreditPrice: '',
  handleCallEnd: () => {},
  isModelAvailable: 0,
  handleModelOfflineClose: () => {},
  user: '',
  isUnanswered: false,
  isFavouriteModel: 0,
  handelIsFavouriteModelChange: (val: number) => {},
  isModelJoin: false,
  outgoingCallDialogOpen: false,
  callLogId: 0,
  isModelEndedCall: false,
  token: { id: 0, token: '' }
});

const gaEventTrigger = async (action: string, data: any, credits?: number) => {
  const { gaEventTrigger } = await import('utils/analytics');
  gaEventTrigger(action, data);
};

const VideoCallEnded = lazy(() => import('views/protectedViews/videoCalling/VideoCallEnded'));

export const CallProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const tokenCometChat = useSession();
  const intl = useIntl();
  const user = (tokenCometChat?.data?.user as User)?.picture;
  const userNameData = user && JSON.parse(user);

  const providerData = JSON.parse(user || '{}');

  const path = usePathname();
  const userName = path.split('/')[2];

  const customerInfo = {
    email: providerData?.customer_email,
    name: providerData?.customer_name,
    username: providerData?.customer_user_name,
    model_username: userName
  };
  const userRef = useRef<{ userID: string; userName: string; endedBy: string; isUserLeave: boolean; isCustomerLeave: boolean }>({
    userID: '',
    userName: '',
    endedBy: '',
    isUserLeave: false,
    isCustomerLeave: false
  });

  const callDurationRef = useRef<{
    startTime: string;
    endTime: string;
  }>({
    startTime: '',
    endTime: ''
  });

  const [call, setCall] = useState<ZegoUIKitPrebuilt | null>(null);
  const [modelId, setModelId] = useState(0);
  const [userId, setUserId] = useState(0);
  const [isCallAccepted, setIsCallAccepted] = useState(false);
  const [endCallTime, setEndCallTime] = useState(180000);
  const [isCallIncoming, setIsCallIncoming] = useState(false);
  const [modelName, setModelName] = useState('');
  const [modelPhoto, setModelPhoto] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCallEnded, setIsCallEnded] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const [avaialbleCredits, setAvailableCredits] = useState(0);
  const [sessionId, setSessionId] = useState('');
  const [modelCreditPrice, setModelCreditPrice] = useState('');
  const [isModelAvailable, setIsModelAvailable] = useState(1);
  const [isUnanswered, setIsUnanswered] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [isCreditAvailable, setIsCreditAvailable] = useState(false);
  const [callTime, setCallTime] = useState(0);
  const [callLogId, setCallLogId] = useState(0);
  const [modelUsername, setModelUsername] = useState(userName || '');
  const [isFavouriteModel, setIsFavouriteModel] = useState(0);
  const [isModelJoin, setIsModelJoin] = useState(false);
  const [, setIsAutodisconnected] = useState(false);

  const [cancelCallInvitationFn] = useState<CancelCallInvitationFunc | null>(null);
  const [outgoingCallDialogOpen, setOutgoingCallDialogOpen] = useState(false);
  const [, setOutgoingCallInfo] = useState<{ caller: ZegoUser } | null>(null);
  const [isModelEndedCall, setIsisModelEndedCall] = useState(false);

  const { handleOpen, token, isCustomer } = useAuthContext();

  const appID = process.env.NEXT_PUBLIC_ZEGO_APP_KEY!;
  const serverSecret = process.env.NEXT_PUBLIC_SECRET_KEY!;

  const modelObj = {
    modelId: modelId,
    modelName: modelName,
    modelPhoto: modelPhoto,
    modelUsername: modelUsername,
    isCreditAvailable: isCreditAvailable,
    callTime: callTime,
    modelCreditPrice: modelCreditPrice,
    isFavouriteModel: isFavouriteModel
  };

  const initCall = async () => {
    if (!isNaN(Number(appID)) && userNameData?.customer_id && userNameData?.customer_id !== userId) {
      setUserId(userNameData.customer_id);
      const roomID = randomID();
      const id = String(userNameData?.customer_user_name || '');
      const name = userNameData?.customer_user_name;

      const token = ZegoUIKitPrebuilt.generateKitTokenForTest(
        Number(appID),
        serverSecret,
        roomID,
        String(userNameData?.customer_id || id),
        name
      );

      const callInstance = ZegoUIKitPrebuilt.create(token);
      callInstance?.addPlugins({ ZIM });
      setCall(callInstance);
    }
  };

  useEffect(() => {
    initCall();
  }, [userNameData]);

  const getToken = () => token;

  const getChatInformation = async () => {
    if (modelId && token.token) {
      const getInfo = await CallingService.getCometChatInfo(modelId, token.token);
      if (getInfo?.data?.time_unit === 'minutes' && getInfo?.data?.available_call_duration >= 1) {
        const moment = (await import('moment')).default;
        const durationInSeconds = moment.duration(getInfo?.data?.available_call_duration, 'minutes').asMilliseconds();
        setCallTime(durationInSeconds);
        setIsCreditAvailable(true);
      } else {
        setIsCreditAvailable(false);
      }
    }
  };

  const handleSetUserRef = (userID: string, userName: string, endedBy: string, isUserLeave = false, isCustomerLeave = false) => {
    userRef.current = {
      userID: userID || '',
      userName: userName || '',
      endedBy: endedBy || '-',
      isUserLeave: isUserLeave,
      isCustomerLeave: isCustomerLeave
    };
  };

  const handleBusyClose = () => setIsBusy(false);

  const handleCallEnd = () => setIsCallEnded(false);

  const handleReviewClose = (isPreventReload?: boolean) => {
    setReviewOpen(false);
    if (!isPreventReload) window.location.reload();
  };

  const handleModelOfflineClose = () => setIsModelAvailable(1);

  const init = useCallback(async () => {
    if (!modelUsername) {
      return;
    }
    const calleeDetails = {
      userID: modelUsername?.trim(),
      userName: modelUsername
    };

    try {
      if (call) {
        call.setCallInvitationConfig({
          enableCustomCallInvitationDialog: true,
          enableNotifyWhenAppRunningInBackgroundOrQuit: true,
          endCallWhenInitiatorLeave: true,
          // ringtoneConfig: {
          //   outgoingCallUrl: 'https://dl.prokerala.com/downloads/ringtones/files/mp3/iphone-ringtone-47958.mp3'
          // },

          onConfirmDialogWhenReceiving: (callType, caller) => {
            console.log('Incoming call invitation:', { callType, caller });
          },

          onCallInvitationEnded: async (reason, data) => {
            console.log('on call invitation ended:', { reason, data });
            if (reason === CALL_INVITATION_END_REASON.CANCELED) {
              console.log('userRef?.current:', userRef?.current);
            } else if (reason == CALL_INVITATION_END_REASON.DECLINED) {
              console.log('userRef?.current:', userRef?.current);
            }
            setIsCallAccepted(false);
            setIsModelJoin(false);
            setIsCallEnded(true);
            call?.destroy();
            setCall(null);
            setIsLoading(false);

            //removed after api integration

            await getChatInformation();
            setReviewOpen(true);
          },

          onSetRoomConfigBeforeJoining: (): ZegoCloudRoomConfig => {
            return {
              turnOnMicrophoneWhenJoining: true,
              turnOnCameraWhenJoining: true,
              showMyCameraToggleButton: true,
              showMyMicrophoneToggleButton: true,
              showAudioVideoSettingsButton: true,
              showScreenSharingButton: false,
              showTextChat: false,
              showUserList: false,
              showWaitingCallAcceptAudioVideoView: true,
              maxUsers: 2,
              layout: 'Auto',
              showLayoutButton: false,
              scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
                config: {
                  role: ZegoUIKitPrebuilt.Host || 'Host'
                }
              },
              onUserLeave: (users) => {
                console.log('on User Leave:', { users });
                if (users?.[0]) handleSetUserRef(users?.[0]?.userID || '', users?.[0]?.userName || '', CALL_ENDED_BY.MODEL, true, false);
              },

              onLeaveRoom() {
                console.log('on Leave Room', userRef.current, modelId);
                callDurationRef.current = { startTime: callDurationRef?.current?.startTime || '', endTime: String(new Date()) };
                if (!userRef.current.isUserLeave) {
                  handleSetUserRef(userRef.current?.userID || '', userRef.current?.userName || '', CALL_ENDED_BY.CUSTOMER, false, true);
                }
              }
            };
          },

          onIncomingCallReceived: (callID: string, caller: ZegoUser, callType: ZegoInvitationType, callees: ZegoUser[]) => {
            setSessionId(callID);
            setIsCallIncoming(true);
            console.log('Incoming call received:', { callID, caller, callType, callees });
          },

          onIncomingCallCanceled: async (callID: string, caller: ZegoUser) => {
            console.log('Incoming call canceled:', { callID, caller });
            call?.destroy();
            setCall(null);
            // await creditPutCallLog(modelId, callID, CALLING_STATUS.CANCELED);
            setEndCallTime(180000);
          },

          onOutgoingCallAccepted: (callID: string, callee: ZegoUser) => {
            handleSetUserRef(userRef.current?.userID || '', userRef.current?.userName || '', '', false, true);

            callDurationRef.current = { startTime: String(new Date()), endTime: '' };
            console.log('Outgoing call accepted:', { callID, callee });

            setIsCallAccepted(true);
            setOutgoingCallDialogOpen(false);
          },

          onOutgoingCallRejected: async (callID: string, callee: ZegoUser) => {
            console.log('Outgoing call rejected:', { callID, callee });
            setOutgoingCallInfo(null);
            setOutgoingCallDialogOpen(false);
            setIsisModelEndedCall(true);
            setIsBusy(true);
            // await creditPutCallLog(modelId, callID, CALLING_STATUS.UNASWERED, ROLE.MODEL);
            setEndCallTime(180000);
          },

          onOutgoingCallDeclined: (callID: string, callee: ZegoUser) => {
            console.log('Outgoing call declined:', { callID, callee });
            call?.destroy();
            setCall(null);
            setIsUnanswered(true);
            setOutgoingCallInfo(null);
            setOutgoingCallDialogOpen(false);
          },

          onIncomingCallTimeout: (callID: string, caller: ZegoUser) => {
            console.log('Incoming call timeout:', { callID, caller });
          },

          onOutgoingCallTimeout: (callID: string, callees: ZegoUser[]) => {
            console.log('Outgoing call timeout:', { callID, callees });
            setOutgoingCallInfo(null);
            setOutgoingCallDialogOpen(false);
            call?.destroy();
            setCall(null);
            setIsUnanswered(true);
            setOutgoingCallInfo(null);
            setOutgoingCallDialogOpen(false);
          }
        });

        const response = await call.sendCallInvitation({
          callees: [calleeDetails],
          callType: ZegoUIKitPrebuilt.InvitationTypeVideoCall,
          timeout: 60,
          notificationConfig: {
            resourcesID: 'zego_data'
          }
        });
        if (response?.errorInvitees.length) {
          alert('The model does not exist or is offline.');
        }
      }
    } catch (error) {
      console.error('Error sending call invitation:', error);
    }
  }, [call]);

  const handleCallInitiate = async (
    guestId: number,
    isCreditAvailable: boolean,
    callTime: number,
    modelName: string,
    modelPhoto: string,
    userName: string,
    modelPrice: string,
    isFavourite: number
  ) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: false, audio: true });
      if (stream) {
        setModelCreditPrice(modelPrice);
        setModelId(guestId);
        setModelName(modelName);
        setModelPhoto(modelPhoto);
        setModelUsername(userName);
        setIsFavouriteModel(isFavourite || 0);
        const isModelAvailable = await ModelDetailsService.getModelDetails(token.token, isCustomer, { user_name: userName || '' });
        if (guestId && isCreditAvailable && !call && Boolean(token.token) && isModelAvailable.data.is_online) {
          const isModelBusy = await CallingService.getModelCallStatus(guestId, token.token);
          if (isModelBusy.data.ongoing_calls) {
            gaEventTrigger('Model_busy', {
              action: 'Model_busy',
              category: 'Button',
              label: 'Model_busy',
              value: JSON.stringify(customerInfo)
            });
            setIsBusy(true);
          } else {
            setIsLoading(true);
            await init();
            setEndCallTime(callTime);
            gaEventTrigger('Video_call_initiated', {
              action: 'Video_call_initiated',
              category: 'Button',
              label: 'Video_call_initiated',
              value: JSON.stringify(customerInfo)
            });
          }
        } else if (call) {
          toast.error(intl.formatMessage({ id: 'PleaseEndYour' }));
          setIsLoading(false);
        } else if (!isModelAvailable.data.is_online) {
          gaEventTrigger('Video_call_unanswered', {
            action: 'Video_call_unanswered',
            category: 'Button',
            label: 'Video_call_unanswered',
            value: JSON.stringify(customerInfo)
          });
          const missedParams = {
            model_id: guestId,
            status: CALLING_STATUS.UNASWERED
          };
          setIsModelAvailable(isModelAvailable.data.is_online);
          await CallingService.missedCallStatus(missedParams, token.token);
        } else {
          const creditInfoEvent = {
            email: providerData?.customer_email,
            name: providerData?.customer_name,
            username: providerData?.customer_user_name,
            model_username: userName,
            is_credit_over: false,
            source: 'Video calling model'
          };
          gaEventTrigger('Credits_Purchase_Popup_open', {
            action: 'Credits_Purchase_Popup_open',
            category: 'Dialog',
            label: 'Credits_Purchase_Popup_open',
            value: JSON.stringify(creditInfoEvent)
          });
          handleOpen();
        }
      }
    } catch (error: any) {
      setIsLoading(false);
      if (error?.code) {
        gaEventTrigger('Uid_Not_Found', {
          action: 'Uid_Not_Found',
          category: 'Button',
          label: 'Uid_Not_Found',
          value: modelId
        });
        toast.error(intl.formatMessage({ id: ErrorMessage }));
      } else {
        toast.error(intl.formatMessage({ id: 'PermissionForAudioAndVideo' }));
      }
    }
  };

  const handelIsFavouriteModelChange = async (val: number) => {
    setIsFavouriteModel(val);
    if (val && token?.token && modelId) await CustomerDetailsService.favouritePutId(modelId, token?.token);
  };

  const handleCancelCall = async () => {
    await creditPutCallLog(modelId, sessionId, CALLING_STATUS.CANCELED, ROLE.CUSTOMER);
    setOutgoingCallDialogOpen(false);
    setOutgoingCallInfo(null);
    cancelCallInvitationFn && cancelCallInvitationFn();
    call?.destroy();
    setCall(null);
  };

  const creditPutCallLog = async (
    model_id: number,
    comet_chat_session_id: string,
    status: string,
    ended_by?: string
  ): Promise<CreditZegoCallRes | undefined> => {
    let creditLog = {
      model_id: model_id,
      comet_chat_session_id: comet_chat_session_id,
      zego_call_session_id: comet_chat_session_id,
      status: status,
      ended_by: ended_by || '',
      start_time: '',
      end_time: '',
      duration: null
    };
    if (status === CALLING_STATUS.ENDED) {
      const start_time = (callDurationRef.current.startTime && moment(callDurationRef.current.startTime)) || '';
      const end_time = (callDurationRef.current.endTime && moment(callDurationRef.current.endTime)) || '';
      const duration = (Boolean(start_time && end_time) && moment(end_time).diff(start_time, 'second')) || null;

      creditLog.start_time = String(start_time);
      creditLog.end_time = String(end_time);
      creditLog.duration = duration as unknown as null;
    }
    if (token.token && model_id) {
      const creditLogData = await CallingService.creditPutZegoCallLog(creditLog, token.token);
      if (call && (creditLogData.end_call || status === CALLING_STATUS.ENDED)) {
        gaEventTrigger('Video_call_ended', {
          action: 'Video_call_ended',
          category: 'Button',
          label: 'Video_call_ended',
          value: JSON.stringify(customerInfo)
        });

        call?.destroy();
        setCall(null);
        setCallLogId(creditLogData.id);
        setIsCallAccepted(false);
        setIsModelJoin(false);
        await getChatInformation();
        setAvailableCredits(creditLogData.available_credits);
        setReviewOpen(true);
        if (isCustomer && creditLogData.out_of_credits) {
          const creditInfoEvent = {
            email: providerData?.customer_email,
            name: providerData?.customer_name,
            username: providerData?.customer_user_name,
            model_username: userName,
            is_credit_over: true,
            is_new_purchase: false,
            source: 'Video calling model'
          };
          gaEventTrigger('Credits_Purchase_Popup_open', {
            action: 'Credits_Purchase_Popup_open',
            category: 'Dialog',
            label: 'Credits_Purchase_Popup_open',
            value: JSON.stringify(creditInfoEvent)
          });
          handleOpen();
        }
      }
      return creditLogData;
    }
  };

  useEffect(() => {
    const intervalId = setInterval(async () => {
      if (isCallAccepted && isCustomer) {
        try {
          const endCall = await creditPutCallLog(modelId, sessionId, '');
          if (endCall) {
            if (endCall?.id) setCallLogId(endCall.id);
            if (endCall.end_call) {
              setIsCallEnded(true);
              setIsAutodisconnected(true);
              clearInterval(intervalId);
              return;
            }
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
        call?.destroy();
        setCall(null);
        setIsCallAccepted(false);
        setIsModelJoin(false);
        setIsCallEnded(true);
        if (isCustomer) {
          const endCallData = await creditPutCallLog(modelId, sessionId, CALLING_STATUS.ENDED);
          if (endCallData) {
            setAvailableCredits(endCallData.available_credits);
          }
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
        isCallAccepted,
        isCustomer,
        isCallIncoming,
        modelName,
        modelPhoto,
        modelUsername,
        isCallEnded,
        isBusy,
        handleBusyClose,
        isLoading,
        avaialbleCredits,
        getToken,
        handleOpen,
        modelCreditPrice,
        handleCallEnd,
        isModelAvailable,
        handleModelOfflineClose,
        user,
        isUnanswered,
        isFavouriteModel,
        handelIsFavouriteModelChange,
        isModelJoin,
        outgoingCallDialogOpen,
        callLogId,
        isModelEndedCall,
        token
      }}
    >
      {children}
      <VideoCallEnded open={reviewOpen} onClose={handleReviewClose} callLogId={callLogId} modelObj={modelObj} token={token} />
    </CallContext.Provider>
  );
};

export const useZegoCallFeatureContext = (): CallFeatureContextProps => {
  const context = useContext(CallContext);
  if (!context) {
    throw new Error('useCallFeatureContext must be used within a CallProvider');
  }
  return context;
};
