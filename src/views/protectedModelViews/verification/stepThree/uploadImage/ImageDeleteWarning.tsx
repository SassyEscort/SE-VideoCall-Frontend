import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Divider } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import StyleButtonV2 from 'components/UIComponents/StyleLoadingButton';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { FormattedMessage } from 'react-intl';
import { DialogContentSecondBox } from 'views/modelViews/checkInBox/CheckInBox.styled';
import {
  DialogContentMain,
  DialogTitleBox,
  DialogContentFristBox,
  DialogContentBoxQuestion,
  DialogContentBoxButton,
  DialogContentBoxUIThemeButton
} from 'views/protectedViews/logout/Logout.styled';
import { ErrorMessage } from 'constants/common.constants';
import { VerificationFormStep5TypeV2 } from '.';

const ImageDeleteWarning = ({
  open,
  onClose,
  values,
  handleSubmit,
  handleCancel
}: {
  open: boolean;
  onClose: () => void;
  handleSubmit: (values: VerificationFormStep5TypeV2) => Promise<void>;
  values: VerificationFormStep5TypeV2;
  handleCancel: () => void;
}) => {
  const [loading, setLoading] = useState(false);

  const handleConfirmDelete = async () => {
    setLoading(true);
    try {
      handleSubmit(values);
      onClose();
    } catch (error) {
      toast.error(ErrorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelChanges = () => {
    handleCancel();
    onClose();
  };

  return (
    <DialogContentMain open={open} onClose={handleCancelChanges} fullWidth>
      <DialogTitleBox id="responsive-modal-title">
        <UINewTypography variant="h6">
          <FormattedMessage id="ImagesDelete" />
        </UINewTypography>

        <IconButton
          aria-label="close"
          onClick={handleCancelChanges}
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
                <FormattedMessage id="AreYouSureImageDelete" />
              </UINewTypography>
            </DialogContentBoxQuestion>
            <DialogContentBoxButton>
              <StyleButtonV2 variant="contained" sx={{ width: '100%', maxWidth: '231px' }} onClick={handleConfirmDelete} loading={loading}>
                <UINewTypography variant="buttonLargeBold" color={'primary.200'}>
                  <FormattedMessage id="Confirm" />
                </UINewTypography>
              </StyleButtonV2>
              <DialogContentBoxUIThemeButton onClick={handleCancelChanges}>
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

export default ImageDeleteWarning;
