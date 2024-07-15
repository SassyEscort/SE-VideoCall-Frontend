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
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { useCallFeatureContext } from '../../../../../context/CallFeatureContext';

const VideoCalling = ({ showHeart, showAnother }: { showHeart: Boolean; showAnother: Boolean }) => {
  const { modelName, modelPhoto } = useCallFeatureContext();

  return (
    <VideoCallingCardMainContainer>
      <ImgBoxContainer src={modelPhoto} />
      {showHeart && (
        <HeartBoxContainer>
          <FavoriteBorderRoundedIcon />
        </HeartBoxContainer>
      )}
      <SecondBoxContainer>
        <TextContainer color="text.secondary">{modelName}</TextContainer>
        {showAnother ? (
          <LiveIconWorkerCardSec>
            <LiveIconSecBoxWorkerCardSec />
          </LiveIconWorkerCardSec>
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
