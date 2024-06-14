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
  const firstChar = modelDetails?.name ? modelDetails.name.charAt(0).toUpperCase() : '';
  return (
    <HomeMainModelContainer>
      <SiderBarMainContainer>
        <SiderBarFirstBox>
          <SiderBarFirstBox>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <SiderBarSecondBox>
                <SiderBarThiredBox>
                  <SiderBarCircaleBox></SiderBarCircaleBox>
                  <SiderBarCircaleTextBox>{firstChar}</SiderBarCircaleTextBox>
                </SiderBarThiredBox>
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
