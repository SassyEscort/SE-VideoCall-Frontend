'use client';
import {
  CometChatIncomingCall,
  CometChatOngoingCall,
  CometChatOutgoingCall,
  CometChatUIKit,
  UIKitSettingsBuilder
} from '@cometchat/chat-uikit-react';
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { useState, useEffect } from 'react';
import { CometChatUIKitConstants } from '@cometchat/uikit-resources';

const Test = () => {
  const [call, setCall] = useState<CometChat.Call>();

  const COMETCHAT_CONSTANTS = {
    APP_ID: '2552847737c10dd9',
    REGION: 'EU',
    AUTH_KEY: '1b20bb20f6b207d4b6774581befa2d65ba474001'
  };
  const UIKitSettings = new UIKitSettingsBuilder()
    .setAppId(COMETCHAT_CONSTANTS.APP_ID)
    .setRegion(COMETCHAT_CONSTANTS.REGION)
    .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
    .subscribePresenceForAllUsers()
    .build();

  const senderUID = 'chetanuid';

  useEffect(() => {
    CometChatUIKit?.init(UIKitSettings)
      .then(() => {
        console.log('Initialization completed successfully');
        CometChatUIKit.getLoggedinUser().then((user) => {
          console.log(user, 'userrrr');
          if (!user) {
            CometChatUIKit.login(senderUID)
              .then((user) => {
                console.log('Login Successful:', { user });
              })
              .catch(console.log);
          }
        });
      })
      .catch(console.log);
  }, []);

  const cancelCall = () => setCall(undefined);

  const handleClick = () => {
    const uid = 'chetanuid';

    const callObject = new CometChat.Call(
      uid,
      CometChatUIKitConstants.MessageTypes.video,
      CometChatUIKitConstants.MessageReceiverType.user
    );
    CometChat.initiateCall(callObject)
      .then((c) => {
        setCall(c);
      })

      .catch(console.log);
  };

  return (
    <>
      <button onClick={handleClick}>call</button>
      <CometChatIncomingCall call={call} onCancelClicked={cancelCall} />
      <CometChatOutgoingCall call={call} onCloseClicked={cancelCall} />
      <CometChatOngoingCall sessionID={call?.getSessionId()} />
    </>
  );
};

export default Test;
