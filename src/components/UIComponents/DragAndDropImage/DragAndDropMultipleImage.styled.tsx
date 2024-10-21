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
