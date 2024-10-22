'use client';
import { useCallback, useEffect, useState } from 'react';
import { useCallFeatureContext } from '../../../../context/CallFeatureContext';
import RingingModel from '../videoCalling/RingingModel';
import AnotherCallModel from '../videoCalling/AnotherCallModel';
import OfflineModel from '../videoCalling/offlineModel';
import { TokenIdType } from 'views/protectedModelViews/verification';
import moment from 'moment';
import dynamic from 'next/dynamic';
import { CallingService } from 'services/calling/calling.services';

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
    isUserJoin,
    getToken
  } = useCallFeatureContext();

  const token: TokenIdType = getToken();

  const [ssTime, setSSTime] = useState(10000);

  const saveScreenshot = async () => {
    const captureElement = document.querySelector('#cc-callscreen_ref') as HTMLElement;
    if (captureElement) {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(captureElement);

      canvas.toBlob(function (blob) {
        if (blob) {
          console.log(blob, ':::::::: blob');

          const link = document.createElement('a');
          const url = URL.createObjectURL(blob);
          link.href = url;
          link.download = `${call?.getSessionId()}_${moment().format('DD_MM_YYYY_hh:mm:ss_a')}.webp`;
          link.click();
          URL.revokeObjectURL(url);
        }
      }, 'image/webp');
    }
  };

  const videoCallScreenshotEventListener = useCallback(async () => {
    if (!isCallAccepted || !token?.token) return;

    const { data } = await CallingService.fetchScreenShotDuration(token.token);
    const intervalDuration = parseInt(data?.screenshot_interval_duration?.toString() || '0', 0);
    console.log(intervalDuration, ':::::::intervalDuration');

    if (!intervalDuration) return;
    if (intervalDuration * 1000 !== ssTime) setSSTime(intervalDuration * 1000);

    const intervalId = setInterval(() => {
      if (isUserJoin) saveScreenshot();
    }, intervalDuration * 1000);

    return () => clearInterval(intervalId);
  }, [isCallAccepted, isUserJoin]);

  useEffect(() => {
    videoCallScreenshotEventListener();
  }, [videoCallScreenshotEventListener, isCallAccepted, isUserJoin]);

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
