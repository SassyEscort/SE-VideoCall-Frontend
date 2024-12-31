'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { Raleway } from 'next/font/google';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
// import { FirstSwiperInnerContainer } from './PreSignUpWeb.styled';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Container } from '@mui/material';

const ralewayFont = Raleway({ subsets: ['latin'], display: 'swap' });

const PreSignUpWeb = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <UINewTypography
            fontFamily={ralewayFont.style.fontFamily}
            sx={{ fontSize: '100px', fontWeight: 900, lineHeight: '120px', color: 'white.main' }}
          >
            Are You Ready to Get <span style={{ color: '#79E028' }}>Naughty?</span>
          </UINewTypography>
          <UINewTypography sx={{ fontSize: '24px', fontWeight: 400, lineHeight: '32px', color: 'white.main' }}>
            Unleash your wildest desires with models who are here to tease, please, and make it all about you.
          </UINewTypography>
        </Box>
        <Button
          variant="contained"
          sx={{
            borderRadius: '100px',
            width: '400px',
            height: '72px',
            gap: 1
          }}
        >
          <Box component="img" src="/images/icons/new-video-call-icon.svg" alt="video-call" height={32} width={32} />

          <UINewTypography sx={{ fontSize: '24px', fontWeight: 800, lineHeight: '32px', color: 'white.main' }}>
            Start Free Video Chat
          </UINewTypography>
        </Button>
      </Box>
      <Box
        className="tesewsew"
        sx={{
          display: 'flex',
          gap: 4,
          width: '1280px',
          height: '460px',
          left: '60px',
          opacity: ' 0px',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loopAdditionalSlides={2}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5
          }}

          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,

          }}
        >
          <SwiperSlide>
            <img src="/images/swiper/SlideItem1.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/swiper/SlideItem2.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/swiper/SlideItem3.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/swiper/SlideItem4.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/swiper/SlideItem5.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/swiper/SlideItem1.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/swiper/SlideItem2.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/swiper/SlideItem3.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/swiper/SlideItem4.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/swiper/SlideItem5.webp" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Container>
  );
};

export default PreSignUpWeb;
