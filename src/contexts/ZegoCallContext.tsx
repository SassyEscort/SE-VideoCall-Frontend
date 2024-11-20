/* eslint-disable react-hooks/exhaustive-deps */
'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useContext, useEffect, useCallback, lazy, useState } from 'react';
import { ZegoUIKitPrebuilt, ZegoCloudRoomConfig, ZegoUser } from '@zegocloud/zego-uikit-prebuilt';
import { ZIM } from 'zego-zim-web';
import { usePathname } from 'next/navigation';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { useAuthContext } from './AuthContext';
import { useVideoCallContext } from './videoCallContext';
import { CALL_ENDED_BY, CALL_INVITATION_END_REASON, CALLING_STATUS, DATE_FORMAT, RINGING_TUNE } from 'constants/callingConstants';
import { CallingService, CreditZegoCallRes } from 'services/calling/calling.services';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';
import { ROLE } from 'constants/workerVerification';
import { CustomerDetailsService } from 'services/customerDetails/customerDetails.services';
import { useIntl } from 'react-intl';

type CallFeatureContextProps = {
  handleCancelCall: () => void;
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
  isCallAccepted: boolean;
  isCustomer: boolean;
  modelName: string;
  modelPhoto: string;
  modelUsername: string;
  handleOpen: () => void;
  modelCreditPrice: string;
  user: string | undefined;
  isFavouriteModel: number;
  handelIsFavouriteModelChange: (val: number) => void;
  callLogId: number;
  token: TokenIdType;
  handleOutGoingCallCancel: () => void;
};

const CallFeatureContext = createContext<CallFeatureContextProps>({
  handleCancelCall: () => {},
  handleCallInitiate: () => {},
  isCallAccepted: false,
  isCustomer: false,
  modelName: '',
  modelPhoto: '',
  modelUsername: '',
  handleOpen: () => {},
  modelCreditPrice: '',
  user: '',
  isFavouriteModel: 0,
  handelIsFavouriteModelChange: () => {},
  callLogId: 0,
  token: { id: 0, token: '' },
  handleOutGoingCallCancel: () => {}
});

const gaEventTrigger = async (action: string, data: any, credits?: number) => {
  const { gaEventTrigger } = await import('utils/analytics');
  gaEventTrigger(action, data);
};

const VideoCallEnded = lazy(() => import('views/protectedViews/videoCalling/VideoCallEnded'));

