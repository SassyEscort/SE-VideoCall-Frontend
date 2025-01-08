'use client';
import { useCallFeatureContext } from '../../../contexts/CallFeatureContext';
import { useAuthContext } from 'contexts//AuthContext';
import { useCallback, useEffect, useMemo, useState } from 'react';
import RingingModel from '../videoCalling/RingingModel';
import AnotherCallModel from '../videoCalling/AnotherCallModel';
import OfflineModel from '../videoCalling/offlineModel';
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
    callLogId
  } = useCallFeatureContext();

  const { token } = useAuthContext();
  const [intervalDuration, setIntervalDuration] = useState<number | null>(null);
  const [startDuration, setStartDuration] = useState<number | null>(null);
  const [configFetched, setConfigFetched] = useState(false);

  const fetchScreenshotConfig = useCallback(async () => {
    if (token.token) {
      const durationRes = await ScreenshotService.fetchScreenShotDuration(token.token);
      const interval_duration = parseInt(durationRes?.data?.screenshot_interval_duration?.toString() || '5', 0);
      const start_duration = parseInt(durationRes?.data?.screenshot_start_duration?.toString() || '5', 0);

      if (!interval_duration || !start_duration) return;

      setIntervalDuration(interval_duration * 1000);
      setStartDuration(start_duration * 1000);
      setConfigFetched(true);
    }
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
    if (isModelJoin && callLogId && token.token) {
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

  const AppenText = async () => {
    const { default: useConfig } = await import('hooks/useConfig');
    const { i18n } = useConfig();
    const textContent =
      i18n === 'sp'
        ? `Abstenerse de: violencia,<br>sangre,<br>involucramiento de menores,<br>acoso.<br>Espero que tengas una excelente llamada.`
        : `Please refrain from: Violence/<br>Bloodiness/<br>Underage<br>involvement<br>Harassment.<br>Hope you have a great call.`;

    const existingDiv = document.querySelector('div[item="18d27501"]');
    if (existingDiv) {
      return;
    }
    const allDivs = document.querySelector('.side-bar-main-user-video');
    if (allDivs) {
      const termDiv = document.createElement('div');
      termDiv.classList.add('absolute-bottom-left');
      termDiv.setAttribute('item', '18d27502');
      termDiv.style.cssText = `
        bottom: 80px;
        font-family: 'Inter', Manrope, sans-serif;
      `;
      const innerDiv = document.createElement('div');
      innerDiv.classList.add('cc-name-label');
      innerDiv.style.cssText = `
        font-size: 12px;
        background-color: rgba(27, 27, 27, 0.1);
        max-width: 150px;
        opacity:0.5;
        word-wrap: break-word;
        word-break: break-word;
        font-weight: 600;
      `;
      if (typeof window !== 'undefined' && window.matchMedia('(max-width: 475px)').matches) {
        termDiv.style.bottom = '50px';
        termDiv.style.left = '4px';
        innerDiv.style.maxWidth = '100px';
      }
      innerDiv.innerHTML = textContent;
      termDiv.appendChild(innerDiv);
      const bottomDiv = allDivs.querySelector('.absolute-bottom-left');
      allDivs?.insertBefore(termDiv, bottomDiv);

      setTimeout(() => {
        termDiv.remove();
      }, 10000);
    }
  };

  useEffect(() => {
    if (call && isCallAccepted && isModelJoin && callLogId) {
      setTimeout(() => AppenText(), 5000);
    }
  }, [call, isCallAccepted, isModelJoin, callLogId]);

  return (
    <>
      {token.token && (
        <>
          {!isCustomer && <CometChatIncomingCall call={call} />}
          {call && !isCallAccepted && !isLoading && !isBusy && (
            <CometChatOutgoingCall call={call} customView={<RingingModel open={true} onClose={handleCancelCall} />} />
          )}
          {call && isCallAccepted && <CometChatOngoingCall sessionID={call?.getSessionId()} />}
        </>
      )}
      {isBusy && <AnotherCallModel onClose={handleBusyClose} open={isBusy} />}
      <OfflineModel open={!isModelAvailable} isModelAvailable={isModelAvailable} onClose={handleModelOfflineClose} />
    </>
  );
};

export default CallFeature;
