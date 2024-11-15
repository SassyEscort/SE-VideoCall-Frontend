/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useZegoCallFeatureContext } from '../../../contexts/ZegoCallContext';
import AnotherCallModel from '../videoCalling/AnotherCallModel';
import OfflineModel from '../videoCalling/offlineModel';
// import CallingRoomModel from '../videoCalling/CallingRoom';
import Box from '@mui/material/Box';

const zegoCallingFeature = () => {
  const { isBusy, call, isCallAccepted, handleBusyClose, isModelAvailable, handleModelOfflineClose } = useZegoCallFeatureContext();

  return (
    <>
      {call && isCallAccepted && <Box id="zego-room"></Box>}
      {isBusy && <AnotherCallModel onClose={handleBusyClose} open={isBusy} />}
      <OfflineModel open={!isModelAvailable} isModelAvailable={isModelAvailable} onClose={handleModelOfflineClose} />
    </>
  );
};

export default zegoCallingFeature;
