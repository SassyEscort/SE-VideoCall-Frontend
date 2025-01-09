import React from 'react';
import SliderContainer from './HorizontalSlider/SliderContainer';
import { ModelHomeListing } from 'services/modelListing/modelListing.services';
import SliderCard from './HorizontalSlider/sliderCard';
import { SliderMainWrapper } from './HorizontalSlider/HorizontalSlider.styled';

const TrendyModelSlider = ({ modelDetails }: { modelDetails: ModelHomeListing[] }) => {
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

export default TrendyModelSlider;
