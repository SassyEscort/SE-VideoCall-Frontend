'use client';
import { CometChatIncomingCall, CometChatOngoingCall, CometChatOutgoingCall } from '@cometchat/chat-uikit-react';
import { useCallFeatureContext } from '../../../../context/CallFeatureContext';

const CallFeature = () => {
  const { call, handleCancelCall, isCallAccepted, isCustomer } = useCallFeatureContext();

  return (
    <>
      {!isCustomer && <CometChatIncomingCall call={call} />}
      {call && !isCallAccepted && <CometChatOutgoingCall call={call} onCloseClicked={handleCancelCall} />}
      {call && isCallAccepted && <CometChatOngoingCall sessionID={call?.getSessionId()} />}
    </>
  );
};

export default CallFeature;
