'use client';
import Box from '@mui/material/Box';
import StyleButtonV2 from 'components/UIComponents/StyleLoadingButton';
import UINewTypography from 'components/UIComponents/UINewTypography';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FormattedMessage } from 'react-intl';

function NotFoundPage() {
  const pathName = usePathname();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
      <Image alt="404 NOT FOUND PAGE" src="/images/404page.png" width={455} height={230} />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, textAlign: 'center' }}>
          <UINewTypography variant="h3" color="text.secondary">
            <FormattedMessage id="SorryThatPage" />
          </UINewTypography>
          <UINewTypography variant="bodyRegular" color="text.primary">
            <FormattedMessage id="ThePageYouAre" />
          </UINewTypography>
        </Box>
        <StyleButtonV2 variant="contained" href={pathName.startsWith('/model') ? '/model' : '/'}>
          <FormattedMessage id="GoToHomePage" />
        </StyleButtonV2>
      </Box>
    </Box>
  );
}

export default NotFoundPage;
