/* eslint-disable no-console */
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

const COMETCHAT_CONSTANTS = {
  APP_ID: '2552847737c10dd9',
  REGION: 'EU',
  AUTH_KEY: '1b20bb20f6b207d4b6774581befa2d65ba474001'
};

const senderUID = '1234';

const CallFeature = () => {
  const [call, setCall] = useState<CometChat.Call | undefined>(undefined);

  useEffect(() => {
    const init = async () => {
      try {
        const UIKitSettings = new UIKitSettingsBuilder()
          .setAppId(COMETCHAT_CONSTANTS.APP_ID)
          .setRegion(COMETCHAT_CONSTANTS.REGION)
          .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
          .subscribePresenceForAllUsers()
          .build();

        await CometChatUIKit.init(UIKitSettings);
        console.log('Initialization completed successfully');
        let user = await CometChatUIKit.getLoggedinUser();

        if (!user) {
          try {
            user = await CometChatUIKit.login(senderUID);
            console.log('Login Successful:', { user });
          } catch (e) {
            console.log(e);
          }
        }

        CometChatUIKit.getLoggedinUser().then((user) => {
          console.log('User', user);
          if (!user) {
            CometChatUIKit.login(senderUID)
              .then((user) => {
                console.log('Login Successful:', { user });
              })
              .catch(console.log);
          }
        });
      } catch (e) {
        console.log(e);
      }
    };

    init();
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
      <CometChatIncomingCall
        call={call}
        onAccept={() => {
          console.log('Call accepted');
        }}
        onDecline={() => {
          console.log('Call declined');
          cancelCall();
        }}
      />
      {call && <CometChatOutgoingCall call={call} onCloseClicked={cancelCall} />}
      <CometChatOngoingCall sessionID={call?.getSessionId()} />
    </>
  );
};

export default CallFeature;
