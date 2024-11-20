/* eslint-disable react-hooks/exhaustive-deps */
'use client';
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
import { TokenIdType } from 'views/protectedModelViews/verification';
import { useAuthContext } from './AuthContext';
import { CALL_ENDED_BY, CALL_INVITATION_END_REASON, CALLING_STATUS } from 'constants/callingConstants';
import { CallingService, CreditZegoCallRes } from 'services/calling/calling.services';
import { useSession } from 'next-auth/react';
import { useIntl } from 'react-intl';
import { User } from 'app/(guest)/layout';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';
import { ROLE } from 'constants/workerVerification';
import { CustomerDetailsService } from 'services/customerDetails/customerDetails.services';
// import { Dialog, Box, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const dateFormate = 'YYYY-MM-DDTHH:mm:ss.SSS[Z]';

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
  isCallInitiated: boolean;
  handleOutGoingCallCancel: () => void;
  // Add more properties and methods as required
};

const CallFeatureContext = createContext<CallFeatureContextProps>({
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
  token: { id: 0, token: '' },
  isCallInitiated: false,
  handleOutGoingCallCancel: () => {}
});

const gaEventTrigger = async (action: string, data: any, credits?: number) => {
  const { gaEventTrigger } = await import('utils/analytics');
  gaEventTrigger(action, data);
};

const VideoCallEnded = lazy(() => import('views/protectedViews/videoCalling/VideoCallEnded'));

