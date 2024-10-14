import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

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
  flexDirection: 'column',
  gap: theme.spacing(3)
}));

export const ModelDocumentImgBox = styled('img')(() => ({
  position: 'relative',
  cursor: 'pointer',
  objectFit: 'cover',
  objectPosition: 'center',
  borderRadius: '32px 0px',
  width: 346,
  height: 366
}));

export const StyledModelDocumentImgBox = styled('img')(() => ({
  cursor: 'pointer',
  width: '180px',
  height: '180px'
}));
