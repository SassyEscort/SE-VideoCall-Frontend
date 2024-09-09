import { Box } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import { UINewTypographySuccessBoost } from './boostProfile.styled';

const BoostSuccess = ({ activePlanHours, activePlanMins }: { activePlanHours: number; activePlanMins: number }) => {
  return (
    <Box width="100%" display="flex" gap="32px" flexDirection="column" alignItems="center">
      <Box
        sx={{
          backgroundImage: 'url(/images/boostProfile/fire-ani.gif)',
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
          <FormattedMessage id="ProfileBoostedFor" /> {activePlanHours ? activePlanHours : ''} {activePlanMins && activePlanMins}{' '}
          {activePlanMins && <FormattedMessage id="Mins" />}
        </UINewTypography>
        <UINewTypographySuccessBoost>
          {activePlanHours}:{activePlanMins}
        </UINewTypographySuccessBoost>
      </Box>
    </Box>
  );
};

export default BoostSuccess;
