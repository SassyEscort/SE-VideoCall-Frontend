import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import { IconButtonCheckBox } from './CheckInbox.styled';
import { FormattedMessage } from 'react-intl';

const CheckInbox = ({ onClose, email }: { onClose: () => void; email: string }) => {
  return (
    <Box sx={{ marginTop: { xs: '100px', sm: 0 } }}>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Image src="/images/auth/check-email.png" width={175} height={123} alt="check-email.png" />
        <Box display="flex" alignItems="flex-end" justifyContent="flex-end">
          <IconButtonCheckBox onClick={onClose}>
            <CloseIcon />
          </IconButtonCheckBox>
        </Box>
        <Box display="flex" flexDirection="column" gap="12px" alignItems="center">
          <UINewTypography variant="MediumSemiBoldText" color="common.white">
            <FormattedMessage id="CheckYourInbox" />
          </UINewTypography>
          <UINewTypography variant="bodyRegular" color="secondary.200" textAlign="center">
            <FormattedMessage id="ALinkToResetYourPassword" />{' '}
            <UINewTypography variant="bodySemiBold" color="text.primary">
              {email}
            </UINewTypography>
          </UINewTypography>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckInbox;
