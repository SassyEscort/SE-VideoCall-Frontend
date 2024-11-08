import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { CHATROOM } from 'constants/languageConstants';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';

const ChatRoomDropdown = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <FormControl
      sx={{
        display: 'flex',
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none'
        },
        '& .MuiInputBase-input': {
          p: '0px !important',
          mt: '5px'
        },
        '& .mui-lleihv-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root': {
          padding: '0px !important'
        }
      }}
    >
      <Select
        value="Chat Room"
        autoWidth
        size="small"
        open={open}
        onClose={() => setOpen(false)}
        onClick={handleToggle}
        sx={{
          paddingRight: 0,
          '& .MuiSelect-icon': {
            display: 'none'
          }
        }}
        endAdornment={
          <KeyboardArrowDownRoundedIcon
            sx={{ height: 16, width: 16, color: 'common.white', paddingRight: '0px !important', cursor: 'pointer' }}
          />
        }
        renderValue={() => (
          <Box style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Typography marginRight={0.5} variant="buttonLargeMenu" color="text.secondary">
              <FormattedMessage id="ChatRoom" />
            </Typography>
          </Box>
        )}
      >
        {CHATROOM?.map((chat, key: number) => (
          <MenuItem key={key} value={chat.id}>
            <Link href={chat.url} passHref onClick={() => setOpen(false)}>
              <Typography variant="buttonLargeMenu" color="text.secondary">
                <FormattedMessage id={chat.title} />
              </Typography>
            </Link>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ChatRoomDropdown;
