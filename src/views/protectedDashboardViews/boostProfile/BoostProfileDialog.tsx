'use client';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { DialogTitleBox } from '../payoutWithDraw/PayoutWidthDraw';
import { BoostProfileDialogConatiner } from './boostProfile.styled';
import BoostSuccess from './BoostSuccess';
import BoostProfileContent from './BoostProfileContent';
import { ProfilePlanResData } from 'services/commonApi/commonApi.services';

const BoostProfileDialog = ({
  openBoost,
  handleBoostClose,
  handleBoost,
  activeStep,
  activePlanHours,
  activePlanMins,
  planDetails
}: {
  openBoost: boolean;
  handleBoostClose: () => void;
  handleBoost: (planId: number) => Promise<void>;
  activeStep: number;
  activePlanHours: string;
  activePlanMins: string;
  planDetails: ProfilePlanResData;
}) => {
  return (
    <BoostProfileDialogConatiner open={openBoost} fullWidth scroll="body" onClose={handleBoostClose}>
      <DialogTitleBox id="responsive-modal-title">
        <UINewTypography variant="h6" color={'text.primary'}>
          <FormattedMessage id="BoostProfile" />
        </UINewTypography>

        <IconButton aria-label="close" onClick={handleBoostClose} sx={{ color: 'text.secondary' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitleBox>

      {activeStep === 0 ? (
        <BoostProfileContent planDetails={planDetails} handleBoost={handleBoost} />
      ) : (
        <BoostSuccess activePlanHours={activePlanHours} activePlanMins={activePlanMins} />
      )}
    </BoostProfileDialogConatiner>
  );
};

export default BoostProfileDialog;
