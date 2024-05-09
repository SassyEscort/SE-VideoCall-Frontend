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

  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: isMain && !isMobile ? '100%' : isMdDown && !isMain ? '90px' : '156px',
        width: '100%',
        minHeight: isMain && !isMdDown ? 660 : isMdDown && !isMain ? '90px' : isMdDown && isMain ? 420 : 0,
        borderRadius: 2
      }}
    />
  );
};

export default EscortSwiperPhotoContainer;
