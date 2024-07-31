import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

export const DragAndDropMultipleImageCloseButton = styled(IconButton)(() => ({
  height: '22px',
  width: '21px',
  position: 'absolute',
  left: 8,
  top: 8,
  zIndex: 0,
  '& .MuiSvgIcon-root ': {
    color: 'white',
    width: '20px',
    height: '20px'
  }
}));

export const DragAndDropMultipleImageCloseVideoButton = styled(IconButton)(({ theme }) => ({
  height: '22px',
  width: '21px',
  position: 'absolute',
  left: 8,
  top: 8,
  zIndex: 1,
  '& .MuiSvgIcon-root ': {
    color: 'white',
    width: '20px',
    height: '20px'
  }
}));

export const DragAndDropMultipleImageEditButton = styled(IconButton)(() => ({
  height: '22px',
  width: '21px',
  position: 'absolute',
  right: 8,
  top: 8,
  zIndex: 0,
  '& .MuiSvgIcon-root ': {
    color: 'white',
    width: '20px',
    height: '20px'
  }
}));

export const DragAndDropMultipleImageThumbnailPhoto = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 8,
  top: 160,
  zIndex: 0,
  padding: '2px 8px',
  borderRadius: theme.spacing(0.5),
  backgroundColor: 'rgba(41, 15, 30, 0.80)',
  [theme.breakpoints.down('sm')]: {
    top: 169,
    left: 15
  }
}));

export const DragAndDropImageNoImageBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  cursor: 'pointer',
  gap: theme.spacing(1.5)
}));

export const DragAndDropImageMainContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minHeight: 159,
  minWidth: 100,
  overflow: 'hidden',
  '&:before': {
    content: '""',
    position: 'absolute',
    border: '2px dashed',
    top: '-1px',
    bottom: '-1px',
    left: '-1px',
    right: '-1px',
    borderRadius: theme.spacing(1.5),
    borderColor: theme.palette.secondary[700]
  },
  '&.error:before': {
    borderColor: theme.palette.error.main
  },
  borderRadius: theme.spacing(1.5),
  '&:hover': {
    backgroundColor: theme.palette.primary[200]
  },
  cursor: 'pointer'
}));
