import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useRef, useState } from 'react';
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
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  DullCirclesEscort,
  DullCirclesEscort2,
  FirstSwiperBlurContainer,
  FirstSwiperInnerContainer,
  FirstSwiperMainContainer,
  SecSwiperSlidBoxContainer,
  SecondSwiperBlurContainer,
  SideBarBoxContainer,
  SideSwiperButton,
  SwiperContainer
} from './Escort.styled';
import { FormattedMessage } from 'react-intl';
import { WorkerPhotos } from 'views/protectedModelViews/verification/stepThree/uploadImage';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { CustomerDetailsService } from 'services/customerDetails/customerDetails.services';
import { TokenIdType } from 'views/protectedModelViews/verification';
import GuestLogin from 'views/auth/guestLogin';
import UIStyledDialog from 'components/UIComponents/UIStyledDialog';
import GuestForgetPasswordLink from 'views/auth/guestForgetPasswordLink';
import GuestSignup from 'views/auth/guestSignup';

export const EscortSlider = ({
  workerPhotos,
  modelId,
  token,
  handleCallInitiate
}: {
  workerPhotos: WorkerPhotos[];
  modelId: number;
  token: TokenIdType;
  handleCallInitiate: () => void;
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [liked, setLiked] = useState(false);
  const [open, setIsOpen] = useState(false);
  const [openLogin, setIsOpenLogin] = useState(false);
  const [openForgetPassLink, setOpenForgetPassLink] = useState(false);
  const swiperRef = useRef<SwiperRef | any>();

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
      if (token.token) {
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

  const handlePrevious = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handleSidebarImageClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <>
      <DullCirclesEscort />
      <DullCirclesEscort2 />
      <FirstSwiperMainContainer>
        <FirstSwiperInnerContainer>
          <Swiper
            ref={swiperRef}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Navigation, Thumbs, FreeMode]}
            slidesPerView={1}
            style={{ height: '100%' }}
          >
            {workerPhotos.map((imageSrc, index) => (
              <SwiperSlide key={index} style={{ paddingTop: 24, height: '100%' }}>
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
        </FirstSwiperInnerContainer>
        <SideBarBoxContainer>
          {workerPhotos.length >= 6 && (
            <SideSwiperButton variant="contained" onClick={handlePrevious}>
              <KeyboardArrowUpRoundedIcon sx={{ color: 'text.primary' }} />
            </SideSwiperButton>
          )}
          <SwiperContainer>
            <Swiper
              direction="vertical"
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setThumbsSwiper(swiper);
              }}
              spaceBetween={0}
              slidesPerView={4.5}
              loop={true}
              watchSlidesProgress={true}
              modules={[Navigation, Thumbs, FreeMode]}
              className="mySwiper"
            >
              {workerPhotos.map((imageSrc, index) => (
                <SecSwiperSlidBoxContainer
                  style={{ paddingTop: index === 0 ? '0px' : '12px' }}
                  key={index}
                  onClick={() => handleSidebarImageClick(index)}
                >
                  <EscortSwiperPhotoContainer image={imageSrc.link} isMain={false} isMobile={true} coordinates={imageSrc.cords ?? ''} />
                </SecSwiperSlidBoxContainer>
              ))}
            </Swiper>
          </SwiperContainer>
          {workerPhotos.length >= 6 && (
            <SideSwiperButton variant="contained" onClick={handleNext}>
              <KeyboardArrowDownRoundedIcon sx={{ color: 'text.primary' }} />
            </SideSwiperButton>
          )}
        </SideBarBoxContainer>
      </FirstSwiperMainContainer>
      <Box
        sx={{
          display: 'flex',
          gap: 1.5,
          mt: 3
        }}
      >
        <Box>
          <UIThemeShadowButton
            onClick={token.token ? handleCallInitiate : handleLoginOpen}
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

        <UIStyledDialog open={open} onClose={handleSignupClose} maxWidth="md" fullWidth>
          <GuestSignup onClose={handleSignupClose} onLoginOpen={handleLoginOpen} />
        </UIStyledDialog>
        <UIStyledDialog open={openLogin} onClose={handleLoginClose} maxWidth="md" fullWidth>
          <GuestLogin
            onClose={handleLoginClose}
            onSignupOpen={handleSignupOpen}
            onFogotPasswordLinkOpen={handleResetPasswordLinkOpen}
            image="/images/auth/auth-model.webp"
          />
        </UIStyledDialog>
        <UIStyledDialog open={openForgetPassLink} onClose={handleResetPasswordLinkClose} maxWidth="md" fullWidth>
          <GuestForgetPasswordLink onClose={handleResetPasswordLinkClose} onLoginOpen={handleLoginResetPasswordOpen} />
        </UIStyledDialog>
      </Box>
    </>
  );
};
