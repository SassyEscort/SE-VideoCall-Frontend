import React from 'react';
import { ModelCardInfoBox, ModelCardSliderImage, ModelSliderCardBox, SubTitleTypography, TitleTypography } from './HorizontalSlider.styled';
import { ModelHomeListing } from 'services/modelListing/modelListing.services';
import Link from 'next/link';

const SliderCard: React.FC<{ card: ModelHomeListing }> = ({ card }) => {
  return (
    <Link href={`/models/${card?.user_name}`}>
      <ModelSliderCardBox key={card.name}>
        <ModelCardSliderImage src={card.link} alt="model_profile" height={60} width={60} priority />
        <ModelCardInfoBox>
          <TitleTypography>{card.name}</TitleTypography>
          <SubTitleTypography sx={{ whiteSpace: 'nowrap' }}>{card.country}</SubTitleTypography>
        </ModelCardInfoBox>
      </ModelSliderCardBox>
    </Link>
  );
};

export default SliderCard;
