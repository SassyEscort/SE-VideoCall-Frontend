import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Video from 'yet-another-react-lightbox/plugins/video';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
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

const workerPhotos = [
  { photo: '/images/workerImageSlider/swiper01.png', type: 'type1', isHide: false, isFavorite: 1, cords: '1,2' },
  { photo: '/images/workerImageSlider/swiper01.png', type: 'type2', isHide: false, isFavorite: 1, cords: '3,4' },
  { photo: '/images/workerImageSlider/swiper01.png', type: 'type2', isHide: false, isFavorite: 1, cords: '5,6' },
  { photo: '/images/workerImageSlider/swiper01.png', type: 'type2', isHide: false, isFavorite: 1, cords: '7,8' }
];

export const EscortSlider = () => {
  const [advancedExampleOpen, setAdvancedExampleOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleOpenImage = (index: any) => {
    setCurrentIndex(index);
    setAdvancedExampleOpen(true);
  };

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <>
      <DullCirclesEscort />
      <DullCirclesEscort2 />
      <Box sx={{ display: 'flex', gap: '12px' }}>
        <Box sx={{ maxWidth: '1084px', width: '100%', cursor: 'pointer' }}>
          <Swiper modules={[Navigation, Thumbs, FreeMode]} slidesPerView={1}>
            {workerPhotos.slice(0, 4).map((imageSrc, index) => (
              <SwiperSlide key={index} style={{ paddingTop: 24 }}>
                <Box onClick={() => handleOpenImage(index)}>
                  <EscortSwiperPhotoContainer image={imageSrc.photo} isMain={true} isMobile={false} coordinates={imageSrc.cords ?? ''} />
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
          <Swiper spaceBetween={12} slidesPerView={3} freeMode={true} watchSlidesProgress={true} modules={[Navigation, Thumbs, FreeMode]}>
            {workerPhotos.slice(0, 4).map((imageSrc, index) => (
              <SwiperSlide
                onClick={() => handleOpenImage(index + 1)}
                style={{ paddingTop: index === 0 ? '24px' : '12px', width: '100%', minWidth: '148px' }}
                key={index}
              >
                <EscortSwiperPhotoContainer image={imageSrc.photo} isMain={false} isMobile={true} coordinates={imageSrc.cords ?? ''} />
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
                Start Video Call
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
      <Lightbox
        open={advancedExampleOpen}
        close={() => setAdvancedExampleOpen(false)}
        index={currentIndex}
        slides={workerPhotos.map((imageSrc) => ({
          src: `${imageSrc.photo}`
        }))}
        plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
      />
    </>
  );
};
