import { styled, alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Avatar, Box } from '@mui/material';

const NAV_WIDTH = 280;

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12)
}));

interface NavProps {
  openNav: boolean;
  onCloseNav: () => void;
}

export default function Nav({ openNav, onCloseNav }: NavProps) {
  const renderContent = (
    <>
      <Box sx={{ mb: 2, mx: 2.5 }}>
        <Link underline="none">
          <StyledAccount>
            <Avatar src="/images/admin/avatar.jpg" alt="photoURL" />

            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" color="text.primary" sx={{ textTransform: 'capitalize' }}>
                Name
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Email
              </Typography>
            </Box>
          </StyledAccount>
        </Link>
      </Box>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH }
      }}
    >
      {renderContent}
    </Box>
  );
}
