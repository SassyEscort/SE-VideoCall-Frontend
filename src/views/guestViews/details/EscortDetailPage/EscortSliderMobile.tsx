import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
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
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import Image from 'next/image';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIStyledShadowButtonLike from 'components/UIComponents/UIStyledShadowButtonLike';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import { FormattedMessage } from 'react-intl';
import { WorkerPhotos } from 'views/protectedModelViews/verification/stepThree/uploadImage';
import { FirstSwiperBlurContainer, SecondSwiperBlurContainer } from './Escort.styled';

const EscortSliderMobile = ({ workerPhotos }: { workerPhotos: WorkerPhotos[] }) => {
  const isLg = useMediaQuery(theme.breakpoints.up('sm'));
  const isSm = useMediaQuery(theme.breakpoints.down(330));
  const [liked, setLiked] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <>
      <Box>
        <Box sx={{ width: '100%', cursor: 'pointer' }}>
          <Swiper thumbs={{ swiper: thumbsSwiper }} modules={[Navigation, Thumbs, FreeMode]} slidesPerView={1}>
            {workerPhotos.map((imageSrc, index) => (
              <SwiperSlide key={index} style={{ paddingTop: 20 }}>
                <FirstSwiperBlurContainer>
                  <SecondSwiperBlurContainer
                    sx={{
                      backgroundImage: `url(${imageSrc.link})`
                    }}
                  />
                  <EscortSwiperPhotoContainer image={imageSrc.link} isMain={true} isMobile={false} coordinates={imageSrc.cords ?? ''} />
                </FirstSwiperBlurContainer>
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
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={6}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[Navigation, Thumbs, FreeMode]}
          >
            {workerPhotos.map((imageSrc, index) => (
              <SwiperSlide style={{ paddingTop: 8, width: '100%', minWidth: '86px' }} key={index}>
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
    </>
  );
};

export default EscortSliderMobile;
