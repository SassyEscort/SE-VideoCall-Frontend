import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

const StyledAvatar = ({ image, color }: { image: string; color: string }) => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Avatar
        src={image}
        sx={{
          height: 110,
          width: 110,
          border: '3px solid',
          borderColor: color,
          backgroundColor: color,
          cursor: 'pointer'
        }}
      />
    </Box>
  );
};

export default StyledAvatar;
