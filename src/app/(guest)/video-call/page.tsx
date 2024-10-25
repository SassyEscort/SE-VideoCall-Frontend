'use client';
import React, { useEffect, useRef } from 'react';
import { ZegoInvitationType, ZegoUIKitPrebuilt, ZegoUser } from '@zegocloud/zego-uikit-prebuilt';

function randomID(len = 5) {
  let result = '';
  const chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP';
  const maxPos = chars.length;
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(url = '') {
  if (typeof window === 'undefined') return new URLSearchParams();
  const urlStr = window.location.href.split('?')[1];
  return new URLSearchParams(urlStr);
}

const VideoCall = () => {
  const roomID = getUrlParams().get('roomID') || randomID();
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    const myMeeting = async () => {
      const appID = 1140452996;
      const serverSecret = process.env.NEXT_PUBLIC_SECRET_KEY!;

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, randomID(), randomID());

      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
        container: containerRef.current,
        sharedLinks: [
          {
            name: 'Personal link',
            url: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}`
          }
        ],
        turnOnMicrophoneWhenJoining: true,
        turnOnCameraWhenJoining: true,
        showMyCameraToggleButton: true,
        showMyMicrophoneToggleButton: true,
        showAudioVideoSettingsButton: true,
        showScreenSharingButton: true,
        showTextChat: true,
        showUserList: false,
        maxUsers: 2,
        layout: 'Auto',
        showLayoutButton: true,
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
          config: {
            role: ZegoUIKitPrebuilt.Host || 'Host'
          }
        },
        onJoinRoom: () => {
          // Get the roomID
          const roomID = zp.getRoomID();
          // Store it in sessionStorage
          sessionStorage.setItem('roomID', roomID);
        }
      });
      zp.setCallInvitationConfig({
        // The callee will receive the notification through this callback when receiving a call invitation.
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
    };

    myMeeting();
  }, [roomID]);

  return <div ref={containerRef} style={{ width: '100vw', height: '100vh' }}></div>;
};

export default VideoCall;
