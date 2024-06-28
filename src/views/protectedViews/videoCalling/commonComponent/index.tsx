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

const VideoCalling = ({ showHeart }: { showHeart: Boolean }) => {
  return (
    <VideoCallingCardMainContainer>
      <ImgBoxContainer src="/images/workercards/workercard-img.jpeg" />
      {showHeart && (
        <HeartBoxContainer>
          <FavoriteBorderRoundedIcon />
        </HeartBoxContainer>
      )}
      <SecondBoxContainer>
        <TextContainer color="text.secondary">Kat Winter</TextContainer>
        <LiveIconWorkerCard>
          <LiveIconSecBoxWorkerCard sx={{ backgroundColor: 'success.100' }} />
        </LiveIconWorkerCard>
      </SecondBoxContainer>
    </VideoCallingCardMainContainer>
  );
};

export default VideoCalling;
