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
import Box from '@mui/material/Box';

const COMETCHAT_CONSTANTS = {
  APP_ID: '2552847737c10dd9',
  REGION: 'EU',
  AUTH_KEY: '1b20bb20f6b207d4b6774581befa2d65ba474001'
};

const CallFeature = () => {
  const [call, setCall] = useState<CometChat.Call | undefined>(undefined);
  const [senderUID, setSenderUID] = useState('');
  const [receiverUID, setReceiverUID] = useState('');
  const [isSenderUID, setIsSenderUID] = useState(false);
  const [isReceiverUID, setIsReceiverUID] = useState(false);

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

        if (!user && isSenderUID) {
          try {
            user = await CometChatUIKit.login(senderUID);
            console.log('Login Successful:', { user });
          } catch (e) {
            console.log(e);
          }
        }

        CometChatUIKit.getLoggedinUser().then((user) => {
          console.log('User', user);
          if (!user && isSenderUID) {
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
  }, [isSenderUID, senderUID]);

  const cancelCall = () => setCall(undefined);

  const handleClick = () => {
    if (receiverUID && isReceiverUID) {
      const callObject = new CometChat.Call(
        receiverUID,
        CometChatUIKitConstants.MessageTypes.video,
        CometChatUIKitConstants.MessageReceiverType.user
      );
      CometChat.initiateCall(callObject)
        .then((c: any) => {
          setCall(c);
        })

        .catch(console.log);
    }
  };

  const handleSenderUid = (id: string) => {
    setSenderUID(id);
  };

  const handleReceiverUid = (id: string) => {
    setReceiverUID(id);
  };

  const handleSenderSubmit = () => {
    setIsSenderUID(true);
  };

  const handleReceiverSubmit = () => {
    setIsReceiverUID(true);
  };

  return (
    <>
      <Box display="flex" flexDirection="column" gap={2} width="100%" maxWidth="150px">
        <Box display="flex" gap={2} width="100%" maxWidth="150px">
          <input type="text" placeholder="sender uid" onChange={(e) => handleSenderUid(e.target.value)} />
          <button onClick={handleSenderSubmit}>submit</button>
        </Box>

        <Box display="flex" gap={2} width="100%" maxWidth="150px">
          <input type="text" placeholder="receiever uid" onChange={(e) => handleReceiverUid(e.target.value)} />
          <button onClick={handleReceiverSubmit}>submit</button>
        </Box>
        <button onClick={handleClick}>call</button>
      </Box>
      <CometChatIncomingCall
        call={call}
        // onAccept={() => {
        //   console.log('Call accepted');
        // }}
        // onDecline={() => {
        //   console.log('Call declined');
        //   cancelCall();
        // }}
      />
      {call && <CometChatOutgoingCall call={call} onCloseClicked={cancelCall} />}
      {call && <CometChatOngoingCall sessionID={call?.getSessionId()} />}
    </>
  );
};

export default CallFeature;
