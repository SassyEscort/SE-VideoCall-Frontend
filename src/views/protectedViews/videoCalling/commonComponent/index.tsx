import React from 'react';
import { LiveIconSecBoxWorkerCard, LiveIconWorkerCard } from 'views/guestViews/commonComponents/WorkerCard/WorkerCard.styled';
import {
  HeartBoxContainer,
  ImgBoxContainer,
  SecondBoxContainer,
  TextContainer,
  VideoCallingCardMainContainer
} from './videoCallingCard.styled';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { useCallFeatureContext } from '../../../../../context/CallFeatureContext';

const VideoCalling = ({ showHeart }: { showHeart: Boolean }) => {
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
        <LiveIconWorkerCard>
          <LiveIconSecBoxWorkerCard sx={{ backgroundColor: 'success.100' }} />
        </LiveIconWorkerCard>
      </SecondBoxContainer>
    </VideoCallingCardMainContainer>
  );
};

export default VideoCalling;
