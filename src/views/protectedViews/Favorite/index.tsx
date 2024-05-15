import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import UINewTypography from 'components/UIComponents/UINewTypography';
import {
  FavoritesText,
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
} from './Favorites.styled';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import Image from 'next/image';

const Favorites = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', gap: 6, flexDirection: 'column' }}>
        <FavoritesText>
          <UINewTypography variant="h2" color="text.secondary">
            Favourites
          </UINewTypography>
          <UINewTypography variant="bodyUltraLarge" color="text.primary">
            2 models
          </UINewTypography>
        </FavoritesText>
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
                    <UINewTypography variant="SubtitleSmallMedium" color="#B7B5B9" sx={{ lineHeight: '120%' }}>
                      24
                    </UINewTypography>
                    <Divider orientation="vertical" flexItem sx={{ borderColor: '#B7B5B9', lineHeight: '120%' }} />
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
      </Box>
      <Box sx={{ width: '100%', maxWidth: { xs: '175px', sm: '300px' } }}>
        <UIThemeShadowButton
          sx={{
            padding: 0,
            maxWidth: '100%',
            '&.MuiButtonBase-root': { height: { xs: '40px', sm: '44px' } }
          }}
          fullWidth
          variant="contained"
        >
          <Box display="flex" alignItems="center" gap="10px">
            <Image src="/images/workercards/video-call.svg" alt="video-call" height={24} width={24} />
            <UINewTypography color="common.white" variant="bodySemiBold" sx={{ textWrap: 'no-wrap' }}>
              Start Video Call
            </UINewTypography>
          </Box>
        </UIThemeShadowButton>
      </Box>
    </Box>
  );
};

export default Favorites;
