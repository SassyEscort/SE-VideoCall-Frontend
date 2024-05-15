'use client';
import React from 'react';
import MainFooter from './MainFooter';
import { TextContainer, TextContainerMain } from './MainFooter.styled';
const ModelFooter = () => {
  return (
    <TextContainerMain>
      <TextContainer>
        <MainFooter />
      </TextContainer>
    </TextContainerMain>
  );
};

export default ModelFooter;
