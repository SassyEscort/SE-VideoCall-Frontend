/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useZegoCallFeatureContext } from '../../../../context/ZegoCallFeatureContext';
import AnotherCallModel from '../videoCalling/AnotherCallModel';
import OfflineModel from '../videoCalling/offlineModel';

const zegoCallingFeature = () => {
  const { isBusy, handleBusyClose, isModelAvailable, handleModelOfflineClose } = useZegoCallFeatureContext();

  return (
    <>
      {isBusy && <AnotherCallModel onClose={handleBusyClose} open={isBusy} />}
      <OfflineModel open={!isModelAvailable} isModelAvailable={isModelAvailable} onClose={handleModelOfflineClose} />
    </>
  );
};

export default zegoCallingFeature;
