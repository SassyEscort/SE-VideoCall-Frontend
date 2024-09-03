'use client';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { DialogTitleBox } from '../payoutWithDraw/PayoutWidthDraw';
import { BoostProfileDialogConatiner } from './BoostProfile2.styled';
import BoostSuccess from './BoostSuccess';

const BoostProfileDialog = () => {
  return (
    <BoostProfileDialogConatiner open={true} fullWidth scroll="body">
      <DialogTitleBox id="responsive-modal-title">
        <UINewTypography variant="h6" color={'text.primary'}>
          <FormattedMessage id="BoostProfile" />
        </UINewTypography>

        <IconButton
          aria-label="close"
          //  onClick={() => closeHandle()}
          sx={{ color: 'text.secondary' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitleBox>
      {/* <BoostProfileContent /> */}
      <BoostSuccess />
    </BoostProfileDialogConatiner>
  );
};

export default BoostProfileDialog;
