import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const CheckInbox = ({ onClose, email }: { onClose: () => void; email: string }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Image src="/images/auth/check-email.png" width={175} height={123} alt="check-email.png" />
      <Box display="flex" alignItems="flex-end" justifyContent="flex-end">
        <IconButton
          size="large"
          sx={{
            color: 'common.white',
            position: 'absolute',
            top: 0,
            right: { xs: 0, md: '-84px' },
            display: { xs: 'none', sm: 'block' }
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Box display="flex" flexDirection="column" gap="12px" alignItems="center">
        <UINewTypography variant="MediumSemiBoldText" color="common.white">
          Check your inbox
        </UINewTypography>
        <UINewTypography variant="bodyRegular" color="secondary.200" textAlign="center">
          A link to reset your password has been emailed to{' '}
          <UINewTypography variant="bodySemiBold" color="text.primary">
            {email}
          </UINewTypography>
        </UINewTypography>
      </Box>
    </Box>
  );
};

export default CheckInbox;
