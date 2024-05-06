import React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  FirstSubContainerImgWorkerCard,
  HeartIconWorkerCard,
  ImgWorkerCard,
  LiveIconWorkerCard,
  MainWorkerCard,
  SecondMainContainerWorkerCard,
  SecondSubContainerImgWorkerCard,
  SecondSubContainerWorkerCard,
  SeconderContainerWorkerCard,
  SubContainertWorkerCard
} from './WorkerCard.styled';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const WorkerCard = () => {
  return (
    <MainWorkerCard>
      <ImgWorkerCard
        style={{
          backgroundImage: `url('/images/workercards/workercard-img.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <HeartIconWorkerCard>
        <FavoriteBorderIcon />
      </HeartIconWorkerCard>

      <SeconderContainerWorkerCard>
        <SubContainertWorkerCard>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography variant="newTitle" color="#ffff">
              Kat Winter
            </Typography>
            <LiveIconWorkerCard>
              <FiberManualRecordIcon sx={{ width: '12px', height: '12px', marginTop: '8px' }} />
            </LiveIconWorkerCard>
            <FirstSubContainerImgWorkerCard src="/images/workercards/flag-img.png" />
          </Box>
          <SecondMainContainerWorkerCard>
            <SecondSubContainerWorkerCard>
              <Typography variant="SubtitleSmallMedium" color="#B7B5B9">
                24
              </Typography>
              <Divider orientation="vertical" flexItem sx={{ borderColor: '#B7B5B9' }} />
              <Typography variant="SubtitleSmallMedium" color="#B7B5B9">
                English, Spanish
              </Typography>
            </SecondSubContainerWorkerCard>
            <Box sx={{ display: 'flex', gap: 1, whiteSpace: 'nowrap' }}>
              <SecondSubContainerImgWorkerCard src="/images/workercards/dollar-img.png" />
              <Typography variant="captionLargeBold" color="#E9E8EB">
                20 credits/hr
              </Typography>
            </Box>
          </SecondMainContainerWorkerCard>
        </SubContainertWorkerCard>
      </SeconderContainerWorkerCard>
    </MainWorkerCard>
  );
};

export default WorkerCard;
