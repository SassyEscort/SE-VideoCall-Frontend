import Box from '@mui/material/Box';
import { AvatarContainer } from './Avatar.styled';

const StyledAvatar = ({ image, color }: { image: string; color: string }) => {
  return (
    <Box sx={{ position: 'relative' }}>
      <AvatarContainer src={image} />
    </Box>
  );
};

export default StyledAvatar;
