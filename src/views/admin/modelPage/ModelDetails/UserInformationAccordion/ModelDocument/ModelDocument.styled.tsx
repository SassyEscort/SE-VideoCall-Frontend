import { Box, styled } from '@mui/material';

export const ModelDocumentBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignSelf: 'stretch'
}));

export const ModelDocumentContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
  gap: theme.spacing(3)
}));

export const ModelDocumentImgBox = styled('img')(() => ({
  position: 'relative',
  cursor: 'pointer',
  objectFit: 'cover',
  objectPosition: 'center',
  borderRadius: '8px',
  width: 146.2,
  height: 193
}));

export const StyledModelDocumentImgBox = styled('img')(({ theme }) => ({
  cursor: 'pointer',
  width: '146.2px',
  height: '193px'
}));

export const TitleBackgroundBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  padding: theme.spacing(1.5),
  border: '1px solid',
  borderColor: theme.palette.common.white,
  backgroundColor: theme.palette.common.white,
  boxShadow: '0px 1px 80px 18px rgba(0, 0, 0, 0.10)',
  borderRadius: theme.spacing(1.5)
}));
