// CallContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ZegoUIKitPrebuilt, ZegoInvitationType } from '@zegocloud/zego-uikit-prebuilt';
import { ZIM } from 'zego-zim-web';
import { randomID } from 'utils/videoCall';

type CallFeatureContextProps = {
  call: ZegoUIKitPrebuilt | null;
  handleCallInitiate: (callType: ZegoInvitationType) => Promise<void>;
  handleCancelCall: () => void;
  userName: string;
  userID: string;
  inviteeID: string;
  setInviteeID: (id: string) => void;
  isCallAccepted: boolean;
  // Add more properties and methods as required
};

const CallContext = createContext<CallFeatureContextProps | undefined>(undefined);

export const CallProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [call, setCall] = useState<ZegoUIKitPrebuilt | null>(null);
  const [inviteeID, setInviteeID] = useState<string>('');
  const [userID, setUserID] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const appID = 1140452996;
  const serverSecret = process.env.NEXT_PUBLIC_SECRET_KEY!;

  useEffect(() => {
    const initCall = async () => {
      const roomID = randomID();
      const id = '408';
      const name = `user_${id}`;
      setUserID(id);
      setUserName(name);

      const token = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, id, name);
      const KitToken = ZegoUIKitPrebuilt.generateKitTokenForProduction(appID, token, roomID, id, name);
      const callInstance = ZegoUIKitPrebuilt.create(KitToken);
      callInstance.addPlugins({ ZIM });

      setCall(callInstance);
    };

    initCall();
  }, []);

  const handleCallInitiate = async (callType: ZegoInvitationType) => {
    if (!inviteeID) {
      alert('User ID cannot be empty!');
      return;
    }

    const users = inviteeID.split(',').map((id) => ({
      userID: id.trim(),
      userName: `user_${id}`
    }));

    try {
      const response = await call?.sendCallInvitation({
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

  const handleCancelCall = () => {
    console.log('Call canceled');
    // Logic to cancel the call
  };

  return (
    <CallContext.Provider
      value={{
        call,
        handleCallInitiate,
        handleCancelCall,
        userName,
        userID,
        inviteeID,
        setInviteeID,
        isCallAccepted: false // Update with logic as needed
      }}
    >
      {children}
    </CallContext.Provider>
  );
};

export const useCallFeatureContext = (): CallFeatureContextProps => {
  const context = useContext(CallContext);
  if (!context) {
    throw new Error('useCallFeatureContext must be used within a CallProvider');
  }
  return context;
};
