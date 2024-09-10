import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import {
  BoostBox,
  BoostSuccessBoxImage,
  BoostSuccessBoxMain,
  BoostSucessBox,
  DividerMainBox,
  UINewTypographySuccessBoost
} from './boostProfile.styled';

const BoostSuccess = ({ activePlanHours, activePlanMins }: { activePlanHours: number; activePlanMins: number }) => {
  return (
    <>
      <DividerMainBox />
      <BoostBox>
        <BoostSucessBox>
          <BoostSuccessBoxImage
            sx={{
              backgroundImage: 'url(/images/boostProfile/fire-ani.gif)'
            }}
          />
          <BoostSuccessBoxMain>
            <UINewTypography variant="buttonLargeMenu" color="common.white">
              <FormattedMessage id="ProfileBoostedFor" /> {activePlanHours ? activePlanHours : ''} <FormattedMessage id="Hours" />{' '}
              <FormattedMessage id="And" /> {activePlanMins && activePlanMins} {activePlanMins && <FormattedMessage id="Mins" />}
            </UINewTypography>
            <UINewTypographySuccessBoost>
              {activePlanHours}:{activePlanMins}
            </UINewTypographySuccessBoost>
          </BoostSuccessBoxMain>
        </BoostSucessBox>
      </BoostBox>
    </>
  );
};

export default BoostSuccess;
