// 'use client';
// import React, { useEffect, useRef } from 'react';
// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

// function randomID(len = 5) {
//   let result = '';
//   const chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP';
//   const maxPos = chars.length;
//   for (let i = 0; i < len; i++) {
//     result += chars.charAt(Math.floor(Math.random() * maxPos));
//   }
//   return result;
// }

// export function getUrlParams(url = '') {
//   if (typeof window === 'undefined') return new URLSearchParams();
//   const urlStr = window.location.href.split('?')[1];
//   return new URLSearchParams(urlStr);
// }

// export default function App() {
//   const roomID = getUrlParams().get('roomID') || randomID();
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const myMeeting = async () => {
//       const appID = 1140452996;
//       const serverSecret = '454c12e6676c1009678083d8e64063c2';
//       const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, randomID(), randomID());

//       const zp = ZegoUIKitPrebuilt.create(kitToken);

//       zp.joinRoom({
//         container: containerRef.current,
//         sharedLinks: [
//           {
//             name: 'Personal link',
//             url: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}`
//           }
//         ],
//         turnOnMicrophoneWhenJoining: true,
//         turnOnCameraWhenJoining: true,
//         showMyCameraToggleButton: true,
//         showMyMicrophoneToggleButton: true,
//         showAudioVideoSettingsButton: true,
//         showScreenSharingButton: false,
//         showTextChat: false,
//         showUserList: false,
//         maxUsers: 2,
//         layout: 'Auto',
//         showLayoutButton: false,
//         scenario: {
//           mode: ZegoUIKitPrebuilt.OneONoneCall,
//           config: {
//             role: ZegoUIKitPrebuilt?.LiveRole?.Host || 'Host'
//           }
//         }
//       });
//     };

//     myMeeting();
//   }, [roomID]);

//   return <div ref={containerRef} style={{ width: '100vw', height: '100vh' }}></div>;
// }
