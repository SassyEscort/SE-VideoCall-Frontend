import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const UIStyledCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '240px',
  height: '360px',
  overflow: 'hidden',
  borderRadius: '16px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  transition: 'background 0.5s ease',
  '&:hover': {
    border: '1px solid',
    borderColor: '#D12288',
    boxShadow: '0px 10px 30px 0px #D1228880'
  },
  '&:hover .styled-image': {
    transform: 'scale(1.2)'
  },

  '&:hover .hover-text': {
    bottom: '10px',
    opacity: 1
  },

  '&:hover .styled-title': {
    opacity: 0
  }
}));

export const UIStyledImage = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'linear-gradient(180deg, rgba(30, 8, 21, 0) 0%, #1E0815 100%), url(images/home/new-ui.png)',
  transition: 'transform 0.5s ease, background-position 0.5s ease',

  '&:hover': {
    backgroundPosition: 'top',
    transform: 'scale(1.2)'
  }
}));

export const UIStyledContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '10px',
  color: 'white',
  textAlign: 'center',
  fontSize: '1.2rem',
  overflow: 'hidden'
}));

export const UIStyledTitle = styled(Box)(({ theme }) => ({
  opacity: 1,
  transition: 'opacity 0.5s ease'
}));

export const UIStyledHoverText = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '-50px',
  left: 0,
  width: '100%',
  fontSize: '1rem',
  color: 'white',
  padding: '5px 0',
  textAlign: 'center',
  opacity: 0,
  transition: 'bottom 0.5s ease, opacity 0.5s ease'
}));

export const UIStyledPark = styled(Box)(({ theme }) => ({
  padding: '4px 12px 4px 12px',
  display: 'flex',
  backgroundColor: '#1E0815',
  width: '61px',
  height: '26px',
  borderRadius: '100px',
  alignItems: 'center',
  gap: '8px'
}));

export const UIStyledFlag = styled(Box)(({ theme }) => ({
  padding: '4px 12px 4px 12px',
  display: 'flex',
  backgroundColor: '#1E0815',
  width: '89px',
  height: '26px',
  borderRadius: '100px',
  alignItems: 'center',
  gap: '8px'
}));

export const HighlyAvailableButtonBoxNew = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginTop: 0
}));

export const HighlyAvailableBoxNew = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'flex-start'
  },
  width: '100%',
  position: 'relative',
  marginLeft: '10px'
}));

export const UIStyledStar = styled(Box)(({ theme }) => ({
  padding: '4px 12px 4px 12px',
  display: 'flex',
  backgroundColor: '#1E0815',
  width: '66px',
  height: '28px',
  borderRadius: '100px',
  alignItems: 'center',
  gap: '8px'
}));
