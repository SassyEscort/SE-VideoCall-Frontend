import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import theme from 'themes/theme';

const EscortSwiperPhotoContainer = ({
  image,
  isMain,
  isMobile,
  isFirstImage,
  coordinates
}: {
  image: string;
  isMain: boolean;
  isMobile: boolean;
  isFirstImage?: boolean;
  coordinates: string;
}) => {
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: isMdUp && !isMain ? 'cover' : isMdDown ? 'cover' : 'contain',
        backgroundPosition: 'center',
        height: isMain && !isMobile ? '100%' : isMdDown && !isMain ? '90px' : '146px',
        width: '100%',
        minHeight: isMain && !isMdDown ? 660 : isMdDown && !isMain ? '90px' : isMdDown && isMain ? 430 : 0,
        borderRadius: 2,
        zIndex: 2,
        position: 'relative'
      }}
    />
  );
};

export default EscortSwiperPhotoContainer;
