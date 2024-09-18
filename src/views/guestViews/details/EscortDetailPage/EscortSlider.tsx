import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { FreeMode, Navigation, Thumbs, Mousewheel } from 'swiper/modules';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Box from '@mui/material/Box';
import EscortSwiperPhotoContainer from './EscortSwiperPhotoContainer';
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
import StyleButtonShadowV2 from 'components/UIComponents/StyleLoadingButtonshadow';
import { sortExistingPhotos } from 'utils/photoUtils';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import EscortSwiperPhotoContainerSide from './EscortSwiperPhotoContainerSide';
import { usePathname } from 'next/navigation';
import { gaEventTrigger } from 'utils/analytics';
import { useCallFeatureContext } from '../../../../../context/CallFeatureContext';
import GuestFreeCreditsSignup from 'views/auth/guestFreeCreditsSignup';

export const EscortSlider = ({
  workerPhotos,
  modelId,
  token,
  handleCallInitiate,
  isCustomer,
  isLoading,
  guestData,
  isFreeCreditAvailable
}: {
  workerPhotos: WorkerPhotos[];
  modelId: number;
  token: TokenIdType;
  handleCallInitiate: () => void;
  isCustomer: boolean;
  isLoading: boolean;
  guestData: ModelDetailsResponse;
  isFreeCreditAvailable: number;
}) => {
  const { user } = useCallFeatureContext();
  const path = usePathname();
  const userName = path.split('/')[2];
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [liked, setLiked] = useState(false);
  const [open, setIsOpen] = useState(false);
  const [openLogin, setIsOpenLogin] = useState(false);
  const [openForgetPassLink, setOpenForgetPassLink] = useState(false);
  const [freeSignupOpen, setFreeSignupOpen] = useState(false);

  const swiperRef = useRef<SwiperRef | any>();

  const sortedWorkerPhotos = workerPhotos.sort(sortExistingPhotos);
  const customerData = JSON.parse(user || '{}');

  const customerInfo = {
    email: encodeURIComponent(customerData?.customer_email ?? ''),
    name: customerData?.customer_name,
    username: customerData?.customer_user_name,
    model_username: userName
  };

  const handleSignupOpen = () => {
    setIsOpen(true);
    setIsOpenLogin(false);
    gaEventTrigger('Signup_Button_clicked', { source: 'start_video_call', category: 'Button' });
  };

  const handleSignupClose = () => {
    setIsOpen(false);
  };

  const handleLoginOpen = () => {
    setIsOpen(false);
    setIsOpenLogin(true);
    setFreeSignupOpen(false);
    gaEventTrigger('Login_Button_clicked', { source: 'start_video_call', category: 'Button' });
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
        gaEventTrigger('Login_Button_clicked', { source: 'fav_button', category: 'Button' });
      } else if (token.token) {
        const data = await CustomerDetailsService.favouritePutId(modelId, token?.token);
        const customerInfoString = JSON.stringify(customerInfo);
        gaEventTrigger('Model_Favorite_Clicked', {
          category: 'Button',
          label: 'Model_Favorite_Clicked',
          value: customerInfoString
        });
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

  const handleFreeCreditSignupOpen = () => {
    setIsOpenLogin(false);
    setFreeSignupOpen(true);
    gaEventTrigger('Signup_Button_clicked', { source: 'start_video_call', category: 'Button' });
  };

  const handleFreeCreditSignupClose = () => {
    setFreeSignupOpen(false);
  };

  const modelFavPhoto = workerPhotos.find((x) => x.favourite)?.link;

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
            {sortedWorkerPhotos?.map((imageSrc, index) => {
              return (
                <SwiperSlide key={index} style={{ paddingTop: 24, height: '100%' }}>
                  <FirstSwiperBlurContainer>
                    <SecondSwiperBlurContainer
                      sx={{
                        backgroundImage: `url(${imageSrc?.file_type === 'Non_Image' ? imageSrc?.link : imageSrc?.link})`
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
              );
            })}
          </Swiper>
        </FirstSwiperInnerContainer>
        <SideBarBoxContainer>
          {workerPhotos?.length >= 6 && (
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
              watchSlidesProgress={true}
              modules={[Navigation, Thumbs, FreeMode, Mousewheel]}
              className="mySwiper"
              loop={true}
              mousewheel={true}
            >
              {sortedWorkerPhotos?.map((imageSrc, index) => (
                <SecSwiperSlidBoxContainer style={{ paddingTop: '12px' }} key={index} onClick={() => handleSidebarImageClick(index)}>
                  <EscortSwiperPhotoContainerSide
                    imageSrcVideo={imageSrc?.file_type}
                    image={imageSrc?.link}
                    isMain={false}
                    isMobile={true}
                    coordinates={imageSrc?.cords ?? ''}
                  />
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
          <StyleButtonShadowV2
            loading={isLoading}
            onClick={isCustomer ? handleCallInitiate : isFreeCreditAvailable ? handleFreeCreditSignupOpen : handleLoginOpen}
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
          </StyleButtonShadowV2>
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
            {liked || guestData?.favourite === 1 ? <FavoriteIcon sx={{ color: '#FF48B3' }} /> : <FavoriteBorderIcon />}
          </UIStyledShadowButtonLike>
        </Box>

        <UIStyledDialog open={open} onClose={handleSignupClose} maxWidth="md" fullWidth scroll="body">
          <GuestSignup onClose={handleSignupClose} onLoginOpen={handleLoginOpen} />
        </UIStyledDialog>
        <UIStyledDialog open={openLogin} onClose={handleLoginClose} maxWidth="md" fullWidth scroll="body">
          <GuestLogin
            isFreeCreditAvailable={isFreeCreditAvailable}
            onClose={handleLoginClose}
            onSignupOpen={handleSignupOpen}
            onFogotPasswordLinkOpen={handleResetPasswordLinkOpen}
            handleFreeCreditSignupOpen={handleFreeCreditSignupOpen}
            handleLoginOpen={handleLoginOpen}
            freeSignupOpen={freeSignupOpen}
            handleFreeCreditSignupClose={handleFreeCreditSignupClose}
            image="/images/auth/auth-model1.webp"
          />
        </UIStyledDialog>
        <UIStyledDialog open={openForgetPassLink} onClose={handleResetPasswordLinkClose} maxWidth="md" fullWidth scroll="body">
          <GuestForgetPasswordLink onClose={handleResetPasswordLinkClose} onLoginOpen={handleLoginResetPasswordOpen} />
        </UIStyledDialog>
        <UIStyledDialog scroll="body" open={freeSignupOpen} onClose={handleFreeCreditSignupClose} maxWidth="md" fullWidth>
          <GuestFreeCreditsSignup
            modelName={guestData?.name}
            image={modelFavPhoto ?? ''}
            onClose={handleFreeCreditSignupClose}
            onLoginOpen={handleLoginOpen}
          />
        </UIStyledDialog>
      </Box>
    </>
  );
};
