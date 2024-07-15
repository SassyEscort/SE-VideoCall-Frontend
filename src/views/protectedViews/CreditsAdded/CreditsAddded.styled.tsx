import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const CreditsAddedMainBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  height: '100%',
  width: '100%',
  overflow: 'hidden'
}));

export const HeadingContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  margin: '20px 24px 20px 24px'
}));

export const CreditsCloseIconContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end'
}));

export const CreditsBodyContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
}));

export const ImageContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  height: '226px',
  width: '217px',
  marginTop: '48px'
}));
export const AddedCreditsContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '32px',
  height: '100%',
  justifyContent: 'center'
}));

export const UINewTypographyNew = styled(UINewTypography)(() => ({
  height: '100%',
  width: '100%',
  margin: 0,
  fontSize: '24px',
  fontWeight: 600,
  lineHeight: '33.6px'
}));
export const NewBalanceDetailsConatainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  marginTop: '16px',
  justifyContent: 'space-around'
}));

export const NewBalanceDetails = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: '16px'
}));

export const ExploreButtonContainer = styled(Box)(() => ({
  display: 'flex',
  height: '100%',
  marginTop: '56px',
  marginBottom: '56px',
  width: '100%',
  justifyContent: 'center'
}));

export const RedirectInfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2)
}));

export const NewUIIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'absolute',
  top: '18px',
  padding: '0',
  right: '20px'
}));