export const CallFeatureProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const intl = useIntl();
  const { handleOpen, token, isCustomer, roomID, handleCreateNewRoomID } = useAuthContext();
  const {
    sessionId,
    callInstance,
    customerInfo,
    userId,
    modelId,
    modelName,
    modelPhoto,
    modelUsername,
    isCreditAvailable,
    callTime,
    modelCreditPrice,
    isFavouriteModel,
    userRef,
    modelRef,
    callDurationRef,
    isCallAccepted,
    isCallEnded,
    endCallTime,
    reviewOpen,
    callLogId,
    user,
    handleReviewClose,
    handleSetUserId,
    handleSetCallInstance,
    handleSetIsLoading,
    handleSetModelId,
    handleSetCallLogId,
    handleSetAvailableCredits,
    handleSetIsCallAccepted,
    handleSetIsModelEndedCall,
    handleSetCallTime,
    handleSetFavouriteModel,
    handleSetModelDetails,
    handleCallDurationRef,
    handleOutGoingCallCancel,
    handleSetCallEnd,
    handleSetIsCreditAvailable,
    handleSetUserRef,
    handleSetIsModelJoin,
    handleSetReviewOpen,
    handleSetEndCallTime,
    handleSetIsUnanswered,
    handleSetBusy,
    handleSetModelCreditPrice,
    handleSetModelName,
    handleSetModelUsername,
    handleSetModelPhoto,
    handleSetSessionId,
    handleOutgoingCallCancel,
    handleSetIsModelAvailable,
    handleSetIsAutodisconnected,
    handleRemovedRoomId
  } = useVideoCallContext();
  const userNameData = user && JSON.parse(user);
  const [rId, setRID] = useState('');
  const providerData = JSON.parse(user || '{}');

  const path = usePathname();
  const userName = path.split('/')[2];

  const appID = process.env.NEXT_PUBLIC_ZEGO_APP_KEY!;
  const serverSecret = process.env.NEXT_PUBLIC_SECRET_KEY!;

  const modelObj = {
    modelId: 0,
    modelName: modelName,
    modelPhoto: modelPhoto,
    modelUsername: modelUsername,
    isCreditAvailable: isCreditAvailable,
    callTime: callTime,
    modelCreditPrice: modelCreditPrice,
    isFavouriteModel: isFavouriteModel
  };

  const initCall = useCallback(async () => {
    const initCondition = !isNaN(Number(appID)) && userNameData?.customer_id && (userNameData?.customer_id !== userId || rId !== roomID);
    if (initCondition) {
      handleSetUserId(userNameData.customer_id);
      setRID(roomID);
      const id = String(userNameData?.customer_user_name || '');
      const name = userNameData?.customer_user_name;

      const token = ZegoUIKitPrebuilt.generateKitTokenForTest(
        Number(appID),
        serverSecret,
        '',
        String(userNameData?.customer_id || id),
        name
      );

      const callInstance = ZegoUIKitPrebuilt.create(token);
      callInstance.addPlugins({ ZIM });
      handleSetCallInstance(callInstance);
    }
  }, [userNameData, roomID]);

  useEffect(() => {
    initCall();
  }, [userNameData, roomID, initCall]);

  if (callInstance) {
    callInstance.setCallInvitationConfig({
      enableCustomCallInvitationDialog: true,
      enableNotifyWhenAppRunningInBackgroundOrQuit: true,
      endCallWhenInitiatorLeave: true,
      ringtoneConfig: { outgoingCallUrl: RINGING_TUNE },

      onCallInvitationEnded: async (reason, data) => {
        if (reason === CALL_INVITATION_END_REASON.LEAVEROOM || reason === CALL_INVITATION_END_REASON.CANCELED) {
          if (isCustomer) {
            const status = reason === CALL_INVITATION_END_REASON.LEAVEROOM ? CALL_INVITATION_END_REASON.ENDED : 'Cancelled';
            const role = userRef.current.isUserLeave ? ROLE.MODEL : ROLE.CUSTOMER;
            const endCallData = await creditPutCallLog(modelId || modelRef?.current?.id, roomID, status, role);
            if (endCallData) {
              handleSetAvailableCredits(endCallData.available_credits);
            }
          }
        }

        handleSetIsCallAccepted(false);
        handleSetIsModelJoin(false);
        handleSetCallEnd(true);
        if (reason === CALL_INVITATION_END_REASON.CANCELED) handleCreateNewRoomID();
        handleSetIsLoading(false);
        handleRemovedRoomId();
        if (reason === CALL_INVITATION_END_REASON.LEAVEROOM) handleSetReviewOpen(true);
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
          showRoomTimer: true,
          showLayoutButton: false,
          scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall,
            config: {
              role: ZegoUIKitPrebuilt.Host || 'Host'
            }
          },
          onUserLeave: async (users) => {
            if (users?.[0])
              handleSetUserRef(users?.[0]?.userID || '', users?.[0]?.userName || '', CALL_ENDED_BY.MODEL, true, false, roomID);
          },

          onLeaveRoom: async () => {
            handleCallDurationRef(callDurationRef?.current?.startTime || '', String(new Date()));
            if (!userRef.current.isUserLeave) {
              handleSetUserRef(userRef.current?.userID || '', userRef.current?.userName || '', CALL_ENDED_BY.CUSTOMER, false, true, roomID);
            }
          }
        };
      },

      onOutgoingCallAccepted: async (callID: string, callee: ZegoUser) => {
        handleSetUserRef(userRef.current?.userID || '', userRef.current?.userName || '', '', false, true, callID);
        handleCallDurationRef(String(new Date()), '');
        handleSetIsCallAccepted(true);
        handleSetIsModelJoin(true);
      },

      onOutgoingCallRejected: async (callID: string, callee: ZegoUser) => {
        callInstance?.hangUp();
        handleCreateNewRoomID();
        handleSetIsUnanswered(true);
        handleSetIsModelEndedCall(true);
        handleSetBusy(true);
        await creditPutCallLog(modelId || modelRef?.current?.id, callID, CALLING_STATUS.REJECTED, ROLE.MODEL);
      },

      onOutgoingCallDeclined: async (callID: string, callee: ZegoUser) => {
        callInstance?.hangUp();
        handleCreateNewRoomID();
        handleSetIsUnanswered(true);
        handleSetIsModelEndedCall(true);
        handleSetBusy(true);
        await creditPutCallLog(modelId || modelRef?.current?.id, callID, CALLING_STATUS.REJECTED, ROLE.MODEL);
      },

      onOutgoingCallTimeout: async (callID: string, callees: ZegoUser[]) => {
        callInstance?.hangUp();
        handleCreateNewRoomID();
        handleSetIsUnanswered(true);
        handleSetBusy(true);
        await creditPutCallLog(modelId || modelRef?.current?.id, callID, CALLING_STATUS.UNASWERED, ROLE.MODEL);
      }
    });
  }

  useEffect(() => {
    const handleBeforeUnload = async () => {
      if (isCallAccepted && token.token) {
        await creditPutCallLog(modelId, sessionId, CALLING_STATUS.ENDED);
        // const moment = (await import('moment')).default;
        // const start_time = (callDurationRef.current.startTime && moment.utc(callDurationRef.current.startTime).format(DATE_FORMAT)) || '';
        // const end_time = (callDurationRef.current.endTime && moment.utc(callDurationRef.current.endTime).format(DATE_FORMAT)) || '';
        // const duration = (Boolean(start_time && end_time) && moment(end_time).diff(start_time, 'second')) || null;
        // let creditLog = {
        //   model_id: modelId || modelRef?.current?.id,
        //   comet_chat_session_id: roomID,
        //   zego_call_session_id: roomID,
        //   status: CALL_INVITATION_END_REASON.ENDED,
        //   ended_by: ROLE.CUSTOMER,
        //   start_time: String(start_time),
        //   end_time: String(end_time),
        //   duration: duration as unknown as null
        // };
        // fetch(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/call/logs`, {
        //   method: 'PUT',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     Authorization: token.token
        //   },
        //   body: JSON.stringify(creditLog),
        //   keepalive: true
        // });
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (callInstance) callInstance?.destroy();
    };
  }, []);

  const getChatInformation = async () => {
    if (modelId && token.token) {
      const getInfo = await CallingService.getCometChatInfo(modelId, token.token);
      if (getInfo?.data?.time_unit === 'minutes' && getInfo?.data?.available_call_duration >= 1) {
        const moment = (await import('moment')).default;
        const durationInSeconds = moment.duration(getInfo?.data?.available_call_duration, 'minutes').asMilliseconds();
        handleSetCallTime(durationInSeconds);
        handleSetIsCreditAvailable(true);
      } else {
        handleSetIsCreditAvailable(false);
      }
    }
  };

  const init = async () => {
    if (!modelUsername) {
      return;
    }
    const calleeDetails = {
      userID: modelUsername?.trim(),
      userName: modelUsername,
      avatar: modelRef.current.modelPhoto
    };

    try {
      if (callInstance) {
        const response = await callInstance.sendCallInvitation({
          callees: [calleeDetails],
          callType: ZegoUIKitPrebuilt.InvitationTypeVideoCall,
          timeout: 45,
          roomID,
          notificationConfig: {
            resourcesID: 'zego_data'
          }
        });
        if (response?.errorInvitees.length) {
          const message = `${modelName} ${intl.formatMessage({ id: 'CurrentlyOffline' })}`;
          toast.error(message);
        }
      }
    } catch (error) {
      console.error('Error sending call invitation:', error);
    }
  };

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
        handleSetModelCreditPrice(modelPrice);
        handleSetModelDetails(guestId, modelName, modelPhoto);
        handleSetModelId(guestId);
        handleSetModelName(modelName);
        handleSetModelPhoto(modelPhoto);
        handleSetModelUsername(userName);
        handleSetFavouriteModel(isFavourite || 0);
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
            handleSetIsModelEndedCall(true);
            handleSetBusy(true);
          } else {
            handleSetIsLoading(true);
            await init();
            handleSetEndCallTime(callTime);
            gaEventTrigger('Video_call_initiated', {
              action: 'Video_call_initiated',
              category: 'Button',
              label: 'Video_call_initiated',
              value: JSON.stringify(customerInfo)
            });
            const res = await creditPutCallLog(guestId, roomID, '');
            if (res?.id) handleSetCallLogId(res.id);
            handleSetIsLoading(false);
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
          handleSetIsModelAvailable(isModelAvailable.data.is_online);
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
      handleSetIsLoading(false);
      if (error?.code) {
        gaEventTrigger('Uid_Not_Found', {
          action: 'Uid_Not_Found',
          category: 'Button',
          label: 'Uid_Not_Found',
          value: modelId || modelRef.current.id
        });
        toast.error(intl.formatMessage({ id: ErrorMessage }));
      } else {
        toast.error(intl.formatMessage({ id: 'PermissionForAudioAndVideo' }));
      }
    }
  };

  const handelIsFavouriteModelChange = async (val: number) => {
    handleSetFavouriteModel(val);
    if (val && token?.token && modelId) await CustomerDetailsService.favouritePutId(modelId, token?.token);
  };

  const handleCancelCall = async () => {
    await creditPutCallLog(modelId, sessionId, CALLING_STATUS.CANCELED, ROLE.CUSTOMER);
    handleOutgoingCallCancel();
  };

  const creditPutCallLog = async (
    model_id: number,
    comet_chat_session_id: string,
    status: string,
    ended_by?: string
  ): Promise<CreditZegoCallRes | undefined> => {
    const moment = (await import('moment')).default;
    const start_time = (callDurationRef.current.startTime && moment.utc(callDurationRef.current.startTime).format(DATE_FORMAT)) || '';
    handleSetSessionId(comet_chat_session_id);

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
      const end_time = (callDurationRef.current.endTime && moment.utc(callDurationRef.current.endTime).format(DATE_FORMAT)) || '';
      const duration = (Boolean(start_time && end_time) && moment(end_time).diff(start_time, 'second')) || null;
      creditLog.end_time = String(end_time);
      creditLog.duration = duration as unknown as null;
    }

    if (token.token && model_id) {
      const creditLogData = await CallingService.creditPutZegoCallLog(creditLog, token.token);
      if (callInstance && (creditLogData.end_call || status === CALLING_STATUS.ENDED)) {
        gaEventTrigger('Video_call_ended', {
          action: 'Video_call_ended',
          category: 'Button',
          label: 'Video_call_ended',
          value: JSON.stringify(customerInfo)
        });
        handleSetCallLogId(creditLogData.id);
        handleSetIsCallAccepted(false);
        handleSetIsModelJoin(false);
        await getChatInformation();
        handleSetAvailableCredits(creditLogData.available_credits);
        handleSetReviewOpen(true);
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
            if (endCall?.id) handleSetCallLogId(endCall.id);
            if (endCall.end_call) {
              handleSetCallEnd(true);
              handleSetIsAutodisconnected(true);
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
  }, [isCallAccepted, isCustomer, modelObj?.modelId, sessionId, isCallEnded]);

  useEffect(() => {
    const timerId = setTimeout(async () => {
      if (isCallAccepted || isCallEnded) {
        handleSetCallInstance(null);
        handleSetIsCallAccepted(false);
        handleSetIsModelJoin(false);
        handleSetCallEnd(true);
        if (isCustomer) {
          const endCallData = await creditPutCallLog(modelId, sessionId, CALLING_STATUS.ENDED);
          if (endCallData) {
            handleSetAvailableCredits(endCallData.available_credits);
          }
          return;
        }
      }
    }, endCallTime);

    return () => clearTimeout(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCallAccepted, isCallEnded, isCustomer, modelObj?.modelId, sessionId]);

  return (
    <CallFeatureContext.Provider
      value={{
        handleCancelCall,
        handleCallInitiate,
        isCallAccepted,
        isCustomer,
        modelName,
        modelPhoto,
        modelUsername,
        handleOpen,
        modelCreditPrice,
        user,
        isFavouriteModel,
        handelIsFavouriteModelChange,
        callLogId,
        token,
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
