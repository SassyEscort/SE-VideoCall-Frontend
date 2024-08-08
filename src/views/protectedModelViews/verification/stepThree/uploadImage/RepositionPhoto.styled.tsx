import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';

export const RepositionPhotoDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    maxWidth: 739,
    maxHeight: 722,
    height: '100%',
    border: '1px solid',
    borderColor: theme.palette.primary[700],
    borderRadius: theme.spacing(1.5),
    paddingTop: theme.spacing(2.25),
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      width: '100%',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    }
  },
  '& .MuiDialog-container': {
    alignItems: 'end'
  }
}));

export const RepositionPhotoHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  padding: '16px 24px',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2)
  }
}));

export const RepositionPhotoContent = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  position: 'relative'
}));

export const CropContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  height: 623,
  width: 375,
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  },
  '& .reactEasyCrop_Container': {
    height: 560,
    borderRadius: theme.spacing(1)
  },
  '& .reactEasyCrop_CropArea': {
    border: 'none',
    borderRadius: theme.spacing(1)
  }
}));

export const SliderControls = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: '50%',
  width: 311,
  transform: 'translateX(-50%)',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  '& .MuiSlider-root': {
    color: '#D9D9D9'
  },
  '& .MuiSlider-track, & .MuiSlider-thumb': {
    color: theme.palette.primary.main
  }
}));

export const ModelMultipleBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1.5)
  },
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(2)
  }
}));

export const UploadButBoxContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(1.875),
    paddingRight: theme.spacing(1.875)
  },
  [theme.breakpoints.only('sm')]: {
    paddingLeft: theme.spacing(1.875),
    paddingRight: theme.spacing(1.875)
  }
}));
