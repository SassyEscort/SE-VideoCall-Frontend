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
import { FormattedMessage } from 'react-intl';

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
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <Container maxWidth="lg">
      <PreSignUpWebMainBoxContainer>
        <PreSignUpMobileBoxContainer>
          <HeadingTextBoxContainer>
            {!isMdDown ? (
              <HeadingTextTypography fontFamily={ralewayFont.style.fontFamily}>
                <FormattedMessage id="AreYouReadyToGet" />
                <span style={{ color: '#79E028' }}>
                  <FormattedMessage id="Naughty" />
                </span>
              </HeadingTextTypography>
            ) : (
              <HeadingTextTypography fontFamily={ralewayFont.style.fontFamily}>
                <FormattedMessage id="RealGirlsWaitingFor" />
                <span style={{ color: '#79E028' }}>
                  {' '}
                  <FormattedMessage id="yourPleasure" />
                </span>
              </HeadingTextTypography>
            )}
            {isSmUp && (
              <DescriptionTextTypography>
                <FormattedMessage id="UnleashYourWildestDesiresWithModels" />
              </DescriptionTextTypography>
            )}
          </HeadingTextBoxContainer>

          <ButtonBoxContainer variant="contained">
            <Box component="img" src="/images/icons/new-video-call-icon.svg" alt="video-call" height={32} width={32} />

            <ButtonTextTypography>
              <FormattedMessage id="StartFreeVideoChat" />
            </ButtonTextTypography>
          </ButtonBoxContainer>

          {isMdDown && (
            <SignupButtonBoxContainer>
              <SignUpTextTypography>
                <FormattedMessage id="SignIn" />
              </SignUpTextTypography>
            </SignupButtonBoxContainer>
          )}
        </PreSignUpMobileBoxContainer>

        <PreSignUpWebInnerBoxContainer>
          <ModelImageMainSwiperContainer className="tesewsew"></ModelImageMainSwiperContainer>
          <CarousalSwiper carousalImages={carousalImages} />

          <ModelDetailsSwiperMainContainer>
            <TrendingBoxContainer>
              <Box
                component="img"
                src="/images/boostProfile/fire-sidebar.png"
                sx={{ width: { sm: '24px', md: '36px' }, height: { sm: '24px', md: '36px' } }}
              />
              <TrendingNowTextTypography>
                <FormattedMessage id="TrendingNow" />
              </TrendingNowTextTypography>
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