export const CallFeatureProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const tokenCometChat = useSession();
  const intl = useIntl();
  const user = (tokenCometChat?.data?.user as User)?.picture;
  const userNameData = user && JSON.parse(user);

  const providerData = JSON.parse(user || '{}');

  const path = usePathname();
  const userName = path.split('/')[2];

  const { handleOpen, token, isCustomer, roomID } = useAuthContext();

  const customerInfo = {
    email: providerData?.customer_email,
    name: providerData?.customer_name,
    username: providerData?.customer_user_name,
    model_username: userName
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
    call_ID: roomID
  });

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
  const [isCallInitiated, SetIsCallInitiated] = useState(false);

  const [cancelCallInvitationFn, setCancelCallInvitationFn] = useState<CancelCallInvitationFunc | null>(null);
  const [outgoingCallDialogOpen, setOutgoingCallDialogOpen] = useState(false);
  // const [outgoingCallInfo, setOutgoingCallInfo] = useState<{ caller: ZegoUser } | null>(null);
  const [, setOutgoingCallInfo] = useState<{ caller: ZegoUser } | null>(null);
  const [isModelEndedCall, setIsModelEndedCall] = useState(false);

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
      const id = String(userNameData?.customer_user_name || '');
      const name = userNameData?.customer_user_name;
      let call_instance = call;
      if (!call_instance) {
        const z_token = ZegoUIKitPrebuilt.generateKitTokenForTest(
          Number(appID),
          serverSecret,
          roomID,
          String(userNameData?.customer_id || id),
          name
        );

        const callInstance = ZegoUIKitPrebuilt.create(z_token);
        callInstance?.addPlugins({ ZIM });

        call_instance = callInstance;
      }
      call_instance.setCallInvitationConfig({
        enableCustomCallInvitationDialog: true,
        enableCustomCallInvitationWaitingPage: true,
        enableNotifyWhenAppRunningInBackgroundOrQuit: true,
        endCallWhenInitiatorLeave: true,
        // ringtoneConfig: {
        //   outgoingCallUrl: 'https://dl.prokerala.com/downloads/ringtones/files/mp3/iphone-ringtone-47958.mp3'
        // },

        onWaitingPageWhenSending: (callType, callees, cancel) => {
          setOutgoingCallDialogOpen(true);
          setCancelCallInvitationFn(() => cancel);
          setOutgoingCallInfo({
            caller: {
              userID: callees[0]?.userID,
              userName: callees[0]?.userName
            }
          });
        },

        onConfirmDialogWhenReceiving: (callType, caller) => {
          console.log('Incoming call invitation:', { callType, caller });
        },

        onCallInvitationEnded: async (reason, data) => {
          console.log('on call invitation ended:', { reason, data });
          if (reason === CALL_INVITATION_END_REASON.LEAVEROOM || reason === CALL_INVITATION_END_REASON.CANCELED) {
            if (isCustomer) {
              const status = reason === CALL_INVITATION_END_REASON.LEAVEROOM ? CALL_INVITATION_END_REASON.ENDED : 'Cancelled';
              const role = userRef.current.isUserLeave ? ROLE.MODEL : ROLE.CUSTOMER;
              const endCallData = await creditPutCallLog(modelRef?.current?.id || modelId, roomID, status, role);
              if (endCallData) {
                setAvailableCredits(endCallData.available_credits);
              }
            }
          }

          setIsCallAccepted(false);
          setIsModelJoin(false);
          setIsCallEnded(true);
          setCall(null);
          setIsLoading(false);

          //removed after api integration

          await getChatInformation();
          if (reason === CALL_INVITATION_END_REASON.LEAVEROOM) setReviewOpen(true);
        },

        onSetRoomConfigBeforeJoining: (): ZegoCloudRoomConfig => {
          return {
            container: document.querySelector('#zego-room') as unknown as HTMLElement,
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
            onUserLeave: async (users) => {
              console.log('on User Leave:', { users });
              if (users?.[0])
                handleSetUserRef(users?.[0]?.userID || '', users?.[0]?.userName || '', CALL_ENDED_BY.MODEL, true, false, roomID);
            },

            onLeaveRoom: async () => {
              console.log('on Leave Room', userRef.current, modelId);
              callDurationRef.current = { startTime: callDurationRef?.current?.startTime || '', endTime: String(new Date()) };
              if (!userRef.current.isUserLeave) {
                handleSetUserRef(
                  userRef.current?.userID || '',
                  userRef.current?.userName || '',
                  CALL_ENDED_BY.CUSTOMER,
                  false,
                  true,
                  roomID
                );
              }
              if (token?.token) {
                const modelDetails = await ModelDetailsService.getModelDetails(token?.token, isCustomer, {
                  user_name: userName || ''
                });
                if (modelDetails && modelDetails?.data) {
                  const modelPhoto = modelDetails?.data?.photos?.filter((x: any) => x.favourite)?.map((item: any) => item.link)[0];
                  setModelId(modelDetails?.data?.id);
                  handleSetModelDetails(modelDetails?.data?.id || 0, modelDetails?.data?.user_name || userName, modelPhoto);
                }
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
          setCall(null);
          // await creditPutCallLog(modelId, callID, CALLING_STATUS.CANCELED);
          setEndCallTime(180000);
        },

        onOutgoingCallAccepted: async (callID: string, callee: ZegoUser) => {
          handleSetUserRef(userRef.current?.userID || '', userRef.current?.userName || '', '', false, true, callID);

          callDurationRef.current = { startTime: String(new Date()), endTime: '' };
          console.log('Outgoing call accepted:', { callID, callee, modelId, modelRef });

          setIsCallAccepted(true);
          setOutgoingCallDialogOpen(false);
          await creditPutCallLog(modelRef?.current?.id || modelId, callID, '');
        },

        onOutgoingCallRejected: async (callID: string, callee: ZegoUser) => {
          console.log('Outgoing call rejected:', { callID, callee });
          setOutgoingCallInfo(null);
          setOutgoingCallDialogOpen(false);
          setIsModelEndedCall(true);
          setIsBusy(true);
          // await creditPutCallLog(modelId, callID, CALLING_STATUS.UNASWERED, ROLE.MODEL);
          setEndCallTime(180000);
        },

        onOutgoingCallDeclined: async (callID: string, callee: ZegoUser) => {
          console.log('Outgoing call declined:', { callID, callee, modelId });
          // call?.destroy();
          setCall(null);
          setIsUnanswered(true);
          setOutgoingCallInfo(null);
          setOutgoingCallDialogOpen(false);
          setIsBusy(true);
          await creditPutCallLog(modelRef?.current?.id || modelId, callID, CALLING_STATUS.REJECTED, ROLE.MODEL);
        },

        onIncomingCallTimeout: (callID: string, caller: ZegoUser) => {
          console.log('Incoming call timeout:', { callID, caller });
        },

        onOutgoingCallTimeout: async (callID: string, callees: ZegoUser[]) => {
          console.log('Outgoing call timeout:', { callID, callees });
          setOutgoingCallInfo(null);
          setOutgoingCallDialogOpen(false);
          // call?.destroy();
          setCall(null);
          setIsUnanswered(true);
          setIsBusy(true);
          setOutgoingCallInfo(null);
          setOutgoingCallDialogOpen(false);
          await creditPutCallLog(modelRef?.current?.id || modelId, callID, CALLING_STATUS.UNASWERED);
        }
      });
      setCall(call_instance);
    }
  };

  useEffect(() => {
    initCall();
  }, [userNameData]);

  // useEffect(() => {
  //   const handleBeforeUnload = async () => {
  //     console.log('Handle Before Unload.', call && isCallAccepted);
  //     if (call && isCallAccepted && token.token) {
  //       const moment = (await import('moment')).default;
  //       const start_time = (callDurationRef.current.startTime && moment.utc(callDurationRef.current.startTime).format(dateFormate)) || '';
  //       const end_time = (callDurationRef.current.endTime && moment.utc(callDurationRef.current.endTime).format(dateFormate)) || '';

  //       const duration = (Boolean(start_time && end_time) && moment(end_time).diff(start_time, 'second')) || null;
  //       let creditLog = {
  //         model_id: modelRef?.current?.id || modelId,
  //         comet_chat_session_id: roomID,
  //         zego_call_session_id: roomID,
  //         status: CALL_INVITATION_END_REASON.ENDED,
  //         ended_by: ROLE.CUSTOMER,
  //         start_time: String(start_time),
  //         end_time: String(end_time),
  //         duration: duration as unknown as null
  //       };

  //       fetch(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/call/logs`, {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: token.token
  //         },
  //         body: JSON.stringify(creditLog),
  //         keepalive: true
  //       });
  //     }
  //   };
  //   // Add event listeners
  //   window.addEventListener('beforeunload', handleBeforeUnload);
  //   window.addEventListener('unload', handleBeforeUnload);

  //   // Cleanup event listeners on component unmount
  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //     window.removeEventListener('unload', handleBeforeUnload);
  //   };
  // }, []);

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

  const handleOutGoingCallCancel = () => {
    setOutgoingCallDialogOpen(false);
    setOutgoingCallInfo(null);
    cancelCallInvitationFn && cancelCallInvitationFn();
  };

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
      call_ID: call_ID || roomID
    };
  };
  const handleSetModelDetails = (id: number, userName: string, modelPhoto: string) => {
    modelRef.current = {
      id: id || modelId || 0,
      userName: userName || '',
      modelPhoto: modelPhoto || ''
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
      userName: modelUsername,
      avatar: modelRef.current.modelPhoto
    };

    try {
      if (call) {
        // call.setCallInvitationConfig({
        //   enableCustomCallInvitationDialog: true,
        //   enableCustomCallInvitationWaitingPage: true,
        //   enableNotifyWhenAppRunningInBackgroundOrQuit: true,
        //   endCallWhenInitiatorLeave: true,
        //   // ringtoneConfig: {
        //   //   outgoingCallUrl: 'https://dl.prokerala.com/downloads/ringtones/files/mp3/iphone-ringtone-47958.mp3'
        //   // },

        //   onWaitingPageWhenSending: (callType, callees, cancel) => {
        //     setOutgoingCallDialogOpen(true);
        //     setCancelCallInvitationFn(() => cancel);
        //     setOutgoingCallInfo({
        //       caller: {
        //         userID: callees[0]?.userID,
        //         userName: callees[0]?.userName
        //       }
        //     });
        //   },

        //   onConfirmDialogWhenReceiving: (callType, caller) => {
        //     console.log('Incoming call invitation:', { callType, caller });
        //   },

        //   onCallInvitationEnded: async (reason, data) => {
        //     console.log('on call invitation ended:', { reason, data });
        //     if (reason === CALL_INVITATION_END_REASON.LEAVEROOM || reason === CALL_INVITATION_END_REASON.CANCELED) {
        //       if (isCustomer) {
        //         const status = reason === CALL_INVITATION_END_REASON.LEAVEROOM ? CALL_INVITATION_END_REASON.ENDED : 'Cancelled';
        //         const role = userRef.current.isUserLeave ? ROLE.MODEL : ROLE.CUSTOMER;
        //         const endCallData = await creditPutCallLog(modelRef?.current?.id || modelId, roomID, status, role);
        //         if (endCallData) {
        //           setAvailableCredits(endCallData.available_credits);
        //         }
        //       }
        //     }

        //     setIsCallAccepted(false);
        //     setIsModelJoin(false);
        //     setIsCallEnded(true);
        //     setCall(null);
        //     setIsLoading(false);

        //     //removed after api integration

        //     await getChatInformation();
        //     if (reason === CALL_INVITATION_END_REASON.LEAVEROOM) setReviewOpen(true);
        //   },

        //   onSetRoomConfigBeforeJoining: (): ZegoCloudRoomConfig => {
        //     return {
        //       container: document.querySelector('#zego-room') as unknown as HTMLElement,
        //       turnOnMicrophoneWhenJoining: true,
        //       turnOnCameraWhenJoining: true,
        //       showMyCameraToggleButton: true,
        //       showMyMicrophoneToggleButton: true,
        //       showAudioVideoSettingsButton: true,
        //       showScreenSharingButton: false,
        //       showTextChat: false,
        //       showUserList: false,
        //       showWaitingCallAcceptAudioVideoView: true,
        //       maxUsers: 2,
        //       layout: 'Auto',
        //       showLayoutButton: false,
        //       scenario: {
        //         mode: ZegoUIKitPrebuilt.OneONoneCall,
        //         config: {
        //           role: ZegoUIKitPrebuilt.Host || 'Host'
        //         }
        //       },
        //       onUserLeave: async (users) => {
        //         console.log('on User Leave:', { users });
        //         if (users?.[0])
        //           handleSetUserRef(users?.[0]?.userID || '', users?.[0]?.userName || '', CALL_ENDED_BY.MODEL, true, false, roomID);
        //       },

        //       onLeaveRoom: async () => {
        //         console.log('on Leave Room', userRef.current, modelId);
        //         callDurationRef.current = { startTime: callDurationRef?.current?.startTime || '', endTime: String(new Date()) };
        //         if (!userRef.current.isUserLeave) {
        //           handleSetUserRef(
        //             userRef.current?.userID || '',
        //             userRef.current?.userName || '',
        //             CALL_ENDED_BY.CUSTOMER,
        //             false,
        //             true,
        //             roomID
        //           );
        //         }
        //         if (token.token) {
        //           const modelDetails = await ModelDetailsService.getModelDetails(token.token, isCustomer, {
        //             user_name: userName || ''
        //           });
        //           if (modelDetails && modelDetails?.data) {
        //             const modelPhoto = modelDetails?.data?.photos?.filter((x: any) => x.favourite)?.map((item: any) => item.link)[0];
        //             setModelId(modelDetails?.data?.id);
        //             handleSetModelDetails(modelDetails?.data?.id || 0, modelDetails?.data?.user_name || userName, modelPhoto);
        //           }
        //         }
        //       }
        //     };
        //   },

        //   onIncomingCallReceived: (callID: string, caller: ZegoUser, callType: ZegoInvitationType, callees: ZegoUser[]) => {
        //     setSessionId(callID);
        //     setIsCallIncoming(true);
        //     console.log('Incoming call received:', { callID, caller, callType, callees });
        //   },

        //   onIncomingCallCanceled: async (callID: string, caller: ZegoUser) => {
        //     console.log('Incoming call canceled:', { callID, caller });
        //     setCall(null);
        //     // await creditPutCallLog(modelId, callID, CALLING_STATUS.CANCELED);
        //     setEndCallTime(180000);
        //   },

        //   onOutgoingCallAccepted: async (callID: string, callee: ZegoUser) => {
        //     handleSetUserRef(userRef.current?.userID || '', userRef.current?.userName || '', '', false, true, callID);

        //     callDurationRef.current = { startTime: String(new Date()), endTime: '' };
        //     console.log('Outgoing call accepted:', { callID, callee, modelId, modelRef });

        //     setIsCallAccepted(true);
        //     setOutgoingCallDialogOpen(false);
        //     await creditPutCallLog(modelRef?.current?.id || modelId, callID, '');
        //   },

        //   onOutgoingCallRejected: async (callID: string, callee: ZegoUser) => {
        //     console.log('Outgoing call rejected:', { callID, callee });
        //     setOutgoingCallInfo(null);
        //     setOutgoingCallDialogOpen(false);
        //     setIsModelEndedCall(true);
        //     setIsBusy(true);
        //     // await creditPutCallLog(modelId, callID, CALLING_STATUS.UNASWERED, ROLE.MODEL);
        //     setEndCallTime(180000);
        //   },

        //   onOutgoingCallDeclined: async (callID: string, callee: ZegoUser) => {
        //     console.log('Outgoing call declined:', { callID, callee, modelId });
        //     // call?.destroy();
        //     setCall(null);
        //     setIsUnanswered(true);
        //     setOutgoingCallInfo(null);
        //     setOutgoingCallDialogOpen(false);
        //     setIsBusy(true);
        //     await creditPutCallLog(modelRef?.current?.id || modelId, callID, CALLING_STATUS.REJECTED, ROLE.MODEL);
        //   },

        //   onIncomingCallTimeout: (callID: string, caller: ZegoUser) => {
        //     console.log('Incoming call timeout:', { callID, caller });
        //   },

        //   onOutgoingCallTimeout: async (callID: string, callees: ZegoUser[]) => {
        //     console.log('Outgoing call timeout:', { callID, callees });
        //     setOutgoingCallInfo(null);
        //     setOutgoingCallDialogOpen(false);
        //     // call?.destroy();
        //     setCall(null);
        //     setIsUnanswered(true);
        //     setIsBusy(true);
        //     setOutgoingCallInfo(null);
        //     setOutgoingCallDialogOpen(false);
        //     await creditPutCallLog(modelRef?.current?.id || modelId, callID, CALLING_STATUS.UNASWERED);
        //   }
        // });
        console.log('Room ID:', roomID);
        const response = await call.sendCallInvitation({
          callees: [calleeDetails],
          callType: ZegoUIKitPrebuilt.InvitationTypeVideoCall,
          timeout: 60,
          roomID,
          notificationConfig: {
            resourcesID: 'zego_data'
          }
        });
        console.log('Call ID:', roomID);
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
        handleSetModelDetails(guestId, modelName, modelPhoto);
        setModelId(guestId);
        setModelName(modelName);
        setModelPhoto(modelPhoto);
        setModelUsername(userName);
        setIsFavouriteModel(isFavourite || 0);
        const isModelAvailable = await ModelDetailsService.getModelDetails(token.token, isCustomer, { user_name: userName || '' });
        if (guestId && isCreditAvailable && Boolean(token.token) && isModelAvailable.data.is_online) {
          const isModelBusy = await CallingService.getModelCallStatus(guestId, token.token);
          if (isModelBusy.data.ongoing_calls) {
            gaEventTrigger('Model_busy', {
              action: 'Model_busy',
              category: 'Button',
              label: 'Model_busy',
              value: JSON.stringify(customerInfo)
            });
            setIsModelEndedCall(true);
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
            const res = await creditPutCallLog(guestId, roomID, '');
            if (res?.id) setCallLogId(res.id);
            setIsLoading(false);
          }
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
    // call?.destroy();
    setCall(null);
  };

  const creditPutCallLog = async (
    model_id: number,
    comet_chat_session_id: string,
    status: string,
    ended_by?: string
  ): Promise<CreditZegoCallRes | undefined> => {
    const moment = (await import('moment')).default;
    const start_time = (callDurationRef.current.startTime && moment.utc(callDurationRef.current.startTime).format(dateFormate)) || '';
    setSessionId(comet_chat_session_id);
    setModelId(model_id);

    let creditLog = {
      model_id: model_id,
      comet_chat_session_id: comet_chat_session_id,
      zego_call_session_id: comet_chat_session_id,
      status: status,
      ended_by: ended_by || '',
      start_time: String(start_time),
      end_time: '',
      duration: null
    };
    if (status === CALLING_STATUS.ENDED) {
      const end_time = (callDurationRef.current.endTime && moment.utc(callDurationRef.current.endTime).format(dateFormate)) || '';
      const duration = (Boolean(start_time && end_time) && moment(end_time).diff(start_time, 'second')) || null;
      creditLog.end_time = String(end_time);
      creditLog.duration = duration as unknown as null;
    }

    console.log('creditLog', creditLog);
    console.log('token.token && model_id', token.token, model_id);

    if (token.token && model_id) {
      const creditLogData = await CallingService.creditPutZegoCallLog(creditLog, token.token);
      if (call && (creditLogData.end_call || status === CALLING_STATUS.ENDED)) {
        gaEventTrigger('Video_call_ended', {
          action: 'Video_call_ended',
          category: 'Button',
          label: 'Video_call_ended',
          value: JSON.stringify(customerInfo)
        });
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
      console.log('isCallAccepted :::::::::::', isCallAccepted);
      console.log('isCustomer :::::::::::', isCustomer);
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
    <CallFeatureContext.Provider
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
        token,
        isCallInitiated,
        handleOutGoingCallCancel
      }}
    >
      {children}
      <VideoCallEnded open={reviewOpen} onClose={handleReviewClose} callLogId={callLogId} modelObj={modelObj} token={token} />
    </CallFeatureContext.Provider>
  );
};

export const useZegoCallFeatureContext = (): CallFeatureContextProps => {
  const context = useContext(CallFeatureContext);
  if (!context) {
    throw new Error('useCallFeatureContext must be used within a CallProvider');
  }
  return context;
};
