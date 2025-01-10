'use client';

import Box from '@mui/material/Box';
import { Raleway } from 'next/font/google';
import React from 'react';
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
  TrendingBoxContainer,
  TrendingNowTextTypography
} from './PreSignUpWeb.styled';
import theme from 'themes/theme';
import { ModelListingRes } from 'services/modelListing/modelListing.services';
import { SearchFiltersTypes } from 'views/guestViews/searchPage/searchFilters';
import { CarousalModelImageRes } from 'services/abTest/abTest.services';
import CarousalSwiper from './CarouselSwiper';
import HorizontalSlider from '../Slider/HorizontalSlider';

const ralewayFont = Raleway({ subsets: ['latin'], display: 'swap' });

const PreSignUpWeb = ({
  modelData,
  carousalImages
}: {
  modelData: ModelListingRes;
  params: SearchFiltersTypes;
  carousalImages: CarousalModelImageRes[];
}) => {
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
          <ModelImageMainSwiperContainer className="tesewsew"></ModelImageMainSwiperContainer>
          <CarousalSwiper carousalImages={carousalImages} />

          <ModelDetailsSwiperMainContainer>
            <TrendingBoxContainer>
              <Box component="img" src="/images/boostProfile/fire-sidebar.png" width={36} height={36} />
              <TrendingNowTextTypography>Trending Now</TrendingNowTextTypography>
            </TrendingBoxContainer>
            <ModelDetailsSwiperInnerContainer>
              <HorizontalSlider modelDetails={modelData.model_details} />
            </ModelDetailsSwiperInnerContainer>
          </ModelDetailsSwiperMainContainer>
        </PreSignUpWebInnerBoxContainer>
      </PreSignUpWebMainBoxContainer>
    </Container>
  );
};

export default PreSignUpWeb;
