// 'use client';
// import React, { useState, useEffect, useCallback } from 'react';
// import { ZegoCloudRoomConfig, ZegoInvitationType, ZegoUIKitPrebuilt, ZegoUser } from '@zegocloud/zego-uikit-prebuilt';
// import ZIM from 'zego-zim-web';
// import { randomID } from 'utils/videoCall';
// import { Card, CardContent, CardActions, Button, Box, TextField } from '@mui/material';

// const CallInvitation: React.FC = () => {
//   const [user_id, setUser_Id] = useState<string>('');
//   const [waitingPageVisible, setWaitingPageVisible] = useState<boolean>(false);
//   const [confirmDialogVisible, setConfirmDialogVisible] = useState<boolean>(false);
//   const [callees, setCallees] = useState<ZegoUser[]>([]);
//   const [callerName, setCallerName] = useState<string>('');

//   const [cancelCallback, setCancelCallback] = useState<(() => void) | null>(null);
//   const [refuseCallback, setRefuseCallback] = useState<(() => void) | null>(null);
//   const [acceptCallback, setAcceptCallback] = useState<(() => void) | null>(null);

//   const roomID = randomID();
//   const userID = '304193';
//   const userName = `Stevie_304193`;
//   const appID = 1140452996; // Add your App ID
//   const serverSecret = process.env.NEXT_PUBLIC_SECRET_KEY!; // Add your Server Secret

//   useEffect(() => {
//     const TOKEN = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, userID, userName);

//     const zp = ZegoUIKitPrebuilt.create(TOKEN);

//     zp.addPlugins({ ZIM });
//     zp.setCallInvitationConfig({
//       enableCustomCallInvitationDialog: true,
//       enableCustomCallInvitationWaitingPage: true,

//       onWaitingPageWhenSending: (callType: ZegoInvitationType, calleesList: ZegoUser[], cancel: () => void) => {
//         setWaitingPageVisible(true);
//         setCallees(calleesList);
//         setCancelCallback(() => cancel);
//       },
//       onSetRoomConfigBeforeJoining: (): ZegoCloudRoomConfig => {
//         setWaitingPageVisible(false);
//         return {
//           turnOnMicrophoneWhenJoining: true,
//           turnOnCameraWhenJoining: true,
//           showMyCameraToggleButton: true,
//           showMyMicrophoneToggleButton: true,
//           showAudioVideoSettingsButton: true,
//           showScreenSharingButton: false,
//           showTextChat: false,
//           showUserList: false,
//           maxUsers: 2,
//           layout: 'Auto',
//           showLayoutButton: false,
//           scenario: {
//             mode: ZegoUIKitPrebuilt.OneONoneCall,
//             config: {
//               role: ZegoUIKitPrebuilt.Host || 'Host'
//             }
//           }
//         };
//       },
//       onCallInvitationEnded: (reason: string) => {
//         console.log('===onCallInvitationEnded', reason);
//         setWaitingPageVisible(false);
//         setConfirmDialogVisible(false);
//       },
//       onConfirmDialogWhenReceiving: (callType: ZegoInvitationType, caller: ZegoUser, refuse: () => void, accept: () => void) => {
//         setConfirmDialogVisible(true);
//         if (caller && caller.userName) setCallerName(caller.userName);
//         setRefuseCallback(() => () => {
//           refuse();
//           setConfirmDialogVisible(false);
//         });
//         setAcceptCallback(() => () => {
//           accept();
//           setConfirmDialogVisible(false);
//         });
//       }
//     });
//   }, []);

//   const invite = useCallback(() => {
//     const targetUser: ZegoUser = {
//       userID: '304193',
//       userName: 'Stevie_304193'
//     };
//     const TOKEN = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, userID, userName);

//     const zp = ZegoUIKitPrebuilt.create(TOKEN);
//     zp.sendCallInvitation({
//       callees: [targetUser],
//       callType: ZegoUIKitPrebuilt.InvitationTypeVideoCall,
//       timeout: 60
//     })
//       .then((res) => {
//         console.warn(res);
//       })
//       .catch((err) => {
//         console.warn(err);
//       });
//   }, []);

//   // const handleSend = (callType) => {
//   //   const callee = document.querySelector('#userID').value;
//   //   if (!callee) {
//   //     alert('userID cannot be empty!!');
//   //     return;
//   //   }
//   //   const users = callee.split(',').map((id) => ({
//   //     userID: id.trim(),
//   //     userName: 'user_' + id
//   //   }));
//   //   // send call invitation
//   //   zp.sendCallInvitation({
//   //     callees: users,
//   //     callType: callType,
//   //     timeout: 60
//   //   })
//   //     .then((res) => {
//   //       console.warn(res);
//   //       if (res.errorInvitees.length) {
//   //         alert('The user dose not exist or is offline.');
//   //       }
//   //     })
//   //     .catch((err) => {
//   //       console.error(err);
//   //     });
//   // };

//   return (
//     <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
//       <Card sx={{ minWidth: 300, maxWidth: 300, background: '#fff' }}>
//         <CardContent>
//           <TextField id="invitee-id" label="Invitee ID " variant="outlined" />
//         </CardContent>
//         <CardActions>
//           <Box display={'flex'} flexDirection={'column'} gap={1} width={'100%'}>
//             <Button variant="contained" fullWidth onClick={invite}>
//               Video Call
//             </Button>
//             <Button variant="contained" fullWidth onClick={invite}>
//               Voice Call
//             </Button>
//           </Box>
//         </CardActions>
//       </Card>
//     </Box>
//     // <div style={{ width: '100vw', height: '100vh' }}>
//     //   {waitingPageVisible && (
//     //     <div id="waitingPage">
//     //       <div id="calleesBox">
//     //         {callees.map((callee) => (
//     //           <div key={callee.userID}>{callee.userName}</div>
//     //         ))}
//     //       </div>
//     //       <button onClick={cancelCallback ?? undefined}>cancel</button>
//     //     </div>
//     //   )}
//     //   {confirmDialogVisible && (
//     //     <div id="confirmDialog">
//     //       <div id="caller">{callerName}</div>
//     //       <button onClick={acceptCallback ?? undefined}>accept</button>
//     //       <button onClick={refuseCallback ?? undefined}>refuse</button>
//     //     </div>
//     //   )}
//     //   <button onClick={invite}>invite</button>
//     // </div>
//   );
// };

// export default CallInvitation;
