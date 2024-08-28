import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { ReactNode } from 'react';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import { AuthCommonBox, AuthImageBox } from './AuthFreeCreditsSignupCommon.styled';
import { FormattedMessage } from 'react-intl';

const AuthFreeCreditsSignupCommon = ({
  onClose,
  image,
  mobileImage,
  variant,
  children,
  modelName
}: {
  onClose: () => void;
  image: string;
  mobileImage: string;
  variant?: string;
  children: ReactNode;
  modelName: string;
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
              paddingTop: '280px',
              paddingLeft: '26px'
            }}
          >
            <Box component="img" src="/images/home/free-credits-signup-img.png" />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: '367px',
                  display: 'flex',
                  textAlign: 'center',
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
                  {modelName} <FormattedMessage id="GaveYou" /> 30 <FormattedMessage id="FREECredits" />
                </UINewTypography>
              </Box>
              <Box sx={{ width: '100%', maxWidth: '248px', display: 'flex', textAlign: 'center' }}>
                <UINewTypography>
                  {' '}
                  <FormattedMessage id="JoinNowAndEnjoy" /> {modelName}
                </UINewTypography>
              </Box>
            </Box>
          </Box>
        )}
        {children}
      </Box>
    </AuthCommonBox>
  );
};

export default AuthFreeCreditsSignupCommon;
