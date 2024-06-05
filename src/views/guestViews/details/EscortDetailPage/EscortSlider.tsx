import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useState } from 'react';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox';
import Box from '@mui/material/Box';
import EscortSwiperPhotoContainer from './EscortSwiperPhotoContainer';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import UINewTypography from 'components/UIComponents/UINewTypography';
import Image from 'next/image';
import UIStyledShadowButtonLike from 'components/UIComponents/UIStyledShadowButtonLike';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { DullCirclesEscort, DullCirclesEscort2 } from './Escort.styled';
import { FormattedMessage } from 'react-intl';
import { WorkerPhotos } from 'views/protectedModelViews/verification/stepThree/uploadImage';

export const EscortSlider = ({ workerPhotos }: { workerPhotos: WorkerPhotos[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <>
      <DullCirclesEscort />
      <DullCirclesEscort2 />
      <Box sx={{ display: 'flex', gap: '12px' }}>
        <Box sx={{ maxWidth: '1084px', width: '100%', cursor: 'pointer' }}>
          <Swiper thumbs={{ swiper: thumbsSwiper }} modules={[Navigation, Thumbs, FreeMode]} slidesPerView={1}>
            {workerPhotos.slice(0, 4).map((imageSrc, index) => (
              <SwiperSlide key={index} style={{ paddingTop: 24 }}>
                <Box>
                  <EscortSwiperPhotoContainer image={imageSrc.link} isMain={true} isMobile={false} coordinates={imageSrc.cords ?? ''} />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <Box
          sx={{
            maxWidth: '148px',
            height: '100%',
            width: '100%',
            cursor: 'pointer',
            '& .swiper-wrapper': { display: 'flex', flexDirection: 'column' }
          }}
        >
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={12}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[Navigation, Thumbs, FreeMode]}
          >
            {workerPhotos.slice(0, 4).map((imageSrc, index) => (
              <SwiperSlide style={{ paddingTop: index === 0 ? '24px' : '12px', width: '100%', minWidth: '148px' }} key={index}>
                <EscortSwiperPhotoContainer image={imageSrc.link} isMain={false} isMobile={true} coordinates={imageSrc.cords ?? ''} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: 1.5,
          mt: 3
        }}
      >
        <Box>
          <UIThemeShadowButton
            sx={{
              padding: 0,
              minWidth: '1084px',
              width: '100%',

              '&.MuiButtonBase-root': { height: { xs: '40px', sm: '44px' } }
            }}
            fullWidth
            variant="contained"
          >
            <Box display="flex" alignItems="center" gap="10px">
              <Image src="/images/workercards/video-call.svg" alt="video-call" height={24} width={24} />
              <UINewTypography color="common.white" variant="bodySemiBold" sx={{ textWrap: 'no-wrap', lineHeight: '120%' }}>
                <FormattedMessage id="StartVideoCall" />
              </UINewTypography>
            </Box>
          </UIThemeShadowButton>
        </Box>
        <Box>
          <UIStyledShadowButtonLike
            sx={{
              padding: '10px',
              minWidth: '148px',
              width: '100%',
              '&.MuiButtonBase-root': { height: { xs: '40px', sm: '44px' } }
            }}
            onClick={handleLikeClick}
          >
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </UIStyledShadowButtonLike>
        </Box>
      </Box>
    </>
  );
};
