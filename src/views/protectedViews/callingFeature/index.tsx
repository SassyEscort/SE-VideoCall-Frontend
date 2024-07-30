'use client';
import { CometChatIncomingCall, CometChatOngoingCall, CometChatOutgoingCall } from '@cometchat/chat-uikit-react';
import { useCallFeatureContext } from '../../../../context/CallFeatureContext';
import RingingModel from '../videoCalling/RingingModel';
import AnotherCallModel from '../videoCalling/AnotherCallModel';
import OfflineModel from '../videoCalling/offlineModel';

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
