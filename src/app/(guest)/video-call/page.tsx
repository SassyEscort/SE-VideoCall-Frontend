// /* eslint-disable no-console */
'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  ZegoInvitationType,
  ZegoCloudRoomConfig,
  ZegoUser,
  CancelCallInvitationFunc,
  AcceptCallInvitationFunc,
  RefuseCallInvitationFunc
} from '@zegocloud/zego-uikit-prebuilt';
import { Box, Card, CardContent, TextField, CardActions, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { randomID } from 'utils/videoCall';
import { CALL_INVITATION_END_REASON } from 'constants/callingConstants';
// import dynamic from 'next/dynamic';

const VideoCall: React.FC = () => {
  const userRef = useRef<{ userID: string; userName: string; isUserLeave: boolean; isCustomerLeave: boolean }>({
    userID: '',
    userName: '',
    isUserLeave: false,
    isCustomerLeave: false
  });
  const [zp, setZp] = useState<any>(null);
  const [inviteeID, setInviteeID] = useState<string>('');
  const [, setCallID] = useState<string>('');
  const [userId, setUserId] = useState<string>('408');
  const [user_Name, setUser_Name] = useState<string>('user_408');
  const [outgoingCallDialogOpen, setOutgoingCallDialogOpen] = useState(false);
  const [outgoingCallInfo, setOutgoingCallInfo] = useState<{ caller: ZegoUser } | null>(null);
  const [incomingCallDialogOpen, setIncomingCallDialogOpen] = useState(false);
  const [incomingCallInfo, setIncomingCallInfo] = useState<{ caller: ZegoUser; callType: ZegoInvitationType } | null>(null);
  const [cancelCallInvitationFn, setCancelCallInvitationFn] = useState<CancelCallInvitationFunc | null>(null);
  const [acceptCallInvitationFn, setAcceptCallInvitationFn] = useState<AcceptCallInvitationFunc | null>(null);
  const [rejectCallInvitationFn, setRejectCallInvitationFn] = useState<RefuseCallInvitationFunc | null>(null);

  const appID = 1140452996; // Add your App ID
  const serverSecret = process.env.NEXT_PUBLIC_SECRET_KEY!; // Add your Server Secret

  const roomID = randomID();
  const initZego = async () => {
    const userID = '408';
    const userName = `user_${userID}`;
    setUserId(userID);
    setUser_Name(userName);
    if (!userID || !userName) {
      throw new Error('User ID and User Name must be set before initializing Zego.');
    }
    const { ZegoUIKitPrebuilt: UIKitPrebuilt } = await import('@zegocloud/zego-uikit-prebuilt');
    const token = UIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, userID, userName);
    const zpInstance = UIKitPrebuilt.create(token);
    const zimModule = await import('zego-zim-web');
    zpInstance.addPlugins({ ZIM: zimModule.ZIM });
    setZp(zpInstance);
  };

  useEffect(() => {
    initZego();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDialogClose = () => {
    setIncomingCallDialogOpen(false);
    setIncomingCallInfo(null);
  };

  const handleSend = async () => {
    if (!inviteeID) {
      alert('User ID cannot be empty!');
      return;
    }

    userRef.current = {
      userID: '',
      userName: '',
      isUserLeave: false,
      isCustomerLeave: false
    };

    const users = inviteeID?.split(',')?.map((id) => {
      if (!id?.trim()) {
        throw new Error('Invitee ID cannot be empty or invalid.');
      }
      return {
        userID: id.trim(),
        userName: `user_${id}`
      };
    });

    try {
      if (zp) {
        const { ZegoUIKitPrebuilt } = await import('@zegocloud/zego-uikit-prebuilt');
        zp.setCallInvitationConfig({
          enableCustomCallInvitationDialog: true,
          enableNotifyWhenAppRunningInBackgroundOrQuit: true,
          endCallWhenInitiatorLeave: true,
          ringtoneConfig: {
            outgoingCallUrl: 'https://dl.prokerala.com/downloads/ringtones/files/mp3/iphone-ringtone-47958.mp3'
          },

          onWaitingPageWhenSending: (callType: string, callees: any, cancel: CancelCallInvitationFunc) => {
            setCancelCallInvitationFn(() => cancel);
            setOutgoingCallDialogOpen(true);

            for (var i = 0; i < callees.length; i++) {
              setOutgoingCallInfo({ caller: { userID: callees[i].userID, userName: callees[i].userName } });
            }
          },

          onConfirmDialogWhenReceiving: (callType: any, caller: any, reject: any, accept: any) => {
            console.log('Incoming call invitation:', { callType, caller });
            setAcceptCallInvitationFn(() => accept);
            setRejectCallInvitationFn(() => reject);
            setIncomingCallInfo({ caller, callType });
            setIncomingCallDialogOpen(true);
          },

          onCallInvitationEnded(reason: string, data: any) {
            console.log('on call invitation ended:', { reason, data });

            if (reason === CALL_INVITATION_END_REASON.CANCELED) {
              console.log('userRef?.current:', userRef?.current);
            } else if (reason == CALL_INVITATION_END_REASON.DECLINED) {
              console.log('userRef?.current:', userRef?.current);
            }
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
              },
              onUserLeave: (users) => {
                console.log('on User Leave:', { users });
                if (users?.[0]) {
                  userRef.current = {
                    userID: users?.[0]?.userID || '',
                    userName: users?.[0]?.userName || '',
                    isUserLeave: true,
                    isCustomerLeave: false
                  };
                }
              },

              onLeaveRoom() {
                console.log('on Leave Room', userRef.current, inviteeID);
                if (!userRef.current.isUserLeave) {
                  userRef.current = {
                    userID: '408',
                    userName: 'user_408',
                    isUserLeave: false,
                    isCustomerLeave: true
                  };
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

          onOutgoingCallAccepted: async (callID: string, callee: ZegoUser) => {
            console.log('Outgoing call accepted:', { callID, callee });
            setCallID(callID);
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
        const response = await zp.sendCallInvitation({
          callees: users,
          callType: ZegoUIKitPrebuilt.InvitationTypeVideoCall,
          timeout: 60,
          notificationConfig: {
            resourcesID: 'zego_data'
          }
        });
        if (response?.errorInvitees.length) {
          alert('The user does not exist or is offline.');
        }
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
              {user_Name && (
                <Box component="div">
                  My userName: <span className="name">{user_Name}</span>
                </Box>
              )}
              {userId && (
                <Box component="div">
                  My userID: <span className="id">{userId}</span>
                </Box>
              )}
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
              <Button variant="contained" size="large" fullWidth onClick={() => handleSend()}>
                Video Call
              </Button>
              <Button variant="contained" size="large" fullWidth onClick={() => handleSend()}>
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
                <p>{`Incoming video call from ${incomingCallInfo.caller.userName}.`}</p>
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

export default VideoCall;
