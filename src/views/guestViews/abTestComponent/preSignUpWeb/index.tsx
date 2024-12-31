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
            disableOnInteraction: false
          }}
        >
          {slides.map((slide, key) => (
            <SwiperSlide>
              <img src={slide.link} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box
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
          slidesPerView={5}
          spaceBetween={15}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          speed={2000}
          modules={[Autoplay, Pagination]}
          className="mySwiper1"
        >
          {slides.map((slide, key) => (
            <SwiperSlide>
              <Box display={'flex'} gap={1.5} sx={{ color: 'black.main', p: 0.5 }}>
                <img src={slide.link} />
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={0.5} color={'white.main'}>
                  <div>Ana May</div>
                  <div>Brazil</div>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
};

export default PreSignUpWeb;
