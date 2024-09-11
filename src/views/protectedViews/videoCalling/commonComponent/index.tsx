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
  SecondBoxContainer,
  TextContainer,
  VideoCallingCardMainContainer
} from './videoCallingCard.styled';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { useCallFeatureContext } from '../../../../../context/CallFeatureContext';

const VideoCalling = ({
  showHeart,
  showAnother,
  isModelAvailable
}: {
  showHeart: Boolean;
  showAnother: Boolean;
  isModelAvailable: number;
}) => {
  const { modelName, modelPhoto, isFavouriteModel, handelIsFavouriteModelChange } = useCallFeatureContext();

  const handleClickFaviourite = () => {
    handelIsFavouriteModelChange(1);
  };

  return (
    <VideoCallingCardMainContainer>
      <ImgBoxContainer src={modelPhoto} />
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
