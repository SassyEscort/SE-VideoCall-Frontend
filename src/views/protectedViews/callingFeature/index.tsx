'use client';
import { useCallFeatureContext } from '../../../contexts/CallFeatureContext';
import { useCallback, useEffect, useMemo, useState } from 'react';
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
  const [startDuration, setStartDuration] = useState<number | null>(null);
  const [configFetched, setConfigFetched] = useState(false);

  const fetchScreenshotConfig = useCallback(async () => {
    const durationRes = await ScreenshotService.fetchScreenShotDuration(token.token);
    const interval_duration = parseInt(durationRes?.data?.screenshot_interval_duration?.toString() || '5', 0);
    const start_duration = parseInt(durationRes?.data?.screenshot_start_duration?.toString() || '5', 0);

    if (!interval_duration || !start_duration) return;

    setIntervalDuration(interval_duration * 1000);
    setStartDuration(start_duration * 1000);
    setConfigFetched(true);
  }, [token.token]);

  const shouldFetchDurationConfig = useMemo(
    () => Boolean(isModelJoin && callLogId && !configFetched && token?.token),
    [isModelJoin, callLogId, configFetched, token?.token]
  );

  useEffect(() => {
    if (shouldFetchDurationConfig) {
      fetchScreenshotConfig();
    }
  }, [shouldFetchDurationConfig, fetchScreenshotConfig]);

  const captureScreenshot = useCallback(async () => {
    if (isModelJoin && callLogId) {
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
    }
  }, [isModelJoin, callLogId, token.token]);

  useEffect(() => {
    let initialTimeout: ReturnType<typeof setTimeout> | undefined;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    if (startDuration && intervalDuration && isModelJoin && callLogId) {
      initialTimeout = setTimeout(() => {
        captureScreenshot();

        intervalId = setInterval(captureScreenshot, intervalDuration);
      }, startDuration);
    }

    return () => {
      if (initialTimeout) clearTimeout(initialTimeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, [startDuration, intervalDuration, isModelJoin, callLogId, captureScreenshot]);

  const appenText = () => {
    const existingDiv = document.querySelector('div[item="18d27501"]');
    if (existingDiv) {
      console.log('The div already exists. No new div will be appended.');
      return;
    }

    const allDivs = document.querySelectorAll('.side-bar-tile-wrapper');
    if (allDivs?.length > 0) {
      const lastDiv = allDivs[allDivs.length - 1];
      const newDiv = document.createElement('div');
      newDiv.setAttribute('item', '18d27501');
      newDiv.style.cssText = `
      background-color: #0000001A;
      color: #FFFFFF40;
      word-break: break-all;
      padding: 10px 8px 10px 8px; 
      border-radius: 12px;
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;
      margin-top: 5px;
      font-family: 'Inter', Manrope, sans-serif;
    `;
      newDiv.innerHTML = `Please refrain from: Violence/Bloodiness/Underage<br>involvement/Harassment.<br>Hope you have a great call.`;
      lastDiv?.insertAdjacentElement('afterend', newDiv);

      setTimeout(() => {
        newDiv.remove();
      }, 10000);
    }
  };

  useEffect(() => {
    if (call && isCallAccepted && isModelJoin && callLogId) {
      setTimeout(() => appenText(), 5000);
    }
  }, [call, isCallAccepted, isModelJoin, callLogId]);

  return (
    <>
      {!isCustomer && <CometChatIncomingCall call={call} />}
      {call && !isCallAccepted && !isLoading && !isBusy && (
        <CometChatOutgoingCall call={call} customView={<RingingModel open={true} onClose={handleCancelCall} />} />
      )}
      {call && isCallAccepted && <CometChatOngoingCall sessionID={call?.getSessionId()} />}
      {isBusy && <AnotherCallModel onClose={handleBusyClose} open={isBusy} />}
      <OfflineModel open={!isModelAvailable} isModelAvailable={isModelAvailable} onClose={handleModelOfflineClose} />
    </>
  );
};

export default CallFeature;
