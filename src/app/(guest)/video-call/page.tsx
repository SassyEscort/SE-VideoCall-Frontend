'use client';
import React, { useState, useEffect } from 'react';
import { ZegoUIKitPrebuilt, ZegoInvitationType, ZegoCloudRoomConfig } from '@zegocloud/zego-uikit-prebuilt';
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
        }
      });
      console.log('Zego initialized successfully');
      setZp(zpInstance);
    };

    initZego();
  }, [randomID]);

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
    // <div id="app">
    //   <p>
    //     my userName: <span className="name">{userName}</span>
    //   </p>
    //   <p>
    //     my userID: <span className="id">{userID}</span>
    //   </p>
    //   <input type="text" id="userID" placeholder="callee's userID" />
    //   <button className="videoCall" onClick={() => handleSend(ZegoUIKitPrebuilt.InvitationTypeVideoCall)}>
    //     Video Call
    //   </button>
    //   <button className="voiceCall" onClick={() => handleSend(ZegoUIKitPrebuilt.InvitationTypeVoiceCall)}>
    //     Voice Call
    //   </button>
    // </div>
  );
};

export default App;
