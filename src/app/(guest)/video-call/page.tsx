/* eslint-disable no-console */
'use client';
import React, { useState, useEffect } from 'react';
import {
  ZegoUIKitPrebuilt,
  ZegoInvitationType,
  ZegoCloudRoomConfig,
  ZegoUser,
  CancelCallInvitationFunc,
  AcceptCallInvitationFunc,
  RefuseCallInvitationFunc
} from '@zegocloud/zego-uikit-prebuilt';
import { ZIM } from 'zego-zim-web';
import { Box, Card, CardContent, TextField, CardActions, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { randomID } from 'utils/videoCall';

const App: React.FC = () => {
  const [zp, setZp] = useState<ZegoUIKitPrebuilt | null>(null);
  const [inviteeID, setInviteeID] = useState<string>('');
  const [userID, setUserID] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [outgoingCallDialogOpen, setOutgoingCallDialogOpen] = useState(false);
  const [outgoingCallInfo, setOutgoingCallInfo] = useState<{ caller: ZegoUser } | null>(null);
  const [incomingCallDialogOpen, setIncomingCallDialogOpen] = useState(false);
  const [incomingCallInfo, setIncomingCallInfo] = useState<{ caller: ZegoUser; callType: ZegoInvitationType } | null>(null);
  const [cancelCallInvitationFn, setCancelCallInvitationFn] = useState<CancelCallInvitationFunc | null>(null);
  const [acceptCallInvitationFn, setAcceptCallInvitationFn] = useState<AcceptCallInvitationFunc | null>(null);
  const [rejectCallInvitationFn, setRejectCallInvitationFn] = useState<RefuseCallInvitationFunc | null>(null);

  const appID = 1140452996; // Add your App ID
  const serverSecret = process.env.NEXT_PUBLIC_SECRET_KEY!; // Add your Server Secret

  useEffect(() => {
    const roomID = randomID();
    const initZego = async () => {
      const id = '408';
      const name = `user_${id}`;
      setUserID(id);
      setUserName(name);

      const token = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, id, name);
      const zpInstance = ZegoUIKitPrebuilt.create(token);
      zpInstance.addPlugins({ ZIM });

      zpInstance.setCallInvitationConfig({
        enableCustomCallInvitationDialog: true,
        // enableCustomCallInvitationWaitingPage: true,
        enableNotifyWhenAppRunningInBackgroundOrQuit: true,

        // ringtoneConfig: {
        //   incomingCallUrl: 'https://dl.prokerala.com/downloads/ringtones/files/mp3/ringing-2425.mp3'
        //   // outgoingCallUrl: 'https://dl.prokerala.com/downloads/ringtones/files/mp3/ringing-2425.mp3'
        // },

        onWaitingPageWhenSending: (callType, callees, cancel) => {
          setCancelCallInvitationFn(() => cancel);
          setOutgoingCallDialogOpen(true);

          for (var i = 0; i < callees.length; i++) {
            setOutgoingCallInfo({ caller: { userID: callees[i].userID, userName: callees[i].userName } });
          }
        },

        onConfirmDialogWhenReceiving: (callType, caller, reject, accept) => {
          console.log('Incoming call invitation:', { callType, caller });
          setAcceptCallInvitationFn(() => accept);
          setRejectCallInvitationFn(() => reject);
          setIncomingCallInfo({ caller, callType });
          setIncomingCallDialogOpen(true);
        },

        onCallInvitationEnded(reason, data) {
          console.log('on call invitation ended:', { reason, data });
          setIncomingCallInfo(null);
          setIncomingCallDialogOpen(false);
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

        onIncomingCallCanceled: (callID: string, caller: ZegoUser) => {
          console.log('Incoming call canceled:', { callID, caller });
        },

        onOutgoingCallAccepted: (callID: string, callee: ZegoUser) => {
          console.log('Outgoing call accepted:', { callID, callee });
          setOutgoingCallDialogOpen(false);
        },

        onOutgoingCallRejected: (callID: string, callee: ZegoUser) => {
          console.log('Outgoing call rejected:', { callID, callee });
          setOutgoingCallInfo(null);
          setOutgoingCallDialogOpen(false);
        },

        onOutgoingCallDeclined: (callID: string, callee: ZegoUser) => {
          console.log('Outgoing call declined:', { callID, callee });
          setOutgoingCallInfo(null);
          setOutgoingCallDialogOpen(false);
        },

        onIncomingCallTimeout: (callID: string, caller: ZegoUser) => {
          console.log('Incoming call timeout:', { callID, caller });
          setIncomingCallInfo(null);
          setIncomingCallDialogOpen(false);
        },

        onOutgoingCallTimeout: (callID: string, callees: ZegoUser[]) => {
          console.log('Outgoing call timeout:', { callID, callees });
          setOutgoingCallInfo(null);
          setOutgoingCallDialogOpen(false);
        }
      });
      console.log('Zego initialized successfully');
      setZp(zpInstance);
    };

    initZego();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDialogClose = () => {
    setIncomingCallDialogOpen(false);
    setIncomingCallInfo(null);
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
        timeout: 60,
        notificationConfig: {
          resourcesID: 'zego_data'
        }
      });

      if (response?.errorInvitees.length) {
        alert('The user does not exist or is offline.');
      }
    } catch (error) {
      console.error('Error sending call invitation:', error);
    }
  };

  const handleAcceptCall = async () => {
    if (incomingCallInfo) {
      const { userID } = incomingCallInfo.caller;
      console.log('Accepting call from userID:', userID);

      try {
        acceptCallInvitationFn && acceptCallInvitationFn();
        console.log('Call accepted successfully');
      } catch (error) {
        console.error('Error accepting call:', error);
      } finally {
        handleDialogClose();
      }
    } else {
      console.warn('No incoming call information available');
    }
  };

  const handleRejectCall = async () => {
    if (incomingCallInfo) {
      const { userID } = incomingCallInfo.caller;
      console.log('Rejecting call from userID:', userID);

      try {
        rejectCallInvitationFn && rejectCallInvitationFn();
        console.log('Call rejected successfully');
      } catch (error) {
        console.error('Error rejecting call:', error);
      } finally {
        handleDialogClose();
      }
    } else {
      console.warn('No incoming call information available');
    }
  };

  const handleOutGoingCallCancel = () => {
    setOutgoingCallDialogOpen(false);
    setOutgoingCallInfo(null);
    cancelCallInvitationFn && cancelCallInvitationFn();
  };

  return (
    <div id="app">
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Card sx={{ width: 600, background: '#fff' }}>
          <CardContent>
            <Box mb={4} gap={2} display={'flex'} flexDirection={'column'}>
              <Box component="div">
                My userName: <span className="name">{userName}</span>
              </Box>
              <Box component="div">
                My userID: <span className="id">{userID}</span>
              </Box>
            </Box>
            <TextField
              fullWidth
              id="invitee-id"
              label="Invitee ID"
              variant="outlined"
              placeholder="callee's userID"
              onChange={(e) => setInviteeID(e.target.value)}
            />
          </CardContent>
          <CardActions>
            <Box display={'flex'} flexDirection={'column'} gap={1} width={'100%'}>
              <Button variant="contained" size="large" fullWidth onClick={() => handleSend(ZegoUIKitPrebuilt.InvitationTypeVideoCall)}>
                Video Call
              </Button>
              <Button variant="contained" size="large" fullWidth onClick={() => handleSend(ZegoUIKitPrebuilt.InvitationTypeVoiceCall)}>
                Voice Call
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Box>

      <Dialog open={incomingCallDialogOpen} onClose={handleDialogClose} fullWidth>
        <Box sx={{ background: '#FFF' }}>
          <DialogTitle>Incoming Call</DialogTitle>
          <DialogContent>
            {incomingCallInfo && (
              <div>
                <p>{`Incoming ${incomingCallInfo.callType === ZegoUIKitPrebuilt.InvitationTypeVideoCall ? 'video' : 'voice'} call from ${
                  incomingCallInfo.caller.userName
                }.`}</p>
              </div>
            )}
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="contained" onClick={handleRejectCall}>
              Reject
            </Button>
            <Button color="primary" variant="contained" autoFocus onClick={handleAcceptCall}>
              Accept
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      <Dialog open={outgoingCallDialogOpen} onClose={handleOutGoingCallCancel} fullWidth>
        <Box sx={{ background: '#FFF' }}>
          <DialogTitle>Outgoing Call</DialogTitle>
          <DialogContent>
            {outgoingCallInfo && (
              <div>
                <p>{`userId: ${outgoingCallInfo?.caller.userID}`}</p>
                <p>{`userName: ${outgoingCallInfo?.caller.userName}`}</p>
              </div>
            )}
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="contained" id="cancelButton" onClick={handleOutGoingCallCancel}>
              Cancel
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
};

export default App;
