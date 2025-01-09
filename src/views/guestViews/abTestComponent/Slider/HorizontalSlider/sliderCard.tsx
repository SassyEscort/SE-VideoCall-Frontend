import { Box } from '@mui/material';
import React from 'react';
import { SubTitleTypography, TitleTypography } from './HorizontalSlider.styled';
import { ModelHomeListing } from 'services/modelListing/modelListing.services';
import Image from 'next/image';
import Link from 'next/link';

const SliderCard: React.FC<{ card: ModelHomeListing }> = ({ card }) => {
  return (
    <Link href={`/models/${card?.user_name}`}>
      <Box display={'flex'} gap={2.25} sx={{ color: 'black.main' }} key={card.name}>
        <Image src={card.link} alt="model_profile" height={60} width={60} priority style={{ borderRadius: '50%' }} />
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={0.5} color={'white.main'} textAlign={'start'}>
          <TitleTypography>{card.name}</TitleTypography>
          <SubTitleTypography sx={{ whiteSpace: 'nowrap' }}>{card.country}</SubTitleTypography>
        </Box>
      </Box>
    </Link>
  );
};

export default SliderCard;
