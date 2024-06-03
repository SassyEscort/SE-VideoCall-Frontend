import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { FormikTouched } from 'formik';

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

export const DragAndDropContainer = styled(Box)<{
  isPDF: boolean;
  uploadedFileURL: string;
  errors: string | undefined;
  touched: FormikTouched<any> | undefined;
  withoutFilterImageTouched: FormikTouched<any> | undefined;
}>(({ isPDF, uploadedFileURL, errors, touched, withoutFilterImageTouched, theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '308px',
  width: '390px',
  borderRadius: '8px',
  overflow: 'hidden',
  [theme.breakpoints.down(330)]: {
    width: '290px'
  },
  [theme.breakpoints.up(330)]: {
    width: '363px'
  },
  [theme.breakpoints.up('sm')]: {
    width: '390px'
  },
  ...(uploadedFileURL
    ? {
        backgroundImage: !isPDF ? `url(${uploadedFileURL})` : 'none',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: isPDF ? '#232027' : 'none'
      }
    : {
        '&:before': {
          content: '""',
          position: 'absolute',
          border: '4px dashed',
          top: '-1px',
          bottom: '-1px',
          left: '-1px',
          right: '-1px',
          borderRadius: '12px',
          borderColor: errors && (touched || withoutFilterImageTouched?.photoWithoutFilter) ? 'error.main' : '#86838A'
        },
        cursor: 'pointer'
      })
}));
