/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useZegoCallFeatureContext } from '../../../contexts/ZegoCallContext';
import AnotherCallModel from '../videoCalling/AnotherCallModel';
import OfflineModel from '../videoCalling/offlineModel';
// import CallingRoomModel from '../videoCalling/CallingRoom';
import Box from '@mui/material/Box';
import RingingModel from '../videoCalling/RingingModel';

const zegoCallingFeature = () => {
  const {
    isBusy,
    call,
    isCallAccepted,
    outgoingCallDialogOpen,
    handleBusyClose,
    isModelAvailable,
    handleOutGoingCallCancel,
    handleModelOfflineClose
  } = useZegoCallFeatureContext(); 

  return (
    <>
      {call && !isCallAccepted && outgoingCallDialogOpen && <RingingModel open={true} onClose={handleOutGoingCallCancel} />}
      {call && isCallAccepted && <Box id="zego-room"></Box>}
      {isBusy && <AnotherCallModel onClose={handleBusyClose} open={isBusy} />}
      <OfflineModel open={!isModelAvailable} isModelAvailable={isModelAvailable} onClose={handleModelOfflineClose} />
    </>
  );
};

export default zegoCallingFeature;
