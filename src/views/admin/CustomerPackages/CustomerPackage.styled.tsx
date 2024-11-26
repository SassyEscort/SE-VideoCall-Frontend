import { styled, Box } from '@mui/material';

export const TagLable = styled(Box)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '21.86px',
  color: '#fff',
  borderRadius: '4px',
  textAlign: 'center',
  width: 'fit-content',
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
  paddingLeft: theme.spacing(1.5),
  paddingRight: theme.spacing(1.5)
}));

export const MainTitleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(1)
}));

export const PackageBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100%',
  width: '100%',
  padding: theme.spacing(2),
  flexDirection: 'column',
  gap: theme.spacing(2)
}));

export const PackageCreditDetailBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  flexDirection: 'column'
}));

export const CreditDetailBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5)
}));

export const NoPackageBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  height: '80vh',
  alignItems: 'center',
  width: '100'
}));
