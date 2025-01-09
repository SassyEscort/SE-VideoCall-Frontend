import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import Box from '@mui/material/Box';
import { NewBoxContainer } from './PreSignUpWeb.styled';
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

const CarousalSwiper = ({ carousalImages }: { carousalImages: CarousalModelImageRes[] }) => {
  return (
    <NewBoxContainer>
      <Box className="container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          initialSlide={2}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
            //   clickable: true
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false
          }}
          spaceBetween={0}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper_container"
        >
          {carousalImages.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide.link} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </NewBoxContainer>
  );
};

export default CarousalSwiper;
