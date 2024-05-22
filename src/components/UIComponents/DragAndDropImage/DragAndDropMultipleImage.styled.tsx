import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

export const DragAndDropMultipleImageCloseButton = styled(IconButton)(() => ({
  height: '22px',
  width: '21px',
  position: 'absolute',
  left: '12px',
  top: '12px',
  zIndex: 100,

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
  right: '12px',
  top: '12px',
  zIndex: 100,

  '& .MuiSvgIcon-root ': {
    color: 'white',
    width: '20px',
    height: '20px'
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
  padding: theme.spacing(1)
}));

export const DragAndDropImageMainContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minHeight: '150px',
  minWidth: '100px',
  overflow: 'hidden',
  '&:before': {
    content: '""',
    position: 'absolute',
    border: '10px dashed',
    top: '-9px',
    bottom: '-9px',
    left: '-9px',
    right: '-9px',
    borderRadius: '25px 0',
    borderColor: theme.palette.secondary[800]
  },
  borderRadius: '16px 0px',
  '&:hover': {
    backgroundColor: theme.palette.primary[100]
  },
  cursor: 'pointer'
}));
