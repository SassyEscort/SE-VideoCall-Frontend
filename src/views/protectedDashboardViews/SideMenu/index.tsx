import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React from 'react';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
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
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';

const SideMenu = ({ modelDetails }: { modelDetails: ModelDetailsResponse }) => {
  return (
    <HomeMainModelContainer>
      <SiderBarMainContainer>
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
                    {modelDetails?.name}
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
          </SiderBarFirstBox>
        </SiderBarFirstBox>
      </SiderBarMainContainer>
    </HomeMainModelContainer>
  );
};

export default SideMenu;
