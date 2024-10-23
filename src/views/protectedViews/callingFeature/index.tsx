'use client';
import { useCallback, useEffect, useState } from 'react';
import { useCallFeatureContext } from '../../../../context/CallFeatureContext';
import RingingModel from '../videoCalling/RingingModel';
import AnotherCallModel from '../videoCalling/AnotherCallModel';
import OfflineModel from '../videoCalling/offlineModel';
import { TokenIdType } from 'views/protectedModelViews/verification';
import dynamic from 'next/dynamic';
import { ScreenshotService } from 'services/screenshot/screenshot.service';

const CometChatIncomingCall = dynamic(() => import('@cometchat/chat-uikit-react').then((mod) => mod.CometChatIncomingCall), { ssr: false });
const CometChatOngoingCall = dynamic(() => import('@cometchat/chat-uikit-react').then((mod) => mod.CometChatOngoingCall), { ssr: false });
const CometChatOutgoingCall = dynamic(() => import('@cometchat/chat-uikit-react').then((mod) => mod.CometChatOutgoingCall), { ssr: false });

const CallFeature = () => {
  const {
    call,
    handleCancelCall,
    isCallAccepted,
    isCustomer,
    isBusy,
    handleBusyClose,
    isLoading,
    isModelAvailable,
    handleModelOfflineClose,
    isModelJoin,
    getToken,
    callLogId
  } = useCallFeatureContext();

  const token: TokenIdType = getToken();

  const [ssTime, setSSTime] = useState(10000);

  const saveScreenshot = async () => {
    const captureElement = document.querySelector('#cc-callscreen_ref') as HTMLElement;
    if (captureElement) {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(captureElement);

      canvas.toBlob(async (blob) => {
        if (blob) {
          const fileName = `${callLogId.toString()}_${Date.now()}`;
          const formData = new FormData();
          formData.append('call_log_id', callLogId.toString());
          formData.append('screenshot', blob, fileName);

          await ScreenshotService.uploadScreenShotImage(formData, token.token);
        }
      });
    }
  };

  const videoCallScreenshotEventListener = useCallback(async () => {
    if (!isCallAccepted || !token?.token) return;

    const durationRes = await ScreenshotService.fetchScreenShotDuration(token.token);
    const intervalDuration = parseInt(durationRes?.data?.screenshot_interval_duration?.toString() || '0', 0);

    if (!intervalDuration) return;
    if (intervalDuration * 1000 !== ssTime) setSSTime(intervalDuration * 1000);

    const intervalId = setInterval(() => {
      if (isModelJoin && callLogId) saveScreenshot();
    }, intervalDuration * 1000);

    return () => clearInterval(intervalId);
  }, [isModelJoin, callLogId]);

  useEffect(() => {
    videoCallScreenshotEventListener();
  }, [videoCallScreenshotEventListener, isModelJoin, callLogId, ssTime]);

  return (
    <>
      {!isCustomer && <CometChatIncomingCall call={call} />}
      {call && !isCallAccepted && !isLoading && !isBusy && (
        <CometChatOutgoingCall call={call} customView={<RingingModel onClose={handleCancelCall} />} />
      )}
      {call && isCallAccepted && <CometChatOngoingCall sessionID={call?.getSessionId()} />}
      {isBusy && <AnotherCallModel onClose={handleBusyClose} open={isBusy} />}
      <OfflineModel open={!isModelAvailable} isModelAvailable={isModelAvailable} onClose={handleModelOfflineClose} />
    </>
  );
};

export default CallFeature;
