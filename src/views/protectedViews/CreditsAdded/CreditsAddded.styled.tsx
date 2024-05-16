import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const CreditsAddedMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  height: '100%',
  width: '100%',
  maxHeight: '600px',
  maxWidth: '896px'
}));

export const HeadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  margin: '20px 24px 20px 24px'
}));

export const CreditsCloseIconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end'
}));

export const CreditsBodyContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  height: '226px',
  width: '217px',
  marginTop: '48px'
}));
export const AddedCreditsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '32px',
  height: '100%',
  width: '100%',
  maxWidth: '253px',
  maxHeight: '34px',
  justifyContent: 'center'
}));

export const UINewTypographyNew = styled(UINewTypography)(({ theme }) => ({
  height: '100%',
  width: '100%',
  margin: 0,
  fontSize: '24px',
  fontWeight: 600,
  lineHeight: '33.6px'
}));
export const NewBalanceDetailsConatainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  width: '100%',
  marginTop: '16px',
  maxWidth: '229px',
  maxHeight: '24px',
  justifyContent: 'space-around'
}));

export const NewBalanceDetails = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row'
}));

export const ExploreButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '39px',
  marginTop: '56px',
  marginBottom: '56px',
  width: '176px'
}));
