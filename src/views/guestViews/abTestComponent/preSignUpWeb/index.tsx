'use client';

import Box from '@mui/material/Box';
import { Raleway } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
// import { FirstSwiperInnerContainer } from './PreSignUpWeb.styled';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Container, useMediaQuery } from '@mui/material';
import {
  ButtonBoxContainer,
  ButtonTextTypography,
  DescriptionTextTypography,
  HeadingTextBoxContainer,
  HeadingTextTypography,
  ModelDetailsSwiperInnerContainer,
  ModelDetailsSwiperMainContainer,
  ModelImageMainSwiperContainer,
  PreSignUpMobileBoxContainer,
  PreSignUpWebInnerBoxContainer,
  PreSignUpWebMainBoxContainer,
  SignupButtonBoxContainer,
  SignUpTextTypography,
  SubTitleTypography,
  TitleTypography,
  TrendingBoxContainer,
  TrendingNowTextTypography
} from './PreSignUpWeb.styled';
import theme from 'themes/theme';
import { ModelListingRes } from 'services/modelListing/modelListing.services';
import { SearchFiltersTypes } from 'views/guestViews/searchPage/searchFilters';
import { CarousalModelImageRes } from 'services/abTest/abTest.services';

const slides = [
  { link: '/images/swiper/SlideItem1.webp' },
  { link: '/images/swiper/SlideItem2.webp' },
  { link: '/images/swiper/SlideItem3.webp' },
  { link: '/images/swiper/SlideItem4.webp' },
  { link: '/images/swiper/SlideItem5.webp' },
  { link: '/images/swiper/SlideItem1.webp' },
  { link: '/images/swiper/SlideItem2.webp' },
  { link: '/images/swiper/SlideItem3.webp' },
  { link: '/images/swiper/SlideItem4.webp' },
  { link: '/images/swiper/SlideItem5.webp' }
];

const ralewayFont = Raleway({ subsets: ['latin'], display: 'swap' });

const PreSignUpWeb = ({
  modelData,
  carousalImages
}: {
  modelData: ModelListingRes;
  params: SearchFiltersTypes;
  carousalImages: CarousalModelImageRes[];
}) => {
  const [slideChange, setSlideChange] = useState(false);

  useEffect(() => {
    const updateSwiperSlides = () => {
      const swiperSlides = document.querySelectorAll('.mySwiper .swiper-slide');
      swiperSlides.forEach((slide) => {
        slide.classList.remove('custom-z-index');
      });
      swiperSlides.forEach((slide) => {
        const zIndex = window.getComputedStyle(slide).zIndex;
        if (zIndex === '-2') {
          slide.classList.add('custom-z-index');
        }
      });
    };
    updateSwiperSlides();
  }, [slideChange]);

  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Container maxWidth="lg">
      <PreSignUpWebMainBoxContainer>
        <PreSignUpMobileBoxContainer>
          <HeadingTextBoxContainer>
            {isSmUp ? (
              <HeadingTextTypography fontFamily={ralewayFont.style.fontFamily}>
                Are You Ready to Get <span style={{ color: '#79E028' }}>Naughty?</span>
              </HeadingTextTypography>
            ) : (
              <HeadingTextTypography fontFamily={ralewayFont.style.fontFamily}>
                Real Girls, Waiting for<span style={{ color: '#79E028' }}> your pleasure!?</span>
              </HeadingTextTypography>
            )}
            {isSmUp && (
              <DescriptionTextTypography>
                Unleash your wildest desires with models who are here to tease, please, and make it all about you.
              </DescriptionTextTypography>
            )}
          </HeadingTextBoxContainer>

          <ButtonBoxContainer variant="contained">
            <Box component="img" src="/images/icons/new-video-call-icon.svg" alt="video-call" height={32} width={32} />

            <ButtonTextTypography>Start Free Video Chat</ButtonTextTypography>
          </ButtonBoxContainer>

          {!isSmUp && (
            <SignupButtonBoxContainer>
              <SignUpTextTypography>Sign in</SignUpTextTypography>
            </SignupButtonBoxContainer>
          )}
        </PreSignUpMobileBoxContainer>

        <PreSignUpWebInnerBoxContainer>
          <ModelImageMainSwiperContainer className="tesewsew">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              loop={true}
              loopAdditionalSlides={2}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              coverflowEffect={{
                rotate: 0,
                stretch: -10,
                depth: 200,
                modifier: 1.5
              }}
              // breakpoints={{
              //   768: {
              //     slidesPerView: 3
              //   }
              //   1024: {
              //     slidesPerView: 2,
              //     loopAdditionalSlides: 1
              //   },
              //   1200: {
              //     slidesPerView: 3,
              //     loopAdditionalSlides: 1
              //   }
              // }}
              className="mySwiper"
              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: false
              // }}
              onSlideChange={() => setSlideChange(!slideChange)}
            >
              {slides.map((slide, key) => (
                <SwiperSlide key={key}>
                  <img src={slide.link} />
                </SwiperSlide>
              ))}
            </Swiper>
          </ModelImageMainSwiperContainer>

          <ModelDetailsSwiperMainContainer>
            <TrendingBoxContainer>
              <Box component="img" src="/images/boostProfile/fire-sidebar.png" width={36} height={36} />
              <TrendingNowTextTypography>Trending Now</TrendingNowTextTypography>
            </TrendingBoxContainer>
            <ModelDetailsSwiperInnerContainer>
              {/* <Swiper
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2,
              disableOnInteraction: false
            }}
            speed={2000}
            modules={[Autoplay, Pagination]}
            className="mySwiper1"
          > */}
              <Swiper
                // slidesPerView={Math.min(slides.length, 5)}
                slidesPerView={5}
                spaceBetween={15}
                slidesPerGroup={5}
                loop={true}
                centeredSlides={true}
                // autoplay={{
                //   delay: 1,
                //   disableOnInteraction: false
                // }}
                speed={1000}
                modules={[Autoplay, Pagination]}
                className="mySwiper1"
              >
                {modelData.model_details.map((model, index) => (
                  <SwiperSlide key={index}>
                    <Box display={'flex'} gap={2.25} sx={{ color: 'black.main' }}>
                      <img src={model.link} />
                      <Box
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        gap={0.5}
                        color={'white.main'}
                        textAlign={'start'}
                      >
                        <TitleTypography>{model.name}</TitleTypography>
                        <SubTitleTypography sx={{ whiteSpace: 'nowrap' }}>{model.country}</SubTitleTypography>
                      </Box>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </ModelDetailsSwiperInnerContainer>
          </ModelDetailsSwiperMainContainer>
        </PreSignUpWebInnerBoxContainer>
      </PreSignUpWebMainBoxContainer>
    </Container>
  );
};

export default PreSignUpWeb;
