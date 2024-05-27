'use client';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Divider, useMediaQuery } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import {
  DialogContentBoxButton,
  DialogContentBoxQuestion,
  DialogContentBoxUIThemeButton,
  DialogContentFristBox,
  DialogContentSecondBox,
  DialogTitleBox
} from './Logout.styled';
import theme from 'themes/theme';
import { signOut } from 'next-auth/react';

const Logout = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

  const handleConfirmLogout = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          backgroundColor: '#07030E',
          borderRadius: '12px',
          border: isMdDown ? 'solid 0px' : 'solid 1px #232027'
        },
        '& .MuiDialog-container': {
          backgroundColor: isMdDown ? '#07030E' : '#07030e99 !important',
          backdropFilter: 'blur(24px)'
        }
      }}
    >
      <DialogTitleBox id="responsive-modal-title">
        <UINewTypography variant="h6">Log out</UINewTypography>

        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: (theme) => theme.palette.text.secondary
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitleBox>
      <Box>
        <Divider
          sx={{
            px: 1,
            border: '1px solid #232027',
            display: { sm: 'block', display: 'none' }
          }}
        />
      </Box>
      <DialogContent sx={{ p: 0 }}>
        <DialogContentFristBox>
          <DialogContentSecondBox>
            <DialogContentBoxQuestion>
              <UINewTypography variant="h5" lineHeight="120%">
                Are you sure you want to log out?
              </UINewTypography>
            </DialogContentBoxQuestion>
            <DialogContentBoxButton>
              <UIThemeButton variant="contained" sx={{ width: '100%', maxWidth: '231px' }} onClick={handleConfirmLogout}>
                <UINewTypography variant="buttonLargeBold" color={'primary.200'}>
                  Confirm
                </UINewTypography>
              </UIThemeButton>
              <DialogContentBoxUIThemeButton>
                <UINewTypography variant="buttonLargeBold" color={'primary.200'}>
                  Cancel
                </UINewTypography>
              </DialogContentBoxUIThemeButton>
            </DialogContentBoxButton>
          </DialogContentSecondBox>
        </DialogContentFristBox>
      </DialogContent>
    </Dialog>
  );
};

export default Logout;
