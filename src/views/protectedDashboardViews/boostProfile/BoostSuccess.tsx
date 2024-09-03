import { Box } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import { UINewTypographySuccessBoost } from './BoostProfile.styled';

const BoostSuccess = () => {
  return (
    <Box width="100%" display="flex" gap="32px" flexDirection="column" alignItems="center">
      <Box
        sx={{
          backgroundImage: 'url(/images/boostFeature/fire.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          maxWidth: '109px',
          height: 'auto',
          minHeight: '150px'
        }}
      />
      <Box display="flex" gap="16px" flexDirection="column" alignItems="center">
        <UINewTypography variant="buttonLargeMenu" color="common.white">
          <FormattedMessage id="ProfileBoosted" />
        </UINewTypography>
        <UINewTypographySuccessBoost>01:59</UINewTypographySuccessBoost>
      </Box>
    </Box>
  );
};

export default BoostSuccess;
