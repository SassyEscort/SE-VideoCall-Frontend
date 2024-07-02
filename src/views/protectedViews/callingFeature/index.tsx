'use client';
import { CometChatIncomingCall, CometChatOngoingCall, CometChatOutgoingCall } from '@cometchat/chat-uikit-react';
import { useCallFeatureContext } from '../../../../context/CallFeatureContext';

const CallFeature = () => {
  const { call, handleCancelCall, isCallAccepted, isCallEnded } = useCallFeatureContext();

  return (
    <>
      <CometChatIncomingCall call={call} />
      {call && !isCallEnded && <CometChatOutgoingCall call={call} onCloseClicked={handleCancelCall} />}
      {call && isCallAccepted && !isCallEnded && <CometChatOngoingCall sessionID={call?.getSessionId()} />}
    </>
  );
};

export default CallFeature;
