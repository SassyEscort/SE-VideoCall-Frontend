import React from 'react';
import {
  CreditContainer,
  FavoriteBorderIconContainer,
  FirstSubContainerImgWorkerCard,
  HeartIconWorkerCard,
  ImgWorkerCard,
  LiveIconSecBoxWorkerCard,
  LiveIconWorkerCard,
  MainWorkerCard,
  NameCardContainer,
  ProfileCardContainer,
  SecondMainContainerWorkerCard,
  SecondSubContainerImgWorkerCard,
  SecondSubContainerWorkerCard,
  SeconderContainerWorkerCard,
  SubContainertWorkerCard,
  WorkerCardContainer
} from './WorkerCard.styled';
import Divider from '@mui/material/Divider';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';

const WorkerCard = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(425));

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
        <FavoriteBorderIconContainer />
      </HeartIconWorkerCard>

      <WorkerCardContainer>
        <SeconderContainerWorkerCard>
          <SubContainertWorkerCard>
            <ProfileCardContainer>
              <NameCardContainer>
                <UINewTypography variant="newTitle" color="#ffff">
                  Kat Winter
                </UINewTypography>
                <LiveIconWorkerCard>
                  <LiveIconSecBoxWorkerCard></LiveIconSecBoxWorkerCard>
                </LiveIconWorkerCard>
                <FirstSubContainerImgWorkerCard src="/images/workercards/flag-img.png" />
              </NameCardContainer>
              {!isMobile && (
                <CreditContainer>
                  <SecondSubContainerImgWorkerCard src="/images/workercards/dollar-img.png" />
                  <UINewTypography variant="captionLargeBold" color="#E9E8EB">
                    20 credits/hr
                  </UINewTypography>
                </CreditContainer>
              )}
            </ProfileCardContainer>
            <SecondMainContainerWorkerCard>
              <SecondSubContainerWorkerCard>
                <UINewTypography variant="SubtitleSmallMedium" color="#B7B5B9" sx={{ lineHeight: '120%' }}>
                  24
                </UINewTypography>
                <Divider orientation="vertical" flexItem sx={{ borderColor: '#B7B5B9', lineHeight: '120%' }} />
                <UINewTypography variant="SubtitleSmallMedium" color="#B7B5B9" sx={{ whiteSpace: isMobile ? 'normal' : 'nowrap' }}>
                  English, Spanish
                </UINewTypography>
              </SecondSubContainerWorkerCard>
            </SecondMainContainerWorkerCard>
            {isMobile && (
              <CreditContainer sx={{ marginTop: isSmallScreen ? 2.5 : 1 }}>
                <SecondSubContainerImgWorkerCard src="/images/workercards/dollar-img.png" />
                <UINewTypography variant="captionLargeBold" color="#E9E8EB">
                  20 credits/hr
                </UINewTypography>
              </CreditContainer>
            )}
          </SubContainertWorkerCard>
        </SeconderContainerWorkerCard>
      </WorkerCardContainer>
    </MainWorkerCard>
  );
};

export default WorkerCard;
