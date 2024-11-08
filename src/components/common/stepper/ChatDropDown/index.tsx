import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { CHATROOM } from 'constants/languageConstants';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';
import { DropdownStyledBox, DropdownStyledFormControl, KeyboardArrowDownRoundedIconStyled } from './ChatRoomDrop.styled';

const ChatRoomDropdown = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <DropdownStyledFormControl>
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
        endAdornment={<KeyboardArrowDownRoundedIconStyled />}
        renderValue={() => (
          <DropdownStyledBox>
            <Typography marginRight={0.5} variant="buttonLargeMenu" color="text.secondary">
              <FormattedMessage id="ChatRoom" />
            </Typography>
          </DropdownStyledBox>
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
    </DropdownStyledFormControl>
  );
};

export default ChatRoomDropdown;
