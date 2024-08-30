import { DialogContent, Box } from '@mui/material';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  MainDailgFristBox,
  DividerBox,
  ForBox,
  FiveBox,
  FirstBoxRequestSubmit,
  SecondBoxRequestSubmit,
  UINewTypographyYourRequestHasBeenSubmitted,
  UINewTypographyYourTheRequestWill,
  TextBox
} from './PayoutRequestSubmit.styled';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
const Requestsubmit = ({ handlePayoutStepSubmit }: { handlePayoutStepSubmit?: (step: number) => void }) => {
  const handleClose = () => {
    if (handlePayoutStepSubmit) {
      handlePayoutStepSubmit;
    }
  };
  return (
    <>
      <FirstBoxRequestSubmit>
        <SecondBoxRequestSubmit>
          <TextBox color={'text.primary'}>
            <FormattedMessage id="RequestAPayout" />
          </TextBox>

          <IconButton aria-label="close" sx={{ color: 'text.secondary' }} onClick={() => handleClose()}>
            <CloseIcon />
          </IconButton>
        </SecondBoxRequestSubmit>
        <MainDailgFristBox>
          <DividerBox
            sx={{
              display: { sm: 'block', display: 'none' }
            }}
          />

          <DialogContent sx={{ p: 0 }}>
            <ForBox>
              <Box component={'img'} src="/images/payout/payoutSuccess.webp" sx={{ width: '214px', height: '169px' }} />
              <FiveBox>
                <UINewTypographyYourRequestHasBeenSubmitted>
                  <FormattedMessage id="YourRequestHasBeenSubmitted" />
                </UINewTypographyYourRequestHasBeenSubmitted>
                <UINewTypographyYourTheRequestWill>
                  <Box>
                    <FormattedMessage id="PaymentsWillBeMadeEvery" />
                  </Box>
                  <FormattedMessage id="ForAnyHelpAndSupport" />{' '}
                  <Link href="mailto:support@flirtbate.com">
                    <Box component={'span'} sx={{ color: 'primary.600', cursor: 'pointer' }}>
                      <FormattedMessage id="ContactAdmin" />
                    </Box>
                  </Link>
                </UINewTypographyYourTheRequestWill>
              </FiveBox>
            </ForBox>
          </DialogContent>
        </MainDailgFristBox>
      </FirstBoxRequestSubmit>
    </>
  );
};

export default Requestsubmit;
