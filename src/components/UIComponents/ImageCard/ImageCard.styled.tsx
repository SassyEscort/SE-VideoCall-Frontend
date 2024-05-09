import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const ImageCardStyle = styled(Box)(({ theme }) => ({
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  borderRadius: '32px 0px',
  height: '100%',
  width: '100%',
  '& .image-overlay': {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    borderRadius: '32px 0px',
    transition: 'all 0.3s ease-in-out'
  },
  '&:hover .image-overlay': {
    opacity: 1,
    zIndex: 1
  },
  '& .play-icon': {
    opacity: 1,
    height: 64,
    width: 64,
    color: theme.palette.primary.main,
    position: 'absolute'
  }
}));
