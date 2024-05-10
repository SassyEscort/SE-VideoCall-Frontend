import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import Image from 'next/image';

const CheckInbox = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Image src="/images/auth/check-email.png" width={175} height={123} alt="check-email.png" />
      <Box display="flex" flexDirection="column" gap="12px" alignItems="center">
        <UINewTypography variant="MediumSemiBoldText" color="common.white">
          Check your inbox
        </UINewTypography>
        <UINewTypography variant="bodyRegular" color="secondary.200" textAlign="center">
          Enter your email and we&apos;ll send you instructions on how to reset your password.
        </UINewTypography>
      </Box>
    </Box>
  );
};

export default CheckInbox;
