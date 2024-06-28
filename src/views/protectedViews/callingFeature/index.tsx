'use client';
import { Call } from '@cometchat/chat-sdk-javascript';
import { CometChatIncomingCall, CometChatOngoingCall, CometChatOutgoingCall } from '@cometchat/chat-uikit-react';

const CallFeature = ({ call, handleCancelCall }: { call: Call | undefined; handleCancelCall: () => void }) => {
  return (
    <>
      <CometChatIncomingCall call={call} />
      {call && <CometChatOutgoingCall call={call} onCloseClicked={handleCancelCall} />}
      {call && <CometChatOngoingCall sessionID={call?.getSessionId()} />}
    </>
  );
};

export default CallFeature;
