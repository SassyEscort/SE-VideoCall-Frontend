import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  FirstSubContainerImgWorkerCard,
  HeartIconWorkerCard,
  ImgWorkerCard,
  LiveIconFirstBoxWorkerCard,
  LiveIconSecBoxWorkerCard,
  MainWorkerCard,
  SecondMainContainerWorkerCard,
  SecondSubContainerImgWorkerCard,
  SecondSubContainerWorkerCard,
  SeconderContainerWorkerCard,
  SubContainertWorkerCard
} from './WorkerCard.styled';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import UINewTypography from 'components/UIComponents/UINewTypography';

const WorkerCard = () => {
  return (
    <MainWorkerCard>
      <ImgWorkerCard
        style={{
          backgroundImage: `url('/images/workercards/workercard-img.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <HeartIconWorkerCard>
        <FavoriteBorderIcon sx={{ width: { xs: '20px', sm: '24px' }, height: { xs: '20px', sm: '24px' } }} />
      </HeartIconWorkerCard>

      <Box sx={{ display: 'flex', width: '100%', height: '100%', alignItems: 'end', maxWidth: '300px' }}>
        <SeconderContainerWorkerCard>
          <SubContainertWorkerCard>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <UINewTypography variant="newTitle" color="#ffff">
                Kat Winter
              </UINewTypography>
              <LiveIconFirstBoxWorkerCard>
                <LiveIconSecBoxWorkerCard></LiveIconSecBoxWorkerCard>
              </LiveIconFirstBoxWorkerCard>
              <FirstSubContainerImgWorkerCard src="/images/workercards/flag-img.png" />
            </Box>
            <SecondMainContainerWorkerCard>
              <SecondSubContainerWorkerCard>
                <UINewTypography variant="SubtitleSmallMedium" color="#B7B5B9">
                  24
                </UINewTypography>
                <Divider orientation="vertical" flexItem sx={{ borderColor: '#B7B5B9' }} />
                <UINewTypography variant="SubtitleSmallMedium" color="#B7B5B9">
                  English, Spanish
                </UINewTypography>
              </SecondSubContainerWorkerCard>
              <Box sx={{ display: 'flex', gap: 1, whiteSpace: 'nowrap' }}>
                <SecondSubContainerImgWorkerCard src="/images/workercards/dollar-img.png" />
                <UINewTypography variant="captionLargeBold" color="#E9E8EB">
                  20 credits/hr
                </UINewTypography>
              </Box>
            </SecondMainContainerWorkerCard>
          </SubContainertWorkerCard>
        </SeconderContainerWorkerCard>
      </Box>
    </MainWorkerCard>
  );
};

export default WorkerCard;
