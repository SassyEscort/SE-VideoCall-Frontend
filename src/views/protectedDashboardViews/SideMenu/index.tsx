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
import { Switch } from '@mui/material';

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

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  <Box sx={{ display: 'flex', marginLeft: '-4px' }}>
                    <StarRateRoundedIcon htmlColor="#FFB800" sx={{ width: '16px', height: '16px' }} />
                    <StarRateRoundedIcon htmlColor="#FFB800" sx={{ width: '16px', height: '16px' }} />
                    <StarRateRoundedIcon htmlColor="#FFB800" sx={{ width: '16px', height: '16px' }} />
                    <StarRateRoundedIcon htmlColor="#FFB800" sx={{ width: '16px', height: '16px' }} />
                    <StarRateRoundedIcon htmlColor="#FFB800" sx={{ width: '16px', height: '16px' }} />
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Switch
                      sx={{
                        width: 30,
                        height: 19,
                        padding: 0,
                        '& .MuiSwitch-switchBase': {
                          transitionDuration: '300ms',
                          '& .MuiTouchRipple-root': {
                            height: 1.5,
                            width: 1.5,
                            left: '2px',
                            top: '1.5px'
                          },
                          '&.Mui-checked': {
                            border: 'none',
                            transform: 'translateX(12px)',
                            '& + .MuiSwitch-track': {
                              border: 'none',
                              backgroundColor: '#79E02833',
                              opacity: 1
                            },
                            '&.MuiSwitch-switchBase .MuiSwitch-thumb': {
                              boxShadow: 'none',
                              height: 12,
                              width: 12,
                              backgroundColor: 'success.100'
                            }
                          }
                        },
                        '& .MuiSwitch-thumb': {
                          position: 'relative',
                          backgroundColor: 'text.primary',
                          marginLeft: '-4px',
                          bottom: '6px',
                          width: 12,
                          height: 12
                        },
                        '& .MuiSwitch-track': {
                          border: '3px solid',
                          borderColor: 'text.disabled',
                          borderRadius: '12px',
                          backgroundColor: 'secondary.light',
                          opacity: 1
                        }
                      }}
                    />

                    <UINewTypography variant="SubtitleSmallMedium" color="secondary.700">
                      Availability
                      {/* Not Available */}
                    </UINewTypography>
                  </Box>
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
