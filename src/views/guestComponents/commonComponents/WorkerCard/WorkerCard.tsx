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

      <SeconderContainerWorkerCard>
        <SubContainertWorkerCard>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <UINewTypography variant="newTitle" color="#ffff">
              Kat Winter
            </UINewTypography>
            <LiveIconWorkerCard>
              <FiberManualRecordIcon sx={{ width: '12px', height: '12px', marginTop: '8px' }} />
            </LiveIconWorkerCard>
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
    </MainWorkerCard>
  );
};

export default WorkerCard;
