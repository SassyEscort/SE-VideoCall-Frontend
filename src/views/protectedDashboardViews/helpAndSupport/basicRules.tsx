'use client';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { DialogTitle, useMediaQuery } from '@mui/material';

import theme from 'themes/theme';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { DialogBoxContainer, DialogTitleBox } from './basicRules.styled';
import { FormattedMessage } from 'react-intl';

const BasicRules = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <DialogBoxContainer
      open={open}
      onClose={onClose}
      scroll="body"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          border: isMdDown ? 'solid 0px' : 'solid 1px #FF68C0A3'
        },
        '& .MuiDialog-container': {
          backgroundColor: isMdDown ? '#07030E' : '#07030e99 !important'
        }
      }}
    >
      <DialogTitleBox id="responsive-modal-title">
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: (theme) => theme.palette.text.secondary
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitleBox>

      <DialogContent sx={{ paddingLeft: '32px', paddingRight: '58px', maxWidth: '830px' }} dividers>
        <DialogTitle sx={{ padding: 0, marginBottom: '36px' }} id="customized-dialog-title">
          <UINewTypography variant="bodyLight" color="text.primary">
            <FormattedMessage id="TheFollowingRules" />
          </UINewTypography>
        </DialogTitle>

        <li>
          <UINewTypography variant="bodyLight" color="text.primary" gutterBottom>
            <FormattedMessage id="APersonAppearing" />
          </UINewTypography>
        </li>
        <li>
          <UINewTypography variant="bodyLight" color="text.primary">
            <FormattedMessage id="UnregisteredPerson" />
          </UINewTypography>
        </li>
        <li>
          <UINewTypography variant="bodyLight" color="text.primary">
            <FormattedMessage id="UnderagePerson" />
          </UINewTypography>
        </li>
        <li>
          <UINewTypography variant="bodyLight" color="text.primary">
            <FormattedMessage id="PerformersAreProhibitedFromLeaving" />
          </UINewTypography>
        </li>
        <li>
          <UINewTypography variant="bodyLight" color="text.primary">
            <FormattedMessage id="PerformersAreProhibitedFromSleeping" />
          </UINewTypography>
        </li>
        <li>
          <UINewTypography variant="bodyLight" color="text.primary">
            <FormattedMessage id="PerformersMustNotBroadcast" />
          </UINewTypography>
        </li>
        <li>
          <UINewTypography variant="bodyLight" color="text.primary">
            <FormattedMessage id="PerformersAreProhibitedFromDisclosing" />
          </UINewTypography>
        </li>
        <li>
          <UINewTypography variant="bodyLight" color="text.primary">
            <FormattedMessage id="PromotingOtherWebsitesAndServices" />
          </UINewTypography>
        </li>
        <li>
          <UINewTypography variant="bodyLight" color="text.primary">
            <FormattedMessage id="AskingForMoneyOrSurprises" />
          </UINewTypography>
        </li>
        <li>
          <UINewTypography variant="bodyLight" color="text.primary">
            <FormattedMessage id="ItIsStrictlyForbidden" />
          </UINewTypography>
        </li>

        <DialogTitle sx={{ padding: 0, marginTop: '58px', marginBottom: '36px' }} id="responsive-modal-title">
          <UINewTypography variant="bodyLight" color="text.primary">
            <FormattedMessage id="FlirtbateReservesTheRight" />
          </UINewTypography>
        </DialogTitle>

        <li>
          <UINewTypography variant="bodyLight" color="text.primary">
            <FormattedMessage id="UnauthorizedUseOfPerformer" />
          </UINewTypography>
        </li>
        <li>
          <UINewTypography variant="bodyLight" color="text.primary">
            <FormattedMessage id="UnauthorizedUseOfMemberAccount" />
          </UINewTypography>
        </li>
        <li>
          <UINewTypography variant="bodyLight" color="text.primary">
            <FormattedMessage id="IfTheModelIsProven" />
          </UINewTypography>
        </li>
      </DialogContent>
    </DialogBoxContainer>
  );
};

export default BasicRules;
