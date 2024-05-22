import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
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
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Video from 'yet-another-react-lightbox/plugins/video';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import Image from 'next/image';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIStyledShadowButtonLike from 'components/UIComponents/UIStyledShadowButtonLike';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import { FormattedMessage } from 'react-intl';

const EscortSliderMobile = () => {
  const isLg = useMediaQuery(theme.breakpoints.up('sm'));
  const isSm = useMediaQuery(theme.breakpoints.down(330));
  const [advancedExampleOpen, setAdvancedExampleOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  const workerPhotos = [
    { photo: '/images/workerImageSlider/swiper01.png', type: 'type1', isHide: false, isFavorite: 1, cords: '1,2' },
    { photo: '/images/workerImageSlider/swiper01.png', type: 'type2', isHide: false, isFavorite: 1, cords: '3,4' },
    { photo: '/images/workerImageSlider/swiper01.png', type: 'type2', isHide: false, isFavorite: 1, cords: '5,6' },
    { photo: '/images/workerImageSlider/swiper01.png', type: 'type2', isHide: false, isFavorite: 1, cords: '7,8' }
  ];

  const handleOpenImage = (index: any) => {
    setCurrentIndex(index);
    setAdvancedExampleOpen(true);
  };

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <>
      <Box>
        <Box sx={{ width: '100%', cursor: 'pointer' }}>
          <Swiper modules={[Navigation, Thumbs, FreeMode]} slidesPerView={1}>
            {workerPhotos.slice(0, 4).map((imageSrc, index) => (
              <SwiperSlide key={index} style={{ paddingTop: 20 }}>
                <Box onClick={() => handleOpenImage(index)}>
                  <EscortSwiperPhotoContainer image={imageSrc.photo} isMain={true} isMobile={false} coordinates={imageSrc.cords ?? ''} />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <Box
          sx={{
            height: '100%',
            width: '100%',
            cursor: 'pointer'
          }}
        >
          <Swiper spaceBetween={6} slidesPerView={3} freeMode={true} watchSlidesProgress={true} modules={[Navigation, Thumbs, FreeMode]}>
            {workerPhotos.slice(0, 4).map((imageSrc, index) => (
              <SwiperSlide
                onClick={() => handleOpenImage(index + 1)}
                style={{ paddingTop: 8, width: '100%', minWidth: '86px' }}
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
        <Box sx={{ width: '100%' }}>
          <UIThemeShadowButton
            sx={{
              padding: 0,
              minWidth: isLg ? '660px' : isSm ? '200px' : '271px',
              width: '100%',
              '&.MuiButtonBase-root': { height: { xs: '40px', sm: '44px' } }
            }}
            fullWidth
            variant="contained"
          >
            <Box display="flex" alignItems="center" gap="10px">
              <Image src="/images/workercards/video-call.svg" alt="video-call" height={20} width={20} />
              <UINewTypography color="common.white" variant="bodySemiBold" sx={{ textWrap: 'no-wrap' }}>
                <FormattedMessage id="StartVideoCall" />
              </UINewTypography>
            </Box>
          </UIThemeShadowButton>
        </Box>
        <Box sx={{ width: '100%' }}>
          <UIStyledShadowButtonLike
            sx={{
              padding: '10px',
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

export default EscortSliderMobile;
