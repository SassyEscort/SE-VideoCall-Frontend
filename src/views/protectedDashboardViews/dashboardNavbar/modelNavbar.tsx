import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { DashboardModelTabs } from 'constants/modelConstants';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import {
  CommonMenuBox,
  DashboardSidebarBox,
  FirstBoxContainer,
  MainDashboardSideMenuMainBox,
  NavBarBoxContainer,
  SecondBoxContainer,
  SelectedTab
} from './nav.styled';
import Link from 'next/link';
import { useIntl } from 'react-intl';

const ModelNavbar = ({ tabIndex }: { tabIndex: number }) => {
  const intl = useIntl();

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <MainDashboardSideMenuMainBox>
          <NavBarBoxContainer>
            {DashboardModelTabs?.map((tab, index) =>
              index === tabIndex - 1 ? (
                <Link prefetch={false} href={tab?.path} key={index} style={{ textDecoration: 'none' }}>
                  <SelectedTab key={index}>
                    <FirstBoxContainer>
                      <SecondBoxContainer>
                        <Box
                          component="img"
                          src={tab?.img}
                          alt={tab?.name || 'tab'}
                          sx={{
                            filter: 'invert(39%) sepia(43%) saturate(1339%) hue-rotate(280deg) brightness(87%) contrast(103%)',
                            ...(tabIndex === 1 && { filter: 'none' })
                          }}
                        />
                        <UINewTypography
                          variant="buttonLargeMenu"
                          sx={{
                            textWrap: 'nowrap',
                            ...(tabIndex === 1 && {
                              background: 'linear-gradient(90deg, #E25C5C 0%, #FF5A00 21.5%, #FF9A00 50.5%, #FFCE00 76.5%, #FFE808 100%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent'
                            })
                          }}
                        >
                          {intl.formatMessage({ id: tab.name })}
                        </UINewTypography>
                      </SecondBoxContainer>
                      {index === tabIndex - 1 ? (
                        <ArrowRightOutlinedIcon sx={{ height: '24px', width: '24px' }} />
                      ) : (
                        <ArrowDropDownRoundedIcon />
                      )}
                    </FirstBoxContainer>
                  </SelectedTab>
                </Link>
              ) : (
                <Link prefetch={false} href={tab?.path} key={index} style={{ textDecoration: 'none' }}>
                  <CommonMenuBox sx={{ color: 'text.primary' }}>
                    <DashboardSidebarBox id="basic-button">
                      <SecondBoxContainer>
                        <Box component="img" src={tab.img} alt={tab.name} sx={{ filter: 'none' }} />
                        <UINewTypography variant="buttonLargeMenu" whiteSpace="nowrap">
                          {intl.formatMessage({ id: tab.name })}
                        </UINewTypography>
                      </SecondBoxContainer>
                      <ArrowDropDownRoundedIcon />
                    </DashboardSidebarBox>
                  </CommonMenuBox>
                </Link>
              )
            )}
          </NavBarBoxContainer>
        </MainDashboardSideMenuMainBox>
      </Box>
    </>
  );
};

export default ModelNavbar;
