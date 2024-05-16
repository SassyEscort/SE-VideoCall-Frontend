import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import UINewTypography from 'components/UIComponents/UINewTypography';

const NotificationItemV2 = ({
  notification,
  isAffiliate,
  isAdmin,
  handleClickNotification,
  handleClose
}: {
  notification: any;
  isAffiliate?: boolean;
  isAdmin?: boolean;
  handleClickNotification: (index: number) => void;
  handleClose: () => void;
}) => {
  return (
    <>
      <ButtonBase LinkComponent={Link} href="/" sx={{ width: '100%' }}>
        <Box
          display="flex"
          gap={1}
          alignItems="flex-start"
          p={2.5}
          position="relative"
          width="100%"
          sx={{
            backgroundColor: 'red' ? '#290F1E' : 'transparent'
          }}
        >
          <Avatar
            sx={{
              backgroundColor: '#596296',
              height: 55,
              width: 55
            }}
          >
            icon
          </Avatar>
          <Box display="flex" flexDirection="column" gap={1} alignItems="start">
            {notification.type === 'PROFILE_REJECT' ? (
              <UINewTypography variant="subtitleLargeRegular" textAlign="start" whiteSpace="pre-line">
                <Box>Hello</Box>
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: '286px',
                    backgroundColor: '#D52A8E1A',
                    gap: 1,
                    padding: '16px 20px 16px 20px',
                    borderRadius: '8px',
                    mt: 1
                  }}
                >
                  <UINewTypography variant="SubtitleLargeBold">FeedbackFromAdmin</UINewTypography>

                  <List
                    sx={{
                      display: 'flex',
                      alignItems: 'stretch',
                      flexDirection: 'column',
                      listStyleType: 'disc',
                      listStylePosition: 'inside',
                      // pb: 0,
                      '& li:last-child': {
                        pb: 0
                      },
                      '& .MuiListItem-root': {
                        padding: 0
                      }
                    }}
                  >
                    <ListItem sx={{ display: 'list-item' }}>
                      <UINewTypography variant="bodyRegular">Title</UINewTypography>
                    </ListItem>
                  </List>
                </Box>
              </UINewTypography>
            ) : (
              <UINewTypography variant="subtitleLargeRegular" textAlign="start" whiteSpace="pre-line">
                {notification.text}{' '}
              </UINewTypography>
            )}

            <UINewTypography variant="captionLarge">{notification.createdDate}</UINewTypography>
          </Box>
        </Box>
      </ButtonBase>
      <Divider />
    </>
  );
};

export default NotificationItemV2;
