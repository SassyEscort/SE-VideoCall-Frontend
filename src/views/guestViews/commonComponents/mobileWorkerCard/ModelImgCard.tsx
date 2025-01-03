import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';

const ModelImage = ({ modelDetails }: { modelDetails: { link: string } }) => {
  if (!modelDetails?.link) return null;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '0',
        paddingBottom: {
          xs: '75%',
          sm: '56.25%'
        },
        borderRadius: '12px',
        overflow: 'hidden'
      }}
    >
      <Image
        alt="Model Image"
        src={modelDetails.link}
        layout="fill"
        objectFit="cover"
        priority
        placeholder="blur"
        blurDataURL="/path-to-blur-image.webp"
      />
    </Box>
  );
};

export default ModelImage;
