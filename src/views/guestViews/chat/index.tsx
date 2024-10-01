import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React from 'react';
import { ImageContainer } from './Chat.styled';

const ChatFeature = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        maxWidth: '884px',
        height: '100%',
        backgroundColor: '#100B19',
        border: '1px solid ',
        borderRadius: '24px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '372px',
          gap: 4,
          paddingLeft: '20px',
          paddingTop: '20px',
          paddingRight: '32px',
          paddingBottom: '20px'
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <UINewTypography variant="newTitle" color="text.primary">
            Chat
          </UINewTypography>
          <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                minWidth: '12px',
                height: '100%',
                maxHeight: '12px',
                border: '1px  #79E02852',
                borderRadius: '50%',
                backgroundColor: '#79E02852'
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  maxWidth: '8px',
                  height: '100%',
                  maxHeight: '8px',
                  border: '1px  #79E028',
                  borderRadius: '50%',
                  backgroundColor: '#79E028'
                }}
              ></Box>
            </Box>
            <UINewTypography variant="SubtitleSmallMedium" color="text.primary">
              (2)
            </UINewTypography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            width: '100%',
            maxWidth: '320px',
            height: '100%',
            maxHeight: '52px',
            px: '16px',
            py: '20px',
            border: '1px solid red',
            borderRadius: '8px',
            alignItems: 'center'
          }}
        >
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            hii
            <UINewTypography variant="buttonLargeMenu" color="text.secondary">
              Search for a profile
            </UINewTypography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box sx={{ display: 'flex', width: '100%', height: '100%', minHeight: '73px', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: 1.5, width: '100%' }}>
              <ImageContainer />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                <UINewTypography variant="buttonLargeBold" color="text.secondary">
                  Kat Winter
                </UINewTypography>
                <UINewTypography variant="SubtitleSmallMedium" color="text.primary">
                  Hey Sammy, How are...
                </UINewTypography>
              </Box>
            </Box>

            <UINewTypography variant="bodySmall" color="text.primary" sx={{ whiteSpace: 'nowrap' }}>
              30 mins ago
            </UINewTypography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '20px',
          paddingTop: '20px',
          paddingRight: '32px',
          paddingBottom: '20px',
          justifyContent: 'space-between',
          width: '100%'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box sx={{ display: 'flex', paddingRight: '20px', paddingLeft: '20px', width: '100%', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                hhhhh
                <UINewTypography variant="subtitle" color="text.secondary">
                  Aesha
                </UINewTypography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  minWidth: '12px',
                  height: '100%',
                  maxHeight: '12px',
                  border: '1px  #79E02852',
                  borderRadius: '50%',
                  backgroundColor: '#79E02852'
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: '8px',
                    height: '100%',
                    maxHeight: '8px',
                    border: '1px  #79E028',
                    borderRadius: '50%',
                    backgroundColor: '#79E028'
                  }}
                ></Box>
              </Box>
            </Box>
            hhh
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', paddingRight: '32px', gap: 1 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box
                sx={{
                  display: 'flex',
                  height: '100%',
                  minHeight: '46px',
                  px: '16px',
                  py: '12px',
                  border: '1px solid #1E0815',
                  borderRadius: '8px',
                  justifyContent: 'end'
                }}
              >
                <UINewTypography variant="body1" color="text.secondary">
                  Hey Aesha, are you available at 8 in the evening?
                </UINewTypography>
              </Box>

              <UINewTypography variant="SubtitleSmallRegular" color="secondary.700" sx={{ display: 'flex', justifyContent: 'end' }}>
                6:34 PM
              </UINewTypography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box
                sx={{
                  display: 'flex',
                  height: '100%',
                  width: '100%',
                  maxWidth: 'fit-content',
                  minHeight: '46px',
                  px: '16px',
                  py: '12px',
                  border: '1px solid #611441',
                  borderRadius: '8px',
                  backgroundColor: '#611441'
                }}
              >
                <UINewTypography variant="body1" color="text.secondary">
                  Hey Aesha, are you available at 8 in the evening?
                </UINewTypography>
              </Box>

              <UINewTypography variant="SubtitleSmallRegular" color="secondary.700">
                6:38 PM
              </UINewTypography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box
                sx={{
                  display: 'flex',
                  height: '100%',
                  minHeight: '46px',
                  px: '16px',
                  py: '12px',
                  border: '1px solid #1E0815',
                  borderRadius: '8px',
                  justifyContent: 'end'
                }}
              >
                <UINewTypography variant="body1" color="text.secondary">
                  🤩 💞
                </UINewTypography>
              </Box>

              <UINewTypography variant="SubtitleSmallRegular" color="secondary.700" sx={{ display: 'flex', justifyContent: 'end' }}>
                6:34 PM
              </UINewTypography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatFeature;
