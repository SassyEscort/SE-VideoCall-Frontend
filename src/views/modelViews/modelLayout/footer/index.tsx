'use client';
import React from 'react';
import MainFooter from './MainFooter';
import { Banner, TextContainer, TextContainerMain } from './MainFooter.styled';
const ModelFooter = () => {
  return (
    <Banner>
      <TextContainerMain>
        <TextContainer>
          <MainFooter />
        </TextContainer>
      </TextContainerMain>
    </Banner>
  );
};

export default ModelFooter;
