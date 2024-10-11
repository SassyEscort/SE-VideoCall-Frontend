import { memo } from 'react';

import {
  CreditListMainBox,
  CreditSideMainDrawer,
  CreditsContent,
  CreditsHeader,
  CurrentBalanceBox,
  CurrentBalanceInnerBox,
  CurrentBalanceTypography,
  MainImageBox,
  TitleSerachBox
} from './CreditSideDrawer.styled';
import { Box, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import UINewTypography from 'components/UIComponents/UINewTypography';

const CreditSideDrawer = ({ open, handleClose }: { open: boolean; handleClose: () => void }) => {
  return (
    <CreditSideMainDrawer anchor="right" open={open} onClose={handleClose}>
      {/* <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}> */}
      <CreditsHeader>
        <TitleSerachBox>
          <UINewTypography variant="h3" fontSize={30} color="text.secondary">
            Add credits
          </UINewTypography>
        </TitleSerachBox>
        <IconButton onClick={handleClose}>
          <Close sx={{ color: 'text.secondary', height: 40, width: 40 }} />
        </IconButton>
      </CreditsHeader>
      <CreditsContent>
        <CurrentBalanceBox sx={{}}>
          <CurrentBalanceInnerBox>
            <CurrentBalanceTypography>Current Balance : </CurrentBalanceTypography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box component={'img'} src="/images/credits/coinwthIcon.png" alt="coin.png" width={26} height={26} />
              <CurrentBalanceTypography>40</CurrentBalanceTypography>
            </Box>
          </CurrentBalanceInnerBox>
        </CurrentBalanceBox>
        <MainImageBox sx={{}}></MainImageBox>
        <CreditListMainBox sx={{}}>bottom part</CreditListMainBox>
      </CreditsContent>
      {/* </Box> */}
    </CreditSideMainDrawer>
  );
};

export default memo(CreditSideDrawer);
