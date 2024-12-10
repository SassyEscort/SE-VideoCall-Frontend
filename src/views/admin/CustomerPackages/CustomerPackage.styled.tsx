import { styled, Box, Card, Paper } from '@mui/material';

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

export const PackageMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.5)
}));

export const PackageReportMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  }
}));

export const PackageReportChartBox = styled(Box)(({ theme }) => ({
  width: '60%',
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}));

export const PackageReportListingBox = styled(Box)(({ theme }) => ({
  width: '40%',
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}));

export const PackageReportCardBox = styled(Card)(({ theme }) => ({
  borderRadius: '12px',
  height: '100%'
}));

export const PackageReportCardPaper = styled(Paper)(({ theme }) => ({
  overflow: 'hidden',
  padding: '20px 0px ',
  height: '100%',
  paddingTop: theme.spacing(2.5),
  paddingBottom: theme.spacing(2.5)
}));

export const PackageReportDetailCell = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1)
}));
