import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Typography } from '@mui/material';

const CustomPasswordRegex = ({ password }: { password: string }) => {
  const isBetweenLength = password.length >= 8 && password.length <= 124;
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'primary.700',
          width: '100%',
          maxWidth: '509px',
          padding: 2,
          borderRadius: '8px',
          gap: 1,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography sx={{ fontSize: '16px', lineHeight: '25.6px', color: 'text.secondary', fontWeight: '600' }}>
          Use a password you don’t use elsewhere
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignIitems: 'center',
            gap: '4px'
          }}
        >
          {isBetweenLength ? (
            <Box
              component="img"
              src="/images/icons/check-fill.svg"
              sx={{
                width: '20px',
                height: '20px'
              }}
            />
          ) : (
            <FiberManualRecordIcon
              sx={{
                width: '10px',
                height: '10px',
                alignSelf: 'center'
              }}
              fontSize="small"
            />
          )}
          <UINewTypography variant="bodyRegular" sx={{ color: 'text.secondary', lineHeight: '25.6px' }}>
            Between 8 and 124 charecters
          </UINewTypography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignIitems: 'center',
            gap: '4px'
          }}
        >
          {hasNumber ? (
            <Box
              component="img"
              src="/images/icons/check-fill.svg"
              sx={{
                width: '20px',
                height: '20px'
              }}
            />
          ) : (
            <FiberManualRecordIcon sx={{ width: '10px', height: '10px', alignSelf: 'center' }} fontSize="small" />
          )}
          <UINewTypography variant="bodyRegular" sx={{ color: 'text.secondary', lineHeight: '25.6px' }}>
            Contains at least one number
          </UINewTypography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignIitems: 'center',
            gap: '4px'
          }}
        >
          {hasSymbol ? (
            <Box
              component="img"
              src="/images/icons/check-fill.svg"
              sx={{
                width: '20px',
                height: '20px'
              }}
            />
          ) : (
            <FiberManualRecordIcon sx={{ width: '10px', height: '10px', alignSelf: 'center' }} fontSize="small" />
          )}
          <UINewTypography variant="bodyRegular" sx={{ color: 'text.secondary', lineHeight: '25.6px' }}>
            Contains atleast one symbol
          </UINewTypography>
        </Box>
      </Box>
    </>
  );
};

export default CustomPasswordRegex;
