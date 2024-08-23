import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { ReactNode } from 'react';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import { AuthCommonBox, AuthImageBox } from './AuthHomePageFreeSignupCommon.styled';
import Timer from './timer';
import { FormattedMessage } from 'react-intl';

const AuthHomePageFreeSignupCommon = ({
  onClose,
  image,
  mobileImage,
  variant,
  children
}: {
  onClose: () => void;
  image: string;
  mobileImage: string;
  variant?: string;
  children: ReactNode;
}) => {
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <AuthCommonBox>
      <Box display="flex" alignItems="flex-end" justifyContent="flex-end" sx={{ display: { xs: 'block', sm: 'none' } }}>
        <IconButton
          size="large"
          sx={{
            color: 'common.white',
            position: 'absolute',
            top: 0,
            right: { xs: 0, sm: '-84px' }
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Box display="flex" gap={1.5} position="relative">
        <AuthImageBox
          sx={{
            height: 'auto',
            backgroundPosition: variant === 'resetPassword' ? { xs: 'center', md: 'right' } : 'right',
            maxWidth: variant === 'resetPassword' ? 434 : 420,
            backgroundImage: `linear-gradient(to bottom, #00000000 60%, #000000 100%), url(${image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            position: 'relative'
          }}
        />
        {isSmUp && (
          <Box
            sx={{
              position: 'absolute',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: '92px',
              paddingLeft: '52px'
            }}
          >
            <Box component="img" src="/images/home/free-credits-signup-img.png" width={291} height={291} />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Box component="img" src="/images/workercards/coin-1.png" width={20} height={20} />
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: '367px',
                    display: 'flex',
                    justifyContent: 'center',
                    '@media (max-width: 768px)': {
                      maxWidth: '275px'
                    }
                  }}
                >
                  <UINewTypography
                    sx={{
                      fontSize: '32px',
                      fontWeight: 800,
                      lineHeight: '44.8px',
                      background: 'linear-gradient(90deg, #FBA631, #FFFFFF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    100
                    <FormattedMessage id="FREE" />
                    <FormattedMessage id="Creditss" />
                  </UINewTypography>
                </Box>
              </Box>
              <Box sx={{ width: '100%', maxWidth: '332px', display: 'flex', textAlign: 'center' }}>
                <UINewTypography variant="buttonLargeMenu" color="text.secondary">
                  <FormattedMessage id="JoinNowAndEnjoyAFREEVideo" />
                </UINewTypography>
              </Box>
            </Box>
            <Timer />
          </Box>
        )}
        {children}
      </Box>
    </AuthCommonBox>
  );
};

export default AuthHomePageFreeSignupCommon;
