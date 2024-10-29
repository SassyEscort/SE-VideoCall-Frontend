'use client';
import React, { useState, useEffect } from 'react';
import { ZegoUIKitPrebuilt, ZegoInvitationType, ZegoCloudRoomConfig, ZegoUser } from '@zegocloud/zego-uikit-prebuilt';
import { ZIM } from 'zego-zim-web';
import { Box, Card, CardContent, TextField, CardActions, Button } from '@mui/material';
import { randomID } from 'utils/videoCall';

const App: React.FC = () => {
  const [zp, setZp] = useState<ZegoUIKitPrebuilt | null>(null);
  const [inviteeID, setInviteeID] = useState<string>('');
  const [userID, setUserID] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const appID = 1140452996; // Add your App ID
  const serverSecret = process.env.NEXT_PUBLIC_SECRET_KEY!; // Add your Server Secret

  useEffect(() => {
    const initZego = async () => {
      const roomID = randomID();
      const id = '408';
      const name = `user_${id}`;
      setUserID(id);
      setUserName(name);

      const token = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, id, name);
      const KitToken = ZegoUIKitPrebuilt.generateKitTokenForProduction(appID, token, roomID, id, name);
      const zpInstance = ZegoUIKitPrebuilt.create(KitToken);
      zpInstance.addPlugins({ ZIM });
      zpInstance.setCallInvitationConfig({
        enableCustomCallInvitationDialog: true,
        enableNotifyWhenAppRunningInBackgroundOrQuit: true,
        // ringtoneConfig: {
        //   incomingCallUrl: 'https://dl.prokerala.com/downloads/ringtones/files/mp3/ringing-2425.mp3',
        //   outgoingCallUrl: 'https://dl.prokerala.com/downloads/ringtones/files/mp3/ringing-2425.mp3'
        // }

        onConfirmDialogWhenReceiving: (callType, caller, accept, reject) => {
          console.log('Incoming call invitation:', { callType, caller });

          // Show browser notification
          if (caller?.userName) showNotification(caller?.userName);

          const isConfirmed = window.confirm(
            `Incoming ${callType === ZegoInvitationType.VideoCall ? 'video' : 'voice'} call from ${caller.userName}. Accept?`
          );

          if (isConfirmed) {
            accept(); // Accepts the call
          } else {
            reject(); // Rejects the call
          }
        },

        onCallInvitationEnded(reason, data) {
          console.log('on call invitation ended:', { reason, data });
        },

        onSetRoomConfigBeforeJoining: (): ZegoCloudRoomConfig => {
          return {
            turnOnMicrophoneWhenJoining: true,
            turnOnCameraWhenJoining: true,
            showMyCameraToggleButton: true,
            showMyMicrophoneToggleButton: true,
            showAudioVideoSettingsButton: true,
            showScreenSharingButton: false,
            showTextChat: false,
            showUserList: false,
            showWaitingCallAcceptAudioVideoView: true,
            maxUsers: 2,
            layout: 'Auto',
            showLayoutButton: false,
            scenario: {
              mode: ZegoUIKitPrebuilt.OneONoneCall,
              config: {
                role: ZegoUIKitPrebuilt.Host || 'Host'
              }
            }
          };
        },

        onIncomingCallReceived: (callID: string, caller: ZegoUser, callType: ZegoInvitationType, callees: ZegoUser[]) => {
          console.log('Incoming call received:', { callID, caller, callType, callees });
        },

        // The callee will receive the notification through this callback when the caller canceled the call invitation.
        onIncomingCallCanceled: (callID: any, caller: ZegoUser) => {
          console.log('Incoming call canceled:', { callID, caller });
        },

        // The caller will receive the notification through this callback when the callee accepts the call invitation.
        onOutgoingCallAccepted: (callID: any, callee: ZegoUser) => {
          console.log('Outgoing call accepted:', { callID, callee });
        },

        // The caller will receive the notification through this callback when the callee is on a call.
        onOutgoingCallRejected: (callID: any, callee: ZegoUser) => {
          console.log('Outgoing call rejected:', { callID, callee });
        },

        // The caller will receive the notification through this callback when the callee declines the call invitation.
        onOutgoingCallDeclined: (callID: any, callee: ZegoUser) => {
          console.log('Outgoing call declined:', { callID, callee });
        },

        // The callee will receive the notification through this callback when he didn't respond to the call invitation.
        onIncomingCallTimeout: (callID: string, caller: ZegoUser) => {
          console.log('Incoming call timeout:', { callID, caller });
        },

        // The caller will receive the notification through this callback when the call invitation timed out.
        onOutgoingCallTimeout: (callID: any, callees: ZegoUser[]) => {
          console.log('Outgoing call timeout:', { callID, callees });
        }
      });
      console.log('Zego initialized successfully');
      setZp(zpInstance);
    };

    initZego();
  }, [randomID]);

  const showNotification = (callerName: string) => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }

    const notification = new Notification('Incoming Call', {
      body: `Incoming call from ${callerName}`,
      icon: 'path_to_icon.png' // Add your icon path
    });

    notification.onclick = () => {
      // Action to perform when the notification is clicked
    };
  };
  const handleSend = async (callType: ZegoInvitationType) => {
    if (!inviteeID) {
      alert('User ID cannot be empty!');
      return;
    }

    const users = inviteeID.split(',').map((id) => ({
      userID: id.trim(),
      userName: `user_${id}`
    }));
    try {
      const response = await zp?.sendCallInvitation({
        callees: users,
        callType: callType,
        timeout: 60
      });

      if (response?.errorInvitees.length) {
        alert('The user does not exist or is offline.');
      }
    } catch (error) {
      console.error('Error sending call invitation:', error);
    }
  };

  return (
    <div id="app">
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Card sx={{ minWidth: 300, maxWidth: 300, background: '#fff' }}>
          <CardContent>
            <Box mb={2}>
              <Box component="div">
                my userName: <span className="name">{userName}</span>
              </Box>
              <Box component="div">
                my userID: <span className="id">{userID}</span>
              </Box>
            </Box>
            <TextField
              id="invitee-id"
              label="Invitee ID"
              variant="outlined"
              placeholder="callee's userID"
              onChange={(e) => setInviteeID(e.target.value)}
            />
          </CardContent>
          <CardActions>
            <Box display={'flex'} flexDirection={'column'} gap={1} width={'100%'}>
              <Button variant="contained" fullWidth onClick={() => handleSend(ZegoUIKitPrebuilt.InvitationTypeVideoCall)}>
                Video Call
              </Button>
              <Button variant="contained" fullWidth onClick={() => handleSend(ZegoUIKitPrebuilt.InvitationTypeVoiceCall)}>
                Voice Call
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
};

export default App;
