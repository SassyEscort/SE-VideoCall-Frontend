// import LanguageDropdown from '@/components/common/LanguageDropdown';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';

const HeaderGuestComponent = ({
  toggleDrawer,
  handleOpenFilterModal
}: {
  toggleDrawer: (open: boolean) => void;
  handleOpenFilterModal: () => void;
}) => {
  const isSmUp = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box display="flex" alignItems="center" gap={{ xs: 2.5, sm: 4.5 }}>
      {isSmUp && (
        <Link prefetch={false} href="/advertisment">
          <Typography variant="buttonLargeMenu" color="text.secondary">
            AdvertiseWithUs
          </Typography>
        </Link>
      )}
      {!isSmUp && (
        <Box display="flex" alignItems="center" gap={1} component={Link} prefetch={false} href="/search" onClick={handleOpenFilterModal}>
          <Image src="/images\headerv2/searchLine.svg" width={20} height={20} alt="search" priority />
        </Box>
      )}
      {/* <Box display="flex">
        <LanguageDropdown isFlagShow={true} />
      </Box> */}
      {!isSmUp && (
        <IconButton onClick={() => toggleDrawer(true)}>
          <Image height={24} width={24} priority alt="menufill" src="/images/headerv2/menuFill.svg" />
        </IconButton>
      )}
      {isSmUp && (
        <Link prefetch={false} href="/login">
          <Box display="flex" alignItems="center" gap={1}>
            <Image src="/images\headerv2/loginCircle.svg" width={20} height={20} alt="login" priority />
            <Typography variant="buttonLargeMenu" color="text.secondary">
              Loginv2
            </Typography>
          </Box>
        </Link>
      )}
      {isSmUp && (
        <Link prefetch={false} href="/register">
          <Box display="flex" alignItems="center" gap={1}>
            <Image src="/images\headerv2/userLine.svg" width={20} height={20} alt="sign_up" priority />
            <Typography variant="buttonLargeMenu" color="text.secondary">
              Signupv2
            </Typography>
          </Box>
        </Link>
      )}
    </Box>
  );
};

export default HeaderGuestComponent;
