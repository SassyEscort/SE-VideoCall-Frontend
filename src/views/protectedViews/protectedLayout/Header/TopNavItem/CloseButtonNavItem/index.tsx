import CancelRounded from '@mui/icons-material/CancelRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import { CloseButtonNavItemContainer, ToolBarContainer } from './CloseButtonNavItem.styled';

const CloseButtonNavItem = ({ handleClickClose }: { handleClickClose: () => void }) => {
  return (
    <>
      <CloseButtonNavItemContainer>
        <ToolBarContainer
          disableGutters
          sx={{
            px: { xs: 2, lg: 5 },
            py: { xs: 1, sm: 2 }
          }}
        >
          <Box component={Link} prefetch={false} shallow={true} href="/" height={{ xs: 40, sm: 60 }}>
            <Box component="img" src="/images/LogoLight.svg" alt="logo_light" height={{ xs: 40, sm: 60 }} />
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
        </ToolBarContainer>
      </CloseButtonNavItemContainer>
      <Box sx={{ height: { xs: 56, sm: 92 } }}></Box>
    </>
  );
};

export default CloseButtonNavItem;
