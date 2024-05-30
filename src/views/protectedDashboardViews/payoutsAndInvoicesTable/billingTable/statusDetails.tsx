import { styled } from '@mui/material';
import Box from '@mui/system/Box';

interface StatusBoxProps {
  status: string;
}

export const StatusBox = styled(Box)<StatusBoxProps>(({ status }) => {
  let borderColor, backgroundColor;

  switch (status) {
    case 'Pending':
      borderColor = '#FFE500';
      backgroundColor = '#FFE5001F';
      break;
    case 'Completed':
      borderColor = '#79E028';
      backgroundColor = '#15250A';
      break;
    case 'Cancelled':
      borderColor = '#FF5959';
      backgroundColor = '#2F0909';
      break;
    default:
      borderColor = 'none';
      backgroundColor = 'transparent';
  }

  return {
    padding: '4px 12px 4px 20px',
    borderRadius: '48px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    textAlign: 'center',
    height: '100%',
    minHeight: '25px',
    border: `1px solid ${borderColor}`,
    backgroundColor: backgroundColor
  };
});
