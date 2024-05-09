import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { ReactNode } from 'react';
import { AuthCommonBox, AuthImageBox, AuthImageMobileBox } from './AuthCommon.styled';

const AuthCommon = ({
  onClose,
  image,
  mobileImage,
  children
}: {
  onClose: () => void;
  image: string;
  mobileImage: string;
  children: ReactNode;
}) => {
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
      <AuthImageMobileBox
        sx={{
          backgroundImage: `linear-gradient(rgba(7, 3, 14, 0.80), rgba(7, 3, 14, 0.84)), url(${mobileImage})`
        }}
      />
      <Box display="flex" gap={1.5}>
        <AuthImageBox
          sx={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.47), rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0.93)), url(${image})`
          }}
        />
        {children}
      </Box>
    </AuthCommonBox>
  );
};

export default AuthCommon;
