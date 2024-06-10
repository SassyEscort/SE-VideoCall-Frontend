import Avatar from '@mui/material/Avatar';
import { StyledIconButton } from './AccountPopover.styled';
import { useState } from 'react';

export default function AccountPopover() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledIconButton open={open} onClick={() => setOpen(!open)}>
        <Avatar src={'/images/admin/avatar.jpg'} alt="photoURL" />
      </StyledIconButton>
    </>
  );
}
