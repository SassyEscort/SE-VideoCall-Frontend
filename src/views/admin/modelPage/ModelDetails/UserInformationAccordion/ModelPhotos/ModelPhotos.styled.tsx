import { Box, IconButton, Popover, styled } from '@mui/material';
import Star from '@mui/icons-material/Star';
import { StarBorder } from '@mui/icons-material';

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

export const ModelPhotosStyledStarBorder = styled(StarBorder)(({ theme }) => ({
  width: 24,
  height: 24,
  position: 'absolute',
  display: 'flex',
  justifyContent: 'end',
  color: theme.palette.common.white,
  left: 15,
  top: 15
}));

export const ModelPhotosStyledIconButton = styled(IconButton)(() => ({
  position: 'absolute',
  right: '0'
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

export const ModelActionPopover = styled(Popover)(({ theme }) => ({
  '& .MuiMenuItem-root': {
    padding: theme.spacing(1),
    borderRadius: theme.spacing(0.75),
    typography: 'body2'
  },
  '& .MuiPaper-root': {
    width: 170,
    padding: theme.spacing(1)
  }
}));
