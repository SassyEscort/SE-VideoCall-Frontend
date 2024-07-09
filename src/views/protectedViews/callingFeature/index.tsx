'use client';
import { CometChatIncomingCall, CometChatOngoingCall, CometChatOutgoingCall } from '@cometchat/chat-uikit-react';
import { useCallFeatureContext } from '../../../../context/CallFeatureContext';
import RingingModel from '../videoCalling/RingingModel';
const CallFeature = () => {
  const { call, handleCancelCall, isCallAccepted, isCustomer, isLoading } = useCallFeatureContext();
  return (
    <>
      {!isCustomer && <CometChatIncomingCall call={call} />}
      {call && !isCallAccepted && !isLoading && (
        <CometChatOutgoingCall call={call} customView={<RingingModel onClose={handleCancelCall} />} />
      )}
      {call && isCallAccepted && <CometChatOngoingCall sessionID={call?.getSessionId()} />}
    </>
  );
};

export default CallFeature;
