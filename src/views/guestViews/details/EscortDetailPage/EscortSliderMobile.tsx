import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Box from '@mui/material/Box';
import EscortSwiperPhotoContainer from './EscortSwiperPhotoContainer';
import { useState } from 'react';
import Image from 'next/image';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIStyledShadowButtonLike from 'components/UIComponents/UIStyledShadowButtonLike';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import { FormattedMessage } from 'react-intl';
import { WorkerPhotos } from 'views/protectedModelViews/verification/stepThree/uploadImage';
import { FirstSwiperBlurContainer, SecondSwiperBlurContainer, SwiperSlidBoxContainer } from './Escort.styled';
import UIStyledDialog from 'components/UIComponents/UIStyledDialog';
import GuestForgetPasswordLink from 'views/auth/guestForgetPasswordLink';
import { toast } from 'react-toastify';
import { CustomerDetailsService } from 'services/customerDetails/customerDetails.services';
import GuestLogin from 'views/auth/guestLogin';
import GuestSignup from 'views/auth/guestSignup';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { ErrorMessage } from 'constants/common.constants';
import StyleButtonShadowV2 from 'components/UIComponents/StyleLoadingButtonshadow';
import { sortExistingPhotos } from 'utils/photoUtils';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import EscortSwiperPhotoContainerSide from './EscortSwiperPhotoContainerSide';

const EscortSliderMobile = ({
  workerPhotos,
  modelId,
  token,
  handleCallInitiate,
  isCustomer,
  isLoading,
  guestData
}: {
  workerPhotos: WorkerPhotos[];
  modelId: number;
  token: TokenIdType;
  handleCallInitiate: () => void;
  isCustomer: boolean;
  isLoading: boolean;
  guestData: ModelDetailsResponse;
}) => {
  const isLg = useMediaQuery(theme.breakpoints.up('sm'));
  const isSm = useMediaQuery(theme.breakpoints.down(330));
  const [liked, setLiked] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const [open, setIsOpen] = useState(false);
  const [openLogin, setIsOpenLogin] = useState(false);
  const [openForgetPassLink, setOpenForgetPassLink] = useState(false);

  const sortedWorkerPhotos = workerPhotos.sort(sortExistingPhotos);

  const handleSignupOpen = () => {
    setIsOpen(true);
    setIsOpenLogin(false);
  };

  const handleSignupClose = () => {
    setIsOpen(false);
  };

  const handleLoginOpen = () => {
    setIsOpen(false);
    setIsOpenLogin(true);
  };

  const handleLoginResetPasswordOpen = () => {
    setOpenForgetPassLink(false);
    setIsOpenLogin(true);
  };

  const handleLoginClose = () => {
    setIsOpenLogin(false);
  };

  const handleResetPasswordLinkOpen = () => {
    setIsOpenLogin(false);
    setOpenForgetPassLink(true);
  };

  const handleResetPasswordLinkClose = () => {
    setOpenForgetPassLink(false);
  };
  const handleLikeClick = async () => {
    try {
      if (!isCustomer) {
        setIsOpenLogin(true);
      } else if (token.token) {
        const data = await CustomerDetailsService.favouritePutId(modelId, token?.token);
        if (data?.code === 200) {
          setLiked(true);
        } else {
          toast.error(ErrorMessage);
        }
      } else {
        setIsOpenLogin(true);
      }
    } catch (erro) {
      toast.error(ErrorMessage);
    }
  };

  return (
    <>
      <Box>
        <Box sx={{ width: '100%', cursor: 'pointer' }}>
          <Swiper thumbs={{ swiper: thumbsSwiper }} modules={[Navigation, Thumbs, FreeMode]} slidesPerView={1}>
            {sortedWorkerPhotos?.map((imageSrc, index) => (
              <SwiperSlide key={index} style={{ paddingTop: 20 }}>
                <FirstSwiperBlurContainer>
                  <SecondSwiperBlurContainer
                    sx={{
                      backgroundImage: `url(${imageSrc?.link})`
                    }}
                  />
                  <EscortSwiperPhotoContainer
                    imageSrcVideo={imageSrc?.file_type}
                    image={imageSrc?.link}
                    isMain={true}
                    isMobile={false}
                    coordinates={imageSrc?.cords ?? ''}
                  />
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
            {sortedWorkerPhotos?.map((imageSrc, index) => (
              <SwiperSlidBoxContainer key={index}>
                <EscortSwiperPhotoContainerSide
                  imageSrcVideo={imageSrc?.file_type}
                  image={imageSrc?.link}
                  isMain={false}
                  isMobile={true}
                  coordinates={imageSrc?.cords ?? ''}
                />
              </SwiperSlidBoxContainer>
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
          <StyleButtonShadowV2
            loading={isLoading}
            onClick={isCustomer ? handleCallInitiate : handleLoginOpen}
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
          </StyleButtonShadowV2>
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
            {liked || guestData?.favourite === 1 ? <FavoriteIcon sx={{ color: '#FF48B3' }} /> : <FavoriteBorderIcon />}
          </UIStyledShadowButtonLike>
        </Box>
      </Box>
      <UIStyledDialog open={open} onClose={handleSignupClose} maxWidth="md" fullWidth>
        <GuestSignup onClose={handleSignupClose} onLoginOpen={handleLoginOpen} />
      </UIStyledDialog>
      <UIStyledDialog open={openLogin} onClose={handleLoginClose} maxWidth="md" fullWidth>
        <GuestLogin
          onClose={handleLoginClose}
          onSignupOpen={handleSignupOpen}
          onFogotPasswordLinkOpen={handleResetPasswordLinkOpen}
          image="/images/auth/auth-model1.webp"
        />
      </UIStyledDialog>
      <UIStyledDialog open={openForgetPassLink} onClose={handleResetPasswordLinkClose} maxWidth="md" fullWidth>
        <GuestForgetPasswordLink onClose={handleResetPasswordLinkClose} onLoginOpen={handleLoginResetPasswordOpen} />
      </UIStyledDialog>
    </>
  );
};

export default EscortSliderMobile;
