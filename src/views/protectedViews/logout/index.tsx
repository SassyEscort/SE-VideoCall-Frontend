import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Divider } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import {
  DialogContentBoxButton,
  DialogContentBoxQuestion,
  DialogContentBoxUIThemeButton,
  DialogContentFristBox,
  DialogContentMain,
  DialogContentSecondBox,
  DialogTitleBox
} from './Logout.styled';
import { signOut } from 'next-auth/react';
import StyleButtonV2 from 'components/UIComponents/StyleLoadingButton';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { FormattedMessage } from 'react-intl';
import { usePathname } from 'next/navigation';

const Logout = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const asPath = usePathname();
  // const { isCustomer } = useCallFeatureContext();

  const [loading, setLoading] = useState(false);

  const handleConfirmLogout = async () => {
    setLoading(true);
    try {
      // if (!isCustomer) {
      //   const user = await CometChatUIKit.getLoggedinUser();
      //   if (user) {
      //     await CometChatUIKit.logout();
      //   }
      // }
      await signOut({ callbackUrl: asPath.startsWith('/model') ? '/model' : '/' });
    } catch (error) {
      toast.error('Error during sign-out:');
    } finally {
      setLoading(false);
    }
  };

  return (
    <DialogContentMain open={open} onClose={onClose} fullWidth>
      <DialogTitleBox id="responsive-modal-title">
        <UINewTypography variant="h6">
          <FormattedMessage id="LogOut" />
        </UINewTypography>

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
                <FormattedMessage id="AreYouSure" />
              </UINewTypography>
            </DialogContentBoxQuestion>
            <DialogContentBoxButton>
              <StyleButtonV2 variant="contained" sx={{ width: '100%', maxWidth: '231px' }} onClick={handleConfirmLogout} loading={loading}>
                <UINewTypography variant="buttonLargeBold" color={'primary.200'}>
                  <FormattedMessage id="Confirm" />
                </UINewTypography>
              </StyleButtonV2>
              <DialogContentBoxUIThemeButton onClick={onClose}>
                <UINewTypography variant="buttonLargeBold" color={'primary.200'}>
                  <FormattedMessage id="Cancel" />
                </UINewTypography>
              </DialogContentBoxUIThemeButton>
            </DialogContentBoxButton>
          </DialogContentSecondBox>
        </DialogContentFristBox>
      </DialogContent>
    </DialogContentMain>
  );
};

export default Logout;
