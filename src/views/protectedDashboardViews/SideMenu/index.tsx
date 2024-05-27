import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React from 'react';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { Divider } from '@mui/material';
import HomeMainModelContainer from 'views/modelViews/modelLayout/homeModelContainer';
import {
  SiderBarCircaleBox,
  SiderBarCircaleTextBox,
  SiderBarFirstBox,
  SiderBarMainContainer,
  SiderBarSecondBox,
  SiderBarSecondTextBox,
  SiderBarThiredBox
} from './SideMenu.styled';

const SideMenu = () => {
  return (
    <SiderBarMainContainer>
      <HomeMainModelContainer>
        <SiderBarFirstBox>
          <SiderBarFirstBox>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <SiderBarSecondBox>
                <SiderBarThiredBox>
                  <SiderBarCircaleBox></SiderBarCircaleBox>
                  <SiderBarCircaleTextBox>A</SiderBarCircaleTextBox>
                </SiderBarThiredBox>
                <Box
                  component="img"
                  src="/images/model/dashboard-edit-img.png"
                  sx={{
                    width: '20px',
                    height: '20px',
                    position: 'absolute'
                  }}
                />
              </SiderBarSecondBox>

              <SiderBarSecondTextBox>
                <Box>
                  <UINewTypography variant="newTitle" color="text.primary">
                    Aesha Finn
                  </UINewTypography>
                </Box>
                <Box sx={{ display: 'flex', marginLeft: '-4px' }}>
                  <StarRateRoundedIcon htmlColor="#FFB800" sx={{ width: '16px', height: '16px' }} />
                  <StarRateRoundedIcon htmlColor="#FFB800" sx={{ width: '16px', height: '16px' }} />
                  <StarRateRoundedIcon htmlColor="#FFB800" sx={{ width: '16px', height: '16px' }} />
                  <StarRateRoundedIcon htmlColor="#FFB800" sx={{ width: '16px', height: '16px' }} />
                  <StarRateRoundedIcon htmlColor="#FFB800" sx={{ width: '16px', height: '16px' }} />
                </Box>
              </SiderBarSecondTextBox>
            </Box>
            <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
          </SiderBarFirstBox>
        </SiderBarFirstBox>
      </HomeMainModelContainer>
    </SiderBarMainContainer>
  );
};

export default SideMenu;
