/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import AnotherCallModel from '../videoCalling/AnotherCallModel';
import OfflineModel from '../videoCalling/offlineModel';
import RingingModel from '../videoCalling/RingingModel';
import { useVideoCallContext } from 'contexts/videoCallContext';
import { useAuthContext } from 'contexts/AuthContext';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ScreenshotService } from 'services/screenshot/screenshot.service';

const zegoCallingFeature = () => {
  const {
    isBusy,
    callInstance,
    outgoingCallDialogOpen,
    handleBusyClose,
    isModelAvailable,
    handleOutGoingCallCancel,
    handleModelOfflineClose,
    isModelJoin,
    callLogId,
    isLoading,
    isCallAccepted
  } = useVideoCallContext();
  const { token } = useAuthContext();

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
      const captureElement = document.querySelector('#zego-container') as HTMLElement;
      if (captureElement) {
        const html2canvas = (await import('html2canvas')).default;
        const canvas = await html2canvas(captureElement);

        canvas.toBlob(async (blob) => {
          if (blob) {
            const fileName = `${callLogId?.toString()}_${Date.now()}`;
            const formData = new FormData();
            formData.append('call_log_id', callLogId?.toString());
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

  return (
    <>
      {callInstance && outgoingCallDialogOpen && !isCallAccepted && !isLoading && !isBusy && (
        <RingingModel open={true} onClose={handleOutGoingCallCancel} />
      )}
      {isBusy && <AnotherCallModel onClose={handleBusyClose} open={isBusy} />}
      <OfflineModel open={!isModelAvailable} isModelAvailable={isModelAvailable} onClose={handleModelOfflineClose} />
    </>
  );
};

export default zegoCallingFeature;
