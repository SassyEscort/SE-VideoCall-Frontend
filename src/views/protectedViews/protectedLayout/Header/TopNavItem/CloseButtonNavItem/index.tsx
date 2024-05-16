import CancelRounded from '@mui/icons-material/CancelRounded';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';

const CloseButtonNavItem = ({ handleClickClose }: { handleClickClose: () => void }) => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'white.main',
          pr: '0 !important',
          boxShadow: 'none',
          borderBottom: '1px solid',
          borderColor: 'secondary.light'
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            px: { xs: 2, lg: 5 },
            py: { xs: 1, sm: 2 },
            justifyContent: 'space-between'
          }}
        >
          <Box component={Link} prefetch={false} shallow={true} href="/" height={{ xs: 40, sm: 60 }}>
            <Box component="img" src="/images/LogoLight.svg" height={{ xs: 40, sm: 60 }} />
          </Box>
          <IconButton onClick={handleClickClose} sx={{ p: { xs: 0, sm: 1 } }}>
            <CancelRounded
              sx={{
                height: { xs: 32, sm: 40 },
                width: { xs: 32, sm: 40 },
                color: 'secondary.dark'
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ height: { xs: 56, sm: 92 } }}></Box>
    </>
  );
};

export default CloseButtonNavItem;
