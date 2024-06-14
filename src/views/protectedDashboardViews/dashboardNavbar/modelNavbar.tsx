import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { DashboardModelTabs } from 'constants/modelConstants';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { CommonMenuBox, DashboardSidebarBox, MainDashboardSideMenuMainBox, NavBarBoxContainer, SelectedTab } from './nav.styled';
import Link from 'next/link';

const ModelNavbar = ({ tabIndex }: { tabIndex: number }) => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <MainDashboardSideMenuMainBox>
          <NavBarBoxContainer>
            {DashboardModelTabs.map((tab, index) =>
              index === tabIndex - 1 ? (
                <Link prefetch={false} href={tab.path} key={index} style={{ textDecoration: 'none' }}>
                  <SelectedTab key={index}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', minWidth: '268px' }}>
                      <Box sx={{ display: 'flex', gap: 1.5 }}>
                        <Box
                          component="img"
                          src={tab.img}
                          sx={{
                            height: '24px',
                            width: '24px',
                            filter: 'invert(39%) sepia(43%) saturate(1339%) hue-rotate(280deg) brightness(87%) contrast(103%)'
                          }}
                        />
                        <UINewTypography variant="buttonLargeMenu" sx={{ textWrap: 'nowrap' }}>
                          {tab.name}
                        </UINewTypography>
                      </Box>
                      {index === tabIndex - 1 ? (
                        <ArrowRightOutlinedIcon sx={{ height: '24px', width: '24px' }} />
                      ) : (
                        <ArrowDropDownRoundedIcon />
                      )}
                    </Box>
                  </SelectedTab>
                </Link>
              ) : (
                <>
                  <Link prefetch={false} href={tab.path} key={index} style={{ textDecoration: 'none' }}>
                    <CommonMenuBox sx={{ color: 'text.primary' }}>
                      <DashboardSidebarBox id="basic-button">
                        <Box sx={{ display: 'flex', gap: 1.5 }}>
                          <Box component="img" src={tab.img} sx={{ filter: 'none' }} />
                          <UINewTypography variant="buttonLargeMenu" whiteSpace="nowrap">
                            {tab.name}
                          </UINewTypography>
                        </Box>
                        <ArrowDropDownRoundedIcon />
                      </DashboardSidebarBox>
                    </CommonMenuBox>
                  </Link>
                </>
              )
            )}
          </NavBarBoxContainer>
        </MainDashboardSideMenuMainBox>
      </Box>
    </>
  );
};

export default ModelNavbar;
