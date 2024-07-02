'use client';
import { useMediaQuery } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { DialogTitleBox, MainDailgConatiner } from './PayoutRequestSubmit.styled';
import theme from 'themes/theme';
import Requestsubmit from './Requestsubmit';

const PayoutRequestSubmit = ({
  open,
  onClose,
  payoutStep,
  handlePayoutStepSubmit,
  closeDailog
}: {
  open: boolean;
  onClose: () => void;
  payoutStep?: number;
  handlePayoutStepSubmit?: (step: number) => void;
  closeDailog?: () => void;
}) => {
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const closeHandle = () => {
    onClose();
    if (closeDailog) {
      closeDailog();
    }
  };
  return (
    <>
      {!isSm ? (
        <MainDailgConatiner open={open} onClose={() => closeHandle()} fullWidth scroll="body">
          <DialogTitleBox id="responsive-modal-title">
            <UINewTypography variant="h6" color={'text.primary'}>
              <FormattedMessage id="RequestAPayout" />
            </UINewTypography>

            <IconButton aria-label="close" onClick={() => closeHandle()} sx={{ color: 'text.secondary' }}>
              <CloseIcon />
            </IconButton>
          </DialogTitleBox>
          <Requestsubmit />
        </MainDailgConatiner>
      ) : (
        (isSm || payoutStep === 2) && <Requestsubmit handlePayoutStepSubmit={handlePayoutStepSubmit} />
      )}
    </>
  );
};

export default PayoutRequestSubmit;
