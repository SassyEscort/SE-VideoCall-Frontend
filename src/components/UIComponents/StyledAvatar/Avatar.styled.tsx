import { Avatar, styled } from '@mui/material';

export const AvatarContainer = styled(Avatar)(({ theme }) => ({
  height: 90,
  width: 90,
  border: '1px solid',
  cursor: 'pointer'
}));
