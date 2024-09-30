import Link from 'next/link';
import Box from '@mui/material/Box';
import { MainDashboardTabs } from 'constants/escortConstants';

import UINewTypography from 'components/UIComponents/UINewTypography';
import { CommonMenuBox, MainDashboardSideMenuMainBox, NavBarBoxContainer, SelectedTab } from './nav.styled';
import { useIntl } from 'react-intl';

const Navbar = ({ tabIndex }: { tabIndex: number }) => {
  const intl = useIntl();

  return (
    <MainDashboardSideMenuMainBox>
      <NavBarBoxContainer>
        {MainDashboardTabs?.map((tab, index) =>
          index === tabIndex - 1 ? (
            <Link prefetch={false} href={tab?.path} key={index} style={{ textDecoration: 'none' }}>
              <SelectedTab>
                <Box
                  component="img"
                  src={tab?.img}
                  alt={tab?.name || 'tab'}
                  sx={{
                    filter: 'invert(39%) sepia(43%) saturate(1339%) hue-rotate(280deg) brightness(87%) contrast(103%)'
                  }}
                />
                <UINewTypography variant="buttonLargeMenu">{intl.formatMessage({ id: tab.name })}</UINewTypography>
              </SelectedTab>
            </Link>
          ) : (
            <>
              <Link prefetch={false} href={tab?.path} key={index} style={{ textDecoration: 'none' }}>
                <CommonMenuBox sx={{ color: 'text.primary' }}>
                  <Box component="img" src={tab?.img} alt={tab?.name || 'tab'} />
                  <UINewTypography variant="buttonLargeMenu">{intl.formatMessage({ id: tab.name })}</UINewTypography>
                </CommonMenuBox>
              </Link>
            </>
          )
        )}
      </NavBarBoxContainer>
    </MainDashboardSideMenuMainBox>
  );
};

export default Navbar;
