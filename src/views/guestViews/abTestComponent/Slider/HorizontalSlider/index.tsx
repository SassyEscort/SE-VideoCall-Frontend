import React from 'react';
import SliderContainer from './SliderContainer';
import { ModelHomeListing } from 'services/modelListing/modelListing.services';
import SliderCard from './sliderCard';
import { SliderMainWrapper } from './HorizontalSlider.styled';

const HorizontalSlider = ({ modelDetails }: { modelDetails: ModelHomeListing[] }) => {
  return (
    <SliderMainWrapper>
      <SliderContainer speed={30} playing={true}>
        {modelDetails.map((card, idx) => (
          <SliderCard key={idx} card={card} />
        ))}
      </SliderContainer>
    </SliderMainWrapper>
  );
};

export default HorizontalSlider;
