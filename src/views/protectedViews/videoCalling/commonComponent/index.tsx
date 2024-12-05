'use client';
import React from 'react';
import {
  LiveIconSecBoxWorkerCard,
  LiveIconSecBoxWorkerCardSec,
  LiveIconWorkerCard,
  LiveIconWorkerCardSec
} from 'views/guestViews/commonComponents/WorkerCard/WorkerCard.styled';
import {
  HeartBoxContainer,
  ImgBoxContainer,
  ImgMainBox,
  SecondBoxContainer,
  TextContainer,
  VideoCallingCardMainContainer
} from './videoCallingCard.styled';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
// import { useVideoCallContext } from 'contexts/videoCallContext';
// import { useZegoCallFeatureContext } from 'contexts/ZegoCallContext';
import { useCallFeatureContext } from 'contexts/CallFeatureContext';

const VideoCalling = ({
  showHeart,
  showAnother,
  isModelAvailable
}: {
  showHeart: Boolean;
  showAnother: Boolean;
  isModelAvailable: number;
}) => {
  // const { handelIsFavouriteModelChange } = useZegoCallFeatureContext();
  // const { modelName, modelPhoto, isFavouriteModel, modelUsername } = useVideoCallContext();
  const { modelName, modelPhoto, isFavouriteModel, modelUsername, handelIsFavouriteModelChange } = useCallFeatureContext();

  const handleClickFaviourite = () => {
    handelIsFavouriteModelChange(1);
  };

  return (
    <VideoCallingCardMainContainer>
      <ImgMainBox>
        <ImgBoxContainer src={modelPhoto} alt={modelUsername} />
      </ImgMainBox>
      {showHeart && (
        <HeartBoxContainer>
          {Boolean(isFavouriteModel) ? (
            <FavoriteRoundedIcon sx={{ color: 'error.main' }} />
          ) : (
            <FavoriteRoundedIcon onClick={handleClickFaviourite} />
          )}
        </HeartBoxContainer>
      )}
      <SecondBoxContainer>
        <TextContainer color="text.secondary">{modelName}</TextContainer>
        {showAnother && isModelAvailable ? (
          <LiveIconWorkerCardSec>
            <LiveIconSecBoxWorkerCardSec />
          </LiveIconWorkerCardSec>
        ) : !isModelAvailable ? (
          <></>
        ) : (
          <LiveIconWorkerCard>
            <LiveIconSecBoxWorkerCard />
          </LiveIconWorkerCard>
        )}
      </SecondBoxContainer>
    </VideoCallingCardMainContainer>
  );
};

export default VideoCalling;
