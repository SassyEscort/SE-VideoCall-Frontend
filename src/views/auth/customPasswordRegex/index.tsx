import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { FormattedMessage } from 'react-intl';
import { AuthCommonBox } from '../AuthCommon.styled';
import { MainBoxContainer } from './customPasswordRegex.styled';

const CustomPasswordRegex = ({ password }: { password: string }) => {
  const isBetweenLength = password.length >= 8 && password.length <= 124;
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return (
    <>
      <MainBoxContainer>
        <AuthCommonBox color="text.secondary">
          <FormattedMessage id="UseAPassword" />
        </AuthCommonBox>
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
              alt="check_fill"
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
            <FormattedMessage id="Between8And124" />
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
              alt="check_fill"
            />
          ) : (
            <FiberManualRecordIcon sx={{ width: '10px', height: '10px', alignSelf: 'center' }} fontSize="small" />
          )}
          <UINewTypography variant="bodyRegular" sx={{ color: 'text.secondary', lineHeight: '25.6px' }}>
            <FormattedMessage id="ContainsAtLeast" />
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
              alt="check_fill"
            />
          ) : (
            <FiberManualRecordIcon sx={{ width: '10px', height: '10px', alignSelf: 'center' }} fontSize="small" />
          )}
          <UINewTypography variant="bodyRegular" sx={{ color: 'text.secondary', lineHeight: '25.6px' }}>
            <FormattedMessage id="ContainsAtleast" />
          </UINewTypography>
        </Box>
      </MainBoxContainer>
    </>
  );
};

export default CustomPasswordRegex;
