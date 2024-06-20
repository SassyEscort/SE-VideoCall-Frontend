import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    border: '3px solid',
    bottom: 0,
    right: '50%',
    backgroundColor: 'white',
    borderRadius: '100%',
    height: '40px',
    width: '40px'
  }
}));

const StyledAvatar = ({
  image,
  isDiamond,
  color,
  variant,
  isLodaing,
  verified
}: {
  image: string;
  isDiamond: boolean;
  color: string;
  variant?: 'diamond' | 'gold' | 'platinum';
  isLodaing?: boolean;
  verified?: boolean;
}) => {
  if (isDiamond) {
    return (
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        sx={{
          '& .MuiBadge-badge': {
            borderColor: color
          }
        }}
        badgeContent={<Avatar src={`images/dashboard/${variant}.svg`} sx={{ height: 24, width: 24 }} />}
      >
        <Avatar
          src={image}
          sx={{
            height: 140,
            width: 140,
            border: '4px solid',
            borderColor: color
          }}
        />
      </StyledBadge>
    );
  } else {
    return (
      <Box sx={{ position: 'relative' }}>
        <Avatar
          src={image}
          sx={{
            height: 110,
            width: 110,
            border: '3px solid',
            borderColor: color,
            backgroundColor: isLodaing === true ? 'rgba(0,0,0,0.1)' : color,
            cursor: verified === false ? 'unset' : 'pointer'
          }}
        />
        {isLodaing === true && (
          <CircularProgress
            size={24}
            style={{
              position: 'absolute',
              top: '40%',
              left: '40%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        )}
      </Box>
    );
  }
};

export default StyledAvatar;
