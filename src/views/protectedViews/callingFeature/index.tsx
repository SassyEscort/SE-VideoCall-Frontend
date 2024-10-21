'use client';
import { useEffect } from 'react';
import { useCallFeatureContext } from '../../../../context/CallFeatureContext';
import RingingModel from '../videoCalling/RingingModel';
import AnotherCallModel from '../videoCalling/AnotherCallModel';
import OfflineModel from '../videoCalling/offlineModel';
import html2canvas from 'html2canvas';
import moment from 'moment';
import dynamic from 'next/dynamic';

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
    handleModelOfflineClose
  } = useCallFeatureContext();

  const saveScreenshot = () => {
    const captureElement = document.querySelector('#cc-callscreen_ref') as HTMLElement;
    if (captureElement) {
      html2canvas(captureElement).then((canvas) => {
        canvas.toBlob(function (blob) {
          if (blob) {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `${call?.getSessionId()}_${moment().format('DD_MM_YYYY_hh:mm:ss_a')}.png`;
            link.click();
          }
        });
      });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isCallAccepted) saveScreenshot();
    }, 10000);
    return () => clearInterval(intervalId);
  }, [isCallAccepted]);

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
