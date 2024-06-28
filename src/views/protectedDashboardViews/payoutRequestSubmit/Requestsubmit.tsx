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
const Requestsubmit = () => {
  return (
    <>
      <FirstBoxRequestSubmit>
        <SecondBoxRequestSubmit>
          <TextBox color={'text.primary'}>
            <FormattedMessage id="RequestAPayout" />
          </TextBox>

          <IconButton aria-label="close" sx={{ color: 'text.secondary' }}>
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
                  <FormattedMessage id="TheRequestWill" />
                  <Box component={'span'} sx={{ color: 'primary.600' }}>
                    <FormattedMessage id="ContactAdmin" />
                  </Box>
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
