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
  height: 366,
  position: 'relative',
  cursor: 'pointer',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '32px 0px',
  maxWidth: 346,
  width: '100%'
}));
