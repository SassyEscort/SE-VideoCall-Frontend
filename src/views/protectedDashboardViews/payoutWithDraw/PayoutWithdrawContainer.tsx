import { Box, DialogContent, IconButton } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import { FormattedMessage } from 'react-intl';
import {
  SecondBox,
  ThreeBox,
  ForBox,
  FiveBox,
  SixBox,
  SevenBox,
  ChooseYourBankFristBox,
  ChooseYourBankSecondBox,
  ChooseYourBankthreeBox,
  PayoutDetails,
  PayoutFirstBox,
  PayoutSecondBox,
  PayoutThreeBox,
  PayoutDetailSecondBox,
  PayoutDetailThreeBox,
  PayoutDetailForBox,
  PayoutDetailFiveBox,
  PayoutDetailSixBox,
  FirstBox,
  ImageBox,
  SmallScreenBox,
  SamllScreenFirstBox,
  ExpandIcon
} from './PayoutWidthDraw';
import CloseIcon from '@mui/icons-material/Close';
import { DividerBox } from '../payoutRequestSubmit/PayoutRequestSubmit';

const PayoutWithdrawContainer = () => {
  return (
    <>
      <SmallScreenBox>
        <SamllScreenFirstBox>
          <Box>
            <UINewTypography variant="h6" color={'secondary.200'}>
              <FormattedMessage id="RequestAPayout" />
            </UINewTypography>
          </Box>
          <Box>
            <IconButton
              aria-label="close"
              sx={{
                color: (theme) => theme.palette.text.secondary
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </SamllScreenFirstBox>

        <FirstBox>
          <DividerBox
            sx={{
              display: { sm: 'block', display: 'none' }
            }}
          />
          <DialogContent sx={{ p: 0 }}>
            <SecondBox>
              <ThreeBox>
                <ForBox>
                  <FiveBox>
                    <UINewTypography color="text.primary" variant="SubtitleSmallMedium" sx={{ textWrap: 'nowrap' }}>
                      <FormattedMessage id="GetPaidIn" />
                    </UINewTypography>
                    <SixBox>
                      <SevenBox>
                        <ImageBox src="/images/payout/pay.webp" />
                        <UINewTypography color={'text.primary'} variant="SubtitleSmallMedium" sx={{ textWrap: 'nowrap' }}>
                          <FormattedMessage id="USD" />
                        </UINewTypography>
                      </SevenBox>
                      <ExpandIcon />
                    </SixBox>
                  </FiveBox>
                  <Box>
                    <UINewTypography variant="buttonLargeMenu" sx={{ textWrap: 'nowrap' }}>
                      <FormattedMessage id="YourBalance" />
                    </UINewTypography>
                    <UINewTypography variant="bodySemiBold" color={'text.secondary'} sx={{ textWrap: 'nowrap' }}>
                      : $20.000
                    </UINewTypography>
                  </Box>
                </ForBox>
                <Box>
                  <UIStyledInputText fullWidth sx={{ height: '70px' }} />
                </Box>
              </ThreeBox>
              <ChooseYourBankFristBox>
                <ChooseYourBankSecondBox>
                  <ChooseYourBankthreeBox>
                    <UINewTypography color={'text.primary'} variant="SubtitleSmallMedium">
                      <FormattedMessage id="ChooseYourBank" />
                    </UINewTypography>
                    <PayoutDetails>
                      <PayoutFirstBox>
                        <Box component={'img'} src="/images/payout/home.png" width={'48px'} height={'48px'} color={'text.secondary'} />
                        <PayoutSecondBox>
                          <UINewTypography variant="h6" color="text.secondary">
                            <FormattedMessage id="SiliconValleyBank" />
                          </UINewTypography>
                          <UINewTypography>Aesha Finn | 2345678910</UINewTypography>
                        </PayoutSecondBox>
                      </PayoutFirstBox>
                      <PayoutThreeBox>
                        <Box component={'img'} src="/images/payout/edit.webp" sx={{ width: '18px', height: '18px' }} />
                        <Box component={'img'} src="/images/payout/delete.webp" sx={{ width: '16px', height: '18px' }} />
                      </PayoutThreeBox>
                    </PayoutDetails>
                  </ChooseYourBankthreeBox>
                  <PayoutDetailSecondBox>
                    <PayoutDetailThreeBox>
                      <Box component={'img'} src="/images/payout/home.png" width={'48px'} height={'48px'} color={'text.secondary'} />
                      <PayoutDetailForBox>
                        <UINewTypography variant="h6" color="text.secondary">
                          <FormattedMessage id="SiliconValleyBank" />
                        </UINewTypography>
                        <UINewTypography variant="buttonLargeMenu" color="text.primary">
                          Aesha Finn | 2345678910
                        </UINewTypography>
                      </PayoutDetailForBox>
                    </PayoutDetailThreeBox>
                    <PayoutDetailFiveBox>
                      <Box component={'img'} src="/images/payout/edit.webp" sx={{ width: '18px', height: '18px' }} />
                      <Box component={'img'} src="/images/payout/delete.webp" sx={{ width: '16px', height: '18px' }} />
                    </PayoutDetailFiveBox>
                  </PayoutDetailSecondBox>
                </ChooseYourBankSecondBox>
                <PayoutDetailSixBox>
                  <Box>
                    <UINewTypography variant="bodySemiBold" color={'secondary.200'}>
                      <FormattedMessage id="Remarks" />
                    </UINewTypography>
                  </Box>

                  <UIStyledInputText multiline rows={4.9} fullWidth />
                </PayoutDetailSixBox>

                <UIThemeButton variant="contained" sx={{ width: '100%' }}>
                  <UINewTypography variant="buttonLargeBold" color={'primary.200'}>
                    <FormattedMessage id="Confirm" />
                  </UINewTypography>
                </UIThemeButton>
              </ChooseYourBankFristBox>
            </SecondBox>
          </DialogContent>
        </FirstBox>
      </SmallScreenBox>
    </>
  );
};

export default PayoutWithdrawContainer;
