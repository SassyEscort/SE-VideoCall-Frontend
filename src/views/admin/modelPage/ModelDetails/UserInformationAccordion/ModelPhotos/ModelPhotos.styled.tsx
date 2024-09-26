import { Box, styled } from '@mui/material';
import Star from '@mui/icons-material/Star';

export const ModelPhotosStyledStar = styled(Star)(({ theme }) => ({
  width: 24,
  height: 24,
  position: 'absolute',
  display: 'flex',
  justifyContent: 'end',
  color: theme.palette.common.white,
  left: 15,
  top: 15
}));

export const ModelPhotosImgBox = styled(Box)(() => ({
  height: 193,
  position: 'relative',
  cursor: 'pointer',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '8px',
  maxWidth: 146.2,
  width: '100%'
}));
