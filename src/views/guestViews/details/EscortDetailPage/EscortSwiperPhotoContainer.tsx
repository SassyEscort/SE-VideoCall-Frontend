import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { VideoAcceptType } from 'constants/workerVerification';
import theme from 'themes/theme';

const EscortSwiperPhotoContainer = ({
  image,
  isMain,
  isMobile,
  imageSrcVideo,
  isFirstImage,
  coordinates
}: {
  image: string;
  isMain: boolean;
  isMobile: boolean;
  isFirstImage?: boolean;
  imageSrcVideo?: string;
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
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {VideoAcceptType.includes(image.split('.').pop()?.toLowerCase() || '') && (
        <Box
          component="video"
          width="100%"
          height="100%"
          controls={true}
          controlsList="nodownload"
          sx={{
            objectFit: 'cover',
            maxHeight: isMain && !isMdDown ? 700 : isMdDown && !isMain ? '90px' : isMdDown && isMain ? 430 : 430
          }}
        >
          <Box component="source" src={image} />
        </Box>
      )}
    </Box>
  );
};

export default EscortSwiperPhotoContainer;
