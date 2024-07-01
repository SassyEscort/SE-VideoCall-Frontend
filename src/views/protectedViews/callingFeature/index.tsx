'use client';
import { CometChatIncomingCall, CometChatOngoingCall, CometChatOutgoingCall } from '@cometchat/chat-uikit-react';
import { useCallFeatureContext } from '../../../../context/CallFeatureContext';

const CallFeature = () => {
  const { call, handleCancelCall } = useCallFeatureContext();

  return (
    <>
      <CometChatIncomingCall call={call} />
      {call && <CometChatOutgoingCall call={call} onCloseClicked={handleCancelCall} />}
      {call && <CometChatOngoingCall sessionID={call?.getSessionId()} />}
    </>
  );
};

export default CallFeature;
