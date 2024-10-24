'use client';
import { useCallFeatureContext } from '../../../../context/CallFeatureContext';
import { useCallback, useEffect, useState } from 'react';
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

  const [intervalDuration, setIntervalDuration] = useState<number | null>(null);
  const [nextScreenshotTime, setNextScreenshotTime] = useState<number | null>(null);

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

  const fetchAndScheduleScreenshot = useCallback(async () => {
    if (!isCallAccepted || !token?.token || !isModelJoin || !callLogId) return;

    const durationRes = await ScreenshotService.fetchScreenShotDuration(token.token);
    const intervalInSeconds = parseInt(durationRes?.data?.screenshot_interval_duration?.toString() || '0', 10);
    if (intervalInSeconds && intervalInSeconds > 0) {
      const intervalInMilliseconds = (intervalInSeconds - 1) * 1000;
      setIntervalDuration(intervalInMilliseconds);
      const currentTime = Date.now();
      const nextTime = currentTime + intervalInMilliseconds;
      setNextScreenshotTime(nextTime);
    }
  }, [token, isCallAccepted, isModelJoin, callLogId]);

  const handleScreenshotInterval = useCallback(() => {
    if (!nextScreenshotTime || !intervalDuration) return;

    const currentTime = Date.now();
    const timeUntilNextScreenshot = nextScreenshotTime - currentTime;

    if (timeUntilNextScreenshot <= 0) {
      saveScreenshot();
      fetchAndScheduleScreenshot();
    } else {
      setTimeout(() => {
        handleScreenshotInterval();
      }, timeUntilNextScreenshot);
    }
  }, [nextScreenshotTime, intervalDuration, fetchAndScheduleScreenshot]);

  useEffect(() => {
    fetchAndScheduleScreenshot();
  }, [fetchAndScheduleScreenshot]);

  useEffect(() => {
    if (nextScreenshotTime && intervalDuration) {
      handleScreenshotInterval();
    }
  }, [nextScreenshotTime, intervalDuration, handleScreenshotInterval]);

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
