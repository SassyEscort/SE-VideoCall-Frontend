import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { lazy, ReactNode } from 'react';
const AuthCommonBox = lazy(() => import('./../AuthCommon.styled').then((module) => ({ default: module.AuthCommonBox })));
const AuthImageBox = lazy(() => import('./../AuthCommon.styled').then((module) => ({ default: module.AuthImageBox })));
const AuthImageMobileBox = lazy(() => import('./../AuthCommon.styled').then((module) => ({ default: module.AuthImageMobileBox })));

const NewAuthCommon = ({
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
  return (
    <AuthCommonBox sx={{ maxWidth: '1080px' }}>
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
      <AuthImageMobileBox
        sx={{
          backgroundImage: `linear-gradient(rgba(7, 3, 14, 0.80), rgba(7, 3, 14, 0.84)), url(${mobileImage})`
        }}
      />
      <Box display="flex" gap={1.5}>
        <AuthImageBox
          sx={{
            height: 'auto',
            backgroundPosition: variant === 'resetPassword' ? { xs: 'center', md: 'right' } : 'right',
            maxWidth: variant === 'resetPassword' ? 434 : 420,
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.47), rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0.93)), url(${image})`
          }}
        />
        {children}
      </Box>
    </AuthCommonBox>
  );
};

export default NewAuthCommon;
